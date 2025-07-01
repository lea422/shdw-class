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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  border: none;
  color: white;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(131, 94, 235, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  line-height: 1.2;
  animation: ${pulse} 2s ease-in-out infinite;

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 12px 40px rgba(131, 94, 235, 0.4);
    animation: none;
  }

  &:active {
    transform: translateY(-2px) scale(0.95);
    box-shadow: 0 6px 20px rgba(131, 94, 235, 0.3);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 8px 32px rgba(131, 94, 235, 0.3), 0 0 0 3px rgba(131, 94, 235, 0.2);
  }
`;

const DrawerOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: ${props => props.isOpen ? 'blur(4px)' : 'blur(0px)'};
`;

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  z-index: 1002;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  box-shadow: -8px 0 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DrawerHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f8f9ff, #f3f4ff);
`;

const DrawerTitle = styled.h2`
  margin: 0;
  color: #33373B;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
  transition: color 0.3s ease;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #6B7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(131, 94, 235, 0.1);
    color: #835EEB;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(131, 94, 235, 0.2);
  }
`;

const DrawerContent = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background: white;
`;

const DrawerDescription = styled.p`
  color: #6B7280;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
  font-family: 'Pretendard', sans-serif;
  padding: 16px;
  background: #f8f9ff;
  border-radius: 8px;
  border-left: 4px solid #835EEB;
`;

const SideDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // 키보드 포커스 관리
    setTimeout(() => {
      const closeButton = document.querySelector('[data-close-button]') as HTMLElement;
      if (closeButton) closeButton.focus();
    }, 100);
  };

  const handleClose = () => {
    setIsOpen(false);
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
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <FloatingButton onClick={handleOpen} aria-label="무료 체험 신청하기">
        무료<br />체험
      </FloatingButton>
      
      <DrawerOverlay isOpen={isOpen} onClick={handleOverlayClick} />
      
      <DrawerContainer isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>무료 체험 상담 신청</DrawerTitle>
          <CloseButton 
            onClick={handleClose} 
            data-close-button
            aria-label="닫기"
          >
            ×
          </CloseButton>
        </DrawerHeader>
        
        <DrawerContent>
          <DrawerDescription>
            아래 정보를 입력해 주시면 담당자가 빠르게 연락드립니다.
          </DrawerDescription>
          <ConsultationForm onClose={handleClose} />
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default SideDrawer; 