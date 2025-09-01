/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

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
    transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1.05);
  }
`;

// 제거: 미사용 keyframes textSlideIn
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

// 제거: 미사용 keyframes textSlideOut
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

// 제거: 미사용 keyframes textFadeIn
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

// 제거: 미사용 keyframes titleSlideIn
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

// 제거: 미사용 keyframes quoteSlideIn
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

// 제거: 미사용 keyframes nameSlideIn
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
  // 모바일 핵심기능 박스들을 위한 ref 배열 (스크롤 인터랙션)
  const mobileFeatureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
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

// 제거: 미사용 TitleHighlight
const TitleHighlight = styled.span`
  color: #835eeb;
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

// 제거: 미사용 SectionTitleText
const SectionTitleText = styled.div`
  width: 100%;
  max-width: 1280px;
  text-align: center;
  color: #835eeb;
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

// 제거: 미사용 FeatureGrid
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
  border: 2px #835eeb solid;
  transition: all 0.3s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(131, 94, 235, 0.03) 50%,
      transparent 100%
    );
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
  line-height: 38.4px;
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
      border-color: #9c7eef;
      box-shadow: 0 10px 20px rgba(131, 94, 235, 0.15);
    }

    ${FeatureTitle} {
      color: #835eeb;
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
  opacity: 0.6;
  color: #4b4b4b;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 300;
  line-height: 34.8px;
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

// 제거: 미사용 AnimatedSectionTitle
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

// 제거: 미사용 PlatformCard
const PlatformCard = styled.div`
  width: 250px;
  height: 400px;
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 15px;
  outline: 2px #835eeb solid;
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

// 제거: 미사용 IconCircle
const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  background: #835eeb;
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

// 제거: 미사용 PlatformTitle
const PlatformTitle = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835eeb;
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

// 제거: 미사용 PlatformFeatures
const PlatformFeatures = styled.div`
  width: 230px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #33373b;
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

// 제거: 미사용 SyncSection
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

// 제거: 미사용 SyncIcon
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

  background: #835eeb;
  border-radius: 100px;
  animation: ${blink} 2s ease-in-out infinite;
`;

// 제거: 미사용 ArrowIcon
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
      content: "";
      position: absolute;
      left: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(-35deg);
      transform-origin: left bottom;
    }
    
    &::after {
      content: "";
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
      content: "";
      position: absolute;
      right: 0;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(35deg);
      transform-origin: right bottom;
    }
    
    &::after {
      content: "";
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

// 제거: 미사용 CheckBox
const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  background: #835eeb;
  border-radius: 4px;
  margin-right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
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

// 제거: 미사용 FeatureItem
const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  color: #33373b;
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

// 제거: 미사용 SyncTitle
const SyncTitle = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #835eeb;
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

// 제거: 미사용 SyncSubtitle
const SyncSubtitle = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: #33373b;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 18.2px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const DemoSection = styled.div`
  align-self: stretch;
  background: #9c7eef;
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
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(131, 94, 235, 0.1);
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }
  
  span {
    color: #835eeb;
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
    box-shadow:
      0px 8px 25px rgba(131, 94, 235, 0.3),
      0px 0px 20px rgba(131, 94, 235, 0.1);
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

// 제거: 미사용 keyframes slideLeftMobile
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

// 제거: 미사용 FeatureBoxContent
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
    color: #33373b;
    font-size: 29.58px;
    font-family: "Pretendard", sans-serif;
    font-weight: 700;
    line-height: 44.36px;
    word-wrap: break-word;
    margin: 0;
  }
`;

// 제거: 미사용 FeatureImage
const FeatureImage = styled.div<{ image: string }>`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(131, 94, 235, 0.08),
      rgba(107, 75, 196, 0.08)
    );
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

// 제거: 미사용 StatsSection
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

// 제거: 미사용 StatBox
const StatBox = styled.div`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
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

// 제거: 미사용 StatText
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

// 제거: 미사용 TabContainer
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

// 제거: 미사용 TabTitle
const TabTitle = styled.h2`
  color: #33373b;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 62.4px;
  text-align: center;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

// 제거: 미사용 MoreButton
const MoreButton = styled.button`
  margin-top: 20px;
  padding: 16px 32px;
  background: #835eeb;
  color: white;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6b4cd3;
    transform: translateY(-2px);
  }
`;

// 제거: 미사용 Tabs
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

// 제거: 미사용 TabButton
const TabButton = styled.button<{ $active: boolean }>`
  padding: 12px 32px;
  border-radius: 24px;
  border: none;
  background: ${({ $active }) => ($active ? "#835EEB" : "#E5D8FB")};
  color: ${({ $active }) => ($active ? "white" : "#835EEB")};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// 제거: 미사용 SlideContainer
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

// 제거: 미사용 SlideTitle
const SlideTitle = styled.div`
  background: #835eeb;
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

// 제거: 미사용 SlideDesc
const SlideDesc = styled.div`
  color: #6b5b8c;
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

// 제거: 미사용 SlideBox
const SlideBox = styled.div`
  width: 100%;
  height: 320px;
  background: white;
  border-radius: 18px;
  border: 2px solid #bfa8f6;
  box-sizing: border-box;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 32px;
  color: #835eeb;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: #6b4bc4;
  }
  box-sizing: border-box;
`;

// 제거: 미사용 ArrowLeft
const ArrowLeft = styled(ArrowButton)`
  left: -48px;
  @media (max-width: 600px) {
    left: -24px;
  }
`;
// 제거: 미사용 ArrowRight
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

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  index,
  imageSrc,
  category,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add(
            index % 2 === 0 ? "visible-left" : "visible-right",
          );
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [index]);

  return (
    <AnimatedFeatureCard ref={cardRef}>
      {category && (
        <FeatureCategory>
          <FeatureCategoryText>{category}</FeatureCategoryText>
        </FeatureCategory>
      )}
      <ImagePlaceholder>
        {imageSrc && (
          <img 
            src={imageSrc}
            alt={title}
            style={{ 
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "18px",
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
  const [textAnimationState, setTextAnimationState] = useState<
    "visible" | "fade-out" | "fade-in"
  >("visible");
  const [zoomedBoxes, setZoomedBoxes] = useState<Set<number>>(new Set());
  const [visibleTexts, setVisibleTexts] = useState<Set<number>>(new Set());
  const featureBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentDemoSlide, setCurrentDemoSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDemoMobile, setIsDemoMobile] = useState(false); // 데모 섹션 전용 모바일 상태
  

  
  // 칩과 텍스트 위치 조정을 위한 상태
  const [teacherInfoPosition, setTeacherInfoPosition] = useState<{
    top: string;
    left: string;
  }>(() => {
    // localStorage에서 저장된 값 불러오기
    const saved = localStorage.getItem("teacherInfoPosition");
    return saved ? JSON.parse(saved) : { top: "90px", left: "230px" };
  });
  
  const [studentInfoPosition, setStudentInfoPosition] = useState<{
    bottom: string;
    right: string;
  }>(() => {
    // localStorage에서 저장된 값 불러오기
    const saved = localStorage.getItem("studentInfoPosition");
    return saved ? JSON.parse(saved) : { bottom: "80px", right: "210px" };
  });

  // 위치 고정 모드 (화면 크기 변경 시에도 위치 유지)
  const [lockPositions, setLockPositions] = useState<boolean>(() => {
    const saved = localStorage.getItem("lockPositions");
    return saved ? JSON.parse(saved) : false;
  });
  
  // 웹앱 연동 이미지 상태 관리
  const [webappImageSrc, setWebappImageSrc] = useState("/Body/mockups/2440px.svg");
  
  // 칩과 텍스트 위치 조정 함수
  const adjustInfoPositions = (
    teacherTop: string,
    teacherLeft: string,
    studentBottom: string,
    studentRight: string,
  ) => {
    console.log("위치 조정 함수 호출:", {
      teacherTop,
      teacherLeft,
      studentBottom,
      studentRight,
    });
    
    const newTeacherPosition = { top: teacherTop, left: teacherLeft };
    const newStudentPosition = { bottom: studentBottom, right: studentRight };
    
    setTeacherInfoPosition(newTeacherPosition);
    setStudentInfoPosition(newStudentPosition);
    
    // localStorage에 저장
    localStorage.setItem(
      "teacherInfoPosition",
      JSON.stringify(newTeacherPosition),
    );
    localStorage.setItem(
      "studentInfoPosition",
      JSON.stringify(newStudentPosition),
    );
    
          // 데스크톱 레이아웃 CSS 변수도 설정
    document.documentElement.style.setProperty("--teacher-top", teacherTop);
    document.documentElement.style.setProperty("--teacher-right", teacherLeft);
    document.documentElement.style.setProperty("--student-top", studentBottom);
    document.documentElement.style.setProperty("--student-left", studentRight);
  };
  
  // 기본 위치로 리셋하는 함수 (모바일/컨트롤 패널용)
  const resetInfoPositions = () => {
    console.log("기본 위치로 리셋");
    
    const defaultTeacherPosition = { top: "100px", left: "350px" };
    const defaultStudentPosition = { bottom: "150px", right: "350px" };
    
    setTeacherInfoPosition(defaultTeacherPosition);
    setStudentInfoPosition(defaultStudentPosition);
    
    // localStorage에 기본값 저장
    localStorage.setItem(
      "teacherInfoPosition",
      JSON.stringify(defaultTeacherPosition),
    );
    localStorage.setItem(
      "studentInfoPosition",
      JSON.stringify(defaultStudentPosition),
    );
    
          // 데스크톱 레이아웃 CSS 변수도 갱신
    document.documentElement.style.setProperty("--teacher-top", "100px");
    document.documentElement.style.setProperty("--teacher-right", "350px");
    document.documentElement.style.setProperty("--student-top", "750px");
    document.documentElement.style.setProperty("--student-left", "350px");
  };

  // 위치 상태 변경 감지
  useEffect(() => {
    console.log("선생님 정보 위치 변경:", teacherInfoPosition);
  }, [teacherInfoPosition]);

  useEffect(() => {
    console.log("학생 정보 위치 변경:", studentInfoPosition);
  }, [studentInfoPosition]);
  


  // 테스티모니얼 데이터
  const testimonials = [
    {
      title: { highlight: "체계적인 관리로", normal: "성과 극대화" },
      quote:
        "학생들의 학습 현황을 한눈에 파악하고<br/>효과적으로 지도할 수 있어요",
      name: "중계동 초중고 수학학원<br/>최수연 원장 선생님",
      videoUrl: "https://www.youtube.com/watch?v=_g9OwAA8V5g",
      thumbnailUrl: "https://img.youtube.com/vi/_g9OwAA8V5g/maxresdefault.jpg",
    },
    {
      title: { highlight: "현장의 목소리로", normal: "증명된 효과" },
      quote: "AI 추천 문제를 통해<br/>취약한 단원을 완벽 보완할 수 있어요.",
      name: "을지대 의예과<br/>24학번 김영우 학생",
      videoUrl: "https://www.youtube.com/watch?v=MBQZ4PCuNEQ",
      thumbnailUrl: "https://img.youtube.com/vi/MBQZ4PCuNEQ/maxresdefault.jpg",
    },
    {
      title: { highlight: "AI 기술로", normal: "완성된 학습" },
      quote:
        "개인별 맞춤 학습과 실시간 피드백으로<br/>학습 효과가 눈에 띄게 향상되었어요",
      name: "학부모 후기<br/>초등 5학년 학부모",
      videoUrl: "https://www.youtube.com/watch?v=SaM59JVLZms",
      thumbnailUrl: "https://img.youtube.com/vi/SaM59JVLZms/maxresdefault.jpg",
    },
  ];

  useEffect(() => {
    // Load demo count from localStorage
    const savedCount = localStorage.getItem("demoClickCount");
    if (savedCount) {
      setDemoCount(parseInt(savedCount, 10));
    }
  }, []);

  // 모바일 및 태블릿 감지 (데모 섹션용)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1366); // 태블릿도 모바일 레이아웃 사용
      setIsDemoMobile(window.innerWidth <= 600); // 데모 섹션은 600px 이하만 모바일
      
      // 위치 고정 모드가 활성화된 경우, 화면 크기 변경 시에도 위치 유지
      if (lockPositions) {
        console.log("화면 크기 변경됨, 위치 고정 모드로 위치 유지:", {
          width: window.innerWidth,
          teacherPosition: teacherInfoPosition,
          studentPosition: studentInfoPosition,
        });
        
        // 데스크톱 레이아웃 CSS 변수 업데이트
        document.documentElement.style.setProperty(
          "--teacher-top",
          teacherInfoPosition.top,
        );
        document.documentElement.style.setProperty(
          "--teacher-right",
          teacherInfoPosition.left,
        );
        document.documentElement.style.setProperty(
          "--student-top",
          studentInfoPosition.bottom,
        );
        document.documentElement.style.setProperty(
          "--student-left",
          studentInfoPosition.right,
        );
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [lockPositions, teacherInfoPosition, studentInfoPosition]);

  // 모바일 슬라이드 핸들러
  // 제거: 미사용 데모 슬라이드 제어 함수
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
    setTextAnimationState("fade-out");
    
    // 이미지 슬라이드 전환이 완료된 후 텍스트 페이드 인
    const fadeInTimer = setTimeout(() => {
      setTextAnimationState("fade-in");
    }, 400); // 이미지 슬라이드 전환 중간에 텍스트 페이드 인 시작
    
    const visibleTimer = setTimeout(() => {
      setTextAnimationState("visible");
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

  // 웹앱 연동 이미지 반응형 처리
  useEffect(() => {
    const updateWebappImage = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setWebappImageSrc("/Body/mockups/2440px.svg");
      } else if (width > 1200) {
        setWebappImageSrc("/Body/mockups/1280px.svg");
      } else if (width > 768) {
        setWebappImageSrc("/Body/mockups/768px.svg");
      } else if (width > 425) {
        setWebappImageSrc("/Body/mockups/425px.svg");
      } else {
        setWebappImageSrc("/Body/mockups/2440px.svg"); // 기본값
      }
    };

    updateWebappImage();
    window.addEventListener("resize", updateWebappImage);
    
    return () => {
      window.removeEventListener("resize", updateWebappImage);
    };
  }, []);



  const handleDemoClick = () => {
    const newCount = demoCount + 1;
    setDemoCount(newCount);
    localStorage.setItem("demoClickCount", newCount.toString());
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      },
    );

    // 모바일 핵심기능 박스들을 위한 별도 observer (더 민감한 설정)
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // 요소가 화면 위에서 아래로 내려올 때만 애니메이션 트리거
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px", // 상하 10% 마진으로 더 정확한 타이밍
      },
    );

    const currentHeaderRef = headerRef.current;
    const currentTitleRefs = titleRefs.current;
    const currentFeatureBoxRefs = featureBoxRefs.current;

    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    currentTitleRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // 모바일 핵심기능 박스들은 별도 observer 사용
    currentFeatureBoxRefs.forEach((ref) => {
      if (ref) {
        mobileObserver.observe(ref);
      }
    });

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
      currentTitleRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      currentFeatureBoxRefs.forEach((ref) => {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 설정

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      title: "맞춤형 학습지 제작",
      sub: [
        { label: "AI 기반 실시간 맞춤 문제 추천", gif: "" },
        { label: "오답클리닉 자동 & 무한 배부", gif: "" },
      ],
      desc: "학생이 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.",
      defaultGif: "",
    },
    {
      title: "AI 채점 시스템",
      sub: [
        { label: "서술형 자동 채점", gif: "" },
        { label: "전국 단위 실력 분석", gif: "" },
      ],
      desc: "AI가 학생의 답안을 실시간으로 분석하고<br/>정확한 피드백을 제공합니다.",
      defaultGif: "",
    },
    {
      title: "실시간 피드백",
      sub: [
        { label: "AI 힌트 및 오답 피드백", gif: "" },
        { label: "실시간<br/>질문 게시판", gif: "" },
      ],
      desc: "풀이가 막힐 때 단계별 힌트와<br/>상세한 오답 분석을 제공합니다.",
      defaultGif: "",
    },
  ];

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setActiveSlide(0);
  };
  const handlePrev = () => {
    setActiveSlide((prev) =>
      prev === 0 ? features[activeTab].sub.length - 1 : prev - 1,
    );
  };
  const handleNext = () => {
    setActiveSlide((prev) =>
      prev === features[activeTab].sub.length - 1 ? 0 : prev + 1,
    );
  };

  const [hovered, setHovered] = useState<{
    featureIdx: number;
    subIdx: number | null;
  }>({ featureIdx: 0, subIdx: null });

  // 이미지 클릭 시 스냅 스크롤 핸들러
  const handleImageClick = (index: number) => {
    const element = featureBoxRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetScrollTop =
        scrollTop + rect.top - windowHeight / 2 + elementHeight / 2;
      
      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <BodyContainer ref={ref}>
      <AnimatedHeaderSection ref={headerRef}>
        <Title>
          <TitleText>
            수학대왕에서만 만날 수 있는
            <br />
            특별한 기능을 소개합니다
          </TitleText>
        </Title>
        <Subtitle>AI 기술로 완성된 체계적인 수학 학습 관리 시스템</Subtitle>
      </AnimatedHeaderSection>

      {/* 태블릿용 통합 섹션 */}
      <IntegratedSection>
        <TabletHeader>
          <Title>
            <TitleText>
              수학대왕에서만 만날 수 있는
              <br />
              특별한 기능을 소개합니다
            </TitleText>
          </Title>
          <Subtitle>AI 기술로 완성된 체계적인 수학 학습 관리 시스템</Subtitle>
        </TabletHeader>
        <TabletCardGrid>
          <Feature
            title="1:1 개별 맞춤 학습지"
            description={[
              "AI가 만들어주는",
              "학생별로 서로 다른 실력에 맞게, 최적의 문제로 학습지를 자동 생성해 드려요!",
            ]}
            index={0}
            imageSrc="/Body/images/Body-image-1.png"
            category="학습지 자동 제작"
          />
          <Feature
            title="학습 성과 분석"
            description={[
              "개인별 학습 데이터 분석",
              "자동 오답클리닉으로 모든 취약점을 완벽하게 보완합니다",
            ]}
            index={1}
            imageSrc="/Body/images/Body-image-2.png"
            category="오답 완벽 정복"
          />
          <Feature
            title="서술형 자동 채점"
            description={[
              "필기 인식 기술로",
              "서술형 답안을 정확하게 자동 채점합니다",
            ]}
            index={2}
            imageSrc="/Body/images/Body-image-3.png"
            category="AI 채점 시스템"
          />
          <Feature
            title="전국 단위 실력 분석"
            description={[
              "AI 채점 시스템으로",
              "전국 학생들과 비교한 객관적인 실력 분석 리포트를 제공합니다",
            ]}
            index={3}
            imageSrc="/Body/images/Body-image-4.png"
            category="AI 채점 시스템"
          />
          <Feature
            title="AI 힌트 및 오답 피드백"
            description={[
              "실시간 피드백으로",
              "풀이가 막힐 때 단계별 힌트와 상세한 오답 분석을 제공합니다",
            ]}
            index={4}
            imageSrc="/Body/images/Body-image-5.png"
            category="실시간 피드백"
          />
          <Feature
            title="실시간 질문 게시판"
            description={[
              "실시간 피드백으로",
              "모르는 문제를 게시판에 질문하고 빠르게 답변을 받아 볼 수 있습니다",
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
          ref={(el) => {
            featureBoxRefs.current[0] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(0)}>
            <FeatureCategory>
              <FeatureCategoryText>학습지 자동 제작</FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              AI가 만들어주는
              <br />
              <HighlightedText isVisible={visibleTexts.has(0)}>
                1:1 개별 맞춤 학습지
              </HighlightedText>
            </FeatureMainTitle>
            <FeatureDesc>
              학생별로 서로 다른 실력에 맞게,
              <br />
              최적의 문제로 학습지를 자동 생성해 드려요!
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(0)}
            onClick={() => handleImageClick(0)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src="/Body/images/Body-image-1.png"
              alt="핵심기능1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                background: "transparent",
              }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 2번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={(el) => {
            featureBoxRefs.current[1] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(1)}>
            <FeatureCategory>
              <FeatureCategoryText>오답 완벽 정복</FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              <HighlightedText isVisible={visibleTexts.has(1)}>
                자동 오답 클리닉
              </HighlightedText>
              무한 제공
            </FeatureMainTitle>
            <FeatureDesc>
              더 이상 틀리지 않을 때까지,
              <br />
              오답 유사 문제를 자동으로 출제해 드려요!
            </FeatureDesc>
            </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(1)}
            onClick={() => handleImageClick(1)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src="/Body/images/Body-image-2.png"
              alt="핵심기능2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                background: "transparent",
              }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 3번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={(el) => {
            featureBoxRefs.current[2] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(2)}>
            <FeatureCategory>
              <FeatureCategoryText>AI 채점 시스템</FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              서술형
              <br />
              자동 채점
            </FeatureMainTitle>
            <FeatureDesc>
              필기 인식 기술로 서술형 답안을
              <br />
              정확하게 자동 채점합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(2)}
            onClick={() => handleImageClick(2)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src="/Body/images/Body-image-3.png"
              alt="핵심기능3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                background: "transparent",
              }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 4번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={(el) => {
            featureBoxRefs.current[3] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(3)}>
            <FeatureCategory>
              <FeatureCategoryText>AI 채점 시스템</FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              전국 단위
              <br />
              실력 분석
            </FeatureMainTitle>
            <FeatureDesc>
              전국 학생들과 비교한
              <br />
              객관적인 실력 분석 리포트를 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(3)}
            onClick={() => handleImageClick(3)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src="/Body/images/Body-image-4.png"
              alt="핵심기능4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                background: "transparent",
              }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 5번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={(el) => {
            featureBoxRefs.current[4] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(4)}>
            <FeatureCategory>
              <FeatureCategoryText>실시간 피드백</FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              AI 힌트 및<br />
              오답 피드백
            </FeatureMainTitle>
            <FeatureDesc>
              풀이가 막힐 때 단계별 힌트와
              <br />
              상세한 오답 분석을 제공합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(4)}
            onClick={() => handleImageClick(4)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src="/Body/images/Body-image-5.png"
              alt="핵심기능5"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                background: "transparent",
              }}
            />
          </GifBox>
        </AnimatedFeatureBox>
        {/* 6번 FeatureBox */}
        <AnimatedFeatureBox 
          ref={(el) => {
            featureBoxRefs.current[5] = el;
          }}
        >
          <FeatureTextBlock isVisible={visibleTexts.has(5)}>
            <FeatureCategory>
              <FeatureCategoryText>실시간 피드백</FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              실시간
              <br />
              질문 게시판
            </FeatureMainTitle>
            <FeatureDesc>
              모르는 문제를 게시판에 질문하고
              <br />
              빠르게 답변을 받아 볼 수 있습니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox 
            isZoomed={zoomedBoxes.has(5)}
            onClick={() => handleImageClick(5)}
            style={{ cursor: "pointer" }}
          >
            <img 
              src="/Body/images/Body-image-6.png"
              alt="핵심기능6"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                background: "transparent",
              }}
            />
          </GifBox>
        </AnimatedFeatureBox>
      </FeatureSectionWrapper>

      <DemoSection>
        <DemoHeader>
          <DemoTitle>
            수학대왕 APP 기능을
            <br />
            직접 체험해보세요!
          </DemoTitle>
          <DemoSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는
            <br />
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
                  "/Body/slides/feature-slide-7.png",
                ].map((image, index) => (
                  <MobileDemoSlide 
                    key={index}
                    noTransition={noTransition}
                    style={{
                      transform: `translateX(-${currentDemoSlide * 100}%)`,
                    }}
                  >
                    <div 
                      style={{
                        width: "320px",
                        height: "320px",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "20px",
                        position: "relative",
                      }}
                    />
                  </MobileDemoSlide>
                ))}
              </MobileDemoSlideContainer>
            </MobileDemoSlider>
          ) : (
            <FeatureBoxFlow>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-1.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-3.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-4.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-5.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-6.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-7.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              {/* 무한 반복을 위한 복제된 이미지들 */}
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-1.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-3.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-4.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-5.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-6.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
              <FeatureBoxSlide>
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: "url(/Body/slides/feature-slide-7.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "24px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(131, 94, 235, 0.08), rgba(107, 75, 196, 0.08))",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </FeatureBoxSlide>
            </FeatureBoxFlow>
          )}
        </DemoContent>
      </DemoSection>

      {/* 웹앱연동 섹션 */}
      <WebAppSection>
        <WebAppHeader>
          <WebAppTitle>
            웹-앱 연동으로 완성되는
            <br />
            교육 시스템
                </WebAppTitle>
          <WebAppSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는
            <br />
            완벽한 교육 생태계를 경험하세요
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
        
                      <WebAppContent>
          {/* 2440px 이미지 중앙 배치 */}
                <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            width: "100%"
          }}>
                          {/* 데스크탑 버전: 반응형 이미지 */}
              <img 
                src={webappImageSrc}
                alt="웹앱 연동 시스템"
                style={{ 
                  width: "2440px",
                  height: "auto",
                  transition: "all 0.3s ease", // 부드러운 크기 변화
                }}
                className="responsive-svg-image desktop-webapp"
              />
              
              {/* 모바일용 3번 이미지 */}
              <img 
                src="/WebApp/integration/3.svg" 
                alt="웹앱 연동 시스템 모바일"
                style={{
                  width: "150px",
                  height: "auto",
                  position: "absolute",
                  left: "10%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  display: "none"
                }}
                className="mobile-webapp-3"
              />
              
              {/* 모바일용 4번 이미지 */}
              <img 
                src="/WebApp/integration/4.svg" 
                alt="웹앱 연동 시스템 상세"
                style={{
                  width: "200px",
                  height: "auto",
                  position: "absolute",
                  right: "20%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  display: "none"
                }}
                className="mobile-webapp-4"
              />
              
              {/* 화살표 이미지 */}
              <img 
                src="/WebApp/integration/arrow.svg" 
                alt="실시간 동기화"
                style={{
                  width: "100px",
                  height: "auto",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 5,
                  display: "none"
                }}
                className="webapp-arrow"
              />
              
              {/* 425px.svg 이미지 (426px~767px 구간용) */}
              <img 
                src="/Body/mockups/425px.svg"
                alt="웹앱 연동 시스템 태블릿"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  zIndex: 20,
                  display: "none"
                }}
                className="tablet-425px-image"
              />
              
              {/* 동기화 텍스트 */}
              <div 
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#835eeb",
                  fontSize: "32px",
                  fontFamily: "Godo B",
                  fontWeight: "400",
                  lineHeight: "38px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  maxWidth: "200px",
                  zIndex: 5,
                  display: "none"
                }}
                className="sync-text"
              >
                실시간 동기화
              </div>
              
              {/* 선생님용 정보 컨테이너 (학생용 칩 위치로 이동) */}
              <div 
                style={{ 
                  position: "absolute",
                  left: "calc(15% - 50px)",
                  top: "calc(20% + 400px)",
                  zIndex: 15,
                  display: "none"
                }}
                className="teacher-info"
              >
                <div style={{ 
                  color: "#835EEB", 
                  fontSize: "20px", 
                  fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: "700",
                  marginBottom: "12px",
                  textAlign: "center"
                }}>
                  선생님용 웹사이트
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  클래스 및 학생 관리
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  맞춤형 문제 출제
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  AI 채점 결과 확인
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  실력 분석 리포트
                </div>
              </div>
              
              {/* 학생용 정보 컨테이너 (3번 목업 오른쪽으로 이동) */}
              <div 
                style={{ 
                  position: "absolute",
                  left: "calc(10% + 155px)",
                  top: "calc(50% - 420px)",
                  zIndex: 15,
                  display: "none"
                }}
                className="student-info"
              >
                <div style={{ 
                  color: "#835EEB", 
                  fontSize: "20px", 
                  fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: "700",
                  marginBottom: "12px",
                  textAlign: "center"
                }}>
                  학생용 모바일 앱
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  맞춤형 학습지 수신
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  AI 힌트 시스템
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  실시간 채점 피드백
                </div>
                <div style={{ 
                  backgroundColor: "#f3effd",
                  color: "#835eeb",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                  boxShadow: "0 2px 4px rgba(131, 94, 235, 0.1)"
                }}>
                  장학금 알림 수신
                </div>
              </div>
                </div>
              </WebAppContent>
      </WebAppSection>

      {/* 현장의 목소리 섹션 */}
      <ExperienceSection>
        <ExperienceInner>
          <ExperienceTextBlock>
            <AnimatedTextContent className={textAnimationState}>
              <div>
                <ExperienceTitle>
                  {
                    testimonials[currentTestimonial % testimonials.length].title
                      .highlight
                  }
                  <br />
                  {
                    testimonials[currentTestimonial % testimonials.length].title
                      .normal
                  }
                </ExperienceTitle>
              </div>
              <div>
                <ExperienceQuote>
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        testimonials[currentTestimonial % testimonials.length]
                          .quote,
                    }}
                  />
                </ExperienceQuote>
              </div>
              <NameSection>
                <VerticalLine />
                <div>
                  <ExperienceName>
                    {testimonials[currentTestimonial % testimonials.length].name
                      .split("<br/>")
                      .map((line, idx) => (
                        <span
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
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
                  transition: isTransitioning
                    ? "transform 1s ease-in-out"
                    : "none",
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

/* 웹앱연동 섹션 관련 styled components 제거됨 */

/* 캔버스 구조 제거됨 - 더 간단한 레이아웃으로 변경 */

/* 제거: 사용하지 않는 MockupGroupsRow, MockupGroupCol */

/* 제거: 사용하지 않는 MockupElement */

const AnimatedMockupElement = styled.div<{ $isVisible: boolean; delay?: number }>`
  position: absolute;
  cursor: pointer;
  opacity: ${p => (p.$isVisible ? 1 : 0)};
  transform: translateY(${p => (p.$isVisible ? '0' : '30px')});
  transition: all .8s cubic-bezier(0.4,0,0.2,1);
  transition-delay: ${p => p.delay || 0}ms;
  &:hover { z-index: 15; }
  @media (max-width: 600px) { display: none; } /* 데스크톱 섹션이므로 모바일에서는 숨김 */
`;

/* px 고정 좌표들 — 같은 프레임에서 함께 스케일됨 */
const CenterMockupElement = styled(AnimatedMockupElement)`
  top: 350px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 11;
`;

const TeacherMockupElement = styled(AnimatedMockupElement)`
  top: 145px; left: -160px; z-index: 12; transform-origin: left center;
`;

const DesktopMockupElement = styled(AnimatedMockupElement)`
  top: 430px; right: -400px; z-index: 11; transform-origin: right center;
`;

const AnimatedSyncText = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 220px;
  left: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #835eeb;
  font-size: 42px;
  font-family: "Godo B";
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.5px;
  word-wrap: break-word;
  z-index: 20;
  text-align: center;
  white-space: nowrap;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translate(-50%, 0)
    ${(props) => (props.isVisible ? "scale(1)" : "scale(0.8)")};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  
  /* 768px 이상에서는 위치 고정 */
  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 50px;
    top: 220px;
  }
  
  /* 768px 이하에서는 화면 크기에 따라 동적 조정 */
  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 46px;
    top: calc(220px - (768px - 100vw) * 0.05);
  }
  
  @media (max-width: 600px) {
    font-size: 34px;
    line-height: 42px;
    top: calc(220px - (600px - 100vw) * 0.07);
  }
  
  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 38px;
    top: calc(220px - (500px - 100vw) * 0.08);
  }
  
  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 34px;
    top: calc(220px - (400px - 100vw) * 0.09);
  }
`;

const AnimatedMobileSyncText = styled.div<{ isVisible: boolean }>`
  left: 50%; 
  top: 50%; 
  position: absolute; 
  justify-content: center; 
  display: flex; 
  flex-direction: column; 
  color: #835eeb;
  font-size: 32px; 
  font-family: "Godo B";
  font-weight: 400; 
  line-height: 41.6px;
  word-wrap: break-word;
  z-index: 1;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translate(-50%, -50%)
    ${(props) => (props.isVisible ? "scale(1)" : "scale(0.8)")};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const AnimatedArrow = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  --rotation: 0deg; /* CSS 변수로 회전 각도 제어 */
  transform: translate(-50%, -50%) rotate(var(--rotation));
  width: 300px; /* 기본 크기 감소: 400px → 300px (-100px) */
  height: 500px; /* 기본 크기 감소: 600px → 500px (-100px) */
  z-index: 5; /* 기본 z-index를 5로 변경하여 더 나은 레이어링 */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 기본 스타일 */
  background: url("/WebApp/integration/circle.svg") no-repeat center;
  background-size: contain;
  
  /* 애니메이션 조합 */
  animation:
    ${arrowBreathe} 3s ease-in-out infinite,
    ${arrowGlow} 2s ease-in-out infinite;
  
  /* 데스크탑에서 더 크게 표시 및 145도 회전 */
  @media (min-width: 820px) {
    width: 400px; /* 크기 감소: 500px → 400px (-100px) */
    height: 600px; /* 크기 감소: 700px → 600px (-100px) */
    z-index: 5; /* 데스크탑에서는 목업 이미지 뒤에 배치 */
    --rotation: 145deg; /* 125도 → 145도 회전 */
  }
  
  @media (min-width: 1200px) {
    width: 500px; /* 크기 감소: 600px → 500px (-100px) */
    height: 700px; /* 크기 감소: 800px → 700px (-100px) */
    --rotation: 145deg; /* 125도 → 145도 회전 */
  }
  
  @media (min-width: 1600px) {
    width: 600px; /* 크기 감소: 700px → 600px (-100px) */
    height: 800px; /* 크기 감소: 900px → 800px (-100px) */
    --rotation: 145deg; /* 125도 → 145도 회전 */
  }
`;

/* 제거: 사용하지 않는 태블릿 관련 스타일 */

/* 웹앱 정보 텍스트 컨테이너 */
const WebAppInfoTextContainer = styled.div`
  /* 기본 스타일 */
  overflow: visible;
  max-width: 100%;
`;

/* 제거: 사용하지 않는 WebAppTextContainer */

/* 선생님용 웹사이트 정보 텍스트 컨테이너 */
const TeacherInfoContainer = styled(WebAppInfoTextContainer)`
  position: absolute;
  top: 80px;
  right: 250px; /* 오른쪽으로 100px 이동: 350px → 250px */
  z-index: 21; /* 텍스트 레이어 상위 */
  max-width: 280px;
  overflow: visible;
  
  @media (max-width: 1600px) {
    right: 200px; /* 300px → 200px */
    max-width: 260px;
  }
  
  @media (max-width: 1400px) {
    right: 150px; /* 250px → 150px */
    max-width: 240px;
  }
  
  @media (max-width: 1280px) {
    right: 100px; /* 200px → 100px */
    max-width: 220px;
  }
  
  @media (max-width: 1024px) {
    right: 50px; /* 150px → 50px */
    max-width: 200px;
  }
  
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 20px 0;
    text-align: center;
  }
`;

/* 학생용 모바일 앱 정보 텍스트 컨테이너 */
const StudentInfoContainer = styled(WebAppInfoTextContainer)`
  position: absolute;
    top: 770px;
    left: 470px; /* 왼쪽으로 100px 이동: 370px → 470px */
  z-index: 21; /* 텍스트 레이어 상위 */
  max-width: 280px;
  overflow: visible;
  
  @media (max-width: 1600px) {
      left: 420px; /* 320px → 420px */
    max-width: 260px;
  }
  
  @media (max-width: 1400px) {
      left: 370px; /* 270px → 370px */
    max-width: 240px;
  }
  
  @media (max-width: 1280px) {
      left: 320px; /* 220px → 320px */
    max-width: 220px;
  }
  
  @media (max-width: 1024px) {
      left: 270px; /* 170px → 270px */
    max-width: 200px;
  }
  
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 20px 0;
    text-align: center;
  }
`;

const ExperienceSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 800px;
  padding: 40px 0; /* 기본 상/하 40px (>=1025px) */
  scroll-snap-align: start;
  
  @media (max-width: 900px) {
    padding: 34px 0; /* 601–900px 합계 64px (웹앱 30 + 유튜브 34) */
  }
  
  @media (max-width: 600px) {
    min-height: 700px;
    padding: 28px 0; /* 모바일에서도 더 축소 */
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
  color: #33373b;
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
  color: #33373b;
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
  color: #835eeb;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 26px;
  word-break: break-word;
  font-weight: 700;
  text-align: left;
  width: 100%;
  span {
    display: block;
  }
  span:last-child {
    font-weight: 400;
  }
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
  outline: 6px #835eed solid;
  background: #f8f6ff;
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
    content: "";
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
  background: #835eeb;
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
  opacity: ${(props) => (props.isVisible ? 1 : 0.3)};
  transform: translateX(${(props) => (props.isVisible ? "0" : "-30px")})
    scale(${(props) => (props.isVisible ? "1.05" : "1")});
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
  color: #835eeb;
  font-size: 40px;
  font-family: "Pretendard", sans-serif;
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
    color: #835eeb;
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
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    #f3effd 50%,
    #f3effd 100%
  );
  background-size: 0% 50%;
  background-repeat: no-repeat;
  background-position: left bottom;
  box-sizing: border-box;
  ${(props) =>
    props.isVisible &&
    css`
    animation: ${highlightAnimation} 1.5s ease-out 0.3s forwards;
  `}
  @media (max-width: 600px) {
    display: inline-block;
    width: fit-content;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 50%,
      #f3effd 50%,
      #f3effd 100%
    );
    background-size: 0% 50%;
    background-repeat: no-repeat;
    background-position: left bottom;
    box-sizing: border-box;
    text-align: center;
    ${(props) =>
      props.isVisible &&
      css`
      animation: ${highlightAnimation} 1.5s ease-out 0.3s forwards;
    `}
  }
`;

const FeatureCategory = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #f3effd;
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
    background: #f3effd;
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
  color: #835eeb;
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
    color: #835eeb;
    font-size: 10px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 13px;
    word-wrap: break-word;
  }
`;

const FeatureDesc = styled.div`
  opacity: 0.6;
  color: #4b4b4b;
  font-size: 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  line-height: 34.8px;
  text-align: left;
  width: 100%;
  max-width: 450px;
  @media (max-width: 600px) {
    opacity: 0.6;
    text-align: center !important;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4b4b4b;
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 17.4px;
    word-wrap: break-word;
    max-width: 100%;
  }
`;

const GifBox = styled.div<{ isZoomed?: boolean }>`
  width: 100%;
  max-width: 730px;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background: #f8f6ff !important;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  border: 2px solid #835eeb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: scale(${(props) => (props.isZoomed ? "1.15" : "1")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
  margin: 0;
  filter: none;
  /* 배경색이 어떤 경우에도 변하지 않도록 강제 */
  &::before,
  &::after {
    background: transparent !important;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    position: relative;
    background: #835eeb;
    border: 1px #835eeb solid;
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
  transition: ${(props) =>
    props.noTransition ? "none" : "transform 1.2s ease-in-out"};
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
  max-width: 100%;
  overflow: visible;
  
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;
const WebAppInfoTitle = styled.div<{ isVisible?: boolean; delay?: number }>`
  color: #835eeb;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
  white-space: normal;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${(props) => props.delay || 0}ms;
  
  @media (max-width: 1600px) {
    font-size: 32px;
  }
  
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  
  @media (max-width: 800px) {
    font-size: 18px;
  }
  
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const WebAppInfoChips = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: flex-start;
  
  @media (max-width: 900px) {
    align-items: center;
  }
`;
const WebAppInfoChip = styled.div<{ isVisible?: boolean; delay?: number }>`
  background: #f3effd;
  color: #835eeb;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 20px;
  display: inline-block;
  width: max-content;
  max-width: 100%;
  white-space: normal;
  word-wrap: break-word;
  text-align: center;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${(props) => props.delay || 0}ms;
  
  @media (max-width: 1600px) {
    font-size: 20px;
    padding: 8px 20px;
  }
  
  @media (max-width: 1400px) {
    font-size: 18px;
    padding: 7px 18px;
  }
  
  @media (max-width: 1200px) {
    font-size: 16px;
    padding: 6px 16px;
  }
  
  @media (max-width: 1000px) {
    font-size: 14px;
    padding: 5px 14px;
  }
  
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 4px 12px;
  }
  
  @media (max-width: 600px) {
    font-size: 10px;
    padding: 3px 10px;
    border-radius: 16px;
  }
`;

export default Body;

/* 새로운 웹앱연동 섹션을 위한 styled components */

const WebAppSection = styled.section`
  width: 100%;
  background: white;
  padding: 150px 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
  
  @media (max-width: 1024px) {
    padding: 140px 0 30px 0;
    gap: 60px;
  }
  @media (max-width: 600px) {
    padding: 120px 0 30px 0;
    gap: 40px;
  }
`;

const WebAppHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

const WebAppTitle = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  color: #33373B;
  font-size: 48px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 67.2px;
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 50px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const WebAppSubtitle = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  color: #858585;
  font-size: 28px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 36.4px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

const WebAppButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 425px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const WebAppButton = styled.a`
  padding: 8px 16px;
  background: #33373B;
  border-radius: 40px;
  width: 140px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover { 
    background: #835EEB; 
    transform: translateY(-2px); 
  }
  
  @media (max-width: 425px) {
    width: 140px;
    padding: 8px 16px;
  }
`;

const WebAppIcon = styled.div`
  width: 16px; 
  height: 16px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  
  img{ 
    width:100%; 
    height:100%; 
    object-fit:contain; 
  }
`;

const WebAppButtonText = styled.div`
  color: #fff; 
  font-size: 14px; 
  font-weight: 700; 
  line-height: 21px;
`;

const WebAppContent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  
  /* 2440px 이미지 반응형 처리 - 1280px 이상에서 기본 사용 */
  .responsive-svg-image {
    width: 2440px !important; /* 정사이즈 유지 */
    max-width: none !important;
    height: auto !important;
    transition: all 0.3s ease !important;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
  }
  
  /* 1280px에서 1200px까지: 1280px 이미지 사용 (크롭 상태 유지) */
  @media (max-width: 1280px) {
    .responsive-svg-image {
      width: 100vw !important;
      max-width: 100vw !important;
      margin-left: calc(-50vw + 50%);
      margin-right: calc(-50vw + 50%);
    }
  }
  
  /* 768px에서 1200px까지: 768px 이미지 사용 (크롭 상태 유지) */
  @media (max-width: 1200px) {
    .responsive-svg-image {
      width: 100vw !important;
      max-width: 100vw !important;
      margin-left: calc(-50vw + 50%);
      margin-right: calc(-50vw + 50%);
    }
  }
  
  /* 426px~767px: 425px.svg 이미지 사용 */
  @media (min-width: 426px) and (max-width: 767px) {
    /* 425px.svg 이미지 표시 */
    .tablet-425px-image {
      display: block !important;
      width: 100vw !important;
      max-width: 100vw !important;
      height: auto !important;
      z-index: 10 !important;
      margin-left: calc(-50vw + 50%);
      margin-right: calc(-50vw + 50%);
    }
    
    /* 목업 이미지들 완전 숨김 - 더 강력한 규칙 적용 */
    .mobile-webapp-3,
    .mobile-webapp-4,
    .webapp-arrow,
    .sync-text,
    .student-info,
    .teacher-info {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      position: absolute !important;
      left: -9999px !important;
      top: -9999px !important;
      z-index: -1 !important;
    }
    
    /* 데스크탑 이미지 숨김 */
    .desktop-webapp {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }
  }
  
  /* 425px 이하: 모바일 버전 - 3,4번 이미지와 텍스트+칩 표시 */
  @media (max-width: 425px) {
    /* 모바일 섹션 높이 설정 */
    min-height: 900px !important;
    
    .responsive-svg-image {
      width: 100% !important;
      max-width: 100% !important;
    }
    
    /* 425px.svg 이미지 숨김 */
    .tablet-425px-image {
      display: none !important;
    }
    
    /* 모바일에서 학생용/선생님용 텍스트와 칩 표시 */
    .mobile-webapp-3,
    .mobile-webapp-4,
    .webapp-arrow,
    .sync-text,
    .student-info,
    .teacher-info {
      display: block !important;
    }
    
    /* 데스크탑 이미지 숨김 */
    .desktop-webapp {
      display: none !important;
    }
    
    /* 모바일용 이미지 크기 조정 */
    .mobile-webapp-3 {
      width: 180px !important; /* 1.2배 크기 증가 (150px * 1.2 = 180px) */
      left: calc(10% - 30px) !important; /* 왼쪽으로 30px 이동 */
      top: calc(50% - 280px) !important; /* 위로 300px 더 올림 (기존 calc(50% - 230px)에서 50px 위로) */
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .mobile-webapp-3:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
         .mobile-webapp-4 {
       width: 600px !important; /* 3배 크기 증가 (200px * 3 = 600px) */
       right: calc(10% - 375px) !important; /* 오른쪽으로 15px 추가 이동 */
       top: calc(50% + 180px) !important; /* 아래쪽에 배치 (위로 20px 이동) */
       cursor: default !important; /* 클릭 커서 제거 */
       transition: none !important; /* 전환 효과 제거 */
       pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
     }
    
    .mobile-webapp-4:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    .webapp-arrow {
      width: 300px !important; /* 3배 크기 증가 (100px * 3 = 300px) */
      top: calc(50% - 55px) !important; /* 위로 55px 이동 (기존 25px + 30px) */
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .webapp-arrow:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    .sync-text {
      width: auto !important;
      height: auto !important;
      max-width: 200px !important;
      top: calc(50% - 60px) !important; /* 정중앙에서 60px 위로 (위로 10px 추가 이동) */
      left: 50% !important;
      transform: translate(-50%, -50%) !important; /* 정확한 중앙 정렬 */
      z-index: 5 !important;
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .sync-text:hover {
      transform: translate(-50%, -50%) scale(1.1) !important;
      color: #6b46c1 !important;
      filter: drop-shadow(0 0 20px rgba(131, 94, 235, 0.3)) !important;
    }
    
    /* 학생용/선생님용 정보 컨테이너 조정 - 데스크탑과 동일한 디자인 */
    .student-info,
    .teacher-info {
      font-size: 30px !important; /* 사이즈 더 축소 */
      font-weight: 700 !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
      margin-bottom: 8px !important;
    }
    
    .student-info > div > div,
    .teacher-info > div > div {
      font-size: 16px !important; /* 사이즈 더 축소 */
      font-weight: 600 !important;
      padding: 6px 16px !important; /* 패딩 더 축소 */
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      background-color: #f3effd !important;
      color: #835eeb !important; /* 데스크탑 버전과 동일한 색상 */
      border-radius: 14px !important; /* 모서리 더 축소 */
      box-shadow: 0 2px 4px rgba(131, 94, 235, 0.1) !important;
      transition: none !important; /* 전환 효과 제거 */
      cursor: default !important; /* 클릭 커서 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
      width: max-content !important;
      max-width: 100% !important;
      white-space: normal !important;
      word-wrap: break-word !important;
      text-align: center !important;
    }
    
    .student-info:hover,
    .teacher-info:hover {
      transform: translateY(-3px) scale(1.02) !important;
      filter: drop-shadow(0 8px 25px rgba(131, 94, 235, 0.2)) !important;
    }
    
    .student-info > div > div:hover,
    .teacher-info > div > div:hover {
      background-color: #e8e0fc !important;
      box-shadow: 0 4px 12px rgba(131, 94, 235, 0.2) !important;
      transform: translateY(-2px) scale(1.05) !important;
    }
    
    .student-info:active,
    .teacher-info:active {
      transform: translateY(-1px) scale(1.01) !important;
      transition: all 0.1s ease !important;
    }
    
    .student-info > div > div:active,
    .teacher-info > div > div:active {
      transform: translateY(0px) scale(1.02) !important;
      transition: all 0.1s ease !important;
    }
  }
  

  
  /* 320px 이하: 425px 레이아웃과 동일하게 적용 */
  @media (max-width: 320px) {
    /* 모바일 섹션 높이 설정 */
    min-height: 900px !important;
    
    .responsive-svg-image {
      width: 100% !important;
      max-width: 100% !important;
    }
    
    /* 425px.svg 이미지 숨김 */
    .tablet-425px-image {
      display: none !important;
    }
    
    /* 모바일에서 학생용/선생님용 텍스트와 칩 표시 */
    .mobile-webapp-3,
    .mobile-webapp-4,
    .webapp-arrow,
    .sync-text,
    .student-info,
    .teacher-info {
      display: block !important;
    }
    
    /* 데스크탑 이미지 숨김 */
    .desktop-webapp {
      display: none !important;
    }
    
    /* 모바일용 이미지 크기 조정 - 425px와 동일 */
    .mobile-webapp-3 {
      width: 180px !important; /* 425px와 동일 */
      left: calc(10% - 60px) !important; /* 왼쪽으로 30px 추가 이동 */
      top: calc(50% - 280px) !important; /* 425px와 동일 */
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .mobile-webapp-3:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    .mobile-webapp-4 {
      width: 600px !important; /* 425px와 동일 */
      right: calc(10% - 390px) !important; /* 오른쪽으로 60px 이동 */
      top: calc(50% + 180px) !important; /* 425px와 동일 */
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .mobile-webapp-4:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    .webapp-arrow {
      width: 300px !important; /* 425px와 동일 */
      top: calc(50% - 55px) !important; /* 위로 55px 이동 (기존 25px + 30px) */
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .webapp-arrow:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    .sync-text {
      width: auto !important;
      height: auto !important;
      max-width: 200px !important; /* 425px와 동일 */
      top: calc(50% - 60px) !important; /* 425px와 동일 */
      left: 50% !important;
      transform: translate(-50%, -50%) !important; /* 정확한 중앙 정렬 */
      z-index: 5 !important;
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
    }
    
    .sync-text:hover {
      transform: translate(-50%, -50%) !important; /* 모바일에서 호버 효과 제거 */
      color: white !important; /* 기본 색상 유지 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    /* 학생용/선생님용 정보 컨테이너 - 425px와 동일한 디자인 */
    .student-info {
      font-size: 30px !important; /* 425px와 동일 */
      font-weight: 700 !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
      margin-bottom: 8px !important;
      left: calc(10% + 155px) !important; /* 오른쪽으로 175px 이동 */
      top: calc(50% - 420px) !important; /* 아래로 80px 이동 */
    }
    
    .teacher-info {
      font-size: 30px !important; /* 425px와 동일 */
      font-weight: 700 !important;
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      cursor: default !important; /* 클릭 커서 제거 */
      transition: none !important; /* 전환 효과 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
      margin-bottom: 8px !important;
      left: calc(15% - 70px) !important; /* 왼쪽으로 20px 이동 */
    }
    
    .student-info > div > div,
    .teacher-info > div > div {
      font-size: 16px !important; /* 425px와 동일 */
      font-weight: 600 !important;
      padding: 6px 16px !important; /* 425px와 동일 */
      font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
      background-color: #f3effd !important;
      color: #835eeb !important; /* 데스크탑 버전과 동일한 색상 */
      border-radius: 14px !important; /* 425px와 동일 */
      box-shadow: 0 2px 4px rgba(131, 94, 235, 0.1) !important;
      transition: none !important; /* 전환 효과 제거 */
      cursor: default !important; /* 클릭 커서 제거 */
      pointer-events: none !important; /* 클릭 이벤트 완전 비활성화 */
      width: max-content !important;
      max-width: 100% !important;
      white-space: nowrap !important;
      word-wrap: normal !important;
      text-align: center !important;
    }
    
    .student-info:hover,
    .teacher-info:hover {
      transform: none !important; /* 모바일에서 호버 효과 제거 */
      filter: none !important; /* 모바일에서 그림자 효과 제거 */
    }
    
    .student-info > div > div:hover,
    .teacher-info > div > div:hover {
      background-color: #f3effd !important; /* 기본 배경색 유지 */
      box-shadow: 0 2px 4px rgba(131, 94, 235, 0.1) !important; /* 기본 그림자 유지 */
      transform: none !important; /* 모바일에서 호버 효과 제거 */
    }
    
    .student-info:active,
    .teacher-info:active {
      transform: none !important; /* 모바일에서 액티브 효과 제거 */
      transition: all 0.3s ease !important; /* 기본 전환 효과 유지 */
    }
    
    .student-info > div > div:active,
    .teacher-info > div > div:active {
      transform: none !important; /* 모바일에서 액티브 효과 제거 */
      transition: all 0.3s ease !important; /* 기본 전환 효과 유지 */
    }
  }
  
  @media (max-width: 768px) {
    padding: 0;
    .responsive-svg-image {
      max-width: 100% !important;
    }
  }
  @media (max-width: 480px) {
    padding: 0;
    .responsive-svg-image {
      max-width: 100% !important;
    }
  }
`;

const WebAppMockupContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    height: 600px;
  }
  @media (max-width: 480px) {
    height: 500px;
  }
`;

const WebAppSyncText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #835eeb;
  font-size: 42px;
  font-family: "Godo B";
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.5px;
  text-align: center;
  white-space: nowrap;
  z-index: 20;
  
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const WebAppArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(145deg);
  width: 300px;
  height: 500px;
  background: url("/WebApp/integration/circle.svg") no-repeat center;
  background-size: contain;
  z-index: 5;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 350px;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 250px;
  }
`;

const WebAppCenterMockup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  cursor: pointer;
  
  &:hover {
    z-index: 15;
  }
`;

const WebAppTeacherMockup = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 12;
  cursor: pointer;
  
  &:hover {
    z-index: 15;
  }
  
  @media (max-width: 768px) {
    top: 15%;
    left: 5%;
  }
  @media (max-width: 480px) {
    top: 10%;
    left: 2%;
  }
`;

const WebAppDesktopMockup = styled.div`
  position: absolute;
  bottom: 10%;
  right: 10%;
  z-index: 11;
  cursor: pointer;
  
  &:hover {
    z-index: 15;
  }
  
  @media (max-width: 768px) {
    bottom: 5%;
    right: 5%;
  }
  @media (max-width: 480px) {
    bottom: 2%;
    right: 2%;
  }
`;

const WebAppTeacherInfo = styled.div`
  position: absolute;
  top: 80px;
  right: 250px;
  z-index: 21;
  max-width: 280px;
  
  @media (max-width: 768px) {
    top: 60px;
    right: 20px;
    max-width: 200px;
  }
  @media (max-width: 480px) {
    top: 40px;
    right: 10px;
    max-width: 180px;
  }
`;

const WebAppStudentInfo = styled.div`
  position: absolute;
  bottom: 80px;
  left: 250px;
  z-index: 21;
  max-width: 280px;
  
  @media (max-width: 768px) {
    bottom: 60px;
    left: 20px;
    max-width: 200px;
  }
  @media (max-width: 480px) {
    bottom: 40px;
    left: 10px;
    max-width: 180px;
  }
`;

const WebAppCanvas = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(131, 94, 235, 0.05), rgba(107, 75, 196, 0.05));
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
  }
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;
