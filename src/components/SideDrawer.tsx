import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import ConsultationForm from './ConsultationForm';

// ChannelService를 window 객체에 추가하기 위한 타입 확장
declare global {
  interface Window {
    ChannelService?: any;
    isDrawerOpen?: boolean;
    closeDrawer?: () => void;
  }
}

const FloatingButtonContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 6.25rem;
  right: 2.5rem;
  z-index: 1000;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0.8)'};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};

  @media (max-width: 768px) {
    bottom: 5rem;
    right: 1.5rem;
  }
`;

const ChatIcon = styled.div<{ $isClose?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3.75rem;
  height: 3.75rem;
  background: ${props => props.$isClose ? '#ffffff' : 'transparent'};
  border-radius: ${props => props.$isClose ? '45%' : '50%'};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -1.5625rem;
  left: -1.875rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: -1.5rem;
    left: -2rem;
  }
`;

const FloatingButton = styled.button`
  background: none;
  border: none;
  color: #33373B;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  position: relative;
  width: 7.5rem;
  height: 3rem;
  justify-content: space-between;

  &:hover {
    color: #835EEB;
  }

  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 3.5rem;
    font-size: 0.9625rem;
    gap: 0.125rem;
    
    &:hover {
      // 호버 효과 제거
    }
  }
`;

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  backdrop-filter: ${props => props.$isOpen ? 'blur(4px)' : 'blur(0px)'};
`;

const ModalContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 11.875rem;
  right: 3.125rem;
  width: 24.6875rem;
  max-height: 43.75rem;
  background: white;
  z-index: 1002;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(1.25rem)'};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;

  /* 말풍선 꼬리 */
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    right: 1.25rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid white;
  }

  @media (max-width: 768px) {
    width: 22.5rem;
    right: 1.25rem;
    bottom: 9.375rem;
    max-height: 80vh;
  }
`;









interface SideDrawerProps {
  isModalOpen?: boolean;
  onDrawerStateChange?: (isOpen: boolean) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isModalOpen = false, onDrawerStateChange }) => {
  const [isOpen, setIsOpen] = useState(isModalOpen);

  const handleOpen = () => {
    setIsOpen(true);
    onDrawerStateChange?.(true);
    
    // Channel.io 모달이 열려있으면 숨기기
    try {
      if (window.ChannelService && window.ChannelService.hide) {
        window.ChannelService.hide();
      }
    } catch (error) {
      console.log('Channel.io 모달 숨기기 실패');
    }
    
    // 키보드 포커스 관리
    setTimeout(() => {
      const closeButton = document.querySelector('[data-close-button]') as HTMLElement;
      if (closeButton) closeButton.focus();
    }, 100);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onDrawerStateChange?.(false);
    document.body.style.overflow = 'auto';
  }, [onDrawerStateChange]);

  // isModalOpen prop 변경 시 isOpen 상태 동기화
  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // ESC 키로 닫기
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleClose]);

  // 전역 함수 등록 및 상태 동기화
  React.useEffect(() => {
    // 전역 상태 등록
    window.isDrawerOpen = isOpen;
    window.closeDrawer = handleClose;
    
    // Channel.io 모달 상태 감지 (폴링 방식)
    const checkChannelModal = setInterval(() => {
      try {
        // Channel.io 모달이 열려있는지 확인하는 방법
        const channelElements = document.querySelectorAll('[class*="channel"], [class*="chat"], [class*="messenger"]');
        const isChannelModalOpen = Array.from(channelElements).some(el => {
          const rect = el.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 && 
                 window.getComputedStyle(el).display !== 'none' &&
                 window.getComputedStyle(el).visibility !== 'hidden';
        });
        
        // Channel.io 모달이 열려있으면 1번 모달 자동 닫기
        if (isChannelModalOpen && isOpen) {
          console.log('Channel.io 모달 감지, 1번 모달 자동 닫기');
          handleClose();
        }
      } catch (error) {
        // 에러 무시
      }
    }, 1000); // 1초마다 체크

    return () => {
      clearInterval(checkChannelModal);
      window.isDrawerOpen = false;
      window.closeDrawer = undefined;
    };
  }, [isOpen, handleClose]);

  return (
    <>
      <FloatingButtonContainer $isVisible={true} style={{ zIndex: isOpen ? 1003 : 1000 }}>
        <FloatingButton onClick={isOpen ? handleClose : handleOpen} aria-label={isOpen ? "무료체험 신청 닫기" : "무료체험 신청 열기"}>
          <span style={{ whiteSpace: 'nowrap', position: 'relative', top: '-25px', left: '-30px' }}>무료체험신청</span>
          <ChatIcon $isClose={isOpen}>
            {isOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#835EEB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <img src="/Assets/icon/무료체험.svg" alt="무료체험" style={{ width: "60px", height: "60px" }} />
            )}
          </ChatIcon>
        </FloatingButton>
      </FloatingButtonContainer>
      {isOpen && (
        <>
          <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick} />
          <ModalContainer $isOpen={isOpen}>
            <div style={{ padding: '16px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '12px' }}>
                <h2 style={{ margin: 0, color: '#33373B', fontSize: '18px', fontWeight: 700, fontFamily: 'Pretendard, sans-serif' }}>
                  무료 체험 신청
                </h2>
              </div>
              <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.4', marginBottom: '12px', fontFamily: 'Pretendard, sans-serif' }}>
                궁금한 점이 있으신가요?<br />
                아래 폼을 작성해주시면 빠르게 연락드리겠습니다.
              </p>
              <ConsultationForm onClose={handleClose} />
            </div>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default SideDrawer; 