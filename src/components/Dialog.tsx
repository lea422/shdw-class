import React from 'react';
import styled from 'styled-components';

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  backdrop-filter: blur(4px);
`;

const DialogContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem 1.5rem;
  width: 100%;
  max-width: 26rem;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(131, 94, 235, 0.25);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    max-width: 90vw;
    margin: 20px;
    padding: 1rem 1rem;
    border-radius: 12px;
  }
`;

const DialogHeader = styled.div`
  margin-bottom: 1.5rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const DialogTitleWrapper = styled.div`
  flex: 1;
`;

const DialogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: 'Pretendard', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
`;

const DialogDescription = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const CloseButton = styled.button`
  padding: 0.75rem;
  color: #6B7280;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-left: 1rem;
  margin-top: -0.5rem;

  &:hover {
    background-color: rgba(131, 94, 235, 0.1);
    color: #835EEB;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
    margin-left: 0.5rem;
    margin-top: -0.25rem;
  }
`;

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <DialogOverlay onClick={onClose}>
      <DialogContainer onClick={e => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitleWrapper>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogTitleWrapper>
          <CloseButton onClick={onClose}>×</CloseButton>
        </DialogHeader>
        {children}
      </DialogContainer>
    </DialogOverlay>
  );
};

export default Dialog; 