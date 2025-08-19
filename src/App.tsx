import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
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

function AppInner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerStateChange = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
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
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App; 