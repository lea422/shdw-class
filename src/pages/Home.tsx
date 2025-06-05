import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dialog from '../components/Dialog';
import ConsultationForm from '../components/ConsultationForm';
import Body from '../components/Body';
import ScrollGuide from '../components/ScrollGuide';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 1000px;
  padding: 150px 64px 100px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
`;

const TitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const PreTitle = styled.div`
  width: 1152px;
  max-width: 100%;
  text-align: center;
  color: black;
  font-size: 26px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.52px;
`;

const MainTitle = styled.div`
  width: 1152px;
  max-width: 100%;
  text-align: center;
  color: black;
  font-size: 46px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.92px;
`;

const BrandTitle = styled.div`
  width: 1152px;
  max-width: 100%;
  text-align: center;
  
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
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.1px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BaseButton = styled.button`
  width: 200px;
  padding: 15px;
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

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-2px);

    &:before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(to right, #835EEB, #6B4BC4);
  border: none;
  color: white;
  box-shadow: 0 2px 4px rgba(131, 94, 235, 0.2);

  &:before {
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateX(-100%);
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(131, 94, 235, 0.3);

    &:before {
      transform: translateX(100%);
    }
  }

  &:active {
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
`;

const SecondaryButton = styled(BaseButton).attrs({ as: 'a' })`
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:before {
    background: linear-gradient(120deg, transparent 0%, rgba(131, 94, 235, 0.1) 50%, transparent 100%);
    transform: translateX(-100%);
  }

  &:hover {
    border-color: #835EEB;
    color: #835EEB;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    &:before {
      transform: translateX(100%);
    }
  }

  &:active {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
  }

  p {
    color: #33373B;
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }
`;

const SyncIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const scrollToBody = () => {
    bodyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeContainer>
      <HeroSection>
        <TitleSection>
          <PreTitle>
            AI가 바꾸는
          </PreTitle>
          <MainTitle>
            수학 교육의 미래
          </MainTitle>
          <BrandTitle>
            <span>수학대왕</span>
            <span>CLASS</span>
          </BrandTitle>
        </TitleSection>
        <Description>
          교사의 업무는 줄이고, 학생의 성과는 높이는<br />
          AI 기반 혁신적 수학 학습관리 시스템
        </Description>
        <ButtonGroup>
          <PrimaryButton onClick={handleOpenDialog}>
            무료 체험 신청하기
          </PrimaryButton>
          <SecondaryButton href="https://www.iammathking.com/demo" target="_blank" rel="noopener noreferrer">
            데모 체험하기
          </SecondaryButton>
        </ButtonGroup>
        <FeatureSection>
          <FeatureCard>
            <h3>AI 서술형 자동 채점</h3>
            <p>필기 인식 기반 정확한 채점</p>
          </FeatureCard>
          <FeatureCard>
            <h3>맞춤형 문제 추천</h3>
            <p>실력 분석 기반 개인별 최적화</p>
          </FeatureCard>
          <FeatureCard>
            <h3>동기부여 시스템</h3>
            <p>장학금과 피드백으로 학습 동기 극대화</p>
          </FeatureCard>
        </FeatureSection>
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
    </HomeContainer>
  );
};

export default Home; 