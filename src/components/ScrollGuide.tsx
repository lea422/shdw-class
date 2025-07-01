import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-8px);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, white, #F8F6FF);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(to bottom, #f8f6ff, #f0edff);
  }

  &:active {
    transform: scale(0.98);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, #F8F6FF);
    pointer-events: none;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: ${pulse} 2s ease-in-out infinite;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    animation: ${bounce} 1s ease-in-out infinite;
  }
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 16px solid #835EEB;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${ArrowContainer}:hover & {
    border-top-color: #6B4BC4;
    transform: scale(1.2);
  }
`;

const ArrowDot = styled.div`
  width: 4px;
  height: 4px;
  background: #835EEB;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${ArrowContainer}:hover & {
    background: #6B4BC4;
    transform: scale(1.5);
  }
`;

interface ScrollGuideProps {
  onClick: () => void;
}

const ScrollGuide: React.FC<ScrollGuideProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <ArrowContainer>
        <ArrowIcon />
        <ArrowDot />
      </ArrowContainer>
    </Container>
  );
};

export default ScrollGuide; 