import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import Header from './components/Header';
import Footer from './components/Footer';
import SideDrawer from './components/SideDrawer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import NoticePage from './pages/NoticePage';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

function AppInner({ setChannelUser, bootAnonymousUser }: { setChannelUser: (userData: any) => void; bootAnonymousUser: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerStateChange = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  // Channel.io 사용자 정보 설정 예시 함수 (필요시 사용)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSetChannelUser = () => {
    setChannelUser({
      memberId: "USER_123",
      name: "홍길동",
      mobileNumber: "010-1234-5678",
      landlineNumber: "02-1234-5678",
      customField1: "프리미엄 회원",
      customField2: "수학대왕 CLASS"
    });
  };

  // 익명 유저로 Channel.io 부트 실행 예시 함수 (필요시 사용)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleBootAnonymousUser = () => {
    bootAnonymousUser();
  };

  // Pricing 페이지일 때 헤더 배경을 화이트로 설정
  const isPricingPage = location.pathname === '/pricing';
  
  // SPA 라우트 변경 시 Meta Pixel PageView 전송
  useEffect(() => {
    // 첫 로드에서는 public/index.html의 픽셀 스니펫에서 이미 PageView가 전송되므로 중복 방지
    const hasTrackedInitialRef = (window as unknown as { __hasTrackedInitialPageView?: boolean });
    try {
      if (!hasTrackedInitialRef.__hasTrackedInitialPageView) {
        hasTrackedInitialRef.__hasTrackedInitialPageView = true;
        return;
      }
      const fbqFunction = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbqFunction === 'function') {
        fbqFunction('track', 'PageView');
      }
    } catch {
      // no-op
    }
  }, [location.pathname]);

  return (
    <AppContainer>
      <Header hasWhiteBackground={isPricingPage} />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/notice/*" element={<NoticePage />} />
        </Routes>
      </MainContent>
      <Footer />
      <SideDrawer 
        isModalOpen={isModalOpen || isDrawerOpen} 
        onDrawerStateChange={handleDrawerStateChange}
      />
    </AppContainer>
  );
}

function App() {
  // Channel.io 사용자 인증 상태
  const [userInfo, setUserInfo] = useState({
    memberId: "",
    name: "",
    mobileNumber: "",
    landlineNumber: "",
    customField1: "",
    customField2: ""
  });

  // Channel.io 스크립트 로드 및 사용자 인증
  useEffect(() => {
    const initializeChannel = async () => {
      try {
        // 스크립트 로드
        await ChannelService.loadScript();
        
        // 사용자 정보가 있으면 멤버 유저로 부트, 없으면 익명 유저로 부트
        if (userInfo.memberId && userInfo.name) {
          // 멤버 유저 부트
          ChannelService.boot({
            "pluginKey": "d436ea9d-ae03-4aca-868d-35d43f45e4ca",
            "memberId": userInfo.memberId,
            "profile": {
              "name": userInfo.name,
              "mobileNumber": userInfo.mobileNumber,
              "landlineNumber": userInfo.landlineNumber,
              "customField1": userInfo.customField1,
              "customField2": userInfo.customField2
            }
          });
        } else {
          // 익명 유저 부트
          ChannelService.boot({
            "pluginKey": "d436ea9d-ae03-4aca-868d-35d43f45e4ca",
          });
        }



      } catch (error) {
        console.error("Channel.io 초기화 실패:", error);
      }
    };

    initializeChannel();
  }, [userInfo.memberId, userInfo.name, userInfo.mobileNumber, userInfo.landlineNumber, userInfo.customField1, userInfo.customField2]);

  // 사용자 정보 설정 함수 (다른 컴포넌트에서 사용 가능)
  const setChannelUser = (userData: typeof userInfo) => {
    setUserInfo(userData);
  };

  // 익명 유저로 Channel.io 부트 실행 함수
  const bootAnonymousUser = () => {
    try {
      ChannelService.boot({
        "pluginKey": "d436ea9d-ae03-4aca-868d-35d43f45e4ca",
      });
    } catch (error) {
      console.error("익명 유저 부트 실패:", error);
    }
  };

  return (
    <Router>
      <AppInner setChannelUser={setChannelUser} bootAnonymousUser={bootAnonymousUser} />
    </Router>
  );
}

export default App; 