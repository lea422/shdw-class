import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, white, #F8F6FF);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

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

const ScrollIcon = styled.div`
  width: 40px;
  height: 60px;
  border: 2px solid #835EEB;
  border-radius: 20px;
  position: relative;
  animation: ${bounce} 2s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #835EEB;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const Text = styled.div`
  margin-top: 16px;
  color: #835EEB;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
`;

interface ScrollGuideProps {
  onClick: () => void;
}

const ScrollGuide: React.FC<ScrollGuideProps> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <ScrollIcon />
      <Text>스크롤하여 더 알아보기</Text>
    </Container>
  );
};

export default ScrollGuide; 