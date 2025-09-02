import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Dialog from '../components/Dialog';
import ConsultationForm from '../components/ConsultationForm';
import Body from '../components/Body';

// 칩 이미지 페이드인 스타일
const ChipImage = styled.img<{ visible: boolean }>`
  width: 120px;
  height: 40px;
  object-fit: contain;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: translateY(${props => (props.visible ? '0' : '12px')});
  transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
  
  @media (max-width: 600px) {
    width: 80px;
    height: 28px;
  }
`;

// Styled Components
const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scroll-behavior: smooth;
  @media (max-width: 600px) {
    scroll-snap-type: none;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    height: auto;
  }
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    margin: 0;
  }
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    margin: 0;
  }
`;

const Slide = styled.div<{ $isActive: boolean; bgMobile?: string; bgTablet?: string; bgDesktop: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$isActive ? 1 : 0};
  transition: opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-image: url(${props => props.bgDesktop});
  @media (max-width: 1024px) {
    background-image: url(${props => props.bgTablet || props.bgDesktop});
  }
  @media (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    height: auto;
    left: 0;
    top: 0;
    transform: none;
    background-image: url(${props => props.bgMobile || props.bgDesktop});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const HeroContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  
  @media (max-width: 600px) {
    position: static;
    height: auto;
    display: block;
  }
`;

const HeroInner = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 0;
    height: auto;
    position: static;
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 2;
  max-width: 600px;
  color: white;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 1024px) {
    left: 40px;
    top: 70%;
  }
  @media (max-width: 768px) {
    left: 40px;
    top: 65%;
  }
  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    max-width: 100%;
    padding: 20px;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    justify-content: center;
    gap: 20px;
    width: 100%;
    text-align: center;
  }
`;

const TitleSection = styled.div`
  width: 600px;
  height: 110.67px;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;

const PreTitle = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 26.67px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 33.33px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    position: static;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    width: 100%;
    font-weight: 400;
  }
`;

const MainTitle = styled.div`
  left: 0px;
  top: 50px;
  position: absolute;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  color: #835EEB;
  font-size: 53.33px;
  font-family: 'Godo B', 'Noto Sans KR', 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 66.67px;
  word-wrap: break-word;
  letter-spacing: -0.5px;
  @media (max-width: 600px) {
    position: static;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    width: auto;
    display: inline;
    font-weight: 400;
    letter-spacing: -0.3px;
  }
`;



const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.1px;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 30px;
    text-align: center;
    max-width: 300px;
  }
`;

const PrimaryButton = styled.button`
  width: 200px;
  padding: 18px 15px;
  border-radius: 15px;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
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
  background: linear-gradient(to right, #835EEB, #6B4BC4);
  border: none;
  color: white;
  box-shadow: 0 2px 4px rgba(131, 94, 235, 0.2);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    opacity: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateX(-100%);
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(131, 94, 235, 0.3);
    &:before {
      opacity: 1;
      transform: translateX(100%);
    }
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
  @media (max-width: 600px) {
    width: 180px;
    height: 44px;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    line-height: 20px;
  }
`;

const IndicatorBarContainer = styled.div`
  width: 200px;
  margin: 30px 0 0 0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 20px 0 0 0;
    margin-left: 0;
    gap: 16px;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
const IndicatorDots = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  @media (max-width: 600px) {
    gap: 8px;
    margin-left: 0;
    justify-content: flex-start;
  }
`;

const IndicatorPause = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  line-height: 1;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const IndicatorDot = styled.button<{ $active: boolean }>`
  width: ${props => (props.$active ? '24px' : '8px')};
  height: 8px;
  border-radius: 6px;
  background: ${props => (props.$active ? '#fff' : 'rgba(255,255,255,0.4)')};
  border: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  @media (max-width: 600px) {
    width: ${props => (props.$active ? '20px' : '8px')};
    height: 8px;
    border-radius: 4px;
  }
`;


const ScrollDownButton = styled.button`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    color: white;
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
  
  @media (max-width: 600px) {
    bottom: 20px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;



/* removed unused FeatureSection */

/* removed unused FeatureCard */

/* removed unused SyncIcon */

/* removed unused UpdateSection */

/* removed unused UpdateTitle */

/* removed unused UpdateList */

/* removed unused UpdateItem */

const FaqSection = styled.section`
  width: 100%;
  background: #F8F6FF;
  padding: 60px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
  @media (max-width: 600px) {
    padding: 32px 0 32px 0;
  }
`;

const FaqTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #222;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const FaqList = styled.ul`
  width: 100%;
  max-width: 700px;
  padding: 0;
  margin: 0;
  list-style: none;
  background: transparent;
  @media (max-width: 600px) {
    max-width: calc(100vw - 40px);
    padding: 0 20px;
  }
`;

const FaqItem = styled.li`
  border: none;
  background: transparent;
  margin-bottom: 0;
`;

const FaqAnswer = styled.div<{ open: boolean }>`
  font-size: 16px;
  color: #555;
  margin: 0 0 24px 0;
  line-height: 1.6;
  padding: 0;
  background: none;
  border: none;
  max-height: ${({ open }) => (open ? '500px' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
  @media (max-width: 600px) {
    font-size: 14px;
    margin: 0 0 16px 0;
  }
`;

const FaqQuestion = styled.button<{ open: boolean }>`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  padding: 24px 0 16px 0;
  font-size: 20px;
  font-weight: ${({ open }) => (open ? 700 : 600)};
  color: ${({ open }) => (open ? '#835EEB' : '#222')};
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s, font-weight 0.2s;
  border-radius: 0;
  box-shadow: none;
  &:hover {
    color: #835EEB;
    background: none;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 16px 0 12px 0;
  }
`;

const FaqIcon = styled.span<{ open: boolean }>`
  font-size: 24px;
  color: #835EEB;
  margin-left: 12px;
  transition: transform 0.3s;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  background: none;
  transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
  @media (max-width: 600px) {
    font-size: 20px;
    margin-left: 8px;
    width: 20px;
    height: 20px;
  }
`;

const MoreButton = styled.button`
  margin: 40px auto 0 auto;
  padding: 16px 32px;
  background: #835EEB;
  color: white;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #6B4CD3;
    transform: translateY(-2px);
  }
  @media (max-width: 600px) {
    font-size: 16px;
    padding: 14px 24px;
    border-radius: 8px;
    margin: 24px auto 0 auto;
  }
`;

// 무료체험 신청 방법 섹션 스타일
const TrialSection = styled.section`
  width: 100%;
  background: #835EEB;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    padding: 40px 0;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    padding: 60px 0 40px 0;
  }
`;

const TrialInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-sizing: border-box;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 0 40px;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding: 0 20px;
  }
`;



const TrialBadge = styled.div`
  color: #E0DDF5;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 18.20px;
  word-wrap: break-word;
`;

const TrialTitle = styled.div`
  color: white;
  font-size: 32px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 41.60px;
  word-wrap: break-word;
  
  /* 모바일 */
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const TrialTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    gap: 16px;
    width: 100%;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
    gap: 16px;
  }
`;

const TrialDescription = styled.div`
  width: 184px;
  color: white;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 20.80px;
  word-wrap: break-word;
  text-align: left;
  
  /* 태블릿 */
  @media (max-width: 1024px) {
    width: auto;
    max-width: 300px;
    white-space: nowrap;
  }
  
  /* 모바일 */
  @media (max-width: 600px) {
    width: auto;
    max-width: 280px;
    font-size: 16px;
    line-height: 22px;
  }
`;

const TrialSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  /* 768px 이하에서 바로 세로 배치로 전환 */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`;

const TrialStep = styled.div<{ isFirst?: boolean; isHovered?: boolean }>`
  width: 140px;
  height: 140px;
  padding: 20px;
  background: ${props => {
    if (props.isHovered) return 'rgba(255, 255, 255, 0.1)';
    return 'transparent';
  }};
  overflow: hidden;
  border-radius: 50%;
  outline: 2px ${props => {
    if (props.isHovered) return 'rgba(255, 255, 255, 0.8)';
    return 'white';
  }} solid;
  outline-offset: -2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.isHovered ? 'translateY(-4px)' : 'translateY(0)'};
  box-shadow: ${props => props.isHovered ? '0 8px 25px rgba(0, 0, 0, 0.15)' : 'none'};
  
  /* 768px 이하에서 가로로 긴 직사각형으로 변경 */
  @media (max-width: 768px) {
    border-radius: 12px;
    width: 300px; /* 텍스트가 잘리지 않도록 너비 더 증가 */
    height: 80px;
    padding: 12px 16px;
    flex-direction: row;
    gap: 12px;
  }
  
  /* 600px 이하에서 더 작은 화면에 맞게 조정 */
  @media (max-width: 600px) {
    width: 320px;
    height: 70px;
    padding: 10px 14px;
    gap: 8px;
  }
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  /* 중복된 모바일 스타일 제거 */
  
  /* 중복된 모바일 스타일 제거 */
`;

const StepNumber = styled.div<{ isFirst?: boolean; isHovered?: boolean }>`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => {
    if (props.isHovered) return 'white';
    return 'white';
  }};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
  transition: color 0.3s ease;
  
  /* 768px 이하에서 가로 레이아웃에 맞게 조정 */
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    min-width: 60px;
    text-align: left;
    align-items: flex-start;
  }
  
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    min-width: 50px;
    flex-shrink: 0;
  }
`;

const StepDescription = styled.div<{ isFirst?: boolean; isHovered?: boolean }>`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => {
    if (props.isHovered) return 'white';
    return 'white';
  }};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  transition: color 0.3s ease;
  
  /* 768px 이하에서 가로 레이아웃에 맞게 조정 */
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 18px;
    text-align: left;
    align-items: flex-start;
    flex: 1;
    white-space: normal; /* 텍스트 줄바꿈 허용 */
    flex-direction: row; /* 가로 배치로 변경 */
    justify-content: flex-start; /* 좌측 정렬 */
  }
  
  @media (max-width: 600px) {
    font-size: 11px;
    line-height: 15px;
    text-align: left;
    white-space: normal;
    flex-direction: row; /* 가로 배치로 변경 */
    justify-content: flex-start; /* 좌측 정렬 */
    flex: 1;
    min-width: 0; /* flex item이 축소될 수 있도록 */
  }
`;

/* removed unused UpdateBarContainer */

/* removed unused UpdateBadge */

/* removed unused UpdateBadgeText */

/* removed unused UpdateContent */

/* removed unused UpdateDate */

/* removed unused SlideTitle */

/* removed unused SlideContainer */

/* removed unused SlideTrack */

/* removed unused SlideCard */

/* removed unused CardImage */

/* removed unused CardContent */

/* removed unused CardTitle */

/* removed unused CardDescription */

/* removed unused CardBadge */

/* removed unused BarNextButton */

/* removed unused WebAppButton */

/* removed unused updates data */

// 제거: 미사용 UpdateBar 컴포넌트 전체 삭제

// FAQ 아코디언 컴포넌트 분리
const FaqAccordion: React.FC<{ faqs: { question: string; answer: string }[] }> = ({ faqs }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const navigate = useNavigate();
  const previewFaqs = faqs.slice(0, 3);
  return (
    <FaqSection>
      <FaqTitle>자주 묻는 질문</FaqTitle>
      <FaqList>
        {previewFaqs.map((faq, idx) => (
          <FaqItem key={faq.question}>
            <FaqQuestion
              type="button"
              open={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.question}
              <FaqIcon open={openIdx === idx}>{'+'}</FaqIcon>
            </FaqQuestion>
            <FaqAnswer open={openIdx === idx}>{faq.answer}</FaqAnswer>
          </FaqItem>
        ))}
      </FaqList>
      <MoreButton onClick={() => navigate('/notice/faq')}>
        더 자세한 내용 보기
      </MoreButton>
    </FaqSection>
  );
};

const Home: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  // 제거: 사용하지 않는 슬라이드 트랙 이동 상태
  const [isPaused, setIsPaused] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [chip1Visible, setChip1Visible] = useState(false);
  const [chip2Visible, setChip2Visible] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // 슬라이드 데이터에 태블릿 및 모바일 이미지 경로 추가
  const slides = [
    {
      id: 1,
      image: '/Home/hero/Hero-1.png',
      imageTablet: '/Home/hero/Hero_tablet_1.png',
      imageMobile: '/Home/hero/Hero-mobile-1.png',
      preTitle: 'No.1 AI 학습 솔루션',
      mainTitle: '수학대왕',
      description: '압도적인 AI 기술로 실현하는<br />가장 완벽한 1:1 밀착 관리'
    },
    {
      id: 2,
      image: '/Home/hero/Hero-2.png',
      imageTablet: '/Home/hero/Hero_tablet_2.png',
      imageMobile: '/Home/hero/Hero-mobile-2.png',
      preTitle: 'KTEA 한국브랜드평가대상',
      mainTitle: '2년 연속 1위 수상',
      description: '누적 가입자 200만 명 달성!<br />초중고 모든 교과과정에 최적화된 학습 플랫폼'
    },
    {
      id: 3,
      image: '/Home/hero/Hero-3.png',
      imageTablet: '/Home/hero/Hero_tablet_3.png',
      imageMobile: '/Home/hero/Hero-mobile-3.png',
      preTitle: 'ChatGPT 개발사',
      mainTitle: 'OpenAI 공식 협업 기업',
      description: '서술형 풀이 채점부터 유사문제 검색까지<br />차원이 다른 AI 기술을 제공합니다'
    },
    {
      id: 4,
      image: '/Home/hero/Hero-4.png',
      imageTablet: '/Home/hero/Hero_tablet_4.png',
      imageMobile: '/Home/hero/Hero-mobile-4.png',
      preTitle: '업계 최고의 AI 기술력',
      mainTitle: '특허 19종 등록 완료',
      description: '문제은행을 넘어 AI 튜터로!<br />가장 수학을 잘 하는 AI를 만듭니다'
    },
    {
      id: 5,
      image: '/Home/hero/Hero-5.png',
      imageTablet: '/Home/hero/Hero_tablet_5.png',
      imageMobile: '/Home/hero/Hero-mobile-5.png',
      preTitle: '개념부터 고난도까지',
      mainTitle: '최대 규모의 학습 콘텐츠',
      description: '학생들의 성적 상승,<br />국내 최고의 전문가들이 함께 합니다'
    }
  ];

  // 제거: 사용하지 않는 슬라이드 카드 데이터

  // 제거: 사용하지 않는 슬라이드 트랙 애니메이션

  // 히어로 슬라이드 애니메이션
  useEffect(() => {
    if (isPaused) return; // 일시정지 상태면 자동 전환 중단
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  useEffect(() => {
    if (currentSlide === 2) {
      setChip1Visible(false);
      setChip2Visible(false);
      const t1 = setTimeout(() => setChip1Visible(true), 50);
      const t2 = setTimeout(() => setChip2Visible(true), 200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setChip1Visible(false);
      setChip2Visible(false);
    }
  }, [currentSlide]);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    // 플로팅 모달은 활성화하지 않음 (히어로 버튼은 독립적으로 동작)
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // 플로팅 모달 상태는 건드리지 않음
  };

  const scrollToBody = () => {
    if (bodyRef.current) {
      const rect = bodyRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetScrollTop = scrollTop + rect.top;
      
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  // 제거: 미사용 핸들러

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };



  const faqs = [
    {
      question: '수학대왕 클래스가 뭔가요?',
      answer: '수학대왕 클래스는 수학대왕의 온라인 학습 플랫폼입니다.'
    },
    {
      question: '선생님은 어떤 기기로 사용 가능한가요?',
      answer: '선생님께서는 웹사이트에 접속해서 사용 가능합니다. 웹사이트는 반응형 웹사이트로 제작되어 있어서 스마트폰, 태블릿, 노트북, 데스크톱에서 모두 사용 가능하십니다.'
    },
    {
      question: '학생들의 학습 데이터는 어떻게 관리되나요?',
      answer: '학생들은 기본적으로 앱스토어, 플레이스토어에서 스마트폰용 앱, 태블릿 용 앱을 설치할 수 있게 브라우저를 활용하여 앱을 구동할 수도 있습니다. 즉, 아이폰, 갤럭시 스마트폰, 갤럭시 태블릿, 아이패드, 노트북, 데스크톱, 서피스, 웨일북, 크롬북 등 장비와 기기에 전혀 구애받지 않고 공정한 AI 수학 교육을 받을 수 있습니다.'
    },
    {
      question: '어떤 학년이 사용 가능한가요?',
      answer: '초등학교 1학년부터 고등학교 3학년까지 사용 가능합니다. 초1, 초2는 출시 예정이 없습니다.'
    },
    {
      question: '필기 기능이 존재하나요? 학생 필기를 선생님이 볼 수 있나요?',
      answer: '필기 기능이 완벽하게 구현되어 있습니다. 학생은 디바이스에서 수학 문제 위에 필기를 하면서 문제를 풀 수 있습니다. 그 필기 기록은 문제와 함께 한 문제 단위로 실시간으로 선생님 대시보드에 반영되어 선생님이 확인할 수 있습니다.'
    },
    {
      question: '학생들의 학습 현황을 선생님이 볼 수 있나요?',
      answer: '선생님이 내준 숙제, 학생이 추가적으로 자습한 문제 등 모든 학습량과 학습 기록을 선생님이 일별, 주별, 월별로 현황을 볼 수 있습니다.'
    },
    {
      question: '장학금은 어떤 기능인가요?',
      answer: '수학대왕은 학생들의 동기부여를 위해 장학금 제도를 운영하고 있습니다. 수학 실력과 성적에 관계없이 AI가 추천해 주는 내 실력에 맞는 문제를 꾸준히 푼다면, 모든 학생들이 예외 없이 확정적으로 장학금을 받을 수 있습니다. **즉, 성적에 따라 장학금을 받는 것이 아니라, 모든 학생이 나의 노력에 따라 장학금을 받을 수 있는 시스템입니다.** 장학금은 수학대왕 앱 내에서 네이버페이로 변환하여 결제 및 사용이 가능합니다. 학생당 월별로 받아 갈 수 있는 최대의 장학금 양은 단체 도입하실 때 설정하실 수 있으며, **선생님께서 설정하신 플랜에 따라 맞춤 예산 설계가 가능합니다.**'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <ImageSlider>
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              $isActive={index === currentSlide}
              bgDesktop={slide.image}
              bgTablet={slide.imageTablet}
              bgMobile={slide.imageMobile}
            />
          ))}
          <SlideOverlay />
          <HeroContentWrapper>
            <HeroInner>
              <ContentContainer>
            {/* 슬라이드 3번(인덱스 2)에서만 버튼 이미지 노출, 나머지는 placeholder로 높이 맞춤 */}
            {currentSlide === 2 ? (
              <div style={{ display: 'flex', gap: 16, marginTop: 30, marginBottom: 20 }}>
                <ChipImage
                  src="/Home/chips/Hero 3_Open AI.png"
                  alt="OpenAI"
                  visible={chip1Visible}
                />
                <ChipImage
                  src="/Home/chips/Hero 3_Chat GPT.png"
                  alt="ChatGPT"
                  visible={chip2Visible}
                />
              </div>
            ) : (
              <div style={{ height: 48, marginBottom: 32 }} />
            )}
            <TitleSection>
              <PreTitle>{slides[currentSlide].preTitle}</PreTitle>
              <TitleRow>
                <MainTitle>{slides[currentSlide].mainTitle}</MainTitle>
              </TitleRow>
            </TitleSection>
            <Description
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].description }}
            />
            <PrimaryButton onClick={handleOpenDialog}>
              무료체험 시작하기
            </PrimaryButton>
            <IndicatorBarContainer>
              <IndicatorDots>
                {slides.map((_, idx) => (
                  <IndicatorDot
                    key={idx}
                    $active={currentSlide === idx}
                    aria-label={`슬라이드 ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </IndicatorDots>
              <IndicatorPause 
                aria-label="일시정지"
                onClick={handlePauseToggle}
              >
                {isPaused ? '▶' : '⏸'}
              </IndicatorPause>
            </IndicatorBarContainer>
              </ContentContainer>
            </HeroInner>
          </HeroContentWrapper>
          <ScrollDownButton onClick={scrollToBody} aria-label="다음 섹션으로 스크롤">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ScrollDownButton>
        </ImageSlider>
      </HeroSection>
      <TrialSection>
        <TrialInner>
          <TrialTextContainer>
            <TrialBadge>수학대왕 CLASS</TrialBadge>
            <TrialTitle dangerouslySetInnerHTML={{ __html: '무료체험 신청 방법' }} />
            <TrialDescription dangerouslySetInnerHTML={{ __html: '수학대왕 CLASS를 2주동안 무료로 사용해보세요' }} />
          </TrialTextContainer>
          <TrialSteps>
            <TrialStep 
              isHovered={hoveredStep === 1}
              onMouseEnter={() => setHoveredStep(1)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <StepNumber isHovered={hoveredStep === 1}>STEP 1</StepNumber>
              <StepDescription isHovered={hoveredStep === 1} dangerouslySetInnerHTML={{ __html: '무료 체험 신청 버튼 누르기' }} />
            </TrialStep>
            <TrialStep 
              isHovered={hoveredStep === 2}
              onMouseEnter={() => setHoveredStep(2)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <StepNumber isHovered={hoveredStep === 2}>STEP 2</StepNumber>
              <StepDescription isHovered={hoveredStep === 2} dangerouslySetInnerHTML={{ __html: '무료 체험 신청 학교/학원 선택' }} />
            </TrialStep>
            <TrialStep 
              isHovered={hoveredStep === 3}
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <StepNumber isHovered={hoveredStep === 3}>STEP 3</StepNumber>
              <StepDescription isHovered={hoveredStep === 3} dangerouslySetInnerHTML={{ __html: '체험용 계정 이메일 수령' }} />
            </TrialStep>
          </TrialSteps>
        </TrialInner>
      </TrialSection>
      <Body ref={bodyRef} />
      
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog}
        title="무료 체험 신청"
        description="아래 정보를 입력해 주시면 담당자가 빠르게 연락드립니다."
      >
        <ConsultationForm onClose={handleCloseDialog} />
      </Dialog>
      <FaqAccordion faqs={faqs} />
    </HomeContainer>
  );
};

export default Home; 