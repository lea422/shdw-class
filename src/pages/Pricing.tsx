import React, { useState } from 'react';
import styled from 'styled-components';

const PricingPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

// 모달 스타일
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 800px;
  max-width: 90vw;
  max-height: 80vh;
  background: white;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

const ModalTitle = styled.h2`
  color: #1E2231;
  font-size: 32px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const ModalPrice = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #835EEB;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const ModalDescription = styled.p`
  color: #575C64;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`;

const ModalFeatureItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  gap: 15px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #835EEB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  color: #33373B;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ModalButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #835EEB;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6B4BC4;
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 14px;
  }
`;

const PricingContainer = styled.div`
  width: 1280px;
  height: 800px;
  position: relative;
  background: white;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 100vw;
    height: auto;
    padding: 20px;
  }
`;

// 첫 번째 섹션 - 요금 안내
const PricingSection = styled.div`
  width: 1280px;
  height: 720px;
  padding: 100px 50px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  margin-top: 60px; /* 헤더 아래 여백 추가 */
  @media (max-width: 1300px) {
    width: 100vw;
    padding: 60px 20px;
    margin-top: 60px;
  }
  @media (max-width: 900px) {
    height: auto;
    flex-direction: column;
    gap: 30px;
    padding: 40px 20px;
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    padding: 30px 16px;
    margin-top: 60px;
  }
`;

const PricingHeader = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1300px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const PricingTitle = styled.div`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

const PricingSubtitle = styled.div`
  color: #1E2231;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const PricingCardsContainer = styled.div`
  width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 1300px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    padding: 0 20px;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 0 8px;
    align-items: center;
  }
`;

const PricingCard = styled.div<{ isHighlighted?: boolean; isVisible?: boolean }>`
  width: 360px;
  min-width: 360px;
  max-width: 360px;
  height: 200px;
  margin: 0 auto;
  padding: 0 20px;
  background: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  outline: ${props => props.isHighlighted ? '2px #8F67E8 solid' : '1px #E5E7EB solid'};
  outline-offset: ${props => props.isHighlighted ? '-2px' : '-1px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  transform: translateY(${props => props.isVisible ? '0' : '50px'});
  opacity: ${props => props.isVisible ? '1' : '0'};
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0px 20px 40px rgba(131, 94, 235, 0.2);
    outline: ${props => props.isHighlighted ? '3px #8F67E8 solid' : '2px #835EEB solid'};
    outline-offset: ${props => props.isHighlighted ? '-3px' : '-2px'};
  }
  
  &:active {
    transform: translateY(-4px) scale(1.01);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 900px) {
    width: 360px;
    min-width: 360px;
    max-width: 360px;
  }
  @media (max-width: 400px) {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.div<{ isHighlighted?: boolean }>`
  color: ${props => props.isHighlighted ? '#7756D6' : '#33373B'};
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CardSubtitle = styled.div`
  color: #7A828D;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CardPrice = styled.div<{ isHighlighted?: boolean }>`
  color: ${props => props.isHighlighted ? '#7756D6' : '#33373B'};
  font-size: 40px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const CardDivider = styled.div`
  width: 100%;
  height: 0;
  outline: 0.50px #8D94A0 solid;
  outline-offset: -0.25px;
`;

const CardDescription = styled.div`
  color: #7A828D;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 16px;
  word-wrap: break-word;
  white-space: pre-line;
  margin-top: 8px;
  padding-right: 2px;
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 15px;
  }
`;

// 무료 체험 신청 섹션
const TrialSection = styled.div`
  width: 1280px;
  padding: 100px 50px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 100vw;
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    padding: 40px 16px;
    gap: 30px;
  }
`;

const TrialHeader = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1300px) {
    width: 100%;
  align-items: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const TrialTitle = styled.div`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  
  span {
    color: #835EEB;
    font-family: 'Juniory', sans-serif;
  font-weight: 400;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  line-height: 36px;
  }
`;

const TrialStepContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  @media (max-width: 768px) {
    gap: 20px;
    padding: 20px;
    background: rgba(131, 94, 235, 0.02);
    border-radius: 16px;
    border: 1px solid rgba(131, 94, 235, 0.1);
  }
`;

const TrialStepContent = styled.div`
  width: 403px;
  height: 158px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 1100px) {
    width: 100%;
    max-width: 403px;
    text-align: center;
    height: auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    padding: 0 16px;
  }
`;

const TrialStepNumber = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  color: #835EEB;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    color: #6B4BC4;
  }
  
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
  }
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const TrialStepText = styled.div`
  position: absolute;
  left: 0px;
  top: 92px;
  color: #835EEB;
  font-size: 22px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 33px;
  word-wrap: break-word;
  transition: all 0.3s ease;
  
  &:hover {
    color: #6B4BC4;
  }
  
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
    margin-top: 12px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const TrialStepImage = styled.div`
  width: 500px;
  height: 300px;
  background: #F6F6F6;
  border-radius: 15.65px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(131, 94, 235, 0.2);
    background: #F0F0F0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(131, 94, 235, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 1100px) {
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: 768px) {
    height: 200px;
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    height: 150px;
    font-size: 14px;
  }
`;

// 애니메이션을 위한 스타일 컴포넌트
const AnimatedTrialStepContainer = styled(TrialStepContainer)<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: all 0.6s ease;
`;

// 요금 플랜 데이터
const pricingPlans = {
  basic: {
    title: 'Basic',
    price: '99,000원',
    subtitle: '학생 수30명 기준',
    description: '홍보자료 제공, 가입비 면제',
    features: [
      '기본 수학 강의 제공',
      '주 1회 질문 가능',
      '기초 문제 풀이',
      '학습 진도 관리',
      '기본 리포트 제공',
      '이메일 지원'
    ],
    fullDescription: '수학대왕의 기본 기능을 체험할 수 있는 플랜입니다. 개인 학습자나 소규모 학원에 적합합니다.'
  },
  premium: {
    title: '3개월',
    price: '99,000원',
    subtitle: '학생 수30명 기준',
    description: '홍보자료 제공, 가입비 면제',
    features: [
      '모든 수학 강의 무제한 제공',
      '무제한 질문 가능',
      '고급 문제 풀이',
      'AI 맞춤형 학습 추천',
      '실시간 채점 시스템',
      '1:1 개인 지도',
      '상세한 학습 분석 리포트',
      '전화 및 화상 상담 지원'
    ],
    fullDescription: '수학대왕의 모든 기능을 3개월간 체험할 수 있는 특별 플랜입니다. AI 기술을 활용한 완벽한 1:1 맞춤 학습을 경험해보세요.'
  }
};

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false, false, false]);

  // 페이지 진입 시 카드 애니메이션 시작
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // 스크롤 인터랙션을 위한 useEffect
  React.useEffect(() => {
    const handleScroll = () => {
      const trialSection = document.querySelector('[data-trial-section]');
      if (trialSection) {
        const rect = trialSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          // 각 단계를 순차적으로 나타나게 함
          visibleSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => {
                const newSteps = [...prev];
                newSteps[index] = true;
                return newSteps;
              });
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시에도 체크
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSteps]);

  const handleCardClick = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const selectedPlanData = selectedPlan ? pricingPlans[selectedPlan as keyof typeof pricingPlans] : null;

  return (
    <PricingPageContainer>
      {/* 모달 */}
      <ModalOverlay isOpen={isModalOpen} onClick={handleCloseModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalCloseButton onClick={handleCloseModal}>×</ModalCloseButton>
          {selectedPlanData && (
            <>
              <ModalTitle>{selectedPlanData.title} 플랜</ModalTitle>
              <ModalPrice>{selectedPlanData.price}</ModalPrice>
              <ModalDescription>{selectedPlanData.fullDescription}</ModalDescription>
                             <FeatureList>
                 {selectedPlanData.features.map((feature, index) => (
                   <ModalFeatureItem key={index}>
                     <FeatureIcon>✓</FeatureIcon>
                     <FeatureText>{feature}</FeatureText>
                   </ModalFeatureItem>
                 ))}
               </FeatureList>
              <ModalButton onClick={handleCloseModal}>
                상담 신청하기
              </ModalButton>
            </>
          )}
        </ModalContainer>
      </ModalOverlay>

      {/* 첫 번째 섹션 - 요금 안내 */}
      <PricingSection>
        <PricingHeader>
          <PricingTitle>
            AI로 시작하는<br/>1:1 실시간 밀착 관리
          </PricingTitle>
          <PricingSubtitle>
            단순한 문제은행을 넘어,<br/>AI 맞춤형 수학 학습 시스템을 학원에 체계적으로 도입해 보세요
          </PricingSubtitle>
        </PricingHeader>
        
        <PricingCardsContainer>
          <PricingCard 
            isVisible={isCardVisible} 
            onClick={() => handleCardClick('basic')}
            style={{ transitionDelay: '0ms' }}
          >
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardSubtitle>학생 수30명 기준</CardSubtitle>
              <CardPrice>99,000원</CardPrice>
            </CardHeader>
            <CardDivider />
            <CardDescription>
              홍보자료 제공<br/>가입비 면제
            </CardDescription>
          </PricingCard>
          
          <PricingCard 
            isHighlighted 
            isVisible={isCardVisible} 
            onClick={() => handleCardClick('premium')}
            style={{ transitionDelay: '200ms' }}
          >
            <CardHeader>
              <CardTitle isHighlighted>3개월</CardTitle>
              <CardSubtitle>학생 수30명 기준</CardSubtitle>
              <CardPrice isHighlighted>99,000원</CardPrice>
            </CardHeader>
            <CardDivider />
            <CardDescription>
              홍보자료 제공<br/>가입비 면제
            </CardDescription>
          </PricingCard>
        </PricingCardsContainer>
      </PricingSection>

      {/* 두 번째 섹션 - 무료 체험 신청 */}
      <TrialSection data-trial-section>
        <TrialHeader>
          <TrialTitle>
            무료 체험 신청 <span>a to z</span>
          </TrialTitle>
        </TrialHeader>

        <AnimatedTrialStepContainer isVisible={visibleSteps[0]}>
          <TrialStepContent>
            <TrialStepNumber>01</TrialStepNumber>
            <TrialStepText>체험 신청 시,<br/>무료 체험 계정이 문자로 안내돼요</TrialStepText>
          </TrialStepContent>
          <TrialStepImage>이미지 1</TrialStepImage>
        </AnimatedTrialStepContainer>
          
        <AnimatedTrialStepContainer isVisible={visibleSteps[1]}>
          <TrialStepContent>
            <TrialStepNumber>02</TrialStepNumber>
            <TrialStepText>선생님용 계정에 로그인</TrialStepText>
          </TrialStepContent>
          <TrialStepImage>이미지 2</TrialStepImage>
        </AnimatedTrialStepContainer>
          
        <AnimatedTrialStepContainer isVisible={visibleSteps[2]}>
          <TrialStepContent>
            <TrialStepNumber>03</TrialStepNumber>
            <TrialStepText>학생용 앱에 로그인</TrialStepText>
          </TrialStepContent>
          <TrialStepImage>이미지 3</TrialStepImage>
        </AnimatedTrialStepContainer>

        <AnimatedTrialStepContainer isVisible={visibleSteps[3]}>
          <TrialStepContent>
            <TrialStepNumber>04</TrialStepNumber>
            <TrialStepText>필요한 경우<br/>학생을 추가 하실 수도 있어요</TrialStepText>
          </TrialStepContent>
          <TrialStepImage>이미지 4</TrialStepImage>
        </AnimatedTrialStepContainer>

        <AnimatedTrialStepContainer isVisible={visibleSteps[4]}>
          <TrialStepContent>
            <TrialStepNumber>05</TrialStepNumber>
            <TrialStepText>학습지를 배부하고,</TrialStepText>
          </TrialStepContent>
          <TrialStepImage>이미지 5</TrialStepImage>
        </AnimatedTrialStepContainer>

        <AnimatedTrialStepContainer isVisible={visibleSteps[5]}>
          <TrialStepContent>
            <TrialStepNumber>06</TrialStepNumber>
            <TrialStepText>풀이 결과 대시보드를<br/>확인 하세요!</TrialStepText>
          </TrialStepContent>
          <TrialStepImage>이미지 6</TrialStepImage>
        </AnimatedTrialStepContainer>
      </TrialSection>
    </PricingPageContainer>
  );
};

export default Pricing; 