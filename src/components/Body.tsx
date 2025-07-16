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
  width: 100vw;
  max-width: 100vw;
  padding-bottom: 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  width: 100vw;
  max-width: 1280px;
  padding: 160px 0 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    padding: 100px 0 40px;
    gap: 12px;
  }
`;

const Title = styled.div`
  width: 100vw;
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
  font-size: 56px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

const TitleText = styled.span`
  color: black;
  font-size: 56px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

const Subtitle = styled.div`
  width: 100vw;
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
  width: 100vw;
  padding: 120px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    padding: 80px 0 20px;
  }
`;

const SectionTitleText = styled.div`
  width: 100vw;
  max-width: 1040px;
  text-align: center;
  color: #835EEB;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
  box-sizing: border-box;
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const FeatureGrid = styled.div`
  width: 100vw;
  max-width: 1280px;
  padding: 90px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    padding: 90px 0;
  }
  @media (max-width: 375px) {
    width: 375px;
    max-width: 375px;
    padding: 90px 16px;
  }
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
  @media (max-width: 600px) {
    max-width: 95vw;
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
  width: 100vw;
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
  background: #835EEB;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  height: 890px;
  padding: 60px 0;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    height: 800px;
    padding: 40px 0;
  }
`;

const DemoHeader = styled.div`
  align-self: stretch;
  height: 180px;
  padding: 50px 64px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    height: 120px;
    padding: 24px 8px 12px;
    gap: 12px;
  }
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
  transition: all 0.3s ease;
  
  span {
    color: #835EEB;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 29px;
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const DemoButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 16px 0;
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
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    padding: 20px 4px;
  }
  @media (max-width: 600px) {
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

const FeatureBoxFlow = styled.div`
  display: flex;
  gap: 20px;
  animation: ${slideLeft} 30s linear infinite;
  box-sizing: border-box;
  @media (max-width: 900px) {
    gap: 12px;
    animation: ${slideLeft} 25s linear infinite;
  }
  @media (max-width: 600px) {
    gap: 8px;
    animation: ${slideLeft} 20s linear infinite;
  }
`;

const FeatureBoxSlide = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
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
  width: 400px;
  height: 400px;
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
    width: 320px;
    height: 320px;
    border-radius: 20px;
    
    &::after {
      border-radius: 20px;
    }
  }
  
  @media (max-width: 600px) {
    width: 280px;
    height: 280px;
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

const Body = React.forwardRef<HTMLDivElement>((props, ref) => {
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
      videoUrl: "https://www.youtube.com/watch?v=MBQZ4PCuNEQM",
      thumbnailUrl: "https://img.youtube.com/vi/MBQZ4PCuNEQ/maxresdefault.jpg"
    },
    {
      title: { highlight: "AI 기술로", normal: "완성된 학습" },
      quote: "개인별 맞춤 학습과 실시간 피드백으로<br/>학습 효과가 눈에 띄게 향상되었어요",
      name: "학부모 후기<br/>초등 5학년 학부모",
      videoUrl: "https://www.youtube.com/watch?v=MBQZ4PCuNEQ",
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

  return (
    <BodyContainer ref={ref}>
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
        {/* 1번 FeatureBox */}
        <FeatureBox ref={el => featureBoxRefs.current[0] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(0)}>
            <FeatureCategory>
              <FeatureCategoryText>
                맞춤형 학습지 제작
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              AI 기반 실시간<br/>맞춤 문제 추천
            </FeatureMainTitle>
            <FeatureDesc>
              학생별 실력과 취약점을 분석하여<br/>최적의 문제를 자동으로 추천합니다.
            </FeatureDesc>
          </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(0)}>
            <img 
              src="/video/Body-image-1.png"
              alt="핵심기능1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </FeatureBox>
        {/* 2번 FeatureBox */}
        <FeatureBox ref={el => featureBoxRefs.current[1] = el}>
          <FeatureTextBlock isVisible={visibleTexts.has(1)}>
            <FeatureCategory>
              <FeatureCategoryText>
                맞춤형 학습지 제작
              </FeatureCategoryText>
            </FeatureCategory>
            <FeatureMainTitle>
              오답 클리닉<br/>자동 & 무한 배부
            </FeatureMainTitle>
            <FeatureDesc>
              틀린 문제를 자동으로 분석하여<br/>유사 문제를 무제한 제공합니다.
            </FeatureDesc>
            </FeatureTextBlock>
          <GifBox isZoomed={zoomedBoxes.has(1)}>
            <img 
              src="/video/Body-image-2.png"
              alt="핵심기능2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </FeatureBox>
        {/* 3번 FeatureBox */}
        <FeatureBox ref={el => featureBoxRefs.current[2] = el}>
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
          <GifBox isZoomed={zoomedBoxes.has(2)}>
            <img 
              src="/video/Body-image-3.png"
              alt="핵심기능3"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </FeatureBox>
        {/* 4번 FeatureBox */}
        <FeatureBox ref={el => featureBoxRefs.current[3] = el}>
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
          <GifBox isZoomed={zoomedBoxes.has(3)}>
            <img 
              src="/video/Body-image-4.png"
              alt="핵심기능4"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </FeatureBox>
        {/* 5번 FeatureBox */}
        <FeatureBox ref={el => featureBoxRefs.current[4] = el}>
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
          <GifBox isZoomed={zoomedBoxes.has(4)}>
            <img 
              src="/video/Body-image-5.png"
              alt="핵심기능5"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </FeatureBox>
        {/* 6번 FeatureBox */}
        <FeatureBox ref={el => featureBoxRefs.current[5] = el}>
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
          <GifBox isZoomed={zoomedBoxes.has(5)}>
            <img 
              src="/video/Body-image-6.png"
              alt="핵심기능6"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, background: 'transparent' }}
            />
          </GifBox>
        </FeatureBox>
      </FeatureSectionWrapper>



      <DemoSection>
        <DemoHeader>
          <DemoTitle>
            수학대왕 APP 기능을 직접 체험해보세요!
          </DemoTitle>
          <DemoSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br/>
            완벽한 교육 생태계를 경험하세요
          </DemoSubtitle>
        </DemoHeader>
        <DemoButtonContainer>
          <DemoButton 
            href="https://www.iammathking.com/demo" 
            rel="noopener noreferrer"
            onClick={handleDemoClick}
          >
            <span>데모 체험하기</span>
          </DemoButton>
        </DemoButtonContainer>
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
      </DemoSection>

      {/* 웹-앱 연동 섹션 */}
      <WebAppSection>
        <WebAppHeader>
          <WebAppTitle>
            웹-앱 연동으로 완성되는<br/>교육 시스템
          </WebAppTitle>
          <WebAppSubtitle>
            교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br/>
            완벽한 교육 생태계를 경험하세요
          </WebAppSubtitle>
          <WebAppButtons>
            <WebAppButton 
              href="https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebAppIcon>
                <img src="/Google_Play_logo.svg" alt="Google Play" />
              </WebAppIcon>
              <WebAppButtonText>Google Play</WebAppButtonText>
            </WebAppButton>
            <WebAppButton 
              href="https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%B8%EC%A0%9C%EC%A7%91/id1501165233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebAppIcon>
                <img src="/App_Store_logo.svg" alt="App Store" />
              </WebAppIcon>
              <WebAppButtonText>App Store</WebAppButtonText>
            </WebAppButton>
          </WebAppButtons>
        </WebAppHeader>
        <WebAppContent>
          <WebAppImage>
            {/* 여기에 이미지나 애니메이션을 추가할 수 있습니다 */}
          </WebAppImage>
        </WebAppContent>
      </WebAppSection>

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
                  {testimonials[currentTestimonial].name.split('<br/>').map((line, idx) => (
                    <span key={idx} dangerouslySetInnerHTML={{ __html: line }} />
                  ))}
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
});

// styled-components for the web-app section
const WebAppSection = styled.section`
  width: 100%;
  background: white;
  padding: 192px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 128px;
  overflow: hidden;
  scroll-snap-align: start;
  @media (max-width: 900px) {
    padding: 120px 16px;
    gap: 80px;
  }
  @media (max-width: 600px) {
    padding: 80px 12px;
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
  width: 120px;
  text-decoration: none;
  
  &:hover {
    background: #835EEB;
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    padding: 6px 12px;
    width: 100px;
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
  width: 1240px;
  padding: 0 40px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  @media (max-width: 1280px) {
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: 600px) {
    padding: 0 12px;
  }
`;

const WebAppImage = styled.div`
  width: 1139px;
  height: 897px;
  background: linear-gradient(135deg, #f8f9ff 0%, #f3f4ff 100%);
  border-radius: 20px;
  border: 2px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: url('/logo.svg') no-repeat center;
    background-size: contain;
    opacity: 0.1;
  }
  
  @media (max-width: 1280px) {
    width: 100%;
    max-width: 1139px;
    height: 600px;
  }
  @media (max-width: 900px) {
    height: 400px;
  }
  @media (max-width: 600px) {
    height: 300px;
    border-radius: 12px;
  }
`;

// styled-components for the new section
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
    width: 100vw;
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
  justify-content: center;
  align-items: center;
  gap: 0;
  text-align: center;
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    align-items: center;
    padding: 20px;
    gap: 8px;
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
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 20px;
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
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

const ExperienceName = styled.div`
  color: #835EEB;
  font-size: 20px;
  font-family: Pretendard;
  line-height: 26px;
  word-break: break-word;
  font-weight: 700;
  text-align: center;
  width: 100%;
  span { display: block; }
  span:last-child { font-weight: 400; }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ExperienceImageBlock = styled.div`
  width: 864px;
  height: 520px;
  position: relative;
  overflow: hidden;
  outline: 6px #835EED solid;
  background: #F8F6FF;
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
  gap: 150px;
  padding: 0;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto 30px auto;
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
  justify-content: flex-start;
  overflow: visible;
  padding-left: 0px;
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
  }
  @media (max-width: 375px) {
    width: 343px;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }
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
  @media (max-width: 600px) {
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: #835EEB;
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
    white-space: nowrap;
    
    br {
      display: none;
    }
  }
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
  color: white;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
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
    font-weight: 700;
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
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
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
  width: 730px;
  height: 487px;
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
    width: 300px;
    height: 200px;
    position: relative;
    background: #835EEB;
    border: 1px #835EEB solid;
    transform: none;
  }
  @media (max-width: 375px) {
    width: 280px;
    height: 180px;
    border-radius: 8px;
  }
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

export default Body; 