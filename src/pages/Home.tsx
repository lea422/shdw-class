import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Dialog from '../components/Dialog';
import ConsultationForm from '../components/ConsultationForm';
import Body from '../components/Body';
import ScrollGuide from '../components/ScrollGuide';

// Styled Components
const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 64px;
  transform: translateY(-50%);
  z-index: 2;
  max-width: 600px;
  color: white;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const PreTitle = styled.div`
  color: white;
  font-size: 26px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.52px;
`;

const MainTitle = styled.div`
  color: white;
  font-size: 46px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.92px;
`;

const BrandTitle = styled.div`
  span:first-child {
    color: #835EEB;
    font-size: 64px;
    font-family: 'Godo B', sans-serif;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -1.28px;
  }

  span:last-child {
    color: #835EEB;
    font-size: 64px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -1.28px;
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.1px;
  margin-bottom: 30px;
`;

const PrimaryButton = styled.button`
  width: 250px;
  padding: 18px 30px;
  border-radius: 15px;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: -0.09px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: linear-gradient(to right, #835EEB, #6B4BC4);
  border: none;
  color: white;
  box-shadow: 0 2px 4px rgba(131, 94, 235, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    opacity: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateX(-100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(131, 94, 235, 0.3);

    &:before {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
`;

const Indicator = styled.button<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isActive ? 'white' : 'rgba(255, 255, 255, 0.6)'};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const FeatureSection = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const FeatureCard = styled.div`
  width: 300px;
  height: 200px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1px solid #F3F4F6;
  border-radius: 30px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  h3 {
    color: #33373B;
    font-size: 24px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 0;
    transition: color 0.3s ease;
  }

  p {
    color: #33373B;
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 0;
    transition: color 0.3s ease;
  }

  &:hover h3,
  &:hover p {
    color: #835EEB;
  }
`;

const SyncIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const UpdateSection = styled.section`
  width: 100%;
  background: #F3EFFD;
  padding: 80px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpdateTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
`;

const UpdateList = styled.ul`
  width: 100%;
  max-width: 800px;
  background: #F3EFFD;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const UpdateItem = styled.li`
  border-bottom: 1px solid #E5E7EB;
  padding: 32px 0;
  font-size: 20px;
  color: #33373B;
`;

const FaqSection = styled.section`
  width: 100%;
  background: #F3EFFD;
  padding: 80px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FaqTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
`;

const FaqList = styled.ul`
  width: 100%;
  max-width: 800px;
  background: #F3EFFD;
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
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.02);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(131, 94, 235, 0.1);
  }
`;

const FaqAnswer = styled.div`
  font-size: 18px;
  color: #555;
  margin: 0 0 32px 0;
  line-height: 1.6;
  padding-right: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const FaqIcon = styled.span`
  font-size: 32px;
  color: #835EEB;
  margin-left: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

const MoreButton = styled.button`
  margin: 40px auto 0 auto;
  padding: 16px 32px;
  background: #835EEB;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6B4CD3;
    transform: translateY(-2px);
  }
`;

const UpdateBarContainer = styled.div`
  padding: 30px 50px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
  background: #F3EFFD;
  position: relative;
`;

const UpdateBadge = styled.div`
  padding: 5px 30px;
  background: #835EEB;
  border-radius: 9999px;
  outline: 1.33px solid #835EEB;
  outline-offset: -1.33px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  position: absolute;
  left: 50px;
  z-index: 2;
`;

const UpdateBadgeText = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
`;

const UpdateContent = styled.div<{fade: boolean}>`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #575C64;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 48px;
  word-wrap: break-word;
  min-width: 400px;
  max-width: 600px;
  margin-left: 260px;
  opacity: ${props => props.fade ? 0 : 1};
  transition: opacity 0.6s;
`;

const UpdateDate = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #C6B5F6;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  min-width: 120px;
`;

const SlideTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #33373B;
  margin-bottom: 60px;
  font-family: 'Pretendard', sans-serif;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

const SlideTrack = styled.div<{ translateX: number }>`
  display: flex;
  gap: 30px;
  transform: translateX(${props => props.translateX}px);
  transition: transform 0.5s ease-out;
  position: absolute;
  left: 0;
  top: 0;
`;

const SlideCard = styled.div`
  min-width: 300px;
  height: 400px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(131, 94, 235, 0.15);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(131, 94, 235, 0.25);
  }

  &:active {
    transform: translateY(-5px) scale(0.98);
  }
`;

const CardImage = styled.div<{ image: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
  }
`;

const CardContent = styled.div`
  padding: 24px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #33373B;
  margin: 0 0 12px 0;
  font-family: 'Pretendard', sans-serif;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
  font-family: 'Pretendard', sans-serif;
  flex: 1;
`;

const CardBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  align-self: flex-start;
  font-family: 'Pretendard', sans-serif;
`;

const updates = [
  { id: 1, text: '수학대왕 클래스 신규 기능 출시!', date: '2024-06-01' },
  { id: 2, text: '장학금 시스템 업그레이드 안내', date: '2024-05-20' },
  { id: 3, text: '선생님 대시보드 UI 개선', date: '2024-05-10' },
];

const UpdateBar: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % updates.length);
        setFade(false);
      }, 600);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <UpdateBarContainer>
      <UpdateBadge>
        <UpdateBadgeText>수학대왕 CLASS 업데이트</UpdateBadgeText>
      </UpdateBadge>
      <UpdateContent fade={fade}>
        {updates[current].text}
      </UpdateContent>
      <UpdateDate>{updates[current].date}</UpdateDate>
    </UpdateBarContainer>
  );
};

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideTranslateX, setSlideTranslateX] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: '/Hero-2.png',
      title: 'AI가 바꾸는',
      subtitle: '수학 교육의 미래',
      brand: '수학대왕 CLASS',
      description: '교사의 업무는 줄이고, 학생의 성과는 높이는<br />AI 기반 혁신적 수학 학습관리 시스템'
    },
    {
      id: 2,
      image: '/Hero-3.png',
      title: '혁신적인',
      subtitle: '학습 관리 시스템',
      brand: '수학대왕 CLASS',
      description: '개인별 맞춤 학습과 실시간 피드백으로<br />학습 효과를 극대화하는 스마트 교육 플랫폼'
    },
    {
      id: 3,
      image: '/Hero-4.png',
      title: '스마트한',
      subtitle: 'AI 채점 시스템',
      brand: '수학대왕 CLASS',
      description: '필기 인식 기반 정확한 채점과<br />즉시 피드백으로 학습 효율 극대화'
    },
    {
      id: 4,
      image: '/Hero-5.png',
      title: '맞춤형',
      subtitle: '학습 솔루션',
      brand: '수학대왕 CLASS',
      description: '학생 개개인의 실력에 맞춘<br />개인별 최적화된 학습 경험 제공'
    },
    {
      id: 5,
      image: '/Hero-6.png',
      title: '미래를 여는',
      subtitle: '교육 혁신',
      brand: '수학대왕 CLASS',
      description: 'AI 기술로 완성된<br />차세대 수학 교육의 새로운 패러다임'
    }
  ];

  // 8장의 이미지 카드 데이터
  const slideCards = [
    {
      id: 1,
      image: '/Hero-2.png',
      title: 'AI 수학 학습',
      description: '인공지능이 개인별 맞춤 학습을 제공하여 수학 실력을 향상시킵니다.',
      badge: 'AI 기술'
    },
    {
      id: 2,
      image: '/Hero-3.png',
      title: '실시간 채점',
      description: '필기 인식 기술로 즉시 정답을 확인하고 피드백을 받을 수 있습니다.',
      badge: '실시간'
    },
    {
      id: 3,
      image: '/Hero-4.png',
      title: '맞춤형 문제',
      description: '학생의 실력에 맞는 난이도의 문제를 자동으로 추천합니다.',
      badge: '맞춤형'
    },
    {
      id: 4,
      image: '/Hero-5.png',
      title: '학습 분석',
      description: '상세한 학습 데이터 분석으로 효율적인 학습 방향을 제시합니다.',
      badge: '분석'
    },
    {
      id: 5,
      image: '/Hero-6.png',
      title: '장학금 시스템',
      description: '노력에 따른 장학금 지급으로 학습 동기를 높입니다.',
      badge: '혜택'
    },
    {
      id: 6,
      image: '/Hero-2.png',
      title: '교사 관리 도구',
      description: '교사가 학생들의 학습 현황을 한눈에 파악할 수 있습니다.',
      badge: '관리'
    },
    {
      id: 7,
      image: '/Hero-3.png',
      title: '모바일 학습',
      description: '언제 어디서나 스마트폰으로 편리하게 학습할 수 있습니다.',
      badge: '모바일'
    },
    {
      id: 8,
      image: '/Hero-4.png',
      title: '웹-앱 연동',
      description: '웹과 앱이 실시간으로 연동되어 완벽한 학습 환경을 제공합니다.',
      badge: '연동'
    }
  ];

  // 무한 슬라이드 애니메이션
  useEffect(() => {
    const slideWidth = 330; // 카드 너비 + 간격
    
    const animate = () => {
      setSlideTranslateX(prev => {
        const newTranslateX = prev - 1; // 1px씩 이동
        if (Math.abs(newTranslateX) >= slideWidth) {
          // 첫 번째 카드가 완전히 사라지면 마지막으로 이동
          return newTranslateX + slideWidth;
        }
        return newTranslateX;
      });
    };

    const interval = setInterval(animate, 30); // 30ms마다 1px씩 이동

    return () => clearInterval(interval);
  }, [slideCards.length]);

  // 히어로 슬라이드 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const scrollToBody = () => {
    bodyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  const faqs = [
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

  const FaqAccordion: React.FC = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const navigate = useNavigate();
    // 미리보기로 3개만 보여줌
    const previewFaqs = faqs.slice(0, 3);
    return (
      <FaqSection>
        <FaqTitle>자주 묻는 질문</FaqTitle>
        <FaqList>
          {previewFaqs.map((faq, idx) => (
            <FaqItem key={faq.question}>
              <FaqQuestion open={openIdx === idx} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                {faq.question}
                <FaqIcon>{openIdx === idx ? '×' : '+'}</FaqIcon>
              </FaqQuestion>
              {openIdx === idx && <FaqAnswer>{faq.answer}</FaqAnswer>}
            </FaqItem>
          ))}
        </FaqList>
        <MoreButton onClick={() => navigate('/notice/faq')}>
          더 자세한 내용 보기
        </MoreButton>
      </FaqSection>
    );
  };

  return (
    <HomeContainer>
      <HeroSection>
        <ImageSlider>
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              isActive={index === currentSlide}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <SlideOverlay />
          <ContentContainer>
            <TitleSection>
              <PreTitle>{slides[currentSlide].title}</PreTitle>
              <MainTitle>{slides[currentSlide].subtitle}</MainTitle>
              <BrandTitle>
                <span>수학대왕</span>
                <span>CLASS</span>
              </BrandTitle>
            </TitleSection>
            <Description
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].description }}
            />
            <PrimaryButton onClick={handleOpenDialog}>
              무료 체험 신청하기
            </PrimaryButton>
          </ContentContainer>
          <SlideIndicators>
            {slides.map((_, index) => (
              <Indicator
                key={index}
                isActive={index === currentSlide}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </SlideIndicators>
        </ImageSlider>
      </HeroSection>
      <ScrollGuide onClick={scrollToBody} />
      <div ref={bodyRef}>
        <Body />
      </div>
      
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog}
        title="무료 체험 상담 신청"
        description="아래 정보를 입력해 주시면 담당자가 빠르게 연락드립니다."
      >
        <ConsultationForm onClose={handleCloseDialog} />
      </Dialog>
      <FaqAccordion />
    </HomeContainer>
  );
};

export default Home; 