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
`;

const ModalPrice = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #835EEB;
  margin-bottom: 30px;
`;

const ModalDescription = styled.p`
  color: #575C64;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
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
  @media (max-width: 1300px) {
    width: 100vw;
    padding: 60px 20px;
  }
  @media (max-width: 900px) {
    height: auto;
    flex-direction: column;
    gap: 30px;
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
`;

const PricingSubtitle = styled.div`
  color: #1E2231;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
`;

const PricingCardsContainer = styled.div`
  width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const PricingCard = styled.div<{ isHighlighted?: boolean; isVisible?: boolean }>`
  width: 550px;
  height: 200px;
  padding: 0 30px;
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
    width: 100%;
    max-width: 550px;
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
`;

const CardSubtitle = styled.div`
  color: #7A828D;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  word-wrap: break-word;
`;

const CardPrice = styled.div<{ isHighlighted?: boolean }>`
  color: ${props => props.isHighlighted ? '#7756D6' : '#33373B'};
  font-size: 40px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

const CardDivider = styled.div`
  width: 100%;
  height: 0;
  outline: 0.50px #8D94A0 solid;
  outline-offset: -0.25px;
`;

const CardDescription = styled.div`
  color: #7A828D;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 25px;
  word-wrap: break-word;
`;

// 두 번째 섹션 - 기능 비교
const ComparisonSection = styled.div`
  width: 1280px;
  height: 1000px;
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

const HeaderSection = styled.div`
  position: absolute;
  left: 357px;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin-bottom: 30px;
  }
`;

const HeaderTitle = styled.div`
  text-align: center;
  color: #0B1215;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
`;

const HeaderSubtitle = styled.div`
  text-align: center;
  color: #575C64;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
`;

const FeatureBadge = styled.div`
  width: 200px;
  height: 40px;
  left: 450px;
  top: 280px;
  position: absolute;
  background: #835EEB;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 28.6px;
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 20px auto;
  }
`;

const ComparisonTable = styled.div`
  position: absolute;
  left: 240px;
  top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 20px 0;
  }
`;

const TableHeader = styled.div`
  width: 100%;
  padding: 3px 0;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const TableHeaderCell = styled.div`
  width: 150px;
  text-align: center;
  color: #835EEB;
  font-size: 18px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 20.7px;
  word-wrap: break-word;
`;

const TableRow = styled.div<{ isHighlighted?: boolean }>`
  height: 50px;
  background: ${props => props.isHighlighted ? '#F9F7FF' : 'white'};
  border-top: 0.50px #E5E7EB solid;
  ${props => !props.isHighlighted && 'border-bottom: 0.50px #E5E7EB solid;'}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const TableCell = styled.div<{ isHighlighted?: boolean }>`
  width: 140px;
  height: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.isHighlighted ? '#835EEB' : '#575C64'};
  font-size: ${props => props.isHighlighted ? '20.26px' : '20px'};
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: ${props => props.isHighlighted ? '26.34px' : '26px'};
  word-wrap: break-word;
`;

const TableCheckCell = styled.div`
  width: 160px;
  height: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #835EEB;
  font-size: 26px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 29.9px;
  word-wrap: break-word;
`;

const FeatureComparisonTable = styled.div`
  width: 600px;
  left: 450px;
  top: 550px;
  position: absolute;
  background: white;
  outline: 0.50px #8D94A0 solid;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 20px auto;
    width: 100%;
    max-width: 600px;
  }
`;

const FeatureColumn = styled.div`
  flex: 1 1 0;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;

const FeatureTitle = styled.div`
  width: 77px;
  height: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8D94A0;
  font-size: 12px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 13.8px;
  word-wrap: break-word;
`;

const FeatureItem = styled.div`
  width: 230px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #575C64;
  font-size: 22px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 25.3px;
  word-wrap: break-word;
`;

const CompanyColumn = styled.div`
  width: 160px;
  padding: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CompanyTitle = styled.div`
  width: 53px;
  height: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8D94A0;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 15.6px;
  word-wrap: break-word;
`;

const CompanyCheckCell = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MathKingBadge = styled.div`
  width: 160px;
  padding: 30px 10px;
  left: 590px;
  top: 550px;
  position: absolute;
  background: #F9F7FF;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.10);
  border-radius: 10px;
  outline: 1px #835EEB solid;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 20px auto;
  }
`;

const MathKingTitle = styled.div`
  width: 112px;
  height: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #835EEB;
  font-size: 32px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 40px;
  word-wrap: break-word;
`;

const MathKingCheckCell = styled.div`
  width: 120px;
  height: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #835EEB;
  font-size: 40px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 46px;
  word-wrap: break-word;
`;

const ImageBox = styled.div`
  width: 400px;
  height: 400px;
  left: 240px;
  top: 600px;
  position: absolute;
  background: white;
  outline: 1px black solid;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 20px auto;
  }
`;

const ImagePlaceholder = styled.div`
  width: 160px;
  height: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  font-size: 28px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 42px;
  word-wrap: break-word;
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

  // 페이지 진입 시 카드 애니메이션 시작
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

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

      {/* 두 번째 섹션 - 기능 비교 */}
      <ComparisonSection>
        <HeaderSection>
          <HeaderTitle>
            편리한 문제은행에<br/>수학대왕만의 AI 기술을 더합니다
          </HeaderTitle>
          <HeaderSubtitle>
            기존 문제은행 기능에 수학대왕만의 기술을 더해,<br/>완벽한 1:1 맞춤형 학습 진행이 가능합니다.
          </HeaderSubtitle>
        </HeaderSection>

        <FeatureBadge>
          기존 문제은행 기능
        </FeatureBadge>

        <ComparisonTable>
          <TableHeader>
            <div style={{ width: 70, height: 20 }} />
            <TableHeaderCell>시험지 제작 및 평가</TableHeaderCell>
            <TableHeaderCell>문제지/교재 제작</TableHeaderCell>
            <TableHeaderCell>유사문제 추출</TableHeaderCell>
            <TableHeaderCell>학생별 오답 학습</TableHeaderCell>
            <TableHeaderCell>개인별 리포트 발행</TableHeaderCell>
          </TableHeader>
          
          <TableRow isHighlighted>
            <TableCell isHighlighted>수학대왕</TableCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
          </TableRow>
          
          <TableRow>
            <TableCell>타사</TableCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
            <TableCheckCell>O</TableCheckCell>
          </TableRow>
        </ComparisonTable>

        <FeatureComparisonTable>
          <FeatureColumn>
            <FeatureTitle> </FeatureTitle>
            <FeatureItem>실시간 자동 채점</FeatureItem>
            <FeatureItem>학생 필기 저장 및 연동</FeatureItem>
            <FeatureItem>AI 힌트 & 피드백</FeatureItem>
            <FeatureItem>AI 심층 실력 분석</FeatureItem>
            <FeatureItem>AI 반응형 맞춤문제 추천</FeatureItem>
            <FeatureItem>환급 장학금 시스템</FeatureItem>
          </FeatureColumn>
          
          <CompanyColumn>
            <CompanyTitle>타사</CompanyTitle>
            <CompanyCheckCell />
            <CompanyCheckCell />
            <CompanyCheckCell />
            <CompanyCheckCell />
            <CompanyCheckCell />
            <CompanyCheckCell />
          </CompanyColumn>
        </FeatureComparisonTable>

        <MathKingBadge>
          <MathKingTitle>수학대왕</MathKingTitle>
          <MathKingCheckCell>O</MathKingCheckCell>
          <MathKingCheckCell>O</MathKingCheckCell>
          <MathKingCheckCell>O</MathKingCheckCell>
          <MathKingCheckCell>O</MathKingCheckCell>
          <MathKingCheckCell>O</MathKingCheckCell>
          <MathKingCheckCell>O</MathKingCheckCell>
        </MathKingBadge>

        <ImageBox>
          <ImagePlaceholder>img</ImagePlaceholder>
        </ImageBox>
      </ComparisonSection>
    </PricingPageContainer>
  );
};

export default Pricing; 