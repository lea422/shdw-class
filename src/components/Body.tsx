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
  padding: 160px 20px 100px;
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
  overflow: hidden;

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
    transform: translateX(-200%);
  }
`;

const FeatureBoxFlow = styled.div`
  display: flex;
  gap: 30px;
  animation: ${slideLeft} 20s linear infinite;
`;

const FeatureBox = styled.div`
  min-width: 550px;
  height: 400px;
  background: #F3F4F6;
  overflow: hidden;
  border-radius: 19.72px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
    font-family: Pretendard;
    font-weight: 700;
    line-height: 44.36px;
    word-wrap: break-word;
    margin: 0;
  }
`;

const StatsSection = styled.div`
  align-self: stretch;
  padding: 20px 0 60px;
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
  padding: 100px 0;
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

  useEffect(() => {
    // Load demo count from localStorage
    const savedCount = localStorage.getItem('demoClickCount');
    if (savedCount) {
      setDemoCount(parseInt(savedCount, 10));
    }
  }, []);

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

  const features = [
    {
      tab: "맞춤형 학습지",
      slides: [
        {
          title: "AI 기반 맞춤형 학습지",
          desc: "학생 개개인의 실력에 맞춘 개인별 최적화된 학습지를 AI가 자동으로 제작합니다."
        },
        {
          title: "실시간 난이도 조절",
          desc: "학생의 학습 진행 상황에 따라 실시간으로 난이도를 조절하여 최적의 학습 효과를 제공합니다."
        }
      ]
    },
    {
      tab: "AI 채점 시스템",
      slides: [
        {
          title: "필기 인식 채점",
          desc: "학생의 필기 답안을 AI가 정확하게 인식하여 즉시 채점하고 피드백을 제공합니다."
        },
        {
          title: "오답 분석 및 힌트",
          desc: "틀린 문제에 대해 단계별 힌트와 해설을 제공하여 학생이 스스로 해결할 수 있도록 도와줍니다."
        }
      ]
    },
    {
      tab: "학습 관리",
      slides: [
        {
          title: "실시간 학습 현황",
          desc: "선생님이 학생들의 학습 진행 상황을 실시간으로 확인하고 관리할 수 있습니다."
        },
        {
          title: "성과 분석 리포트",
          desc: "학생별, 클래스별 상세한 성과 분석 리포트를 제공하여 효과적인 학습 지도를 가능하게 합니다."
        }
      ]
    }
  ];

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setActiveSlide(0);
  };
  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? features[activeTab].slides.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveSlide((prev) => (prev === features[activeTab].slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <BodyContainer>
      <AnimatedHeaderSection ref={headerRef}>
        <Title>
          <TitleHighlight>수학대왕 클래스</TitleHighlight>
          <TitleText>의 핵심 기능</TitleText>
        </Title>
        <Subtitle>
          AI 기술로 완성된 체계적인 수학 학습 관리 시스템
        </Subtitle>
      </AnimatedHeaderSection>

      <AnimatedSectionTitle ref={el => titleRefs.current[0] = el}>
        <SectionTitleText>맞춤형 학습지 제작</SectionTitleText>
      </AnimatedSectionTitle>
      <FeatureGrid>
        {features[activeTab].slides.map((feature, index) => (
          <Feature key={index} title={feature.title} description={[feature.desc]} index={index} />
        ))}
      </FeatureGrid>

      <Tabs>
        {features.map((cat, idx) => (
          <TabButton key={cat.tab} active={activeTab === idx} onClick={() => handleTabClick(idx)}>
            {cat.tab}
          </TabButton>
        ))}
      </Tabs>
      <SlideContainer>
        <SlideTitle>{features[activeTab].slides[activeSlide].title}</SlideTitle>
        <SlideDesc>{features[activeTab].slides[activeSlide].desc}</SlideDesc>
        <SlideBox />
        <ArrowLeft onClick={handlePrev}>&lt;</ArrowLeft>
        <ArrowRight onClick={handleNext}>&gt;</ArrowRight>
      </SlideContainer>

      <WebAppSection>
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
      </WebAppSection>

      <DemoSection>
        <DemoHeader>
          <DemoTitle>
            수학대왕 APP 기능을 직접 체험해 보세요!
          </DemoTitle>
          <DemoSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br />
            완벽한 교육 생태계를 경험하세요
          </DemoSubtitle>
          <DemoButtonContainer>
            <DemoButton 
              href="https://www.iammathking.com/demo" 
              target="_blank" 
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
            <FeatureBox>
              <FeatureBoxContent>
                <h3>실시간 피드백으로<br/>즉시 오답을 분석해볼 수 있어요</h3>
              </FeatureBoxContent>
              <div style={{ width: '550.44px', height: '345.05px' }} />
            </FeatureBox>
            <FeatureBox>
              <FeatureBoxContent>
                <h3>AI가 제공하는<br/>맞춤형 문제를 풀어보세요</h3>
              </FeatureBoxContent>
              <div style={{ width: '550.44px', height: '345.05px' }} />
            </FeatureBox>
            <FeatureBox>
              <FeatureBoxContent>
                <h3>단계별 힌트로<br/>스스로 해결할 수 있어요</h3>
              </FeatureBoxContent>
              <div style={{ width: '550.44px', height: '345.05px' }} />
            </FeatureBox>
            <FeatureBox>
              <FeatureBoxContent>
                <h3>성과에 따른<br/>장학금 혜택을 받아보세요</h3>
              </FeatureBoxContent>
              <div style={{ width: '550.44px', height: '345.05px' }} />
            </FeatureBox>
            <FeatureBox>
              <FeatureBoxContent>
                <h3>실시간 피드백으로<br/>즉시 오답을 분석해볼 수 있어요</h3>
              </FeatureBoxContent>
              <div style={{ width: '550.44px', height: '345.05px' }} />
            </FeatureBox>
          </FeatureBoxFlow>
        </DemoContent>
        <StatsSection>
          <StatBox>
            <span>{demoCount}</span>
          </StatBox>
          <StatText>명이 이미 체험했습니다</StatText>
        </StatsSection>
      </DemoSection>
    </BodyContainer>
  );
};

export default Body; 