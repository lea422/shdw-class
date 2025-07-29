import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PricingPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  overflow-x: hidden;
  @media (max-width: 1024px) {
    width: 100%;
    overflow-x: hidden;
  }
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
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
  @media (max-width: 600px) {
    width: 300px;
    max-width: 300px;
    padding: 24px;
  }
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
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const ModalPrice = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #835EEB;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const ModalDescription = styled.p`
  color: #575C64;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
  white-space: pre-line;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
    font-size: 13px;
  }
`;



const PricingContainer = styled.div`
  width: 1280px;
  height: 800px;
  position: relative;
  background: white;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
`;

// 첫 번째 섹션 - 요금 안내
const PricingSection = styled.div`
  width: 1280px;
  min-height: 100vh;
  padding: 60px 50px 150px 50px; /* 하단 패딩 크게 증가 */
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin: 0 auto;
  margin-top: 60px; /* 헤더 아래 여백 추가 */
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 100vh;
    padding: 60px 20px 120px 20px; /* 하단 패딩 증가 */
    gap: 60px;
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding: 48px 25px 100px 25px; /* 하단 패딩 증가 */
    gap: 40px;
    margin-top: 48px;
    box-sizing: border-box;
  }
`;

const PricingHeader = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`;

const PricingTitle = styled.div`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const PricingSubtitle = styled.div`
  color: #1E2231;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const PricingCardsContainer = styled.div`
  width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    gap: 24px;
    padding: 0 20px;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0 20px;
    gap: 20px;
    align-items: center;
  }
`;

const NewPricingCard = styled.div<{ cardType: 'free' | 'basic' | 'plus'; isVisible?: boolean }>`
  width: 360px;
  padding: 30px;
  background: ${props => 
    props.cardType === 'free' ? '#F3F4F6' : 
    props.cardType === 'basic' ? 'white' : 
    'black'
  };
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.10);
  border-radius: 20px;
  ${props => props.cardType === 'basic' ? 'outline: 2px #8F67E8 solid; outline-offset: -2px;' : ''}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(${props => props.isVisible ? '0' : '50px'});
  opacity: ${props => props.isVisible ? '1' : '0'};
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0px 20px 40px rgba(131, 94, 235, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }
`;

const CardHeaderNew = styled.div`
  width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const CardTitleRow = styled.div`
  width: 268px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const CardTitleText = styled.div<{ cardType: 'free' | 'basic' | 'plus' }>`
  color: ${props => props.cardType === 'plus' ? 'white' : '#33373B'};
  font-size: 27.33px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 41px;
  word-wrap: break-word;
`;

const CardBadge = styled.div<{ badgeType: 'basic' | 'plus' }>`
  width: ${props => props.badgeType === 'basic' ? '46.80px' : '82px'};
  height: ${props => props.badgeType === 'basic' ? '26px' : '24.30px'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => 
      props.badgeType === 'basic' ? '#835EEB' : 
      'linear-gradient(135deg, #FF6DEB 0%, #8E6EF1 50%, #5F9EFF 100%)'
    };
  }
`;

const CardSubtitleNew = styled.div<{ cardType: 'free' | 'basic' | 'plus' }>`
  color: #7A828D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
`;

const CardPriceRow = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const CardPriceText = styled.div<{ cardType: 'free' | 'basic' | 'plus' }>`
  color: ${props => 
    props.cardType === 'free' ? '#33373B' : 
    props.cardType === 'basic' ? '#835EEB' : 
    '#FF6DEB'
  };
  font-size: 32px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 48px;
  word-wrap: break-word;
`;

const CardPriceUnit = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  color: #7A828D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
`;

const CardFeaturesList = styled.div`
  width: 300px;
  height: 245px;
  position: relative;
`;

const CardFeatureItem = styled.div<{ top: number }>`
  width: 300px;
  position: absolute;
  left: 0px;
  top: ${props => props.top}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  min-height: 41px;
`;

const FeatureCheckIcon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    width: 14.45px;
    height: 9.98px;
    left: 4.82px;
    top: 7.22px;
    color: #835EEB;
    font-weight: bold;
    font-size: 12px;
  }
`;

const FeatureContent = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

const FeatureTitle = styled.div<{ cardType?: 'free' | 'basic' | 'plus'; isPrimary?: boolean }>`
  color: ${props => {
    if (props.cardType === 'plus' && props.isPrimary) return '#FF6DEB';
    if (props.cardType === 'plus') return '#D1D5DB';
    return '#7A828D';
  }};
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: ${props => (props.cardType === 'plus' && props.isPrimary) ? 700 : 500};
  line-height: 21px;
  word-wrap: break-word;
`;

const FeatureDescription = styled.div`
  color: ${props => props.color || '#9C7EEF'};
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 18px;
  word-wrap: break-word;
`;

const FeatureSpecialRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`;

const CardButton = styled.div`
  width: 100%;
  height: 50px;
  padding: 6.37px 8.49px;
  background: #835EEB;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #7756D6;
    transform: translateY(-2px);
  }
`;

const ButtonText = styled.div`
  color: white;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 22.50px;
  word-wrap: break-word;
  text-align: center;
`;

const ScrollArrow = styled.button`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: rgba(131, 94, 235, 0.8);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(131, 94, 235, 0.1);
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }
  
  &:active::before {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    color: #835EEB;
    transform: translateX(-50%) translateY(-3px);
    animation-play-state: paused;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  @media (max-width: 1024px) {
    bottom: 60px;
  }
  
  @media (max-width: 768px) {
    bottom: 80px;
    
    &::before {
      width: 36px;
      height: 36px;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

// 요금 계산기 섹션
const CalculatorSection = styled.div`
  width: 1280px;
  padding: 100px 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 1300px) {
    width: 100%;
    padding: 80px 20px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 60px 25px;
    flex-direction: column;
    gap: 40px;
  }
`;

const CalculatorContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    max-width: 400px;
  }
`;

const CalculatorContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CalculatorForm = styled.div`
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    gap: 30px;
  }
`;

const CalculatorHeader = styled.div`
  text-align: left;
  gap: 16px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CalculatorTitle = styled.h2`
  color: #1E2231;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StudentCountSelector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 16px 20px;
  background: #F8F9FA;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  color: #1E2231;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #D1D5DB;
    background: #F3F4F6;
  }
  
  &::after {
    content: '${props => props.isOpen ? '▲' : '▼'}';
    font-size: 14px;
    color: #6B7280;
    transition: transform 0.3s ease;
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #E5E7EB;
  border-top: none;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 10;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #1E2231;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  
  &:hover {
    background: #F9F7FF;
    color: #835EEB;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #F0F0F0;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Slider = styled.input<{ progress: number }>`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #835EEB 0%, #835EEB ${props => props.progress}%, #E5E7EB ${props => props.progress}%, #E5E7EB 100%);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #835EEB;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
    transition: all 0.2s ease;
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(131, 94, 235, 0.4);
  }
  
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #835EEB;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
  
  &::-moz-range-track {
    background: linear-gradient(to right, #835EEB 0%, #835EEB ${props => props.progress}%, #E5E7EB ${props => props.progress}%, #E5E7EB 100%);
    height: 8px;
    border-radius: 4px;
  }
`;

const PriceDisplay = styled.div`
  background: #835EEB;
  color: white;
  padding: 20px 30px;
  border-radius: 16px;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 25px rgba(131, 94, 235, 0.3);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #835EEB;
  }
`;

const StudentCountText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const PriceText = styled.div`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`;

const CalculatorDetails = styled.div`
  text-align: left;
  color: #575C64;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

const CalculatorButton = styled.button`
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #835EEB 0%, #6B4BC4 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(131, 94, 235, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(131, 94, 235, 0.4);
    background: linear-gradient(135deg, #9C7EEF 0%, #7756D6 100%);
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
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
    width: 100%;
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 24px;
    box-sizing: border-box;
    align-items: center;
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
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 16px;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-sizing: border-box;
    margin: 0 auto;
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
  
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 325px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 0;
    box-sizing: border-box;
    justify-content: center;
    align-self: center;
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
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 403px;
    text-align: center;
    height: auto;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 277px;
    min-width: 277px;
    max-width: 277px;
    text-align: center;
    height: auto;
    padding: 0;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`;

const TrialStepNumber = styled.div`
  position: absolute;
  left: 0px;
  top: -25px;
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
  top: 30px;
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

const TrialStepDescription = styled.div`
  position: absolute;
  left: 0px;
  top: 90px;
  color: #666;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 300;
  line-height: 24px;
  word-wrap: break-word;
  opacity: 0.8;
  
  @media (max-width: 1100px) {
    position: relative;
    left: auto;
    top: auto;
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 18px;
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
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
    height: 300px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 301px;
    max-width: 301px;
    height: 191px;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;

// 애니메이션을 위한 스타일 컴포넌트
const AnimatedTrialStepContainer = styled(TrialStepContainer)<{ isVisible: boolean }>`
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  transition: all 0.6s ease;
`;

// 세 번째 섹션 - 기능 비교
const ComparisonSection = styled.div`
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
    width: 100%;
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 30px;
    align-items: center;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding: 80px 25px 40px 25px;
    gap: 24px;
    box-sizing: border-box;
    align-items: center;
  }
`;

const ComparisonHeader = styled.div`
  width: 1150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  text-align: center;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 16px;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    gap: 12px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`;

const ComparisonTitle = styled.div`
  color: #0B1215;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 62.4px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 46px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const ComparisonSubtitle = styled.div`
  color: #575C64;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 36px;
  word-wrap: break-word;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ComparisonBadge = styled.div`
  width: auto;
  height: auto;
  background: transparent;
  border: 2px solid #835EEB;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  padding: 8px 16px;
  margin-bottom: 0;
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 6px 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`;

const ComparisonTable = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
  }
  @media (max-width: 768px) {
    width: 325px;
    min-width: 325px;
    max-width: 325px;
  }
`;

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;
  background: white;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const HeaderLabel = styled.div`
  width: 70px;
  height: 20px;
  @media (max-width: 768px) {
    width: 50px;
    height: 18px;
  }
`;

const HeaderFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const FeatureLabel = styled.div`
  width: 75px;
  text-align: center;
  color: #835EEB;
  font-size: 9px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 10.35px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 55px;
    font-size: 8px;
    line-height: 9px;
  }
`;

const TableRow = styled.div<{ isHighlighted?: boolean }>`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 0.5px solid #E5E7EB;
  background: ${props => props.isHighlighted ? '#F9F7FF' : 'white'};
  @media (max-width: 768px) {
    gap: 5px;
    height: 22px;
  }
`;

const RowLabel = styled.div<{ isHighlighted?: boolean }>`
  width: 70px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isHighlighted ? '#835EEB' : '#575C64'};
  font-size: ${props => props.isHighlighted ? '10.13px' : '10px'};
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: ${props => props.isHighlighted ? '13.17px' : '13px'};
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 50px;
    height: 18px;
    font-size: 9px;
    line-height: 11px;
  }
`;

const RowFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    gap: 3px;
  }
`;

const FeatureCheck = styled.div<{ isHighlighted?: boolean }>`
  width: 80px;
  height: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: ${props => props.isHighlighted ? '13px' : '12.67px'};
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: ${props => props.isHighlighted ? '14.95px' : '14.57px'};
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 55px;
    height: 12px;
    font-size: 11px;
    line-height: 12px;
  }
`;

const ComparisonFeatures = styled.div`
  width: 300px;
  background: white;
  outline: 0.5px solid #8D94A0;
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 325px;
    min-width: 325px;
    max-width: 325px;
  }
`;

const FeaturesList = styled.div`
  flex: 1;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeatureItem = styled.div`
  width: 115px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #575C64;
  font-size: 11px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 12.65px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
    font-size: 10px;
    line-height: 11px;
  }
`;

const FeaturesHeader = styled.div`
  width: 80px;
  height: 270px;
  padding: 5px;
  background: white;
  @media (max-width: 768px) {
    width: 60px;
    height: 200px;
  }
`;

const MathKingColumn = styled.div`
  width: 80px;
  padding: 15px 5px;
  background: #F9F7FF;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: 1px solid #835EEB;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    width: 60px;
    padding: 10px 3px;
  }
`;

const MathKingLabel = styled.div`
  width: 56px;
  height: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
    font-size: 12px;
    line-height: 15px;
  }
`;

const MathKingChecks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const MathKingCheck = styled.div`
  width: 60px;
  height: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #835EEB;
  font-size: 20px;
  font-family: 'SUIT Variable', sans-serif;
  font-weight: 800;
  line-height: 23px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 45px;
    height: 25px;
    font-size: 16px;
    line-height: 18px;
  }
`;

// 반응형 SVG 컨테이너 스타일
const SVGComparisonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 0 40px 0;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 10px 0 30px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 0 20px 0;
  }
`;

const SVGContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 1000px;

  @media (max-width: 1024px) {
    width: 100%;
    gap: 80px;
  }

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 Swiper 사용 */
  }
`;

const TopDataContainer = styled.div`
  display: flex;
  width: 100%;
  
  @media (max-width: 768px) {
    display: none; /* 모바일에서는 Swiper 사용 */
  }
  
  @media (min-width: 769px) {
    position: relative;
    background: white;
    border: 1px solid #E5E7EB;
    border-radius: 4px;
  }
`;

const TopDataFixedColumn = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 80px;
    min-width: 80px;
    background: #F9F7FF;
    border-right: 1px solid #E5E7EB;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    font-size: 12px;
    font-weight: 700;
    color: #835EEB;
    text-align: center;
    line-height: 1.2;
    height: 135px; /* 전체 컨테이너와 동일한 높이 */
  }
`;

const TopDataFixedRow = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E5E7EB;
    font-size: 11px;
    font-weight: 600;
    
    &:first-child {
      height: 45px;
      background: white;
      color: transparent;
      font-weight: 500;
    }
    
    &:nth-child(2) {
      height: 45px;
      background: #F9F7FF;
      color: #835EEB;
      font-weight: 700;
    }
    
    &:nth-child(3) {
      height: 45px;
      background: #F9F7FF;
      color: #835EEB;
      font-weight: 700;
      border-bottom: none;
    }
  }
`;

const TopDataScrollContainer = styled.div`
  @media (max-width: 768px) {
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    height: 135px; /* 3행에 맞는 고정 높이 설정 */
    
    /* 스크롤바 숨기기 */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
`;

const TopDataImage = styled.img`
  width: 1000px;
  height: auto;
  max-width: 100%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 800px; /* 스크롤이 가능하도록 충분히 큰 너비 */
    min-width: 800px;
    max-width: none;
    align-self: flex-start;
    margin-left: 0;
    height: 135px; /* 3행에 맞는 고정 높이 */
    object-fit: cover; /* 이미지 비율 유지하면서 채우기 */
    object-position: left top; /* 왼쪽 상단부터 보이도록 */
  }
`;

const TopDataFixedOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 100%;
    background: white;
    z-index: 2;
    pointer-events: none;
    border-right: 1px solid #E5E7EB;
  }
`;

const TopDataFixedImage = styled.img`
  width: 1000px;
  height: auto;
  max-width: 100%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 80px;
    min-width: 80px;
    max-width: none;
    align-self: flex-start;
  }
`;

const TopDataScrollImage = styled.img`
  width: 1000px;
  height: auto;
  max-width: 100%;
  align-self: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 720px;
    min-width: 720px;
    max-width: none;
    align-self: flex-start;
    margin-left: -80px;
  }
`;

const BottomDataContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const ClassAlgorithmImage = styled.img`
  width: 400px;
  height: auto;
  max-width: 100%;
  margin-left: 30px;
  margin-top: -30px;
  opacity: 0.8;

  @media (max-width: 1024px) {
    width: 45%;
    max-width: 400px;
    margin-left: 20px;
    margin-top: -20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 325px;
    margin-left: 0;
    margin-top: 0;
  }
`;

const BottomDataImage = styled.img`
  width: 500px;
  height: auto;
  max-width: 100%;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 55%;
    max-width: 500px;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 325px;
    margin-left: 0;
  }
  `;

// Swiper 관련 styled components
const SwiperContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    
    .swiper-pagination {
      bottom: 8px !important;
    }
    
    .swiper-pagination-bullet {
      background: #835EEB !important;
      opacity: 0.3;
    }
    
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
    }
  }
`;

const SwiperCard = styled.div`
  padding: 16px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;
`;

const SwiperCardTitle = styled.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
  color: #835EEB;
  text-align: center;
`;

const SwiperCardList = styled.ul`
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SwiperCardItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #F3F4F6;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SwiperCardLabel = styled.span`
  color: #374151;
`;

const SwiperCardValue = styled.span`
  font-weight: 500;
  color: #835EEB;
`;

// 모바일 테이블 데이터
const mobileTableData = [
  {
    title: "시험지 제작 및 평가",
    items: [
      { label: "맞춤 문제 추천", value: "✓" },
      { label: "오답 클리닉", value: "자동·무한" },
      { label: "AI 채점", value: "✓" },
      { label: "학습 분석", value: "✓" }
    ]
  },
  {
    title: "문제지/교재 제작",
    items: [
      { label: "문제은행", value: "✓" },
      { label: "교재 생성", value: "✓" },
      { label: "PDF 출력", value: "✓" },
      { label: "커스터마이징", value: "✓" }
    ]
  },
  {
    title: "유사문제 추천",
    items: [
      { label: "AI 추천", value: "✓" },
      { label: "난이도 조절", value: "✓" },
      { label: "유형별 분류", value: "✓" },
      { label: "실시간 생성", value: "✓" }
    ]
  },
  {
    title: "학습 관리 시스템",
    items: [
      { label: "진도 관리", value: "✓" },
      { label: "성적 분석", value: "✓" },
      { label: "학습 랭킹", value: "지원" },
      { label: "리포트 생성", value: "✓" }
    ]
  }
];

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
    fullDescription: '수학대왕의 기본 기능을 체험할 수 있는 플랜입니다.\n개인 학습자나 소규모 학원에 적합합니다.'
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
    fullDescription: '수학대왕의 모든 기능을 3개월간 체험할 수 있는 특별 플랜입니다.\nAI 기술을 활용한 완벽한 1:1 맞춤 학습을 경험해보세요.'
  }
};

interface PricingProps {
  isModalOpen?: boolean;
  setIsModalOpen?: (isOpen: boolean) => void;
}

const Pricing: React.FC<PricingProps> = ({ isModalOpen = false, setIsModalOpen }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false, false, false]);
  
  // 계산기 관련 상태
  const [studentCount, setStudentCount] = useState(30);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 학생 수 옵션
  const studentOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  
  // 요금 계산 함수 (학생 수에 따른 월 요금)
  const calculatePrice = (count: number) => {
    const basePrice = 99000; // 30명 기준
    const pricePerStudent = 3300; // 학생 1명당 추가 요금
    const basePriceFor30 = basePrice;
    
    if (count <= 30) {
      // 30명 이하는 기본 요금에서 비례 계산
      return Math.round((basePriceFor30 * count) / 30);
    } else {
      // 30명 초과는 기본 요금 + 추가 요금
      const extraStudents = count - 30;
      return basePriceFor30 + (extraStudents * pricePerStudent);
    }
  };
  
  // 드롭다운 핸들러
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleStudentSelect = (count: number) => {
    setStudentCount(count);
    setIsDropdownOpen(false);
  };
  
  // 슬라이더 핸들러
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentCount(parseInt(e.target.value));
  };
  
  // 계산기 버튼 핸들러
  const handleCalculatorSubmit = () => {
    // 상담 신청으로 연결하거나 모달 열기
    alert(`${studentCount}명 기준 월 ${calculatePrice(studentCount).toLocaleString()}원으로 상담 신청이 접수되었습니다.`);
  };

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 페이지 진입 시 카드 애니메이션 시작
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Swiper 초기화
  useEffect(() => {
    // Swiper가 로드된 후 초기화
    if ((window as any).Swiper) {
      new (window as any).Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 12,
        pagination: { 
          el: '.swiper-pagination', 
          clickable: true 
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      });
    }
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
    setIsModalOpen?.(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen?.(false);
    setSelectedPlan(null);
  };

  const scrollToTrialSection = () => {
    const trialSection = document.querySelector('[data-trial-section]');
    if (trialSection) {
      trialSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
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
            단순한 문제은행을 넘어,<br/>AI 맞춤형 수학 학습 시스템을<br/>학원에 체계적으로 도입해 보세요
          </PricingSubtitle>
        </PricingHeader>
        
        <PricingCardsContainer>
          {/* 무료 체험 카드 */}
          <NewPricingCard 
            cardType="free"
            isVisible={isCardVisible} 
            onClick={() => handleCardClick('basic')}
            style={{ transitionDelay: '0ms' }}
          >
            <CardHeaderNew>
              <CardTitleRow>
                <CardTitleText cardType="free">수학대왕</CardTitleText>
              </CardTitleRow>
              <CardSubtitleNew cardType="free">최대 ~명까지 무료로 사용해보세요</CardSubtitleNew>
              <CardPriceRow>
                <CardPriceText cardType="free">최대 0명</CardPriceText>
              </CardPriceRow>
            </CardHeaderNew>
            
            <CardFeaturesList>
              <CardFeatureItem top={0}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>매달 장학금</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={51}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>무제한 문제 풀기</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={102}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>AI 필기 채점</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={153}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>유사문제</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
            </CardFeaturesList>
            
            <CardButton>
              <ButtonText>지금 바로 시작하기</ButtonText>
            </CardButton>
          </NewPricingCard>
          
          {/* 기본 플랜 카드 */}
          <NewPricingCard 
            cardType="basic"
            isVisible={isCardVisible} 
            onClick={() => handleCardClick('premium')}
            style={{ transitionDelay: '200ms' }}
          >
            <CardHeaderNew>
              <CardTitleRow>
                <CardTitleText cardType="basic">수학대왕</CardTitleText>
                <CardBadge badgeType="basic" />
              </CardTitleRow>
              <CardSubtitleNew cardType="basic">기본 기능</CardSubtitleNew>
              <CardPriceRow>
                <CardPriceText cardType="basic">월 ~6,900</CardPriceText>
                <CardPriceUnit>/인당</CardPriceUnit>
              </CardPriceRow>
            </CardHeaderNew>
            
            <CardFeaturesList>
              <CardFeatureItem top={0}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>매달 장학금</FeatureTitle>
                  <FeatureDescription>30,000원</FeatureDescription>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={51}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>무제한 문제 풀기</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={102}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>AI 필기 채점</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={153}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle>유사문제</FeatureTitle>
                </FeatureContent>
              </CardFeatureItem>
            </CardFeaturesList>
            
            <CardButton>
              <ButtonText>지금 바로 시작하기</ButtonText>
            </CardButton>
          </NewPricingCard>
          
          {/* 플러스 플랜 카드 */}
          <NewPricingCard 
            cardType="plus"
            isVisible={isCardVisible} 
            onClick={() => handleCardClick('premium')}
            style={{ transitionDelay: '400ms' }}
          >
            <CardHeaderNew>
              <CardTitleRow>
                <CardTitleText cardType="plus">수학대왕</CardTitleText>
                <CardBadge badgeType="plus" />
              </CardTitleRow>
              <CardSubtitleNew cardType="plus">플러스 기능</CardSubtitleNew>
              <CardPriceRow>
                <CardPriceText cardType="plus">월 ~12,900</CardPriceText>
                <CardPriceUnit>/인당</CardPriceUnit>
              </CardPriceRow>
            </CardHeaderNew>
            
            <CardFeaturesList>
              <CardFeatureItem top={0}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureSpecialRow>
                    <FeatureTitle cardType="plus">모든</FeatureTitle>
                    <CardBadge badgeType="basic" />
                    <FeatureTitle cardType="plus">기능</FeatureTitle>
                  </FeatureSpecialRow>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={51}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle cardType="plus" isPrimary>AI 학습 관리</FeatureTitle>
                  <FeatureDescription color="#7A828D">자동 숙제 및 클리닉 (오답 노트)</FeatureDescription>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={102}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle cardType="plus" isPrimary>AI 리포트</FeatureTitle>
                  <FeatureDescription color="#7A828D">매주 학습 데이터 기반 리포트</FeatureDescription>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={153}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle cardType="plus" isPrimary>AI 실시간 채팅</FeatureTitle>
                  <FeatureDescription color="#7A828D">언제 어디서나 AI에게 질문</FeatureDescription>
                </FeatureContent>
              </CardFeatureItem>
              <CardFeatureItem top={204}>
                <FeatureCheckIcon />
                <FeatureContent>
                  <FeatureTitle cardType="plus" isPrimary>학부모 관리 서비스</FeatureTitle>
                  <FeatureDescription color="#7A828D">수학대왕 클래스 계정 제공</FeatureDescription>
                </FeatureContent>
              </CardFeatureItem>
            </CardFeaturesList>
            
            <CardButton>
              <ButtonText>지금 바로 시작하기</ButtonText>
            </CardButton>
          </NewPricingCard>
        </PricingCardsContainer>
        <ScrollArrow onClick={scrollToTrialSection} aria-label="다음 섹션으로 스크롤">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ScrollArrow>
      </PricingSection>

      {/* 요금 계산기 섹션 */}
      <CalculatorSection>
        <CalculatorContainer>
          <CalculatorContent>
            <CalculatorHeader>
              <CalculatorTitle>내 예상 수업료를<br/>확인해 보세요</CalculatorTitle>
            </CalculatorHeader>
            <CalculatorDetails>
              Basic 플랜 기준, 3개월 무료체험 포함<br/>
              설치비 면제, 홍보자료 제공
            </CalculatorDetails>
          </CalculatorContent>
          
          <CalculatorForm>
            <StudentCountSelector>
              <DropdownContainer ref={dropdownRef}>
                <DropdownButton 
                  isOpen={isDropdownOpen} 
                  onClick={handleDropdownToggle}
                >
                  {studentCount}명
                </DropdownButton>
                <DropdownMenu isOpen={isDropdownOpen}>
                  {studentOptions.map((option) => (
                    <DropdownItem
                      key={option}
                      onClick={() => handleStudentSelect(option)}
                    >
                      {option}명
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </DropdownContainer>
            </StudentCountSelector>
            
            <SliderContainer>
              <PriceDisplay>
                <StudentCountText>{studentCount}명</StudentCountText>
                <PriceText>월 {calculatePrice(studentCount).toLocaleString()}원</PriceText>
              </PriceDisplay>
              
              <SliderWrapper>
                <Slider
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={studentCount}
                  progress={((studentCount - 10) / (100 - 10)) * 100}
                  onChange={handleSliderChange}
                />
              </SliderWrapper>
            </SliderContainer>
            
            <CalculatorButton onClick={handleCalculatorSubmit}>
              내 수업료 확인하기
            </CalculatorButton>
          </CalculatorForm>
        </CalculatorContainer>
      </CalculatorSection>

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
            <TrialStepDescription>
              체험 신청 완료 후<br/>즉시 선생님과 학생용 계정 정보가 문자로 발송됩니다.<br/>
              별도의 복잡한 가입 절차 없이 바로 체험을 시작할 수 있어요.
            </TrialStepDescription>
          </TrialStepContent>
          <TrialStepImage>
            <img src="/무료체험 01.png" alt="무료체험 01"
              style={window.innerWidth <= 600
                ? { width: '100%', height: 'auto', objectFit: 'contain', margin: 0, display: 'block' }
                : { width: '100%', height: '100%', objectFit: 'cover', margin: 0, display: 'block' }
              }
            />
          </TrialStepImage>
        </AnimatedTrialStepContainer>
          
        <AnimatedTrialStepContainer isVisible={visibleSteps[1]}>
          <TrialStepContent>
            <TrialStepNumber>02</TrialStepNumber>
            <TrialStepText>선생님용 계정에 로그인</TrialStepText>
            <TrialStepDescription>
              받으신 선생님용 계정 정보로<br/>웹사이트에 접속하여 로그인하세요.<br/>
              학생 관리와 학습 현황을 한눈에 확인할 수 있는<br/>대시보드가 제공됩니다.
            </TrialStepDescription>
          </TrialStepContent>
          <TrialStepImage>
            <img src="/무료체험 02.png" alt="무료체험 02"
              style={window.innerWidth <= 600
                ? { width: '100%', height: 'auto', objectFit: 'contain', margin: 0, display: 'block' }
                : { width: '100%', height: '100%', objectFit: 'cover', margin: 0, display: 'block' }
              }
            />
          </TrialStepImage>
        </AnimatedTrialStepContainer>
          
        <AnimatedTrialStepContainer isVisible={visibleSteps[2]}>
          <TrialStepContent>
            <TrialStepNumber>03</TrialStepNumber>
            <TrialStepText>학생용 앱에 로그인</TrialStepText>
            <TrialStepDescription>
              학생들은 모바일 앱을 다운로드하여<br/>계정 정보로 로그인합니다.<br/>
              직관적인 인터페이스로 누구나 쉽게 사용할 수 있어요.
            </TrialStepDescription>
          </TrialStepContent>
          <TrialStepImage>
            <img src="/무료체험 03.png" alt="무료체험 03"
              style={window.innerWidth <= 600
                ? { width: '100%', height: 'auto', objectFit: 'contain', margin: 0, display: 'block' }
                : { width: '100%', height: '100%', objectFit: 'cover', margin: 0, display: 'block' }
              }
            />
          </TrialStepImage>
        </AnimatedTrialStepContainer>

        <AnimatedTrialStepContainer isVisible={visibleSteps[3]}>
          <TrialStepContent>
            <TrialStepNumber>04</TrialStepNumber>
            <TrialStepText>필요한 경우<br/>학생을 추가 하실 수도 있어요</TrialStepText>
            <TrialStepDescription>
              선생님 대시보드에서<br/>간편하게 새로운 학생을 추가하고 관리할 수 있습니다.<br/>
              체험 기간 중에도 학원 상황에 맞춰 자유롭게 조정하세요.
            </TrialStepDescription>
          </TrialStepContent>
          <TrialStepImage>
            <img src="/무료체험 04.png" alt="무료체험 04"
              style={window.innerWidth <= 600
                ? { width: '100%', height: 'auto', objectFit: 'contain', margin: 0, display: 'block' }
                : { width: '100%', height: '100%', objectFit: 'cover', margin: 0, display: 'block' }
              }
            />
          </TrialStepImage>
        </AnimatedTrialStepContainer>

        <AnimatedTrialStepContainer isVisible={visibleSteps[4]}>
          <TrialStepContent>
            <TrialStepNumber>05</TrialStepNumber>
            <TrialStepText>학습지를<br/>배부하고,</TrialStepText>
            <TrialStepDescription>
              원하는 단원과 난이도를 선택하여<br/>학습지를 생성하고 배부하세요.<br/>
              학생들은 앱에서 바로 문제를 풀고<br/>실시간으로 채점받을 수 있습니다.
            </TrialStepDescription>
          </TrialStepContent>
          <TrialStepImage>
            <img src="/무료체험 05.png" alt="무료체험 05"
              style={window.innerWidth <= 600
                ? { width: '100%', height: 'auto', objectFit: 'contain', margin: 0, display: 'block' }
                : { width: '100%', height: '100%', objectFit: 'cover', margin: 0, display: 'block' }
              }
            />
          </TrialStepImage>
        </AnimatedTrialStepContainer>

        <AnimatedTrialStepContainer isVisible={visibleSteps[5]}>
          <TrialStepContent>
            <TrialStepNumber>06</TrialStepNumber>
            <TrialStepText>풀이 결과 대시보드를<br/>확인 하세요!</TrialStepText>
            <TrialStepDescription>
              학생들의 학습 진도와 성취도를<br/>실시간으로 확인할 수 있습니다.<br/>
              취약 단원 분석과 개별 학습 관리로<br/>효과적인 지도가 가능해요.
            </TrialStepDescription>
          </TrialStepContent>
          <TrialStepImage>
            <img src="/무료체험 06.png" alt="무료체험 06"
              style={window.innerWidth <= 600
                ? { width: '100%', height: 'auto', objectFit: 'contain', margin: 0, display: 'block' }
                : { width: '100%', height: '100%', objectFit: 'cover', margin: 0, display: 'block' }
              }
            />
          </TrialStepImage>
        </AnimatedTrialStepContainer>
      </TrialSection>

             {/* 세 번째 섹션 - 기능 비교 */}
       <ComparisonSection data-comparison-section>
         <ComparisonHeader>
           <ComparisonTitle>
             편리한 문제은행에<br/>수학대왕만의 AI 기술을 더합니다
           </ComparisonTitle>
           <ComparisonSubtitle>
             기존 문제은행 기능에 수학대왕만의 기술을 더해,<br/>완벽한 1:1 맞춤형 학습 진행이 가능합니다.
           </ComparisonSubtitle>
         </ComparisonHeader>

         <ComparisonBadge>
           기존 문제은행 기능
         </ComparisonBadge>

         {/* SVG 비교표 컨테이너 */}
         <SVGComparisonContainer>
           {/* 모바일용 Swiper */}
           <SwiperContainer>
             <div className="swiper mySwiper">
               <div className="swiper-wrapper">
                 {mobileTableData.map((card, index) => (
                   <div key={index} className="swiper-slide">
                     <SwiperCard>
                       <SwiperCardTitle>{card.title}</SwiperCardTitle>
                       <SwiperCardList>
                         {card.items.map((item, itemIndex) => (
                           <SwiperCardItem key={itemIndex}>
                             <SwiperCardLabel>{item.label}</SwiperCardLabel>
                             <SwiperCardValue>{item.value}</SwiperCardValue>
                           </SwiperCardItem>
                         ))}
                       </SwiperCardList>
                     </SwiperCard>
                   </div>
                 ))}
               </div>
               <div className="swiper-pagination"></div>
             </div>
             {/* 모바일용 Class Algorithm 이미지 */}
             <img 
               src="/class algorithm.svg" 
               alt="Class Algorithm" 
               style={{
                 width: '100%',
                 maxWidth: '325px',
                 height: 'auto',
                 marginTop: '40px',
                 opacity: 0.8
               }}
             />
           </SwiperContainer>

           {/* 전체 SVG 영역 (데스크탑용) */}
           <SVGContainer>
             {/* 상단 데이터 SVG */}
             <TopDataContainer>
                       <TopDataFixedColumn>
          <TopDataFixedRow></TopDataFixedRow>
          <TopDataFixedRow>수학대왕</TopDataFixedRow>
          <TopDataFixedRow>타사</TopDataFixedRow>
        </TopDataFixedColumn>
               <TopDataScrollContainer>
                 <TopDataImage 
                   src="/상단 데이터.svg" 
                   alt="기능 비교표 상단" 
                 />
               </TopDataScrollContainer>
             </TopDataContainer>
             
             {/* 하단 데이터 영역 */}
             <BottomDataContainer>
               {/* Class Algorithm SVG - 상단 데이터 왼쪽 끝과 정렬 */}
               <ClassAlgorithmImage 
                 src="/class algorithm.svg" 
                 alt="Class Algorithm" 
               />
               
               {/* 하단 데이터 SVG - 상단 데이터 오른쪽 끝에 맞춤 */}
               <BottomDataImage 
                 src="/하단 데이터.svg" 
                 alt="기능 비교표 하단" 
               />
             </BottomDataContainer>
           </SVGContainer>
         </SVGComparisonContainer>
       </ComparisonSection>
    </PricingPageContainer>
  );
};

export default Pricing; 