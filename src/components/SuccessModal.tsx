import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ConsultationFormData } from '../lib/types';

const fadeIn = keyframes`
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(8px);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(8px);
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(131, 94, 235, 0.25);
  animation: ${slideUp} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-align: center;
  margin: 20px;

  @media (max-width: 600px) {
    max-width: 90vw;
    padding: 30px 20px;
    border-radius: 16px;
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  animation: iconBounce 0.6s ease-out;
  
  img {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 4px 20px rgba(131, 94, 235, 0.3));
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 6px 25px rgba(131, 94, 235, 0.4));
    }
  }
  
  @keyframes iconBounce {
    0% {
      opacity: 0;
      transform: scale(0.3) translateY(20px);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

const SuccessTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const SuccessMessage = styled.p`
  font-size: 16px;
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 32px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

const SuccessDescription = styled.div`
  background: #F9FAFB;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  
  @media (max-width: 600px) {
    padding: 16px;
    margin-bottom: 20px;
  }
`;

const DescriptionTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

const DescriptionText = styled.div`
  font-size: 13px;
  color: #6B7280;
  line-height: 1.5;
  margin: 0;
  font-family: 'Pretendard', sans-serif;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 6px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #374151;
  min-width: 60px;
  text-align: left;
`;

const InfoValue = styled.span`
  color: #6B7280;
  text-align: left;
  flex: 1;
  margin-left: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const LinkButton = styled.a`
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  color: white;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(131, 94, 235, 0.3);
  width: 100%;
  text-decoration: none;
  text-align: center;
  display: block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(131, 94, 235, 0.4);
    color: white;
    text-decoration: none;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(131, 94, 235, 0.3);
  }
  
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;

const CloseButton = styled.button`
  background: #F3F4F6;
  color: #6B7280;
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  border: 1px solid #E5E7EB;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #E5E7EB;
    color: #374151;
    border-color: #D1D5DB;
  }

  &:active {
    background: #D1D5DB;
  }
  
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 10px 24px;
  }
`;

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData?: ConsultationFormData;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, formData }) => {
  // 자동 닫기 제거됨

  const handleLinkClick = () => {
    // 링크 클릭 시 모달 닫기
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <SuccessIcon>
          <img src="/Assets/icon/check.svg" alt="성공" />
        </SuccessIcon>
        <SuccessTitle>신청이 완료되었습니다!</SuccessTitle>
        <SuccessMessage>
          무료체험 신청이 성공적으로 접수되었습니다.<br />
          담당자가 빠른 시일 내에 연락드리겠습니다.
        </SuccessMessage>
        <SuccessDescription>
          <DescriptionTitle>신청내역</DescriptionTitle>
          <DescriptionText>
            {formData && (
              <>
                <InfoRow>
                  <InfoLabel>학교/학원:</InfoLabel>
                  <InfoValue>{formData.organization_type === 'academy' ? '학원' : '학교'}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>이름:</InfoLabel>
                  <InfoValue>{formData.name}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>연락처:</InfoLabel>
                  <InfoValue>{formData.phone}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>이메일:</InfoLabel>
                  <InfoValue>{formData.email}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>{formData.organization_type === 'academy' ? '학원명' : '학교명'}:</InfoLabel>
                  <InfoValue>{formData.academy}</InfoValue>
                </InfoRow>
              </>
            )}
            {!formData && (
              <InfoRow>
                <InfoValue>신청 정보를 불러오는 중입니다...</InfoValue>
              </InfoRow>
            )}
          </DescriptionText>
        </SuccessDescription>
        <ButtonContainer>
          <LinkButton 
            href="https://class.iammathking.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            수학대왕 클래스 바로가기
          </LinkButton>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SuccessModal;