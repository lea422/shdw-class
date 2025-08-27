import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ConsultationForm from './ConsultationForm';

const FloatingButtonContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 110px;
  right: 30px;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0.8)'};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`;

const ChatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
`;

const FloatingButton = styled.button`
  background: none;
  border: none;
  color: #33373B;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  position: relative;
  width: 120px;
  height: 48px;
  justify-content: space-between;

  &:hover {
    color: #835EEB;
    transform: translateY(-1px);
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
    width: 120px;
    height: 48px;
    font-size: 15.4px;
    gap: 2px;
    
    &:hover {
      transform: translateY(-1px);
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
  bottom: 170px;
  right: 30px;
  width: 400px;
  max-height: 700px;
  background: white;
  z-index: 1002;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)'};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;

  /* 말풍선 꼬리 */
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
  }

  @media (max-width: 768px) {
    width: 360px;
    right: 20px;
    bottom: 150px;
    max-height: 80vh;
  }
`;



const CloseButton = styled.button`
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 16px;
  color: #6B7280;
  cursor: pointer;
  padding: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #835EEB;
    border-color: #D1D5DB;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;





interface SideDrawerProps {
  isModalOpen?: boolean;
  onDrawerStateChange?: (isOpen: boolean) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isModalOpen = false, onDrawerStateChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onDrawerStateChange?.(true);
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

  return (
    <>
      <FloatingButtonContainer $isVisible={true}>
        <FloatingButton onClick={isOpen ? handleClose : handleOpen} aria-label={isOpen ? "무료체험 신청 닫기" : "무료체험 신청 열기"}>
          <span>무료체험신청</span>
          <ChatIcon>
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#835EEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <img src="/Assets/icon/free.svg" alt="free" style={{ width: "48px", height: "48px" }} />
            )}
          </ChatIcon>
        </FloatingButton>
      </FloatingButtonContainer>
      <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick} />
      <ModalContainer $isOpen={isOpen}>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, color: '#33373B', fontSize: '18px', fontWeight: 700, fontFamily: 'Pretendard, sans-serif' }}>
              무료 체험 신청
            </h2>
            <CloseButton data-close-button onClick={handleClose} aria-label="닫기">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CloseButton>
          </div>
          <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: '1.5', marginBottom: '20px', fontFamily: 'Pretendard, sans-serif' }}>
            궁금한 점이 있으신가요?<br />아래 폼을 작성해주시면 빠르게 연락드리겠습니다.
          </p>
          <ConsultationForm onClose={handleClose} />
        </div>
      </ModalContainer>
    </>
  );
};

export default SideDrawer; 