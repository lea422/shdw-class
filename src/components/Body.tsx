import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const blink = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.95);
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
  background: #F8F6FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderSection = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 120px 20px 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const TitleHighlight = styled.span`
  color: #835EEB;
  font-size: 56px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
`;

const TitleText = styled.span`
  color: black;
  font-size: 56px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
`;

const Subtitle = styled.div`
  width: 100%;
  text-align: center;
  color: #666666;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 1.5;
  word-wrap: break-word;
  margin-top: 8px;
`;

const SectionTitle = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionTitleText = styled.div`
  width: 100%;
  max-width: 1040px;
  text-align: center;
  color: #835EEB;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
`;

const FeatureGrid = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  background: white;
  border-radius: 20px;
  border: 2px #835EEB solid;
  transition: all 0.3s ease;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(131, 94, 235, 0.03) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
`;

const FeatureTitle = styled.div`
  text-align: center;
  color: black;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 38.40px;
  word-wrap: break-word;
  transition: all 0.3s ease;
`;

const FeatureCard = styled.div`
  flex: 1;
  max-width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);

    ${ImagePlaceholder} {
      border-color: #9C7EEF;
      box-shadow: 0 10px 20px rgba(131, 94, 235, 0.15);
    }

    ${FeatureTitle} {
      color: #835EEB;
    }
  }

  ${ImagePlaceholder}::before {
    transform: translateX(-100%);
  }

  &:hover ${ImagePlaceholder}::before {
    transform: translateX(100%);
  }
`;

const FeatureContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const FeatureDescription = styled.div`
  text-align: center;
  opacity: 0.60;
  color: #4B4B4B;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 34.80px;
  word-wrap: break-word;
`;

const AnimatedHeaderSection = styled(HeaderSection)`
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.8s ease forwards;
  }
`;

const AnimatedSectionTitle = styled(SectionTitle)`
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.8s ease forwards;
  }
`;

const AnimatedFeatureCard = styled(FeatureCard)`
  opacity: 0;
  &.visible-left {
    animation: ${fadeInLeft} 0.8s ease forwards;
  }
  &.visible-right {
    animation: ${fadeInRight} 0.8s ease forwards;
  }
`;

const WebAppSection = styled.div`
  align-self: stretch;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WebAppHeader = styled.div`
  align-self: stretch;
  padding: 120px 64px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const WebAppTitle = styled.div`
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const WebAppTitleHighlight = styled.span`
  color: #9C7EEF;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.40px;
  word-wrap: break-word;
`;

const WebAppTitleText = styled.span`
  color: black;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.40px;
  word-wrap: break-word;
`;

const WebAppSubtitle = styled.div`
  align-self: stretch;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #858585;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36.40px;
  word-wrap: break-word;
`;

const WebAppContent = styled.div`
  align-self: stretch;
  padding: 32px 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const PlatformCard = styled.div`
  width: 250px;
  height: 400px;
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 15px;
  outline: 2px #835EEB solid;
  outline-offset: -2px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  background: #835EEB;
  overflow: hidden;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlatformTitle = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 26px;
  word-wrap: break-word;
`;

const PlatformFeatures = styled.div`
  width: 230px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #33373B;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 40px;
  word-wrap: break-word;
`;

const SyncSection = styled.div`
  overflow: hidden;
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SyncIcon = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
  width: 50px;
  height: 50px;

  background: #835EEB;
  border-radius: 100px;
  animation: ${blink} 2s ease-in-out infinite;
`;

const ArrowIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 2px;
  background: white;
  left: 50%;
  border-radius: 1px;

  &.left {
    top: 15px;
    transform: translateX(-50%);
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(-35deg);
      transform-origin: left bottom;
    }
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(35deg);
      transform-origin: left top;
    }
  }

  &.right {
    bottom: 15px;
    transform: translateX(-50%);
    
    &::before {
      content: '';
      position: absolute;
      right: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(35deg);
      transform-origin: right bottom;
    }
    
    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(-35deg);
      transform-origin: right top;
    }
  }
`;

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  background: #835EEB;
  border-radius: 4px;
  margin-right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 6px;
    border: 2px solid white;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    top: 5px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  color: #33373B;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SyncTitle = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 26px;
  word-wrap: break-word;
`;

const SyncSubtitle = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #33373B;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 18.20px;
  word-wrap: break-word;
`;

const DemoSection = styled.div`
  align-self: stretch;
  background: #835EEB;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DemoHeader = styled.div`
  align-self: stretch;
  height: 280px;
  padding: 80px 64px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const DemoTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.40px;
  word-wrap: break-word;
`;

const DemoSubtitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 33px;
  word-wrap: break-word;
`;

const DemoButton = styled.a`
  padding: 10px 30px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  border: none;
  outline: 2px rgba(255, 255, 255, 0.15) solid;
  outline-offset: -2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  span {
    color: #835EEB;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 29px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const DemoButtonContainer = styled.div`
  align-self: stretch;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const DemoContent = styled.div`
  align-self: stretch;
  padding: 20px 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const FeatureBoxFlow = styled.div`
  display: flex;
  gap: 30px;
  animation: ${slideLeft} 30s linear infinite;
`;

const FeatureBoxSlide = styled.div`
  flex-shrink: 0;
`;

const FeatureBoxContent = styled.div`
  align-self: stretch;
  padding: 32.86px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13.14px;
  
  h3 {
    align-self: stretch;
    text-align: center;
    color: #33373B;
    font-size: 29.58px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    line-height: 44.36px;
    word-wrap: break-word;
    margin: 0;
  }
`;

const FeatureImage = styled.div<{ image: string }>`
  width: 500px;
  height: 500px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 32px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08));
    border-radius: 32px;
  }
`;

const StatsSection = styled.div`
  align-self: stretch;
  padding: 20px 0 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StatBox = styled.div`
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  
  span {
    color: white;
    font-size: 48px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 69.60px;
  }
`;

const StatText = styled.div`
  color: white;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 69.60px;
  word-wrap: break-word;
`;

const TabContainer = styled.div`
  align-self: stretch;
  padding: 60px 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const TabTitle = styled.h2`
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.40px;
  text-align: center;
  margin: 0;
`;

const MoreButton = styled.button`
  margin-top: 20px;
  padding: 16px 32px;
  background: #835EEB;
  color: white;
  font-size: 18px;
  font-family: Pretendard;
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

const Tabs = styled.div`
  display: flex;
  gap: 16px;
  margin: 40px 0 24px 0;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 12px 32px;
  border-radius: 24px;
  border: none;
  background: ${({ active }) => (active ? '#835EEB' : '#E5D8FB')};
  color: ${({ active }) => (active ? 'white' : '#835EEB')};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
`;

const SlideContainer = styled.div`
  width: 700px;
  max-width: 90vw;
  background: #ede5fa;
  border-radius: 24px;
  padding: 32px 24px 40px 24px;
  box-shadow: 0 4px 24px rgba(131, 94, 235, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
`;

const SlideTitle = styled.div`
  background: #835EEB;
  color: white;
  font-size: 22px;
  font-weight: 700;
  border-radius: 18px;
  padding: 8px 32px;
  margin-bottom: 16px;
  align-self: center;
`;

const SlideDesc = styled.div`
  color: #6B5B8C;
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
`;

const SlideBox = styled.div`
  width: 100%;
  height: 320px;
  background: white;
  border-radius: 18px;
  border: 2px solid #BFA8F6;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 32px;
  color: #835EEB;
  cursor: pointer;
  z-index: 2;
  &:hover { color: #6B4BC4; }
`;

const ArrowLeft = styled(ArrowButton)`
  left: -48px;
`;
const ArrowRight = styled(ArrowButton)`
  right: -48px;
`;

interface FeatureProps {
  title: string;
  description: string[];
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add(index % 2 === 0 ? 'visible-left' : 'visible-right');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <AnimatedFeatureCard ref={cardRef}>
      <ImagePlaceholder />
      <FeatureContent>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>
          {description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </FeatureDescription>
      </FeatureContent>
    </AnimatedFeatureCard>
  );
};

const Body = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [demoCount, setDemoCount] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [zoomedBoxes, setZoomedBoxes] = useState<Set<number>>(new Set());
  const [visibleTexts, setVisibleTexts] = useState<Set<number>>(new Set());
  const featureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);


  // 테스티모니얼 데이터
  const testimonials = [
    {
      title: {
        highlight: "현장의 목소리로",
        normal: "증명된 효과"
      },
      quote: "교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br/>완벽한 교육 생태계를 경험하세요",
      name: "을지대 의예과<br/>24학번 김영우 학생",
      videoUrl: "https://youtu.be/MBQZ4PCuNEQ?si=NX8FTvhS880GB9s3",
      thumbnailUrl: "https://img.youtube.com/vi/MBQZ4PCuNEQ/maxresdefault.jpg"
    },
    {
      title: {
        highlight: "AI 기술로",
        normal: "완성된 학습"
      },
      quote: "개인별 맞춤 학습과 실시간 피드백으로<br/>학습 효과가 눈에 띄게 향상되었어요",
      name: "서울대 의예과<br/>23학번 박민수 학생",
      videoUrl: "https://youtu.be/example2",
      thumbnailUrl: "https://img.youtube.com/vi/example2/maxresdefault.jpg"
    },
    {
      title: {
        highlight: "체계적인 관리로",
        normal: "성과 극대화"
      },
      quote: "학생들의 학습 현황을 한눈에 파악하고<br/>효과적으로 지도할 수 있어요",
      name: "강남 수학학원<br/>김선생님",
      videoUrl: "https://youtu.be/example3",
      thumbnailUrl: "https://img.youtube.com/vi/example3/maxresdefault.jpg"
    }
  ];

  useEffect(() => {
    // Load demo count from localStorage
    const savedCount = localStorage.getItem('demoClickCount');
    if (savedCount) {
      setDemoCount(parseInt(savedCount, 10));
    }
  }, []);

  // 테스티모니얼 변경 시 자연스러운 전환 효과
  useEffect(() => {
    // 텍스트가 부드럽게 슬라이드되면서 변경
    setTextVisible(false);
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 150); // 더 빠른 전환
    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  // 자동 슬라이드 (8초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDemoClick = () => {
    const newCount = demoCount + 1;
    setDemoCount(newCount);
    localStorage.setItem('demoClickCount', newCount.toString());
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    titleRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      titleRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // 스크롤 기반 인터랙션
  useEffect(() => {
    const handleScroll = () => {
      const newZoomedBoxes = new Set<number>();
      const newVisibleTexts = new Set<number>(Array.from(visibleTexts)); // 기존 보인 텍스트 유지
      
      featureBoxRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const screenCenter = windowHeight / 2;
          
          // 화면 중앙에 가까울수록 줌 효과
          const distanceFromCenter = Math.abs(elementCenter - screenCenter);
          const maxDistance = windowHeight / 2;
          const zoomThreshold = maxDistance * 0.3; // 화면 중앙 30% 영역에서 줌
          
          if (distanceFromCenter < zoomThreshold) {
            newZoomedBoxes.add(index);
            newVisibleTexts.add(index);
          }
        }
      });
      
      setZoomedBoxes(newZoomedBoxes);
      setVisibleTexts(newVisibleTexts);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 설정

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleTexts]);



  const features = [
    {
      title: '맞춤형 학습지 제작',
      sub: [
        { label: 'AI 기반 실시간 맞춤 문제 추천', gif: '' },
        { label: '오답클리닉 자동 & 무한 배부', gif: '' }
      ],
      desc: '학생이 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.',
      defaultGif: ''
    },
    {
      title: 'AI 채점 시스템',
      sub: [
        { label: '서술형 자동 채점', gif: '' },
        { label: '전국 단위 실력 분석', gif: '' }
      ],
      desc: 'AI가 학생의 답안을 실시간으로 분석하고<br/>정확한 피드백을 제공합니다.',
      defaultGif: ''
    },
    {
      title: 'AI 힌트 및 오답 피드백',
      sub: [
        { label: 'AI 힌트 및 오답 피드백', gif: '' },
        { label: '질문 게시판', gif: '' }
      ],
      desc: '학생이 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.',
      defaultGif: ''
    }
  ];

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setActiveSlide(0);
  };
  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? features[activeTab].sub.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveSlide((prev) => (prev === features[activeTab].sub.length - 1 ? 0 : prev + 1));
  };

  const [hovered, setHovered] = useState<{featureIdx: number, subIdx: number | null}>({featureIdx: 0, subIdx: null});

  return (
    <BodyContainer>
      <AnimatedHeaderSection ref={headerRef}>
        <Title>
          <TitleHighlight>수학대왕 클래스의</TitleHighlight>
          <TitleText>핵심 기능</TitleText>
        </Title>
        <Subtitle>
          AI 기술로 완성된 체계적인 수학 학습 관리 시스템
        </Subtitle>
      </AnimatedHeaderSection>

      <FeatureSectionWrapper>
        <FeatureBox ref={el => featureBoxRefs.current[0] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(0)}>
            <FeatureCategory>
              <div style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: '700',
                lineHeight: 26,
                wordWrap: 'break-word'
              }}>
                맞춤형 학습지 제작
              </div>
            </FeatureCategory>
            <FeatureMainTitle>
              AI 기반 실시간<br/>맞춤 문제 추천
            </FeatureMainTitle>
            <FeatureDesc>
              학생별 실력과 취약점을 분석하여<br/>최적의 문제를 자동으로 추천합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(0)}>
            <video 
              src="/video/feature-1-ai-recommendation.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </GifBox>
        </FeatureBox>
        
        <FeatureBox ref={el => featureBoxRefs.current[1] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(1)}>
            <FeatureCategory>
              <div style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: '700',
                lineHeight: 26,
                wordWrap: 'break-word'
              }}>
                맞춤형 학습지 제작
              </div>
            </FeatureCategory>
            <FeatureMainTitle>
              오답 클리닉<br/>자동 & 무한 배부
            </FeatureMainTitle>
            <FeatureDesc>
              틀린 문제를 자동으로 분석하여<br/>유사 문제를 무제한 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(1)}>
            <video 
              src="/video/feature-1-ai-recommendation.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </GifBox>
        </FeatureBox>

        <FeatureBox ref={el => featureBoxRefs.current[2] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(2)}>
            <FeatureCategory>
              <div style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: '700',
                lineHeight: 26,
                wordWrap: 'break-word'
              }}>
                AI 채점 시스템
              </div>
            </FeatureCategory>
            <FeatureMainTitle>
              서술형<br/>자동 채점
            </FeatureMainTitle>
            <FeatureDesc>
              필기 인식 기술로 서술형 답안을<br/>정확하게 자동 채점합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(2)}>
            <video 
              src="/video/feature-1-ai-recommendation.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </GifBox>
        </FeatureBox>
        
        <FeatureBox ref={el => featureBoxRefs.current[3] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(3)}>
            <FeatureCategory>
              <div style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: '700',
                lineHeight: 26,
                wordWrap: 'break-word'
              }}>
                AI 채점 시스템
              </div>
            </FeatureCategory>
            <FeatureMainTitle>
              전국 단위<br/>실력 분석
            </FeatureMainTitle>
            <FeatureDesc>
              전국 학생들과 비교한<br/>객관적인 실력 분석 리포트를 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(3)}>
            <video 
              src="/video/feature-1-ai-recommendation.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </GifBox>
        </FeatureBox>

        <FeatureBox ref={el => featureBoxRefs.current[4] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(4)}>
            <FeatureCategory>
              <div style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: '700',
                lineHeight: 26,
                wordWrap: 'break-word'
              }}>
                맞춤형 학습지 제작
              </div>
            </FeatureCategory>
            <FeatureMainTitle>
              AI 힌트 및<br/>오답 피드백
            </FeatureMainTitle>
            <FeatureDesc>
              풀이가 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(4)}>
            <video 
              src="/video/feature-1-ai-recommendation.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </GifBox>
        </FeatureBox>
        
        <FeatureBox ref={el => featureBoxRefs.current[5] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(5)}>
            <FeatureCategory>
              <div style={{
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: '700',
                lineHeight: 26,
                wordWrap: 'break-word'
              }}>
                맞춤형 학습지 제작
              </div>
            </FeatureCategory>
            <FeatureMainTitle>
              질문 게시판
            </FeatureMainTitle>
            <FeatureDesc>
              모르는 문제를 게시판에 질문하고<br/>빠르게 답변을 받아 볼 수 있습니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(5)}>
            <video 
              src="/video/feature-1-ai-recommendation.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 0
              }}
            />
          </GifBox>
        </FeatureBox>
      </FeatureSectionWrapper>

      <WebAppSectionWrapper>
        <WebAppHeader>
          <WebAppTitle>
            <WebAppTitleHighlight>웹-앱 연동으로</WebAppTitleHighlight>
            <WebAppTitleText>완성되는 교육 시스템</WebAppTitleText>
          </WebAppTitle>
          <WebAppSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br />
            완벽한 교육 생태계를 경험하세요
          </WebAppSubtitle>
        </WebAppHeader>
        <WebAppContent>
          <PlatformCard>
            <IconCircle>
              <div style={{ width: '38px', height: '22px', background: 'white', borderRadius: '2px' }} />
              <div style={{ width: '6px', height: '4px', background: 'white' }} />
              <div style={{ width: '30px', height: '3px', background: 'white', borderRadius: '1px' }} />
            </IconCircle>
            <PlatformTitle>선생님용 웹사이트</PlatformTitle>
            <PlatformFeatures>
              <FeatureItem><CheckBox />클래스 및 학생관리</FeatureItem>
              <FeatureItem><CheckBox />맞춤형 문제 출제</FeatureItem>
              <FeatureItem><CheckBox />AI 채점 결과 확인</FeatureItem>
              <FeatureItem><CheckBox />실력 분석 리포트</FeatureItem>
            </PlatformFeatures>
          </PlatformCard>
          <SyncSection>
            <SyncIcon>
              <ArrowIcon className="left" />
              <ArrowIcon className="right" />
            </SyncIcon>
            <SyncTitle>실시간 연동</SyncTitle>
            <SyncSubtitle>데이터 동기화</SyncSubtitle>
          </SyncSection>
          <PlatformCard>
            <IconCircle>
              <div style={{ width: '18px', height: '34px', background: 'white', borderRadius: '3px' }} />
              <div style={{ width: '2px', height: '2px', background: '#835EEB', borderRadius: '9999px' }} />
            </IconCircle>
            <PlatformTitle>학생용 모바일 앱</PlatformTitle>
            <PlatformFeatures>
              <FeatureItem><CheckBox />맞춤형 학습지 수신</FeatureItem>
              <FeatureItem><CheckBox />AI 힌트 시스템</FeatureItem>
              <FeatureItem><CheckBox />실시간 채점 피드백</FeatureItem>
              <FeatureItem><CheckBox />장학금 알림 수신</FeatureItem>
            </PlatformFeatures>
          </PlatformCard>
        </WebAppContent>
      </WebAppSectionWrapper>

      <DemoSection>
        <DemoHeader>
          <DemoTitle>
            수학대왕 APP 기능을 직접 체험해 보세요!
          </DemoTitle>
          <DemoSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는
            완벽한 교육 생태계를 경험하세요
          </DemoSubtitle>
          <DemoButtonContainer>
            <DemoButton 
              href="https://www.iammathking.com/demo" 
              rel="noopener noreferrer"
              onClick={handleDemoClick}
            >
              <span>데모 체험하기</span>
              <ArrowIcon className="right" />
            </DemoButton>
          </DemoButtonContainer>
        </DemoHeader>
        <DemoContent>
          <FeatureBoxFlow>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-1.png" />
            </FeatureBoxSlide>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-2.png" />
            </FeatureBoxSlide>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-3.png" />
            </FeatureBoxSlide>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-4.png" />
            </FeatureBoxSlide>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-5.png" />
            </FeatureBoxSlide>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-6.png" />
            </FeatureBoxSlide>
            <FeatureBoxSlide>
              <FeatureImage image="/feature-slide-7.png" />
            </FeatureBoxSlide>
          </FeatureBoxFlow>
        </DemoContent>
        <StatsSection>
          <StatBox>
            <span>{demoCount}</span>
          </StatBox>
          <StatText>명이 이미 체험했습니다</StatText>
        </StatsSection>
      </DemoSection>

      {/* 현장의 목소리 섹션 */}
      <ExperienceSection>
        <ExperienceInner>
          <ExperienceTextBlock>
            <AnimatedTextContent className={textVisible ? 'visible' : ''}>
              <ExperienceTitle>
                {testimonials[currentTestimonial].title.highlight}<br/>{testimonials[currentTestimonial].title.normal}
              </ExperienceTitle>
              <ExperienceQuote>
                <span dangerouslySetInnerHTML={{ __html: testimonials[currentTestimonial].quote }} />
              </ExperienceQuote>
              <NameSection>
                <VerticalLine />
                <NameSpacer />
                <ExperienceName>
                  <span>을지대 의예과</span>
                  <span>24학번 김영우 학생</span>
                </ExperienceName>
              </NameSection>
            </AnimatedTextContent>
          </ExperienceTextBlock>
          <ExperienceImageBlock>
            <VideoSlider>
              {testimonials.map((testimonial, index) => {
                // 좌측으로만 흐르도록 계산
                let slideIndex = index;
                if (index < currentTestimonial) {
                  slideIndex = index + testimonials.length;
                }
                
                return (
                  <VideoSlide
                    key={index}
                    className={index === currentTestimonial ? 'active' : ''}
                    style={{ transform: `translateX(${(slideIndex - currentTestimonial) * 100}%)` }}
                  >
                    <YouTubeThumbnail
                      href={testimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ThumbnailImage
                        src={testimonial.thumbnailUrl}
                        alt={testimonial.name}
                      />
                      <PlayButton>
                        <PlayIcon>▶</PlayIcon>
                      </PlayButton>
                    </YouTubeThumbnail>
                  </VideoSlide>
                );
              })}
            </VideoSlider>

          </ExperienceImageBlock>
        </ExperienceInner>
      </ExperienceSection>
    </BodyContainer>
  );
};

// styled-components for the new section
const ExperienceSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 600px;
  padding: 40px 0;
`;

const ExperienceInner = styled.div`
  width: 1440px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media (max-width: 1500px) {
    width: 100vw;
    min-width: 0;
    padding: 0 16px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    gap: 32px;
    align-items: center;
  }
`;

const ExperienceTextBlock = styled.div`
  width: 488px;
  height: 486px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    align-items: center;
  }
`;

const ExperienceTitle = styled.div`
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.4px;
  word-break: keep-all;
  margin-bottom: 36px;
`;

const ExperienceQuote = styled.div`
  color: #33373B;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36px;
  word-break: keep-all;
  margin-bottom: 32px;
`;

const ExperienceName = styled.div`
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 26px;
  word-break: keep-all;
  font-weight: 700;
  span { display: block; }
  span:last-child { font-weight: 400; }
`;

const ExperienceImageBlock = styled.div`
  width: 864px;
  height: 486px;
  position: relative;
  overflow: hidden;
  outline: 6px #835EED solid;
  background: #F8F6FF;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 864px;
    height: 400px;
  }
`;

const YouTubeThumbnail = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${YouTubeThumbnail}:hover & {
    background: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const PlayIcon = styled.span`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-left: 4px;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const VerticalLine = styled.div`
  width: 3px;
  min-width: 3px;
  height: 100%;
  background: #835EEB;
  margin-right: 16px;
  border-radius: 2px;
`;

const NameSpacer = styled.div`
  height: 20px;
`;

const ArrowGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Arrow = styled.div`
  width: 20px;
  height: 13px;
  transform: rotate(90deg);
  transform-origin: top left;
  outline: 2px #835EEB solid;
  outline-offset: -1px;
`;

// 추가 styled-components
const AnimatedTextContent = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const VideoSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const VideoSlide = styled.div`
  min-width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: scale(0.95);
  z-index: 1;
  
  &.active {
    opacity: 1;
    transform: scale(1);
    z-index: 2;
  }
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(131, 94, 235, 0.9);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(131, 94, 235, 1);
    transform: translateY(-50%) scale(1.1);
  }
  
  &.prev {
    left: 16px;
  }
  
  &.next {
    right: 16px;
  }
`;

const FeatureSectionWrapper = styled.div`
  width: 1280px;
  margin: 0 auto 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  padding: 0;
`;

const FeatureBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
  overflow: visible;
  padding-left: 0px;
`;

const FeatureTextBlock = styled.div<{ isVisible?: boolean }>`
  width: 600px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin: 0;
  margin-left: 0px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateX(${props => props.isVisible ? '0' : '-30px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const FeatureTitleNew = styled.div`
  color: #33373B;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 28.8px;
  text-align: center;
`;

const FeatureMainTitle = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 40px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 52px;
  word-wrap: break-word;
  text-align: left;
  width: 100%;
`;

const FeatureCategory = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #835EEB;
  overflow: hidden;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  width: fit-content;
  height: 26px;
`;

const FeatureDesc = styled.div`
  opacity: 0.6;
  color: #4B4B4B;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 34.8px;
  text-align: left;
  width: 100%;
  max-width: 450px;
`;

const GifBox = styled.div<{ isZoomed?: boolean }>`
  width: 600px;
  height: 400px;
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  border: 2px solid #835EEB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: scale(${props => props.isZoomed ? '1.1' : '1'});
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
  margin: 0;
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.34;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 96px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 124.8px;
  word-wrap: break-word;
`;

const FeatureTitleSection = styled.div`
  align-self: stretch;
  height: 50px;
  position: relative;
  background: #F3EFFD;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WebAppSectionWrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

export default Body; 