import React, { useState } from 'react';
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
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;

  &:focus {
    outline: none;
    border-color: #835EEB;
    box-shadow: 0 0 0 3px rgba(131, 94, 235, 0.1);
    transform: translateY(-1px);
  }

  &:hover {
    border-color: #D1D5DB;
  }

  &::placeholder {
    color: #9CA3AF;
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: #D1D5DB;
  }
`;



const SubmitButton = styled.button`
  background: linear-gradient(135deg, #835EEB, #6B4BC4);
  color: white;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(131, 94, 235, 0.3);
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 20px;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    background: linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    transform: translateX(-100%);
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 30px rgba(131, 94, 235, 0.4);

    &:before {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 4px 15px rgba(131, 94, 235, 0.3);
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 4px 20px rgba(131, 94, 235, 0.3), 0 0 0 3px rgba(131, 94, 235, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 10px rgba(131, 94, 235, 0.2);
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

const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #FF6B6B, #FF5252);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '⚠️';
    font-size: 16px;
  }
`;

const FieldError = styled.span`
  color: #FF6B6B;
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  margin-top: 4px;
  display: block;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledInput = styled(Input)<{ hasError?: boolean }>`
  border: 2px solid ${props => props.hasError ? '#FF6B6B' : '#E5E7EB'};
  transition: all 0.3s ease;

  &:focus {
    border-color: ${props => props.hasError ? '#FF6B6B' : '#835EEB'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(255, 107, 107, 0.1)' : 'rgba(131, 94, 235, 0.1)'};
  }
`;

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    academy: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해주세요.';
    } else if (!/^010-\d{4}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = '올바른 연락처 형식을 입력해주세요. (010-0000-0000)';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.academy.trim()) {
      newErrors.academy = '학원명을 입력해주세요.';
    }

    return newErrors;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // 입력 시 해당 필드 에러 제거
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (showErrorMessage) {
      setShowErrorMessage(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrorMessage(true);
      return;
    }

    // 폼이 유효한 경우 제출 로직
    // TODO: 실제 폼 제출 API 호출
    onClose(); // 폼 제출 후 모달 닫기
  };

  const hasAnyError = Object.values(errors).some(error => error);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {showErrorMessage && hasAnyError && (
        <ErrorMessage>
          모든 필수 항목을 올바르게 입력해주세요.
        </ErrorMessage>
      )}
      
      <FormGroup>
        <Label>이름</Label>
        <StyledInput 
          type="text" 
          placeholder="홍길동" 
          value={formData.name}
          onChange={handleChange('name')}
          hasError={!!errors.name}
        />
        {errors.name && <FieldError>{errors.name}</FieldError>}
      </FormGroup>

      <FormGroup>
        <Label>연락처</Label>
        <StyledInput 
          type="tel" 
          placeholder="010-0000-0000" 
          value={formData.phone}
          onChange={handleChange('phone')}
          hasError={!!errors.phone}
        />
        {errors.phone && <FieldError>{errors.phone}</FieldError>}
      </FormGroup>

      <FormGroup>
        <Label>이메일</Label>
        <StyledInput 
          type="email" 
          placeholder="example@example.com" 
          value={formData.email}
          onChange={handleChange('email')}
          hasError={!!errors.email}
        />
        {errors.email && <FieldError>{errors.email}</FieldError>}
      </FormGroup>

      <FormGroup>
        <Label>학원명</Label>
        <StyledInput 
          type="text" 
          placeholder="ㅇㅇ학원" 
          value={formData.academy}
          onChange={handleChange('academy')}
          hasError={!!errors.academy}
        />
        {errors.academy && <FieldError>{errors.academy}</FieldError>}
      </FormGroup>

      <SubmitButton type="submit">무료 체험 신청하기</SubmitButton>
      <PrivacyNotice>
        제출하시면 개인정보 수집 및 이용에 동의하게 됩니다.
      </PrivacyNotice>
    </Form>
  );
};

export default ConsultationForm; 