import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

// 업데이트 슬라이드 컨테이너
const UpdateSlideContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 60px auto;
  position: relative;
  background: #F3EFFD;
  border-radius: 16px;
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 12px;
    margin: 0 auto 24px auto;
    border-radius: 10px;
  }
`;

const UpdateSlideContent = styled.div<{ fade: boolean }>`
  text-align: center;
  opacity: ${props => props.fade ? 0 : 1};
  transform: translateY(${props => props.fade ? '20px' : '0'});
  transition: all 0.6s ease;
`;

const UpdateSlideTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #33373B;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const UpdateSlideText = styled.p`
  font-size: 18px;
  color: #575C64;
  line-height: 1.6;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const UpdateSlideDate = styled.div`
  font-size: 16px;
  color: #C6B5F6;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
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
  
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 4px;
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
  min-height: calc(100vh - 56px - 80px);
  box-sizing: border-box;
  overflow-y: auto;
  

  
  @media (max-width: 768px) {
    padding: 20px 0 40px 0;
  }
`;

const FaqTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin-bottom: 32px;
  text-align: center;
  

  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const FaqList = styled.ul`
  width: 100%;
  max-width: 800px;
  background: #3EFFD;
  padding: 0;
  margin: 0;
  list-style: none;
  

  
  @media (max-width: 768px) {
    max-width: 95%;
  }
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
  
  @media (max-width: 768px) {
    padding: 16px 0 16px 0;
    font-size: 15px;
    &:hover { padding-left: 8px; }
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
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 16px 0;
    padding-right: 12px;
    padding-left: 6px;
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
  &:hover { background: rgba(131, 94, 235, 0.1); transform: scale(1.1); }
  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 6px;
    width: 18px;
    height: 18px;
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

// 카테고리 칩 스타일
const CategoryChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  background: #F3EFFD;
  color: #835EEB;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;
  margin-right: 12px;
  white-space: nowrap;
  width: 60px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 10px;
    margin-right: 8px;
    width: 50px;
  }
`;

// 모든 업데이트를 하나의 배열로 합치기
const allUpdates = [
  { id: 1, title: '서술형 출제 및 첨삭 기능 출시', text: '문제를 추가할 때, 서술형 문제를 출제할 수 있어요.', date: '25-06-09', category: 'CLASS' },
  { id: 2, title: '[학생용 앱] 학습 탭 개편', text: '학습 탭이 개편됐어요.', date: '25-05-20', category: 'APP' },
  { id: 3, title: '분석 개편', text: '[개별 숙제 분석] 숙제별로 학생 실력을 분석해 드려요.', date: '24-05-20', category: 'CLASS' },
  { id: 4, title: '담당 클래스 및 학생만 보기', text: '이제 원하면 담당 클래스 및 학생만 볼 수 있어요.', date: '25-05-16', category: 'CLASS' },
  { id: 5, title: 'OX 채점 출시', text: 'OX를 선택해서 학생 정오답을 기록할 수 있어요.', date: '25-05-16', category: 'CLASS' },
  { id: 6, title: '기출 추가 및 학습지 개선', text: '[기출] 수능, 모의고사 기출을 시험지 단위로 배부할 수 있어요.', date: '25-04-28', category: 'CLASS' },
  { id: 7, title: '출력물 채점 출시', text: '선생님용 대시보드가 더욱 직관적이고 효율적으로 개선되었습니다.', date: '25-03-21', category: 'CLASS' },
  { id: 8, title: '[학생용 웹] 개념집 암기모드 추가', text: '학생용 웹에서 개념집 암기 모드를 사용할 수 있어요.', date: '25-04-18', category: 'WEB' },
  { id: 9, title: '자동 클리닉 / 무한 클리닉 출시', text: '[자동 클리닉] 클리닉이 자동으로 배부되게 설정할 수 있어요.', date: '25-04-15', category: 'CLASS' }
];

// 미디어 쿼리 훅 추가
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

const SectionGuide = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 12px auto;
  font-size: 16px;
  color: #835EEB;
  font-weight: 600;
  text-align: left;
  letter-spacing: -0.5px;
  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 95%;
    margin-bottom: 8px;
  }
`;

const SectionTitle = styled.h1`
  width: 100%;
  max-width: 800px;
  margin: 64px auto 56px auto;
  font-size: 2.7rem;
  font-weight: 800;
  color: #1E2231;
  text-align: center;
  line-height: 1.28;
  letter-spacing: -1px;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 36px auto 24px auto;
  }
`;

// FAQ 섹션 함수
function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // 모바일 여부를 useIsMobile 훅으로 통일
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const itemsPerPage = isMobile ? 8 : allFaqs.length;
  const totalPages = Math.ceil(allFaqs.length / itemsPerPage);
  const pagedFaqs = allFaqs.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);
  return (
    <FaqSection>
      {/* <SectionTitle>자주 묻는 질문을{`\n`}한눈에 확인하세요!</SectionTitle> */}
      <FaqList>
        {pagedFaqs.map((faq, idx) => {
          const globalIdx = (currentPage-1)*itemsPerPage + idx;
          return (
            <FaqItem key={faq.question}>
              <FaqQuestion open={openIdx === globalIdx} onClick={() => setOpenIdx(openIdx === globalIdx ? null : globalIdx)}>
                {faq.question}
                <FaqIcon>{openIdx === globalIdx ? '×' : '+'}</FaqIcon>
              </FaqQuestion>
              {openIdx === globalIdx && <FaqAnswer>{faq.answer}</FaqAnswer>}
            </FaqItem>
          );
        })}
      </FaqList>
      {totalPages > 1 && (
        <Pagination>
          <button aria-label="이전 페이지" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>&lt;</button>
          <span>{currentPage} / {totalPages}</span>
          <button aria-label="다음 페이지" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage+1)}>&gt;</button>
        </Pagination>
      )}
    </FaqSection>
  );
}

// 업데이트 슬라이드 컴포넌트
const UpdateSlide: React.FC = () => {
  const isMobile = useIsMobile();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 6 : allUpdates.length;
  const totalPages = Math.ceil(allUpdates.length / itemsPerPage);
  const pagedUpdates = allUpdates.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);
  const [fade, setFade] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  // 슬라이드 자동 전환 (데스크톱/태블릿만)
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setSlideIdx((prev) => (prev === allUpdates.length - 1 ? 0 : prev + 1));
        setFade(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setSlideIdx((prev) => (prev === 0 ? allUpdates.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setSlideIdx((prev) => (prev === allUpdates.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  if (isMobile) {
    return (
      <FaqSection as="section">
        {/* <SectionTitle>수학대왕의 업데이트 된 기능을{`\n`}확인하세요!</SectionTitle> */}
        <FaqList as="ul">
          {pagedUpdates.map((notice, idx) => {
            const globalIdx = (currentPage-1)*itemsPerPage + idx;
            return (
              <FaqItem as="li" key={notice.id}>
                <FaqQuestion open={openIdx === globalIdx} onClick={() => setOpenIdx(openIdx === globalIdx ? null : globalIdx)} style={{ textAlign: 'left' }}>
                  <CategoryChip>{notice.category}</CategoryChip>
                  <span style={{ fontWeight: 600, textAlign: 'left', flex: 1, fontSize: '14px' }}>{notice.title}</span>
                  <span style={{ color: '#9C7EEF', fontSize: 14, fontWeight: 300, marginRight: 8 }}>{notice.date}</span>
                  <FaqIcon>{openIdx === globalIdx ? '×' : '+'}</FaqIcon>
                </FaqQuestion>
                {openIdx === globalIdx && (
                  <FaqAnswer style={{ textAlign: 'left' }}>
                    <div style={{ marginBottom: 8, fontSize: 15, color: '#444', textAlign: 'left' }}>{notice.text}</div>
                    <div style={{ color: '#C6B5F6', fontSize: 13, textAlign: 'left' }}>{notice.date}</div>
                  </FaqAnswer>
                )}
              </FaqItem>
            );
          })}
        </FaqList>
        {totalPages > 1 && (
          <Pagination>
            <button aria-label="이전 페이지" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage-1)}>&lt;</button>
            <span>{currentPage} / {totalPages}</span>
            <button aria-label="다음 페이지" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage+1)}>&gt;</button>
          </Pagination>
        )}
      </FaqSection>
    );
  }

  // 데스크톱/태블릿: 토글리스트만 표시
  return (
    <FaqSection as="section">
      <FaqList as="ul">
        {allUpdates.map((notice, idx) => {
          return (
            <FaqItem as="li" key={notice.id}>
              <FaqQuestion open={openIdx === idx} onClick={() => setOpenIdx(openIdx === idx ? null : idx)} style={{ textAlign: 'left' }}>
                <CategoryChip>{notice.category}</CategoryChip>
                <span style={{ fontWeight: 600, textAlign: 'left', flex: 1 }}>{notice.title}</span>
                <span style={{ color: '#9C7EEF', fontSize: 16, fontWeight: 300, marginRight: 8 }}>{notice.date}</span>
                <FaqIcon>{openIdx === idx ? '×' : '+'}</FaqIcon>
              </FaqQuestion>
              {openIdx === idx && (
                <FaqAnswer style={{ textAlign: 'left' }}>
                  <div style={{ marginBottom: 8, fontSize: 15, color: '#444', textAlign: 'left' }}>{notice.text}</div>
                  <div style={{ color: '#C6B5F6', fontSize: 13, textAlign: 'left' }}>{notice.date}</div>
                </FaqAnswer>
              )}
            </FaqItem>
          );
        })}
      </FaqList>
    </FaqSection>
  );
};

// 페이지 컨테이너 스타일 추가
const PageContainer = styled.div`
  min-height: calc(100vh - 60px); // 헤더 높이만 제외, 푸터는 패딩으로 확보
  padding: 0 24px 250px 24px; // 하단 패딩을 250px로 늘림(footer 높이만큼)
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin-top: 120px; /* header 높이만큼 마진 추가 */
  
  @media (max-width: 768px) {
    padding: 0 16px 40px 16px;
    margin-top: 80px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
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
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    max-width: 260px;
    padding: 3px;
  }
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
  
  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 12px;
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
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 10px;
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
  
  @media (max-width: 768px) {
    padding: 16px 0 16px 0;
    font-size: 15px;
  }

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
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 16px 0;
    padding-right: 12px;
    padding-left: 6px;
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
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 8px;
    width: 24px;
    height: 24px;
  }
`;



const TwinkleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 20px 0 0 0;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 13px;
    gap: 10px;
    margin: 14px 0 0 0;
  }
  button {
    background: transparent;
    color: #835EEB;
    border: none;
    border-radius: 50%;
    padding: 6px 16px;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s, background 0.15s;
    font-size: 1.2em;
    outline: none;
    box-shadow: none;
    &:disabled {
      color: #bbb;
      background: transparent;
      cursor: default;
    }
    &:not(:disabled):hover {
      background: transparent;
      color: #6B4BC4;
    }
    &:focus, &:active {
      background: #E5DBFA;
      color: #835EEB;
      outline: none;
      box-shadow: none;
    }
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

  // 타이틀 텍스트 분기
  const isFaq = location.pathname.includes('/notice/faq');
  const titleText = isFaq
    ? '자주 묻는 질문을\n한눈에 확인하세요!'
    : '수학대왕의 업데이트 된 기능을\n확인하세요!';

  return (
    <PageContainer>
      <ContentWrapper>
        <SectionTitle>{titleText}</SectionTitle>
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
