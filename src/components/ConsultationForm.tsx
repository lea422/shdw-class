import React, { useState } from 'react';
import styled from 'styled-components';
import { submitConsultation, validateConsultationData } from '../lib/consultationApi';
import { ConsultationFormData, OrganizationType } from '../lib/types';

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

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10B981, #059669);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
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
    content: '✅';
    font-size: 16px;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
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

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 0.5rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: 'Pretendard', sans-serif;
  color: #374151;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
`;

const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #835EEB;
  cursor: pointer;
`;

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    academy: '',
    organization_type: 'academy'
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // 전화번호 필드인 경우 하이픈 자동 제거
    if (field === 'phone') {
      value = value.replace(/-/g, '');
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    // 입력 시 해당 필드 에러 제거
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (showErrorMessage) {
      setShowErrorMessage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 기존 메시지들 초기화
    setShowErrorMessage(false);
    setShowSuccessMessage(false);
    
    // 유효성 검사
    const validation = validateConsultationData(formData);
    if (!validation.isValid) {
      const newErrors: {[key: string]: string} = {};
      validation.errors.forEach(error => {
        if (error.includes('이름')) newErrors.name = error;
        else if (error.includes('연락처')) newErrors.phone = error;
        else if (error.includes('이메일')) newErrors.email = error;
        else if (error.includes('학원명')) newErrors.academy = error;
      });
      setErrors(newErrors);
      setShowErrorMessage(true);
      return;
    }

    // 로딩 상태 시작
    setIsLoading(true);
    
    try {
      // API 호출
      const response = await submitConsultation(formData);
      
      if (response.success) {
        setShowSuccessMessage(true);
        // 성공 시 3초 후 모달 닫기
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setShowErrorMessage(true);
        // 에러 메시지를 표시하기 위해 임시로 에러 상태 설정
        setErrors({ general: response.message });
      }
    } catch (error) {
      console.error('폼 제출 오류:', error);
      setShowErrorMessage(true);
      setErrors({ general: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
    } finally {
      setIsLoading(false);
    }
  };

  const hasAnyError = Object.values(errors).some(error => error);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      {showSuccessMessage && (
        <SuccessMessage>
          무료체험 신청이 완료되었습니다! 곧 연락드리겠습니다.
        </SuccessMessage>
      )}
      
      {showErrorMessage && (hasAnyError || errors.general) && (
        <ErrorMessage>
          {errors.general || '모든 필수 항목을 올바르게 입력해주세요.'}
        </ErrorMessage>
      )}
      
      <FormGroup>
        <RadioGroup>
          <RadioOption>
            <RadioInput
              type="radio"
              name="organization_type"
              value="academy"
              checked={formData.organization_type === 'academy'}
              onChange={(e) => setFormData(prev => ({ ...prev, organization_type: e.target.value as OrganizationType }))}
            />
            학원
          </RadioOption>
          <RadioOption>
            <RadioInput
              type="radio"
              name="organization_type"
              value="school"
              checked={formData.organization_type === 'school'}
              onChange={(e) => setFormData(prev => ({ ...prev, organization_type: e.target.value as OrganizationType }))}
            />
            학교
          </RadioOption>
        </RadioGroup>
        {errors.organization_type && <FieldError>{errors.organization_type}</FieldError>}
      </FormGroup>

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
          placeholder="01000000000" 
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
        <Label>{formData.organization_type === 'school' ? '학교명' : '학원명'}</Label>
        <StyledInput 
          type="text" 
          placeholder={formData.organization_type === 'school' ? 'ㅇㅇ학교' : 'ㅇㅇ학원'} 
          value={formData.academy}
          onChange={handleChange('academy')}
          hasError={!!errors.academy}
        />
        {errors.academy && <FieldError>{errors.academy}</FieldError>}
      </FormGroup>

      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <LoadingSpinner />
            신청 중...
          </>
        ) : (
          '무료 체험 신청하기'
        )}
      </SubmitButton>
      <PrivacyNotice>
        제출하시면 개인정보 수집 및 이용에 동의하게 됩니다.
      </PrivacyNotice>
    </Form>
  );
};

export default ConsultationForm; 