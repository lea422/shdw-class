import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.div`
  padding: 60px 50px;
  min-height: calc(100vh - 60px - 200px);
  display: flex;
  flex-direction: column;
`;

const PricingContent = styled.div`
  text-align: center;
  h1 {
    color: #835EEB;
    font-size: 48px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    margin-bottom: 24px;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 48px;
`;

const PricingCard = styled.div`
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #CDBEF7;
  background: white;
  h2 {
    color: #835EEB;
    font-size: 24px;
    margin-bottom: 16px;
  }
  .price {
    font-size: 36px;
    font-weight: 700;
    color: #33373B;
    margin-bottom: 24px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 12px 0;
      color: #33373B;
    }
  }
`;

const Pricing = () => {
  return (
    <PricingContainer>
      <PricingContent>
        <h1>요금제 안내</h1>
        <PricingGrid>
          <PricingCard>
            <h2>기본 플랜</h2>
            <div className="price">50,000원/월</div>
            <ul>
              <li>기본 수학 강의 제공</li>
              <li>주 1회 질문 가능</li>
              <li>기초 문제 풀이</li>
            </ul>
          </PricingCard>
          <PricingCard>
            <h2>스탠다드 플랜</h2>
            <div className="price">100,000원/월</div>
            <ul>
              <li>모든 수학 강의 제공</li>
              <li>무제한 질문 가능</li>
              <li>중급 문제 풀이</li>
            </ul>
          </PricingCard>
          <PricingCard>
            <h2>프리미엄 플랜</h2>
            <div className="price">150,000원/월</div>
            <ul>
              <li>모든 강의 무제한 제공</li>
              <li>1:1 개인 지도</li>
              <li>고급 문제 풀이</li>
            </ul>
          </PricingCard>
        </PricingGrid>
      </PricingContent>
    </PricingContainer>
  );
};

export default Pricing; 