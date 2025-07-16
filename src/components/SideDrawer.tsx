import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ConsultationForm from './ConsultationForm';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;



const FloatingButtonContainer = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0.8)'};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`;

const FloatingButton = styled.button`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #835EEB;
  border: none;
  color: white;
  font-size: 15.4px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  line-height: 1.2;
  text-align: center;
  overflow: hidden;





  &:hover {
    transform: translateY(-6px) scale(1.15);
  }

  &:active {
    transform: translateY(-2px) scale(0.9);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus {
    outline: none;
  }
`;

const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: ${props => props.$isOpen ? 'blur(4px)' : 'blur(0px)'};
`;

const DrawerContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  z-index: 1002;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;



const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #6B7280;
  cursor: pointer;
  padding: 8px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #835EEB;
  }

  &:focus {
    outline: none;
  }
`;

const DrawerContent = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background: white;
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

  const handleClose = () => {
    setIsOpen(false);
    onDrawerStateChange?.(false);
    document.body.style.overflow = 'auto';
  };

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
  }, [isOpen]);

  return (
    <>
      <FloatingButtonContainer $isVisible={!isModalOpen}>
        <FloatingButton onClick={handleOpen} aria-label="무료체험 신청 열기">
          무료체험<br />신청
        </FloatingButton>
      </FloatingButtonContainer>
      <DrawerOverlay $isOpen={isOpen} onClick={handleOverlayClick} />
      <DrawerContainer $isOpen={isOpen}>
        <DrawerContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ margin: 0, color: '#33373B', fontSize: '20px', fontWeight: 700, fontFamily: 'Pretendard, sans-serif' }}>
              상담 신청
            </h2>
            <CloseButton data-close-button onClick={handleClose} aria-label="닫기">
              ×
            </CloseButton>
          </div>
          <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', fontFamily: 'Pretendard, sans-serif' }}>
            궁금한 점이 있으신가요?<br />아래 폼을 작성해주시면 빠르게 연락드리겠습니다.
          </p>
          <ConsultationForm onClose={handleClose} />
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default SideDrawer; 