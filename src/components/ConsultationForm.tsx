import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #374151;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`;

const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #835EEB;
    box-shadow: 0 0 0 2px rgba(131, 94, 235, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  min-height: 72px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #835EEB;
    box-shadow: 0 0 0 2px rgba(131, 94, 235, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(to right, #835EEB, #6B4BC4);
  color: white;
  padding: 0.875rem;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(131, 94, 235, 0.2);
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(131, 94, 235, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(131, 94, 235, 0.3);
  }
`;

const PrivacyNotice = styled.p`
  color: #6B7280;
  font-size: 0.75rem;
  font-family: 'Pretendard', sans-serif;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    onClose(); // 폼 제출 후 모달 닫기
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>이름</Label>
        <Input type="text" placeholder="홍길동" required />
      </FormGroup>
      <FormGroup>
        <Label>연락처</Label>
        <Input type="tel" placeholder="010-0000-0000" required />
      </FormGroup>
      <FormGroup>
        <Label>이메일</Label>
        <Input type="email" placeholder="example@example.com" required />
      </FormGroup>
      <FormGroup>
        <Label>학원명</Label>
        <Input type="text" placeholder="ㅇㅇ학원" required />
      </FormGroup>
      <FormGroup>
        <Label>문의사항</Label>
        <TextArea placeholder="문의사항을 입력해주세요" required />
      </FormGroup>
      <SubmitButton type="submit">무료 체험 신청하기</SubmitButton>
      <PrivacyNotice>
        제출하시면 개인정보 수집 및 이용에 동의하게 됩니다.
      </PrivacyNotice>
    </Form>
  );
};

export default ConsultationForm; 