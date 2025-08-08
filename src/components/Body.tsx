import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const highlightAnimation = keyframes`
  0% {
    background-size: 0% 50%;
  }
  100% {
    background-size: 100% 50%;
  }
`;

const arrowPulse = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 1;
  }
`;

const arrowGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(131, 94, 235, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(131, 94, 235, 0.6));
  }
`;

const arrowBreathe = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

const textSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const textSlideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
`;

const textFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const titleSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const quoteSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const nameSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    scroll-snap-align: none;
    padding-bottom: 20px;
  }
`;

/* 태블릿용 통합 섹션 컨테이너 */
const IntegratedSection = styled.div`
  width: 100%;
  max-width: 1280px;
  display: none; /* 기본적으로 숨김 */
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: flex; /* 태블릿에서만 표시 */
    padding: 80px 20px;
    gap: 60px;
  }
  
  @media (max-width: 600px) {
    display: none; /* 모바일에서는 기존 레이아웃 사용 */
  }
`;

/* 태블릿용 헤더 */
const TabletHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
`;

/* 태블릿용 카드 그리드 */
const TabletCardGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
`;

const HeaderSection = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 160px 0 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  box-sizing: border-box;
  scroll-snap-align: start;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 통합 레이아웃 사용 */
  }
  
  @media (max-width: 600px) {
    display: flex; /* 모바일에서는 표시 */
    padding: 100px 0 20px;
    gap: 12px;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 4px;
  }
`;

const TitleHighlight = styled.span`
  color: #835EEB;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

const TitleText = styled.span`
  color: black;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 1.2;
  }
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
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.4;
    margin-top: 6px;
  }
`;

const SectionTitle = styled.div`
  width: 100%;
  padding: 120px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  scroll-snap-align: start;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 IntegratedSection의 TabletHeader 사용 */
  }
  
  @media (max-width: 600px) {
    padding: 80px 0 20px;
  }
`;

const SectionTitleText = styled.div`
  width: 100%;
  max-width: 1280px;
  text-align: center;
  color: #835EEB;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const FeatureGrid = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  box-sizing: border-box;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 통합 레이아웃 사용 */
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
    padding: 50px 20px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
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
  
  @media (max-width: 600px) {
    width: 85%; /* 가로폭 15% 축소 */
    border-radius: 16px;
    margin: 0 auto; /* 중앙 정렬 */
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
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
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
  box-sizing: border-box;
  
  /* 태블릿에서 카드 크기 조정 */
  @media (max-width: 1366px) and (min-width: 601px) {
    flex: none !important;
    max-width: 80%;
    width: 600px;
    gap: 24px;
    margin: 0 auto;
  }
  
  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
    gap: 12px;
    border-radius: 12px;
  }

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
  font-weight: 300;
  line-height: 34.80px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
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
  
  @media (max-width: 600px) {
    /* 모바일에서 순서 변경: 카테고리-텍스트-이미지 */
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    /* 카테고리는 그대로 첫 번째 */
    > div:first-child {
      order: 1;
    }
    
    /* 이미지는 마지막 */
    > div:nth-child(2) {
      order: 3;
    }
    
    /* 텍스트는 중간 */
    > div:last-child {
      order: 2;
    }
  }
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
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 90vw;
    height: 220px;
    gap: 10px;
    border-radius: 10px;
    padding: 10px 4px;
  }
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
  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
  }
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
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
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
  @media (max-width: 600px) {
    width: 90vw;
    font-size: 14px;
    line-height: 20px;
  }
`;

const SyncSection = styled.div`
  overflow: hidden;
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
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
  
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
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
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
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
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const DemoSection = styled.div`
  align-self: stretch;
  background: #9C7EEF;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 890px;
  padding: 60px 0;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    min-height: 800px;
    padding: 40px 0;
  }
`;

const DemoHeader = styled.div`
  align-self: stretch;
  padding: 50px 64px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 24px 8px 12px;
    gap: 12px;
  }
`;

const DemoTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 40px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
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
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 20px;
  }
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  /* 리플 효과를 위한 가상 요소 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(131, 94, 235, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  span {
    color: #835EEB;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 29px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0px 8px 25px rgba(131, 94, 235, 0.3), 0px 0px 20px rgba(131, 94, 235, 0.1);
    background: linear-gradient(135deg, #f8f7ff 0%, #efeeff 100%);
    
    span {
      color: #6b46c1;
    }
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    transition: all 0.1s ease;
    box-shadow: 0px 4px 12px rgba(131, 94, 235, 0.4);
  }
  
  /* 포커스 접근성 */
  &:focus {
    outline: 3px solid rgba(131, 94, 235, 0.3);
    outline-offset: 2px;
  }
`;



const DemoContent = styled.div`
  align-self: stretch;
  padding: 30px 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 4px;
  }
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const slideLeftMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const cardFlipMobile = keyframes`
  0% {
    transform: translateX(0) rotateY(0deg);
  }
  20% {
    transform: translateX(-20%) rotateY(3deg);
  }
  40% {
    transform: translateX(-40%) rotateY(0deg);
  }
  60% {
    transform: translateX(-60%) rotateY(-3deg);
  }
  80% {
    transform: translateX(-80%) rotateY(0deg);
  }
  100% {
    transform: translateX(-100%) rotateY(0deg);
  }
`;

const FeatureBoxFlow = styled.div`
  display: flex;
  gap: 40px;
  animation: ${slideLeft} 25s linear infinite;
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 8px;
    animation: ${cardFlipMobile} 20s ease-in-out infinite;
    animation-fill-mode: both;
    perspective: 1000px;
  }
`;

const FeatureBoxSlide = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  @media (max-width: 600px) {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
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
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08));
    border-radius: 24px;
  }
  
    @media (max-width: 900px) {
    max-width: 320px;
    border-radius: 20px;
    
    &::after {
      border-radius: 20px;
    }
  }
  
  @media (max-width: 600px) {
    max-width: 280px;
    border-radius: 16px;
    
    &::after {
      border-radius: 16px;
    }
  }
`;

const StatsSection = styled.div`
  align-self: stretch;
  padding: 20px 0 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 12px 0 24px;
  }
`;

const StatBox = styled.div`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  height: fit-content;
  
  span {
    color: white;
    font-size: 48px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
`;

const StatText = styled.div`
  color: white;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.2;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 1.2;
  }
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
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 24px 0;
    gap: 12px;
  }
`;

const TabTitle = styled.h2`
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.40px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
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
  box-sizing: border-box;
  @media (max-width: 600px) {
    gap: 8px;
    margin: 24px 0 12px 0;
  }
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 12px 32px;
  border-radius: 24px;
  border: none;
  background: ${({ $active }) => ($active ? '#835EEB' : '#E5D8FB')};
  color: ${({ $active }) => ($active ? 'white' : '#835EEB')};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
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
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 16px 12px 24px 12px;
    border-radius: 12px;
  }
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
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 15px;
    padding: 6px 20px;
    margin-bottom: 10px;
  }
`;

const SlideDesc = styled.div`
  color: #6B5B8C;
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const SlideBox = styled.div`
  width: 100%;
  height: 320px;
  background: white;
  border-radius: 18px;
  border: 2px solid #BFA8F6;
  box-sizing: border-box;
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
  box-sizing: border-box;
`;

const ArrowLeft = styled(ArrowButton)`
  left: -48px;
  @media (max-width: 600px) {
    left: -24px;
  }
`;
const ArrowRight = styled(ArrowButton)`
  right: -48px;
  @media (max-width: 600px) {
    right: -24px;
  }
`;

interface FeatureProps {
  title: string;
  description: string[];
  index: number;
  imageSrc?: string;
  category?: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, index, imageSrc, category }) => {
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
      {category && (
        <FeatureCategory>
          <FeatureCategoryText>
            {category}
          </FeatureCategoryText>
        </FeatureCategory>
      )}
      <ImagePlaceholder>
        {imageSrc && (
          <img 
            src={imageSrc}
            alt={title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              borderRadius: '18px' 
            }}
          />
        )}
      </ImagePlaceholder>
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

const Body = React.forwardRef<HTMLDivElement>((props, ref) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [demoCount, setDemoCount] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [textVisible, setTextVisible] = useState(true);
  const [textAnimationState, setTextAnimationState] = useState<'visible' | 'fade-out' | 'fade-in'>('visible');
  const [zoomedBoxes, setZoomedBoxes] = useState<Set<number>>(new Set());
  const [visibleTexts, setVisibleTexts] = useState<Set<number>>(new Set());
  const featureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentDemoSlide, setCurrentDemoSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDemoMobile, setIsDemoMobile] = useState(false); // 데모 섹션 전용 모바일 상태
  const [isWebAppMobile, setIsWebAppMobile] = useState(false); // 웹앱 연동 섹션 전용 모바일 상태
  
  // 웹앱 연동 칩 애니메이션 상태
  const [teacherChipsVisible, setTeacherChipsVisible] = useState([false, false, false, false]);
  const [studentChipsVisible, setStudentChipsVisible] = useState([false, false, false, false]);
  
  // 웹앱 연동 목업 애니메이션 상태 (태블릿, 왼쪽아이폰, 가운데아이폰, 모니터)
  const [mockupsVisible, setMockupsVisible] = useState([false, false, false, false]);
  // 실시간 동기화 텍스트 애니메이션 상태
  const [syncTextVisible, setSyncTextVisible] = useState(false);
  // 화살표 애니메이션 상태
  const [arrowVisible, setArrowVisible] = useState(false);
  const webAppSectionRef = useRef<HTMLDivElement>(null);

  // 모바일 핵심기능 박스들을 위한 ref 배열
  const mobileFeatureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);


  // 테스티모니얼 데이터
  const testimonials = [
    {
      title: { highlight: "체계적인 관리로", normal: "성과 극대화" },
      quote: "학생들의 학습 현황을 한눈에 파악하고<br/>효과적으로 지도할 수 있어요",
      name: "중계동 초중고 수학학원<br/>최수연 원장 선생님",
      videoUrl: "https://www.youtube.com/watch?v=_g9OwAA8V5g",
      thumbnailUrl: "https://img.youtube.com/vi/_g9OwAA8V5g/maxresdefault.jpg"
    },
    {
      title: { highlight: "현장의 목소리로", normal: "증명된 효과" },
      quote: "AI 추천 문제를 통해<br/>취약한 단원을 완벽 보완할 수 있어요.",
      name: "을지대 의예과<br/>24학번 김영우 학생",
      videoUrl: "https://www.youtube.com/watch?v=MBQZ4PCuNEQ",
      thumbnailUrl: "https://img.youtube.com/vi/MBQZ4PCuNEQ/maxresdefault.jpg"
    },
    {
      title: { highlight: "AI 기술로", normal: "완성된 학습" },
      quote: "개인별 맞춤 학습과 실시간 피드백으로<br/>학습 효과가 눈에 띄게 향상되었어요",
      name: "학부모 후기<br/>초등 5학년 학부모",
      videoUrl: "https://www.youtube.com/watch?v=SaM59JVLZms",
      thumbnailUrl: "https://img.youtube.com/vi/SaM59JVLZms/maxresdefault.jpg"
    }
  ];

  useEffect(() => {
    // Load demo count from localStorage
    const savedCount = localStorage.getItem('demoClickCount');
    if (savedCount) {
      setDemoCount(parseInt(savedCount, 10));
    }
  }, []);

  // 모바일 및 태블릿 감지 (데모 섹션용)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1366); // 태블릿도 모바일 레이아웃 사용
      setIsDemoMobile(window.innerWidth <= 600); // 데모 섹션은 600px 이하만 모바일
      setIsWebAppMobile(window.innerWidth <= 600); // 웹앱 연동 섹션은 600px 이하에서 모바일
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 모바일 슬라이드 핸들러
  const handlePrevDemoSlide = () => {
    setCurrentDemoSlide((prev) => (prev === 0 ? 6 : prev - 1));
  };

  const handleNextDemoSlide = () => {
    setCurrentDemoSlide((prev) => (prev === 6 ? 0 : prev + 1));
  };

  const [noTransition, setNoTransition] = useState(false);

  // 자동 슬라이드 (모바일에서만)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentDemoSlide((prev) => {
        const nextSlide = prev + 1;
        // 7번 슬라이드(복제된 첫 번째)에 도달하면 0번으로 점프
        if (nextSlide === 7) {
          setNoTransition(true);
          setTimeout(() => {
            setCurrentDemoSlide(0);
            setTimeout(() => {
              setNoTransition(false);
            }, 50);
          }, 1200);
          return 7;
        }
        return nextSlide;
      });
    }, 2000); // 2초마다 다음 슬라이드로

    return () => clearInterval(interval);
  }, [isMobile]);

  // 테스티모니얼 변경 시 자연스러운 전환 효과
  useEffect(() => {
    // 이미지 슬라이드와 동기화된 텍스트 페이드 효과
    // 이미지 슬라이드가 시작되면 텍스트 페이드 아웃
    setTextAnimationState('fade-out');
    
    // 이미지 슬라이드 전환이 완료된 후 텍스트 페이드 인
    const fadeInTimer = setTimeout(() => {
      setTextAnimationState('fade-in');
    }, 400); // 이미지 슬라이드 전환 중간에 텍스트 페이드 인 시작
    
    const visibleTimer = setTimeout(() => {
      setTextAnimationState('visible');
    }, 900); // 이미지 슬라이드 완료 후 텍스트 완전히 보이기
    
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(visibleTimer);
    };
  }, [currentTestimonial]);

  // 무한 슬라이드 (한쪽 방향으로 계속)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = prev + 1;
        // testimonials.length에 도달하면 0으로 리셋 (3번 슬라이드 건너뛰기)
        return next >= testimonials.length ? 0 : next;
      });
    }, 4000); // 4초마다 다음 슬라이드로
    return () => clearInterval(interval);
  }, [testimonials.length]);



  // 웹앱 연동 섹션 칩 및 목업 애니메이션
  useEffect(() => {
    // 초기 상태 리셋
    setMockupsVisible([false, false, false, false]);
    setSyncTextVisible(false);
    setArrowVisible(false);
    setTeacherChipsVisible([false, false, false, false]);
    setStudentChipsVisible([false, false, false, false]);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 목업 이미지 페이드인 애니메이션 (데스크톱에서만 - 먼저 시작)
            setTimeout(() => setMockupsVisible([true, false, false, false]), 0);     // 태블릿/랩톱
            setTimeout(() => setMockupsVisible([true, true, false, false]), 150);    // 왼쪽 모바일
            setTimeout(() => setMockupsVisible([true, true, true, false]), 300);     // 가운데 모바일
            setTimeout(() => setMockupsVisible([true, true, true, true]), 450);      // 데스크톱 모니터

            // 실시간 동기화 텍스트 애니메이션 (가운데 모바일과 동시에 나타남)
            setTimeout(() => setSyncTextVisible(true), 300);
            
            // 화살표 애니메이션 (텍스트보다 약간 늦게 나타남)
            setTimeout(() => setArrowVisible(true), 400);

            // 선생님용 칩 순차 애니메이션 (목업 이미지 후 - 700ms 후 시작)
            setTimeout(() => setTeacherChipsVisible([true, false, false, false]), 700);
            setTimeout(() => setTeacherChipsVisible([true, true, false, false]), 850);
            setTimeout(() => setTeacherChipsVisible([true, true, true, false]), 1000);
            setTimeout(() => setTeacherChipsVisible([true, true, true, true]), 1150);
            
            // 학생용 칩 순차 애니메이션 (선생님용 칩과 동시에 시작하도록 수정)
            setTimeout(() => setStudentChipsVisible([true, false, false, false]), 700);
            setTimeout(() => setStudentChipsVisible([true, true, false, false]), 850);
            setTimeout(() => setStudentChipsVisible([true, true, true, false]), 1000);
            setTimeout(() => setStudentChipsVisible([true, true, true, true]), 1150);
            
            // 한 번 실행 후 observer 해제
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (webAppSectionRef.current) {
      observer.observe(webAppSectionRef.current);
    }

    return () => {
      if (webAppSectionRef.current) {
        observer.unobserve(webAppSectionRef.current);
      }
    };
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

    // 모바일 핵심기능 박스들을 위한 별도 observer (더 민감한 설정)
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // 요소가 화면 위에서 아래로 내려올 때만 애니메이션 트리거
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px' // 상하 10% 마진으로 더 정확한 타이밍
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

    // 모바일 핵심기능 박스들은 별도 observer 사용
    mobileFeatureBoxRefs.current.forEach(ref => {
      if (ref) {
        mobileObserver.observe(ref);
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
      mobileFeatureBoxRefs.current.forEach(ref => {
        if (ref) {
          mobileObserver.unobserve(ref);
        }
      });
    };
  }, []);

  // 스크롤 기반 인터랙션
  useEffect(() => {
    const handleScroll = () => {
      const newZoomedBoxes = new Set<number>();
      const newVisibleTexts = new Set<number>();
      
      featureBoxRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = rect.top + rect.height / 2;
          const screenCenter = windowHeight / 2;
          
          // 화면 중앙에 가까울수록 줌 효과 (부드러운 전환)
          const distanceFromCenter = Math.abs(elementCenter - screenCenter);
          const maxDistance = windowHeight / 2;
          const zoomThreshold = maxDistance * 0.4; // 화면 중앙 40% 영역에서 줌 (더 넓은 영역)
          
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
  }, []);



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
      title: '실시간 피드백',
      sub: [
        { label: 'AI 힌트 및 오답 피드백', gif: '' },
        { label: '실시간<br/>질문 게시판', gif: '' }
      ],
      desc: '풀이가 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.',
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

  // 이미지 클릭 시 스냅 스크롤 핸들러
  const handleImageClick = (index: number) => {
    const element = featureBoxRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetScrollTop = scrollTop + rect.top - (windowHeight / 2) + (elementHeight / 2);
      
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <BodyContainer ref={ref}>
      <AnimatedHeaderSection ref={headerRef}>
        <Title>
          <TitleText>수학대왕에서만 만날 수 있는<br />특별한 기능을 소개합니다</TitleText>
        </Title>
        <Subtitle>
          AI 기술로 완성된 체계적인 수학 학습 관리 시스템
        </Subtitle>
      </AnimatedHeaderSection>

      {/* 태블릿용 통합 섹션 */}
      <IntegratedSection>
        <TabletHeader>
          <Title>
            <TitleText>수학대왕에서만 만날 수 있는<br />특별한 기능을 소개합니다</TitleText>
          </Title>
          <Subtitle>
            AI 기술로 완성된 체계적인 수학 학습 관리 시스템
          </Subtitle>
        </TabletHeader>
        <TabletCardGrid>
          <Feature
            title="1:1 개별 맞춤 학습지"
            description={[
              "AI가 만들어주는",
              "학생별로 서로 다른 실력에 맞게, 최적의 문제로 학습지를 자동 생성해 드려요!"
            ]}
            index={0}
            imageSrc="/Body/images/Body-image-1.png"
            category="학습지 자동 제작"
          />
          <Feature
            title="학습 성과 분석"
            description={[
              "개인별 학습 데이터 분석",
              "자동 오답클리닉으로 모든 취약점을 완벽하게 보완합니다"
            ]}
            index={1}
            imageSrc="/Body/images/Body-image-2.png"
            category="오답 완벽 정복"
          />
          <Feature
            title="서술형 자동 채점"
            description={[
              "필기 인식 기술로",
              "서술형 답안을 정확하게 자동 채점합니다"
            ]}
            index={2}
            imageSrc="/Body/images/Body-image-3.png"
            category="AI 채점 시스템"
          />
          <Feature
            title="전국 단위 실력 분석"
            description={[
              "AI 채점 시스템으로",
              "전국 학생들과 비교한 객관적인 실력 분석 리포트를 제공합니다"
            ]}
            index={3}
            imageSrc="/Body/images/Body-image-4.png"
            category="AI 채점 시스템"
          />
          <Feature
            title="AI 힌트 및 오답 피드백"
            description={[
              "실시간 피드백으로",
              "풀이가 막힐 때 단계별 힌트와 상세한 오답 분석을 제공합니다"
            ]}
            index={4}
            imageSrc="/Body/images/Body-image-5.png"
            category="실시간 피드백"
          />
          <Feature
            title="실시간 질문 게시판"
            description={[
              "실시간 피드백으로",
              "모르는 문제를 게시판에 질문하고 빠르게 답변을 받아 볼 수 있습니다"
            ]}
            index={5}
            imageSrc="/Body/images/Body-image-6.png"
            category="실시간 피드백"
          />
        </TabletCardGrid>
      </IntegratedSection>

      <FeatureSectionWrapper>
        {/* 1번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={el => {
            featureBoxRefs.current[0] = el;
            mobileFeatureBoxRefs.current[0] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(0)}>
            <FeatureCategory>
              <FeatureCategoryText>
                학습지 자동 제작
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              AI가 만들어주는<br/>
              <HighlightedText isVisible={visibleTexts.has(0)}>
                1:1 개별 맞춤 학습지
              </HighlightedText>
            </FeatureMainTitle>
            <FeatureDesc>
              학생별로 서로 다른 실력에 맞게,<br/>최적의 문제로 학습지를 자동 생성해 드려요!
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(0)}
            onClick={() => handleImageClick(0)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/Body/images/Body-image-1.png"
              alt="핵심기능1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 2번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={el => {
            featureBoxRefs.current[1] = el;
            mobileFeatureBoxRefs.current[1] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(1)}>
            <FeatureCategory>
              <FeatureCategoryText>
                오답 완벽 정복
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              <HighlightedText isVisible={visibleTexts.has(1)}>
                자동 오답 클리닉
              </HighlightedText>
              무한 제공
            </FeatureMainTitle>
            <FeatureDesc>
              더 이상 틀리지 않을 때까지,<br/>오답 유사 문제를 자동으로 출제해 드려요!
            </FeatureDesc>
            </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(1)}
            onClick={() => handleImageClick(1)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/Body/images/Body-image-2.png"
              alt="핵심기능2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 3번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={el => {
            featureBoxRefs.current[2] = el;
            mobileFeatureBoxRefs.current[2] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(2)}>
            <FeatureCategory>
              <FeatureCategoryText>
                AI 채점 시스템
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              서술형<br/>자동 채점
            </FeatureMainTitle>
            <FeatureDesc>
              필기 인식 기술로 서술형 답안을<br/>정확하게 자동 채점합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(2)}
            onClick={() => handleImageClick(2)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/Body/images/Body-image-3.png"
              alt="핵심기능3"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 4번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={el => {
            featureBoxRefs.current[3] = el;
            mobileFeatureBoxRefs.current[3] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(3)}>
            <FeatureCategory>
              <FeatureCategoryText>
                AI 채점 시스템
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              전국 단위<br/>실력 분석
            </FeatureMainTitle>
            <FeatureDesc>
              전국 학생들과 비교한<br/>객관적인 실력 분석 리포트를 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(3)}
            onClick={() => handleImageClick(3)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/Body/images/Body-image-4.png"
              alt="핵심기능4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 5번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={el => {
            featureBoxRefs.current[4] = el;
            mobileFeatureBoxRefs.current[4] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(4)}>
            <FeatureCategory>
              <FeatureCategoryText>
                실시간 피드백
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              AI 힌트 및<br/>오답 피드백
            </FeatureMainTitle>
            <FeatureDesc>
              풀이가 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(4)}
            onClick={() => handleImageClick(4)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/Body/images/Body-image-5.png"
              alt="핵심기능5"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 6번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={el => {
            featureBoxRefs.current[5] = el;
            mobileFeatureBoxRefs.current[5] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(5)}>
            <FeatureCategory>
              <FeatureCategoryText>
                실시간 피드백
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              실시간<br/>질문 게시판
            </FeatureMainTitle>
            <FeatureDesc>
              모르는 문제를 게시판에 질문하고<br/>빠르게 답변을 받아 볼 수 있습니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(5)}
            onClick={() => handleImageClick(5)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src="/Body/images/Body-image-6.png"
              alt="핵심기능6"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </AnimatedFeatureBox>
      </FeatureSectionWrapper>

      <DemoSection>
        <DemoHeader>
          <DemoTitle>
            수학대왕 APP 기능을<br/>직접 체험해보세요!
          </DemoTitle>
          <DemoSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br/>
            완벽한 교육 생태계를 경험하세요
          </DemoSubtitle>
          <DemoButton 
            href="https://www.iammathking.com/demo" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDemoClick}
          >
            <span>앱 기능 미리보기</span>
          </DemoButton>
        </DemoHeader>
        <DemoContent>
          {isDemoMobile ? (
            <MobileDemoSlider>
              <MobileDemoSlideContainer>
                {[
                  "/Body/slides/feature-slide-1.png",
                  "/Body/slides/feature-slide-2.png", 
                  "/Body/slides/feature-slide-3.png",
                  "/Body/slides/feature-slide-4.png",
                  "/Body/slides/feature-slide-5.png",
                  "/Body/slides/feature-slide-6.png",
                  "/Body/slides/feature-slide-7.png",
                  // 무한 스크롤을 위한 복제된 이미지들
                  "/Body/slides/feature-slide-1.png",
                  "/Body/slides/feature-slide-2.png", 
                  "/Body/slides/feature-slide-3.png",
                  "/Body/slides/feature-slide-4.png",
                  "/Body/slides/feature-slide-5.png",
                  "/Body/slides/feature-slide-6.png",
                  "/Body/slides/feature-slide-7.png"
                ].map((image, index) => (
                  <MobileDemoSlide 
                    key={index}
                    noTransition={noTransition}
                    style={{ transform: `translateX(-${currentDemoSlide * 100}%)` }}
                  >
                    <div 
                      style={{
                        width: '320px',
                        height: '320px',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '20px',
                        position: 'relative'
                      }}
                    />
                  </MobileDemoSlide>
                ))}
              </MobileDemoSlideContainer>
            </MobileDemoSlider>
          ) : (
            <FeatureBoxFlow>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-3.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-4.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-5.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-6.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-7.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              {/* 무한 반복을 위한 복제된 이미지들 */}
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-3.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-4.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-5.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-6.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div style={{
                  width: '400px',
                  height: '400px',
                  backgroundImage: 'url(/Body/slides/feature-slide-7.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))',
                    borderRadius: '24px'
                  }} />
                </div>
              </FeatureBoxSlide>
            </FeatureBoxFlow>
          )}
        </DemoContent>
      </DemoSection>

      {/* 웹-앱 연동 섹션 */}
      <WebAppSection ref={webAppSectionRef}>
        <div style={{position:'relative',width:'100%',maxWidth:'100%',margin:'0',padding:0,minHeight:'900px',zIndex:2}}>
          {isWebAppMobile ? (
            <>
              <WebAppHeader
                style={{
                  position: 'relative',
                  top: 0,
                  left: 0,
                  width: '100%',
                  zIndex: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0',
                  padding: '24px 0 0 0',
                  background: 'white',
                }}
              >
                <WebAppTitle style={{ fontSize: 30, textAlign: 'center', marginBottom: 8 }}>
                  웹-앱 연동으로 완성되는<br />교육 시스템
                </WebAppTitle>
                <WebAppSubtitle style={{ fontSize: 15, textAlign: 'center', marginBottom: 12 }}>
                  교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br />완벽한 교육 생태계를 경험하세요
                </WebAppSubtitle>
                <WebAppButtons>
                  <WebAppButton 
                    href="https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebAppIcon>
                      <img src="/Common/Google_Play_logo.svg" alt="Google Play" />
                    </WebAppIcon>
                    <WebAppButtonText>Google Play</WebAppButtonText>
                  </WebAppButton>
                  <WebAppButton 
                    href="https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebAppIcon>
                      <img src="/Common/App_Store_logo.svg" alt="App Store" />
                    </WebAppIcon>
                    <WebAppButtonText>App Store</WebAppButtonText>
                  </WebAppButton>
                </WebAppButtons>
              </WebAppHeader>
              <div style={{width: '100%', height: '987px', position: 'relative', overflow: 'hidden', margin: '0 auto', paddingBottom: '200px'}}>

                
                {/* 실시간 동기화 텍스트 - 목업 이미지들 사이 중앙 */}
                <AnimatedMobileSyncText isVisible={syncTextVisible}>
                  실시간<br/>동기화
                </AnimatedMobileSyncText>
                
                {/* 실시간 동기화 텍스트에서 뻗어 나오는 화살표 */}
                <AnimatedArrow isVisible={arrowVisible} />
                
                {/* 목업 이미지 3번 - 선생님용 웹사이트 */}
                <img 
                  src="/WebApp/integration/3.svg" 
                  alt="선생님용 웹사이트 목업"
                  style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: 'calc(50% + 100px)',
                    transform: 'translateX(-50%)',
                    width: 'auto',
                    height: '375px',
                    zIndex: 1,
                    opacity: 0.8
                  }}
                />
                
                {/* 목업 이미지 4번 - 학생용 모바일 앱 */}
                <img 
                  src="/WebApp/integration/4.svg" 
                  alt="학생용 모바일 앱 목업"
                  style={{
                    position: 'absolute',
                    top: '80px',
                    right: '130px',
                    width: 'auto',
                    height: '300px',
                    zIndex: 1,
                    opacity: 0.8
                  }}
                />
                
                {/* 선생님용 웹사이트 정보 - 좌측 상단 */}
                <div style={{
                  paddingLeft: '10px', 
                  paddingRight: '10px', 
                  position: 'absolute', 
                  top: '90px',
                  left: '230px',
                  overflow: 'hidden', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '10px', 
                  display: 'inline-flex',
                  zIndex: 2
                }}>
                  <div style={{
                    justifyContent: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    color: '#835EEB', 
                    fontSize: '16px', 
                    fontFamily: 'Pretendard', 
                    fontWeight: '700', 
                    lineHeight: '20.80px', 
                    wordWrap: 'break-word'
                  }}>
                    선생님용 웹사이트
                  </div>
                  <div style={{
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: '10px', 
                    display: 'flex'
                  }}>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        맞춤형 문제 출제
                      </div>
                    </div>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        클래스 및 학생관리
                      </div>
                    </div>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        AI 채점 결과 확인
                      </div>
                    </div>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        실력 분석 리포트
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 학생용 모바일 앱 정보 - 우측 하단 */}
                <div style={{
                  paddingLeft: '10px', 
                  paddingRight: '10px', 
                  paddingTop: '20px', 
                  paddingBottom: '20px', 
                  position: 'absolute', 
                  bottom: '80px',
                  right: '210px',
                  overflow: 'hidden', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '10px', 
                  display: 'inline-flex',
                  zIndex: 2
                }}>
                  <div style={{
                    justifyContent: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    color: '#835EEB', 
                    fontSize: '16px', 
                    fontFamily: 'Pretendard', 
                    fontWeight: '700', 
                    lineHeight: '20.80px', 
                    wordWrap: 'break-word'
                  }}>
                    학생용 모바일 앱
                  </div>
                  <div style={{
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: '10px', 
                    display: 'flex'
                  }}>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        AI 힌트 시스템
                      </div>
                    </div>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        실시간 채점 피드백
                      </div>
                    </div>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        장학금 알림 수신
                      </div>
                    </div>
                    <div style={{
                      width: '130px', 
                      paddingLeft: '15px', 
                      paddingRight: '15px', 
                      background: '#F3EFFD', 
                      overflow: 'hidden', 
                      borderRadius: '50px', 
                      flexDirection: 'column', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'flex'
                    }}>
                      <div style={{
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: '#33373B', 
                        fontSize: '13px', 
                        fontFamily: 'Pretendard', 
                        fontWeight: '400', 
                        lineHeight: '19.50px', 
                        wordWrap: 'break-word'
                      }}>
                        맞춤형 학습지 수신
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <WebAppHeader style={{position:'relative',top:0,left:0,width:'100%',zIndex:3,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',pointerEvents:'none',marginBottom:'50px'}}>
                <WebAppTitle style={{pointerEvents:'auto'}}>웹-앱 연동으로 완성되는<br/>교육 시스템</WebAppTitle>
                <WebAppSubtitle style={{pointerEvents:'auto'}}>교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br/>완벽한 교육 생태계를 경험하세요</WebAppSubtitle>
                <WebAppButtons style={{pointerEvents:'auto'}}>
                  <WebAppButton 
                    href="https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebAppIcon>
                      <img src="/Common/Google_Play_logo.svg" alt="Google Play" />
                    </WebAppIcon>
                    <WebAppButtonText>Google Play</WebAppButtonText>
                  </WebAppButton>
                  <WebAppButton 
                    href="https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebAppIcon>
                      <img src="/Common/App_Store_logo.svg" alt="App Store" />
                    </WebAppIcon>
                    <WebAppButtonText>App Store</WebAppButtonText>
                  </WebAppButton>
                </WebAppButtons>
              </WebAppHeader>
              <WebAppContent style={{position: 'relative', minHeight: '1400px', overflow: 'hidden'}}>
                
                {/* 웹버전 목업들 (820px 초과에서만 표시) */}
                <DesktopMockupGroup>
                  {/* 왼쪽 상단 - 선생님용 웹사이트 (태블릿/랩톱 화면) - 반 잘리게 */}
                  <TeacherMockupElement
                    $isVisible={mockupsVisible[0]}
                    onClick={() => window.open('https://class.iammathking.com', '_blank')}
                  >
                    <img 
                      src="/WebApp/integration/1.svg" 
                      alt="선생님용 웹사이트"
                      style={{ 
                        width: 'auto', 
                        height: 'var(--mockup-height-1, 550px)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.filter = 'drop-shadow(0 15px 30px rgba(131, 94, 235, 0.3))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))';
                      }}
                    />
                  </TeacherMockupElement>
                  
                  {/* 왼쪽 하단 - 학생용 모바일 앱 (세로형 앱 화면들) */}
                  <StudentMockupElement
                    $isVisible={mockupsVisible[1]}
                    onClick={() => window.open('https://apps.apple.com/app/수학대왕-ai디지털문제집/id1501165233', '_blank')}
                  >
                    <img 
                      src="/WebApp/integration/2.svg" 
                      alt="학생용 모바일 앱"
                      style={{ 
                        width: 'auto', 
                        height: 'var(--mockup-height-2, 550px)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.04)';
                        e.currentTarget.style.filter = 'drop-shadow(0 15px 30px rgba(131, 94, 235, 0.3))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))';
                      }}
                    />
                  </StudentMockupElement>
                  
                  {/* 실시간 동기화 텍스트 - 가운데 폰 목업 위 */}
                  <AnimatedSyncText isVisible={syncTextVisible}>
                    실시간<br/>동기화
                  </AnimatedSyncText>
                  
                  {/* 가운데 - 모바일 앱 화면 (세로형) */}
                  <CenterMockupElement
                    $isVisible={mockupsVisible[2]}
                  >
                    <img 
                      src="/WebApp/integration/3.svg" 
                      alt="모바일 앱 인터페이스"
                      style={{ 
                        width: 'auto', 
                        height: 'var(--mockup-height-3, 550px)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 8px 16px rgba(131, 94, 235, 0.12))'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.filter = 'drop-shadow(0 12px 24px rgba(131, 94, 235, 0.25))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'drop-shadow(0 8px 16px rgba(131, 94, 235, 0.12))';
                      }}
                    />
                  </CenterMockupElement>
                  
                  {/* 오른쪽 - 데스크톱 모니터 화면 - 반 잘리게 */}
                  <DesktopMockupElement
                    $isVisible={mockupsVisible[3]}
                    onClick={() => window.open('https://class.iammathking.com', '_blank')}
                >
                  <img 
                    src="/WebApp/integration/4.svg" 
                    alt="데스크톱 관리 시스템"
                    style={{ 
                      width: 'auto', 
                      height: 'var(--mockup-height-4, 650px)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      filter: 'drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.filter = 'drop-shadow(0 15px 30px rgba(131, 94, 235, 0.3))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15))';
                    }}
                  />
                </DesktopMockupElement>

                </DesktopMockupGroup>
                
                {/* 선생님용 웹사이트 정보 텍스트 */}
                <TeacherInfoContainer>
                  <WebAppInfoBlock style={{alignItems:'flex-end',textAlign:'right'}}>
                    <WebAppInfoTitle 
                      isVisible={teacherChipsVisible[0]} 
                      delay={0}
                      style={{ fontSize: 28 }}
                    >
                      선생님용 웹사이트
                    </WebAppInfoTitle>
                    <WebAppInfoChips style={{alignItems:'flex-end'}}>
                      <WebAppInfoChip isVisible={teacherChipsVisible[0]} delay={0}>클래스 및 학생관리</WebAppInfoChip>
                      <WebAppInfoChip isVisible={teacherChipsVisible[1]} delay={150}>맞춤형 문제 출제</WebAppInfoChip>
                      <WebAppInfoChip isVisible={teacherChipsVisible[2]} delay={300}>AI 채점 결과 확인</WebAppInfoChip>
                      <WebAppInfoChip isVisible={teacherChipsVisible[3]} delay={450}>실력 분석 리포트</WebAppInfoChip>
                    </WebAppInfoChips>
                  </WebAppInfoBlock>
                </TeacherInfoContainer>
                
                {/* 학생용 모바일 앱 정보 텍스트 */}
                <StudentInfoContainer>
                  <WebAppInfoBlock>
                    <WebAppInfoTitle 
                      isVisible={studentChipsVisible[0]} 
                      delay={0}
                      style={{ fontSize: 28 }}
                    >
                      학생용 모바일 앱
                    </WebAppInfoTitle>
                    <WebAppInfoChips>
                      <WebAppInfoChip isVisible={studentChipsVisible[0]} delay={0}>맞춤형 학습지 수신</WebAppInfoChip>
                      <WebAppInfoChip isVisible={studentChipsVisible[1]} delay={150}>AI 힌트 시스템</WebAppInfoChip>
                      <WebAppInfoChip isVisible={studentChipsVisible[2]} delay={300}>실시간 채점 피드백</WebAppInfoChip>
                      <WebAppInfoChip isVisible={studentChipsVisible[3]} delay={450}>장학금 알림 수신</WebAppInfoChip>
                    </WebAppInfoChips>
                  </WebAppInfoBlock>
                </StudentInfoContainer>
              </WebAppContent>
            </>
          )}
        </div>
      </WebAppSection>

      {/* 현장의 목소리 섹션 */}
      <ExperienceSection>
        <ExperienceInner>
          <ExperienceTextBlock>
            <AnimatedTextContent className={textAnimationState}>
              <div>
                <ExperienceTitle>
                  {testimonials[currentTestimonial % testimonials.length].title.highlight}<br/>{testimonials[currentTestimonial % testimonials.length].title.normal}
                </ExperienceTitle>
              </div>
              <div>
                <ExperienceQuote>
                  <span dangerouslySetInnerHTML={{ __html: testimonials[currentTestimonial % testimonials.length].quote }} />
                </ExperienceQuote>
              </div>
              <NameSection>
                <VerticalLine />
                <div>
                  <ExperienceName>
                    {testimonials[currentTestimonial % testimonials.length].name.split('<br/>').map((line, idx) => (
                      <span key={idx} dangerouslySetInnerHTML={{ __html: line }} />
                    ))}
                  </ExperienceName>
                </div>
              </NameSection>
            </AnimatedTextContent>
          </ExperienceTextBlock>
          <ExperienceImageBlock>
            <VideoSlider>
              <VideoTrack
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                  transition: isTransitioning ? 'transform 1s ease-in-out' : 'none'
                }}
              >
                {/* 슬라이드들 */}
                {testimonials.map((testimonial, index) => (
                  <VideoSlide key={index}>
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
                ))}
              </VideoTrack>
            </VideoSlider>

          </ExperienceImageBlock>
        </ExperienceInner>
      </ExperienceSection>
    </BodyContainer>
  );
});


const WebAppSection = styled.section`
  width: 100%;
  background: white;
  padding: 192px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 128px;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
  @media (max-width: 1366px) and (min-width: 601px) {
    padding: 60px 0; /* 태블릿에서 좌우 패딩 제거 */
    gap: 60px;
  }
  @media (max-width: 820px) {
    padding: 40px 0;
    gap: 40px;
  }
  @media (max-width: 600px) {
    padding: 80px 0 20px 0;
    gap: 60px;
  }
`;



const WebAppHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    gap: 36px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    gap: 32px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    gap: 28px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    gap: 24px;
  }
  
  @media (max-width: 600px) {
    gap: 24px;
  }
`;

const WebAppTitle = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 67.20px;
  word-wrap: break-word;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 44px;
    line-height: 62px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 40px;
    line-height: 56px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 36px;
    line-height: 50px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 32px;
    line-height: 44px;
  }
  
  @media (max-width: 900px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

const WebAppSubtitle = styled.div`
  width: 100%;
  max-width: 600px;
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
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 26px;
    line-height: 34px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 24px;
    line-height: 32px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 22px;
    line-height: 30px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 20px;
    line-height: 28px;
  }
  
  @media (max-width: 900px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const WebAppButtons = styled.div`
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const WebAppButton = styled.a`
  padding: 8px 16px;
  background: #33373B;
  overflow: hidden;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 140px; /* Google Play 텍스트에 맞춰 늘림 */
  text-decoration: none;
  
  &:hover {
    background: #835EEB;
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    padding: 6px 12px;
    width: 110px; /* 모바일에서도 비례적으로 늘림 */
  }
`;

const WebAppIcon = styled.div`
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }
`;

const WebAppButtonText = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 21px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const WebAppContent = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  display: block;
  min-height: 900px;
  overflow: hidden;
  
  /* 웹버전 목업 고정 크기 - 스케일링 없음 */
  width: 100%;
  max-width: none;
  
  /* CSS 변수로 동적 위치 조정 */
  --scale-factor: 1;
  --teacher-top: 80px;
  --teacher-right: 50px;
  --student-left: 50px;
  --mockup-left: -50px;
  --mockup-right: -280px;
  --mockup-center-top: 350px;
  --mockup-height-1: 550px;
  --mockup-height-2: 550px;
  --mockup-height-3: 550px;
  --mockup-height-4: 650px;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    --scale-factor: 0.95;
    --teacher-top: 70px;
    --teacher-right: 45px;
    --student-left: 45px;
    --mockup-left: -45px;
    --mockup-right: -260px;
    --mockup-center-top: 333px;
    --mockup-height-1: 523px;
    --mockup-height-2: 523px;
    --mockup-height-3: 523px;
    --mockup-height-4: 618px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    --scale-factor: 0.85;
    --teacher-top: 60px;
    --teacher-right: 40px;
    --student-left: 40px;
    --mockup-left: -40px;
    --mockup-right: -240px;
    --mockup-center-top: 298px;
    --mockup-height-1: 468px;
    --mockup-height-2: 468px;
    --mockup-height-3: 468px;
    --mockup-height-4: 553px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    --scale-factor: 0.7;
    --teacher-top: 50px;
    --teacher-right: 35px;
    --student-left: 35px;
    --mockup-left: -35px;
    --mockup-right: -220px;
    --mockup-center-top: 245px;
    --mockup-height-1: 385px;
    --mockup-height-2: 385px;
    --mockup-height-3: 385px;
    --mockup-height-4: 455px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    --scale-factor: 0.6;
    --teacher-top: 40px;
    --teacher-right: 30px;
    --student-left: 30px;
    --mockup-left: -30px;
    --mockup-right: -200px;
    --mockup-center-top: 210px;
    --mockup-height-1: 330px;
    --mockup-height-2: 330px;
    --mockup-height-3: 330px;
    --mockup-height-4: 390px;
  }
  
  /* 추가 안전장치: 더 작은 화면에서 칩 위치 강제 조정 */
  @media (max-width: 1200px) and (min-width: 1025px) {
    --teacher-right: 25px;
    --student-left: 25px;
  }
  
  @media (max-width: 1100px) and (min-width: 1025px) {
    --teacher-right: 20px;
    --student-left: 20px;
  }
  
  @media (max-width: 1000px) and (min-width: 821px) {
    --teacher-right: 15px;
    --student-left: 15px;
  }
  
  @media (max-width: 900px) and (min-width: 821px) {
    --teacher-right: 10px;
    --student-left: 10px;
  }
  
  /* 820px 이하에서 작은 화면용 레이아웃 */
  @media (max-width: 820px) and (min-width: 601px) {
    --scale-factor: 0.5;
    --teacher-top: 20px;
    --teacher-right: 20px;
    --student-left: 20px;
    --mockup-left: -20px;
    --mockup-right: -150px;
    --mockup-center-top: 175px;
    --mockup-height-1: 275px;
    --mockup-height-2: 275px;
    --mockup-height-3: 275px;
    --mockup-height-4: 325px;
  }
  
  /* 600px 이하에서 데스크탑 버전 숨기기 */
  @media (max-width: 600px) {
    display: none;
  }
  
  /* 최후의 안전장치: 매우 작은 화면에서 칩 위치 강제 조정 */
  @media (max-width: 850px) and (min-width: 821px) {
    --teacher-right: 5px;
    --student-left: 5px;
  }
  
  @media (max-width: 830px) and (min-width: 821px) {
    --teacher-right: 0px;
    --student-left: 0px;
  }
  
  /* 820px 이하에서 작은 화면용 높이 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    min-height: 600px;
  }
  
  @media (max-width: 600px) {
    min-height: 0;
    padding: 0;
    width: 100%;
    min-width: auto;
    transform: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

/* 데스크탑 목업 그룹 컨테이너 */
const DesktopMockupGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MockupElement = styled.div`
  position: absolute;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    z-index: 15;
  }
`;

const AnimatedMockupElement = styled(MockupElement)<{ $isVisible: boolean; delay?: number }>`
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: translateY(${props => props.$isVisible ? '0' : '30px'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay || 0}ms;
  
  /* 600px 이하에서 웹버전 목업 숨기기 */
  @media (max-width: 600px) {
    display: none;
  }
`;

/* 선생님용 웹사이트 목업 요소 */
const TeacherMockupElement = styled(AnimatedMockupElement)`
  position: absolute;
  top: calc(155px * var(--scale-factor, 1));
  left: var(--mockup-left, -50px);
  z-index: 12;
  
  /* 1280px 가이드 안쪽으로 위치 조정 */
  @media (min-width: 1281px) {
    left: calc(var(--mockup-left, -50px) + 50px);
  }
  
  /* 600px 이하에서 모바일 레이아웃 적용 */
  @media (max-width: 600px) {
    display: none;
  }
`;

/* 학생용 모바일 앱 목업 요소 */
const StudentMockupElement = styled(AnimatedMockupElement)`
  position: absolute;
  top: calc(750px * var(--scale-factor, 1));
  left: calc(410px * var(--scale-factor, 1));
  z-index: 12;
  
  /* 1280px 가이드 안쪽으로 위치 조정 */
  @media (min-width: 1281px) {
    left: calc(calc(410px * var(--scale-factor, 1)) + 50px);
  }
  
  /* 600px 이하에서 모바일 레이아웃 적용 */
  @media (max-width: 600px) {
    display: none;
  }
`;

/* 가운데 모바일 앱 목업 요소 */
const CenterMockupElement = styled(AnimatedMockupElement)`
  position: absolute;
  top: var(--mockup-center-top, 350px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  
  /* 1280px 가이드 안쪽으로 위치 조정 - 가운데 맞춤 유지 */
  @media (min-width: 1281px) {
    left: 50%;
    transform: translateX(-50%);
  }
  
  /* 600px 이하에서 모바일 레이아웃 적용 */
  @media (max-width: 600px) {
    display: none;
  }
`;

/* 데스크톱 모니터 목업 요소 */
const DesktopMockupElement = styled(AnimatedMockupElement)`
  position: absolute;
  top: calc(400px * var(--scale-factor, 1));
  right: var(--mockup-right, -280px);
  z-index: 11;
  
  /* 1280px 가이드 안쪽으로 위치 조정 */
  @media (min-width: 1281px) {
    right: calc(var(--mockup-right, -280px) + 40px);
  }
  
  /* 600px 이하에서 모바일 레이아웃 적용 */
  @media (max-width: 600px) {
    display: none;
  }
`;

const AnimatedSyncText = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: calc(220px * var(--scale-factor, 1));
  left: calc(50% - 15px * var(--scale-factor, 1));
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: calc(42px * var(--scale-factor, 1));
  font-family: 'Godo B';
  font-weight: 400;
  line-height: calc(54px * var(--scale-factor, 1));
  word-wrap: break-word;
  z-index: 20;
  text-align: center;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateX(-50%) ${props => props.isVisible ? 'scale(1)' : 'scale(0.8)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    --scale-factor: 0.95;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    --scale-factor: 0.85;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    --scale-factor: 0.7;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    --scale-factor: 0.6;
  }
  
  /* 820px 이하에서 작은 화면용 크기 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    font-size: 32px;
    line-height: 42px;
    top: calc(120px * var(--scale-factor, 1));
    left: calc(50% - 10px * var(--scale-factor, 1));
  }
  
  /* 600px 이하에서 웹버전 목업 숨기기 */
  @media (max-width: 600px) {
    display: none;
  }
`;

const AnimatedMobileSyncText = styled.div<{ isVisible: boolean }>`
  left: 50%; 
  top: 50%; 
  position: absolute; 
  justify-content: center; 
  display: flex; 
  flex-direction: column; 
  color: #835EEB; 
  font-size: 32px; 
  font-family: 'Godo B'; 
  font-weight: 400; 
  line-height: 41.60px; 
  word-wrap: break-word;
  z-index: 1;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translate(-50%, -50%) ${props => props.isVisible ? 'scale(1)' : 'scale(0.8)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 600px 초과에서 모바일 버전 숨기기 */
  @media (min-width: 601px) {
    display: none;
  }
  
  /* 반응형 크기 조정 */
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const AnimatedArrow = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 500px;
  z-index: -1;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 기본 스타일 */
  background: url('/WebApp/integration/circle.svg') no-repeat center;
  background-size: contain;
  
  /* 애니메이션 조합 */
  animation: ${arrowBreathe} 3s ease-in-out infinite,
             ${arrowGlow} 2s ease-in-out infinite;
  
  /* 호버 효과 */
  &:hover {
    animation: ${arrowPulse} 1s ease-in-out infinite;
  }
  
  /* 600px 초과에서 모바일 버전 숨기기 */
  @media (min-width: 601px) {
    display: none;
  }
  
  /* 반응형 크기 조정 */
  @media (max-width: 600px) {
    width: 250px;
    height: 400px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 300px;
  }
`;

/* 태블릿용 목업 컨테이너 */
const TabletMockupContainer = styled.div`
  display: none;
  
  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
`;

const TabletMockupImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(131, 94, 235, 0.15));
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 15px 30px rgba(131, 94, 235, 0.25));
  }
`;

/* 웹앱 정보 텍스트 컨테이너 */
const WebAppInfoTextContainer = styled.div`
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    transform: scale(0.95);
    transform-origin: center center;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    transform: scale(0.9);
    transform-origin: center center;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    transform: scale(0.75);
    transform-origin: center center;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    transform: scale(0.65);
    transform-origin: center center;
  }
`;

/* 선생님용 웹사이트 정보 텍스트 컨테이너 */
const TeacherInfoContainer = styled(WebAppInfoTextContainer)`
  position: absolute;
  top: var(--teacher-top, 80px);
  right: var(--teacher-right, 50px);
  z-index: 10;
  transform: scale(var(--scale-factor, 1));
  transform-origin: top right;
  
  /* 1920px 이상에서 추가 위치 조정 */
  @media (min-width: 1921px) {
    right: calc(100px + (100vw - 1920px) / 2);
  }
  
  /* 1280px 가이드 안쪽으로 위치 조정 */
  @media (min-width: 1281px) and (max-width: 1920px) {
    right: calc(50px + (100vw - 1280px) / 2);
  }
  
  /* 추가 안전장치: 칩이 목업과 겹치지 않도록 최소 거리 보장 */
  @media (max-width: 1200px) {
    right: max(var(--teacher-right, 50px), 25px);
  }
  
  @media (max-width: 1100px) {
    right: max(var(--teacher-right, 50px), 20px);
  }
  
  @media (max-width: 1000px) {
    right: max(var(--teacher-right, 50px), 15px);
  }
  
  @media (max-width: 900px) {
    right: max(var(--teacher-right, 50px), 10px);
  }
  
  /* 820px 이하에서 작은 화면용 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    right: max(var(--teacher-right, 50px), 15px);
    transform: scale(0.6);
  }
  
  /* 600px 이하에서 모바일 레이아웃 적용 */
  @media (max-width: 600px) {
    display: none;
  }
`;

/* 학생용 모바일 앱 정보 텍스트 컨테이너 */
const StudentInfoContainer = styled(WebAppInfoTextContainer)`
  position: absolute;
  top: calc(var(--mockup-center-top, 350px) + var(--mockup-height-3, 550px) + 70px);
  left: var(--student-left, 20px);
  z-index: 10;
  transform: scale(var(--scale-factor, 1));
  transform-origin: top left;
  
  /* 1920px 이상에서 추가 위치 조정 */
  @media (min-width: 1921px) {
    left: calc(200px + (100vw - 1920px) / 2);
  }
  
  /* 1280px 가이드 안쪽으로 위치 조정 */
  @media (min-width: 1281px) and (max-width: 1920px) {
    left: calc(20px + (100vw - 1280px) / 2);
  }
  
  /* 추가 안전장치: 칩이 목업과 겹치지 않도록 최소 거리 보장 */
  @media (max-width: 1200px) {
    left: max(var(--student-left, 20px), 25px);
  }
  
  @media (max-width: 1100px) {
    left: max(var(--student-left, 20px), 20px);
  }
  
  @media (max-width: 1000px) {
    left: max(var(--student-left, 20px), 15px);
  }
  
  @media (max-width: 900px) {
    left: max(var(--student-left, 20px), 10px);
  }
  
  /* 820px 이하에서 작은 화면용 조정 */
  @media (max-width: 820px) and (min-width: 601px) {
    left: max(var(--student-left, 20px), 15px);
    transform: scale(0.6);
  }
  
  /* 600px 이하에서 모바일 레이아웃 적용 */
  @media (max-width: 600px) {
    display: none;
  }
`;



const ExperienceSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 800px;
  padding: 80px 0;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    min-height: 700px;
    padding: 60px 0;
  }
`;

const ExperienceInner = styled.div`
  width: 1440px;
  height: 620px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media (max-width: 1500px) {
    width: 100%;
    min-width: 0;
    padding: 0 16px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    gap: 40px;
    align-items: center;
  }
`;

const ExperienceTextBlock = styled.div`
  width: 488px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0;
  text-align: left;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    align-items: flex-start;
    text-align: left;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    align-items: flex-start;
    padding: 20px;
    gap: 8px;
    text-align: left;
  }
`;

const ExperienceTitle = styled.div`
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.4px;
  word-break: break-word;
  margin-bottom: 36px;
  text-align: left;
  width: 100%;
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const ExperienceQuote = styled.div`
  color: #33373B;
  font-size: 22px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36px;
  word-break: break-word;
  margin-bottom: 32px;
  text-align: left;
  width: 100%;
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const ExperienceName = styled.div`
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 26px;
  word-break: break-word;
  font-weight: 700;
  text-align: left;
  width: 100%;
  span { display: block; }
  span:last-child { font-weight: 400; }
  @media (max-width: 900px) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
`;

const ExperienceImageBlock = styled.div`
  width: 864px;
  height: 520px;
  position: relative;
  overflow: hidden;
  outline: 6px #835EED solid;
  background: #F8F6FF;
  border-radius: 6px;
  @media (max-width: 900px) {
    width: 100%;
    max-width: 864px;
    height: calc(100vw * 9 / 16);
    max-height: 450px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: calc(100vw * 9 / 16);
    max-height: 350px;
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
  background: #f0f0f0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  align-items: center;
  @media (max-width: 1366px) and (min-width: 601px) {
    justify-content: flex-start; /* 태블릿에서 왼쪽 정렬 */
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: flex-start; /* 모바일에서 왼쪽 정렬 */
  }
`;

const VerticalLine = styled.div`
  width: 3px;
  min-width: 3px;
  height: 52px;
  background: #835EEB;
  margin-right: 16px;
  border-radius: 2px;
  @media (max-width: 1366px) and (min-width: 601px) {
    display: block; /* 태블릿에서 막대 표시 */
  }
  @media (max-width: 900px) {
    display: block; /* 모바일에서 막대 표시 */
    height: 20px;
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    display: block; /* 모바일에서 막대 표시 */
    height: 16px;
    margin-top: 18px;
  }
`;



const AnimatedTextContent = styled.div`
  opacity: 1;
  transform: translateY(0);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s ease-in;
  }
  
  &.fade-out {
    opacity: 0;
    transform: translateY(0);
    transition: all 0.2s ease-out;
  }
  
  &.fade-in {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s ease-in;
  }
`;



const VideoSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px; /* ExperienceImageBlock의 outline과 일치 */
  contain: layout style paint;
  isolation: isolate;
`;

const VideoTrack = styled.div`
  display: flex;
  height: 100%;
  will-change: transform;
  position: relative;
`;

const VideoSlide = styled.div`
  width: 100%; /* VideoSlider와 같은 크기 */
  height: 100%;
  flex-shrink: 0;
  position: relative;
`;



const FeatureSectionWrapper = styled.div`
  width: 1280px;
  margin: 0 auto 150px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 150px;
  padding: 0;
  scroll-snap-type: y mandatory;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    display: none; /* 태블릿에서는 IntegratedSection 사용 */
  }
  
  @media (max-width: 600px) {
    display: flex; /* 모바일에서는 다시 표시 */
    width: 100%;
    margin: 0 auto 80px auto;
    gap: 40px;
    padding: 0 20px;
  }
`;

const FeatureBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding-left: 0px;
  scroll-snap-align: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  @media (max-width: 375px) {
    width: 343px;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;

const AnimatedFeatureBox = styled(FeatureBox)<{ className?: string }>`
  opacity: 0;
  &.visible {
    animation: ${fadeInUp} 0.8s ease forwards;
  }
`;

const FeatureTextBlock = styled.div<{ isVisible?: boolean }>`
  width: 500px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin: 0;
  margin-left: 0px;
  opacity: ${props => props.isVisible ? 1 : 0.3};
  transform: translateX(${props => props.isVisible ? '0' : '-30px'}) scale(${props => props.isVisible ? '1.05' : '1'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  filter: none;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0;
    opacity: 1;
    transform: none;
    text-align: center;
  }
  @media (max-width: 375px) {
    width: 343px;
    gap: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;



const FeatureMainTitle = styled.div`
  justify-content: flex-start;
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
  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    text-align: center !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #835EEB;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
    white-space: normal;
    width: 100%;
    
    br {
      display: block;
    }
  }
`;

const HighlightedText = styled.span<{ isVisible: boolean }>`
  display: inline-block;
  width: fit-content;
  background: linear-gradient(180deg, transparent 0%, transparent 50%, #F3EFFD 50%, #F3EFFD 100%);
  background-size: 0% 50%;
  background-repeat: no-repeat;
  background-position: left bottom;
  box-sizing: border-box;
  ${props => props.isVisible && css`
    animation: ${highlightAnimation} 1.5s ease-out 0.3s forwards;
  `}
  @media (max-width: 600px) {
    display: inline-block;
    width: fit-content;
    background: linear-gradient(180deg, transparent 0%, transparent 50%, #F3EFFD 50%, #F3EFFD 100%);
    background-size: 0% 50%;
    background-repeat: no-repeat;
    background-position: left bottom;
    box-sizing: border-box;
    text-align: center;
    ${props => props.isVisible && css`
      animation: ${highlightAnimation} 1.5s ease-out 0.3s forwards;
    `}
  }
`;

const FeatureCategory = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #F3EFFD;
  overflow: hidden;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  width: fit-content;
  height: 26px;
  @media (max-width: 600px) {
    width: fit-content;
    height: 18px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 3px;
    padding-bottom: 3px;
    background: #F3EFFD;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
  }
`;

const FeatureCategoryText = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 26px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: #835EEB;
    font-size: 10px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 13px;
    word-wrap: break-word;
  }
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
  @media (max-width: 600px) {
    opacity: 0.60;
    text-align: center !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4B4B4B;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 17.40px;
    word-wrap: break-word;
    max-width: 100%;
  }
`;

const GifBox = styled.div<{ isZoomed?: boolean }>`
  width: 100%;
  max-width: 730px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background: #F8F6FF !important;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  border: 2px solid #835EEB;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: scale(${props => props.isZoomed ? '1.15' : '1'});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
  margin: 0;
  filter: none;
  /* 배경색이 어떤 경우에도 변하지 않도록 강제 */
  &::before, &::after {
    background: transparent !important;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    position: relative;
    background: #835EEB;
    border: 1px #835EEB solid;
    transform: none;
    margin: 0 auto;
  }
  @media (max-width: 375px) {
    max-width: 280px;
    border-radius: 8px;
  }
`;



// 모바일 및 태블릿 데모 슬라이드 컴포넌트들
const MobileDemoSlider = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    gap: 30px;
    padding: 0 40px;
  }
`;

const MobileDemoSlideContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const MobileDemoSlide = styled.div<{ noTransition?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: ${props => props.noTransition ? 'none' : 'transform 1.2s ease-in-out'};
  flex-shrink: 0;
  
  @media (max-width: 1366px) and (min-width: 601px) {
    padding: 0 20px;
  }
`;

// 태블릿 웹앱 연동 섹션용 컨테이너들
const TeacherWebsiteContainer = styled.div`
  position: absolute;
  top: 8%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  
  @media (min-width: 1025px) and (max-width: 1366px) {
    top: calc(8% - 500px);
  }
`;

const StudentAppContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  
  @media (min-width: 1025px) and (max-width: 1366px) {
    bottom: calc(15% - 500px);
  }
`;

// 웹앱 연동 섹션용 정보 row 스타일
const WebAppInfoRow = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 48px 0 0 0;
  box-sizing: border-box;
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    transform: scale(0.9);
    transform-origin: center center;
    gap: 36px;
  }
  
  @media (max-width: 1366px) and (min-width: 1025px) {
    transform: scale(0.75);
    transform-origin: center center;
    gap: 30px;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
    padding: 32px 4vw 0 4vw;
    align-items: stretch;
    transform: none;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
    padding: 24px 0 0 0;
    align-items: center;
    transform: none;
  }
`;
const WebAppInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  min-width: 220px;
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    gap: 16px;
    min-width: 200px;
  }
  
  @media (max-width: 1366px) and (min-width: 1025px) {
    gap: 14px;
    min-width: 180px;
  }
  
  @media (max-width: 600px) {
    align-items: center !important;
    text-align: center !important;
    min-width: 0;
    width: 100%;
    gap: 14px;
  }
`;
const WebAppInfoTitle = styled.div<{ isVisible?: boolean; delay?: number }>`
  color: #835EEB;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  white-space: normal;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay || 0}ms;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 34px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 32px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 28px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 24px;
  }
  
  @media (max-width: 600px) {
    font-size: 26px;
    margin-bottom: 6px;
  }
`;
const WebAppInfoChips = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    gap: 9px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    gap: 9px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    gap: 8px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    gap: 7px;
  }
  
  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 8px;
  }
`;
const WebAppInfoChip = styled.div<{ isVisible?: boolean; delay?: number }>`
  background: #F3EFFD;
  color: #835EEB;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 20px;
  display: inline-block;
  width: max-content;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay || 0}ms;
  
  /* 1920px에서 1600px까지 점진적으로 축소 */
  @media (max-width: 1920px) and (min-width: 1601px) {
    font-size: 21px;
    padding: 9px 23px;
  }
  
  /* 1600px에서 1366px까지 점진적으로 축소 */
  @media (max-width: 1600px) and (min-width: 1367px) {
    font-size: 20px;
    padding: 9px 22px;
  }
  
  /* 1366px에서 1025px까지 점진적으로 축소 */
  @media (max-width: 1366px) and (min-width: 1025px) {
    font-size: 18px;
    padding: 8px 20px;
  }
  
  /* 1025px에서 820px까지 점진적으로 축소 */
  @media (max-width: 1024px) and (min-width: 821px) {
    font-size: 16px;
    padding: 7px 18px;
  }
  
  @media (max-width: 600px) {
    font-size: 15px;
    padding: 5px 12px;
    border-radius: 12px;
  }
`;

export default Body;