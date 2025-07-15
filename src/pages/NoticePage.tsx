import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route, NavLink } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/arrow-icon.svg";
import styled from 'styled-components';

// 업데이트 슬라이드 컨테이너
const UpdateSlideContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 60px auto;
  position: relative;
  background: #F3EFFD;
  border-radius: 16px;
  padding: 40px;
  overflow: hidden;
`;

const UpdateSlideContent = styled.div<{ fade: boolean }>`
  text-align: center;
  opacity: ${props => props.fade ? 0 : 1};
  transition: opacity 0.6s ease;
`;

const UpdateSlideTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #33373B;
  margin-bottom: 16px;
`;

const UpdateSlideText = styled.p`
  font-size: 18px;
  color: #575C64;
  line-height: 1.6;
  margin-bottom: 12px;
`;

const UpdateSlideDate = styled.div`
  font-size: 16px;
  color: #C6B5F6;
  font-weight: 500;
`;

const UpdateSlideArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  color: #835EEB;
  cursor: pointer;
  z-index: 2;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(131, 94, 235, 0.1);
    color: #6B4BC4;
  }
`;

const UpdateSlideArrowLeft = styled(UpdateSlideArrow)`
  left: 16px;
`;

const UpdateSlideArrowRight = styled(UpdateSlideArrow)`
  right: 16px;
`;

// FAQ 섹션 스타일
const FaqSection = styled.section`
  width: 100%;
  background: #FFFFFF;
  padding: 40px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FaqTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin-bottom: 32px;
  text-align: center;
`;

const FaqList = styled.ul`
  width: 100%;
  max-width: 800px;
  background: #3EFFD;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const FaqItem = styled.li`
  border-bottom: 1px solid #E5E7EB;
`;

const FaqQuestion = styled.button<{ open: boolean }>`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 32px 0 32px 0;
  font-size: 22px;
  font-weight: 600;
  color: #222;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.02);
    padding-left: 16px;
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`;

const FaqAnswer = styled.div`
  font-size: 18px;
  color: #555;
  margin: 0 0 32px 0;
  line-height: 1.6;
  padding-right: 32px;
  padding-left: 16px;
  animation: slideDown 0.3s ease-out;
  border-left: 4px solid #835EEB;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FaqIcon = styled.span`
  font-size: 32px;
  color: #835EEB;
  margin-left: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    background: rgba(131, 94, 235, 0.1);
    transform: scale(1.1);
  }
`;

// 홈의 모든 FAQ 질문들
const allFaqs = [
  {
    question: '수학대왕 클래스가 뭔가요?',
    answer: '수학대왕 클래스는 수학대왕의 온라인 학습 플랫폼입니다.'
  },
  {
    question: '선생님은 어떤 기기로 사용 가능한가요?',
    answer: '선생님께서는 웹사이트에 접속해서 사용 가능합니다. 웹사이트는 반응형 웹사이트로 제작되어 있어서 스마트폰, 태블릿, 노트북, 데스크톱에서 모두 사용 가능하십니다.'
  },
  {
    question: '학생들의 학습 데이터는 어떻게 관리되나요?',
    answer: '학생들은 기본적으로 앱스토어, 플레이스토어에서 스마트폰용 앱, 태블릿 용 앱을 설치할 수 있게 브라우저를 활용하여 앱을 구동할 수도 있습니다. 즉, 아이폰, 갤럭시 스마트폰, 갤럭시 태블릿, 아이패드, 노트북, 데스크톱, 서피스, 웨일북, 크롬북 등 장비와 기기에 전혀 구애받지 않고 공정한 AI 수학 교육을 받을 수 있습니다.'
  },
  {
    question: '어떤 학년이 사용 가능한가요?',
    answer: '초등학교 1학년부터 고등학교 3학년까지 사용 가능합니다. 초1, 초2는 출시 예정이 없습니다.'
  },
  {
    question: '필기 기능이 존재하나요? 학생 필기를 선생님이 볼 수 있나요?',
    answer: '필기 기능이 완벽하게 구현되어 있습니다. 학생은 디바이스에서 수학 문제 위에 필기를 하면서 문제를 풀 수 있습니다. 그 필기 기록은 문제와 함께 한 문제 단위로 실시간으로 선생님 대시보드에 반영되어 선생님이 확인할 수 있습니다.'
  },
  {
    question: '학생들의 학습 현황을 선생님이 볼 수 있나요?',
    answer: '선생님이 내준 숙제, 학생이 추가적으로 자습한 문제 등 모든 학습량과 학습 기록을 선생님이 일별, 주별, 월별로 현황을 볼 수 있습니다.'
  },
  {
    question: '장학금은 어떤 기능인가요?',
    answer: '수학대왕은 학생들의 동기부여를 위해 장학금 제도를 운영하고 있습니다. 수학 실력과 성적에 관계없이 AI가 추천해 주는 내 실력에 맞는 문제를 꾸준히 푼다면, 모든 학생들이 예외 없이 확정적으로 장학금을 받을 수 있습니다. **즉, 성적에 따라 장학금을 받는 것이 아니라, 모든 학생이 나의 노력에 따라 장학금을 받을 수 있는 시스템입니다.** 장학금은 수학대왕 앱 내에서 네이버페이로 변환하여 결제 및 사용이 가능합니다. 학생당 월별로 받아 갈 수 있는 최대의 장학금 양은 단체 도입하실 때 설정하실 수 있으며, **선생님께서 설정하신 플랜에 따라 맞춤 예산 설계가 가능합니다.**'
  }
];

// 모든 업데이트를 하나의 배열로 합치기
const allUpdates = [
  { id: 1, title: '수학대왕 클래스 신규 기능 출시!', text: 'AI 기반 맞춤형 학습지 제작 기능이 새롭게 추가되었습니다.', date: '2024-06-01' },
  { id: 2, title: '실시간 채점 시스템 업그레이드', text: '필기 인식 정확도가 99% 이상으로 향상되었습니다.', date: '2024-05-25' },
  { id: 3, title: '학생 대시보드 UI 개선', text: '더 직관적이고 사용하기 쉬운 학생용 인터페이스로 개선되었습니다.', date: '2024-05-20' },
  { id: 4, title: '장학금 시스템 업그레이드 안내', text: '장학금 지급 시스템이 더욱 공정하고 투명하게 개선되었습니다.', date: '2024-05-20' },
  { id: 5, title: '서버 성능 최적화', text: '전체적인 시스템 성능이 향상되어 더 빠른 응답 속도를 제공합니다.', date: '2024-05-15' },
  { id: 6, title: '보안 시스템 강화', text: '학생 개인정보 보호를 위한 보안 시스템이 강화되었습니다.', date: '2024-05-10' },
  { id: 7, title: '선생님 대시보드 UI 개선', text: '선생님용 대시보드가 더욱 직관적이고 효율적으로 개선되었습니다.', date: '2024-05-10' },
  { id: 8, title: '모바일 앱 반응형 개선', text: '모바일 환경에서의 사용성이 크게 향상되었습니다.', date: '2024-05-05' },
  { id: 9, title: '알림 시스템 개선', text: '실시간 알림 기능이 더욱 정확하고 빠르게 작동합니다.', date: '2024-05-01' }
];

function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <FaqSection>
      <FaqList>
        {allFaqs.map((faq, idx) => (
          <FaqItem key={faq.question}>
            <FaqQuestion open={openIdx === idx} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
              {faq.question}
              <FaqIcon>{openIdx === idx ? '×' : '+'}</FaqIcon>
            </FaqQuestion>
            {openIdx === idx && <FaqAnswer>{faq.answer}</FaqAnswer>}
          </FaqItem>
        ))}
      </FaqList>
    </FaqSection>
  );
}

// 업데이트 슬라이드 컴포넌트
const UpdateSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === allUpdates.length - 1 ? 0 : prev + 1));
        setFade(false);
      }, 300);
    }, 4000); // 4초마다 자동 슬라이드

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? allUpdates.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === allUpdates.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  return (
    <UpdateSlideContainer>
      <UpdateSlideContent fade={fade}>
        <UpdateSlideTitle>{allUpdates[currentSlide].title}</UpdateSlideTitle>
        <UpdateSlideText>{allUpdates[currentSlide].text}</UpdateSlideText>
        <UpdateSlideDate>{allUpdates[currentSlide].date}</UpdateSlideDate>
      </UpdateSlideContent>
      
      <UpdateSlideArrowLeft onClick={handlePrev}>
        ‹
      </UpdateSlideArrowLeft>
      <UpdateSlideArrowRight onClick={handleNext}>
        ›
      </UpdateSlideArrowRight>
    </UpdateSlideContainer>
  );
};

// 페이지 컨테이너 스타일 추가
const PageContainer = styled.div`
  min-height: calc(100vh - 60px - 200px); // 헤더(60px)와 Footer(200px) 높이를 제외
  padding: 0 24px 40px 24px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-top: 120px; /* header 높이만큼 마진 추가 */
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

// 탭 스타일 추가
const TabContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  background: #F3F4F6;
  padding: 4px;
  border-radius: 9999px;
  position: relative;
`;

// 토글 슬라이드 배경
const ToggleSlider = styled.div<{ index: number }>`
  position: absolute;
  top: 4px;
  left: ${({ index }) => `calc(${index} * 50%)`};
  width: 50%;
  height: calc(100% - 8px);
  background: white;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
`;

const TabButton = styled(NavLink)`
  flex: 1;
  text-align: center;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 9999px;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: #6B7280;
  position: relative;
  z-index: 2;
  background: transparent;
  border: none;
  cursor: pointer;

  &.active {
    color: #835EEB;
    font-weight: 700;
  }

  &:hover {
    color: #835EEB;
  }
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #835EEB;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #6B4BC4;
    transform: translateY(-2px);
  }
`;

const UpdateQuestion = styled.button<{ open: boolean }>`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 32px 0 32px 0;
  font-size: 22px;
  font-weight: 600;
  color: #222;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.02);
    padding-left: 16px;
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
`;

const UpdateAnswer = styled.div`
  font-size: 18px;
  color: #555;
  margin: 0 0 32px 0;
  line-height: 1.6;
  padding-right: 32px;
  padding-left: 16px;
  animation: slideDown 0.3s ease-out;
  border-left: 4px solid #835EEB;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const UpdateIcon = styled.span`
  font-size: 32px;
  color: #835EEB;
  margin-left: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    background: rgba(131, 94, 235, 0.1);
    transform: scale(1.1);
  }
`;

export default function NoticePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 활성화된 탭 인덱스 계산
  const tabIndex = location.pathname.includes('/notice/faq') ? 1 : 0;

  // 페이지 로드 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <PageContainer>
      <ContentWrapper>
      {/* 탭 버튼 */}
        <TabContainer>
          {/* ToggleSlider: 토글 슬라이드 배경 */}
          <ToggleSlider index={tabIndex} />
          <TabButton
            to="/notice"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            공지사항
          </TabButton>
          <TabButton
            to="/notice/faq"
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            자주 묻는 질문
          </TabButton>
        </TabContainer>

      <Routes>
        <Route path="faq" element={<FaqPage />} />
        <Route path="" element={<UpdateSlide />} />
      </Routes>
      </ContentWrapper>
    </PageContainer>
  );
} 