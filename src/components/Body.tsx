import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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
  padding: 120px 20px 80px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const TitleHighlight = styled.span`
  color: #9C7EEF;
  font-size: 46px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
`;

const TitleText = styled.span`
  color: black;
  font-size: 46px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
`;

const Subtitle = styled.div`
  width: 100%;
  text-align: center;
  color: #858585;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 1.3;
  word-wrap: break-word;
  margin-top: 0px;
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
  padding: 0px;

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

const DemoButton = styled.button`
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
  
  span {
    color: #835EEB;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 29px;
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
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const TabTitle = styled.h2`
  color: black;
  font-size: 46px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin: 0;
`;

const TabWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 56px;
  background: #F8F9FA;
  border-radius: 12px;
  padding: 8px;
`;

const TabList = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const TabIndicator = styled.div<{ activeTab: number }>`
  position: absolute;
  left: ${props => props.activeTab * 50}%;
  width: 50%;
  height: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  border: none;
  background: none;
  color: ${props => props.isActive ? '#835EEB' : '#858585'};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: ${props => props.isActive ? '700' : '500'};
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
`;

const TabContent = styled.div<{ isActive: boolean }>`
  display: ${props => props.isActive ? 'block' : 'none'};
  width: 100%;
  padding: 40px 0;
`;

const ContentList = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ItemTitle = styled.h3`
  color: #33373B;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const ItemDate = styled.span`
  color: #858585;
  font-size: 14px;
  font-family: Pretendard;
`;

const ItemContent = styled.p`
  color: #575C64;
  font-size: 16px;
  font-family: Pretendard;
  line-height: 1.6;
  margin: 16px 0 0 0;
`;

const NoticeTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: #835EEB;
  color: white;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 8px;
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
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState(0);

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

  const features = {
    customWorksheet: [
      {
        title: "AI 기반 실시간 맞춤 문제 추천",
        description: ["학생별 실력과 취약점을 분석하여", "최적의 문제를 자동으로 추천합니다."]
      },
      {
        title: "오답 클리닉 자동 & 무한 배부",
        description: ["틀린 문제를 자동으로 분석하여", "유사 문제를 무제한 제공합니다."]
      }
    ],
    aiGrading: [
      {
        title: "서술형 자동 채점",
        description: ["필기 인식 기술로 서술형 답안을", "정확하게 자동 채점합니다."]
      },
      {
        title: "전국 단위 실력 분석",
        description: ["전국 학생들과 비교한", "객관적인 실력 분석 리포트를 제공합니다."]
      }
    ],
    motivation: [
      {
        title: "AI 힌트 및 오답 피드백",
        description: ["학생이 막힐 때 단계별 힌트와", "상세한 오답 분석을 제공합니다."]
      },
      {
        title: "장학금 제공 시스템",
        description: ["학습 성과에 따라 실제 장학금을", "지급하여 동기를 부여합니다."]
      }
    ]
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
        {features.customWorksheet.map((feature, index) => (
          <Feature key={index} {...feature} index={index} />
        ))}
      </FeatureGrid>

      <AnimatedSectionTitle ref={el => titleRefs.current[1] = el}>
        <SectionTitleText>AI 채점 시스템</SectionTitleText>
      </AnimatedSectionTitle>
      <FeatureGrid>
        {features.aiGrading.map((feature, index) => (
          <Feature key={index} {...feature} index={index + 2} />
        ))}
      </FeatureGrid>

      <AnimatedSectionTitle ref={el => titleRefs.current[2] = el}>
        <SectionTitleText>동기부여 시스템</SectionTitleText>
      </AnimatedSectionTitle>
      <FeatureGrid>
        {features.motivation.map((feature, index) => (
          <Feature key={index} {...feature} index={index + 4} />
        ))}
      </FeatureGrid>

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
            <DemoButton>
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
            <span>0</span>
          </StatBox>
          <StatBox>
            <span>0</span>
          </StatBox>
          <StatText>명이 이미 체험했습니다</StatText>
        </StatsSection>
      </DemoSection>

      <TabContainer>
        <TabTitle>
          수학대왕의<br />
          자주 묻는 질문을 확인하세요
        </TabTitle>
        <TabWrapper>
          <TabIndicator activeTab={activeTab} />
          <TabList>
            <TabButton
              isActive={activeTab === 0}
              onClick={() => setActiveTab(0)}
            >
              자주 묻는 질문
            </TabButton>
            <TabButton
              isActive={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              공지사항
            </TabButton>
          </TabList>
        </TabWrapper>
        <TabContent isActive={activeTab === 0}>
          <ContentList>
            <ContentItem>
              <ItemTitle>수학대왕 클래스는 어떤 선생님들이 사용할 수 있나요?</ItemTitle>
              <ItemContent>
                수학대왕 클래스는 초/중/고등학교 수학 선생님들을 위한 서비스입니다. 
                학원, 공부방 등 교육기관에서도 활용 가능하며, 개인 과외 선생님도 사용하실 수 있습니다.
              </ItemContent>
            </ContentItem>
            <ContentItem>
              <ItemTitle>AI 채점은 얼마나 정확한가요?</ItemTitle>
              <ItemContent>
                수학대왕의 AI 채점 시스템은 99% 이상의 정확도를 보장합니다. 
                특히 서술형 문제의 경우, 다양한 풀이 방법을 인식하여 정확한 채점이 가능합니다.
              </ItemContent>
            </ContentItem>
            <ContentItem>
              <ItemTitle>학생들의 학습 데이터는 어떻게 관리되나요?</ItemTitle>
              <ItemContent>
                모든 학습 데이터는 암호화되어 안전하게 저장되며, 개인정보보호법을 준수합니다. 
                선생님은 실시간으로 학생들의 학습 현황과 성취도를 확인할 수 있습니다.
              </ItemContent>
            </ContentItem>
            <ContentItem>
              <ItemTitle>문제 은행은 얼마나 많은 문제가 있나요?</ItemTitle>
              <ItemContent>
                현재 30만 문제 이상의 데이터베이스를 보유하고 있으며, 매주 새로운 문제가 추가됩니다. 
                AI가 학생 수준에 맞는 맞춤형 문제를 추천해드립니다.
              </ItemContent>
            </ContentItem>
          </ContentList>
        </TabContent>
        <TabContent isActive={activeTab === 1}>
          <ContentList>
            <ContentItem>
              <NoticeTag>신규</NoticeTag>
              <ItemTitle>수학대왕 클래스 2024년 상반기 업데이트 안내</ItemTitle>
              <ItemDate>2024.03.15</ItemDate>
              <ItemContent>
                AI 채점 시스템 고도화, 새로운 문제 유형 추가, UI/UX 개선 등 다양한 업데이트가 진행될 예정입니다.
              </ItemContent>
            </ContentItem>
            <ContentItem>
              <NoticeTag>이벤트</NoticeTag>
              <ItemTitle>신규 가입 선생님 특별 혜택 안내</ItemTitle>
              <ItemDate>2024.03.10</ItemDate>
              <ItemContent>
                3월 한정 특별 이벤트! 신규 가입하시는 선생님들께 3개월 무료 이용권을 제공해드립니다.
              </ItemContent>
            </ContentItem>
            <ContentItem>
              <NoticeTag>안내</NoticeTag>
              <ItemTitle>2024학년도 교과과정 업데이트 완료</ItemTitle>
              <ItemDate>2024.03.01</ItemDate>
              <ItemContent>
                2024학년도 개정 교과과정이 반영된 새로운 콘텐츠가 업데이트 되었습니다.
              </ItemContent>
            </ContentItem>
            <ContentItem>
              <ItemTitle>서버 점검 안내</ItemTitle>
              <ItemDate>2024.02.28</ItemDate>
              <ItemContent>
                3월 1일 새벽 2시~4시까지 서버 점검이 진행됩니다. 이용에 참고 부탁드립니다.
              </ItemContent>
            </ContentItem>
          </ContentList>
        </TabContent>
      </TabContainer>
    </BodyContainer>
  );
};

export default Body; 