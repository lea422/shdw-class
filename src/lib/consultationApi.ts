import { ConsultationFormData, ApiResponse } from './types';

/**
 * 무료체험 신청 데이터를 수학대왕 API에 전송하는 함수
 */
export const submitConsultation = async (formData: ConsultationFormData): Promise<ApiResponse> => {
  try {
    // 개발 환경에서 테스트 모드 (실제 API 호출 대신 모의 응답)
    const isTestMode = process.env.NODE_ENV === 'development' && process.env.REACT_APP_TEST_MODE === 'true';
    
    if (isTestMode) {
      console.log('🧪 테스트 모드: 모의 응답 반환');
      console.log('📝 전송할 데이터:', formData);
      
      // 2초 지연으로 실제 API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return {
        success: true,
        message: '테스트 모드: 무료체험 신청이 완료되었습니다!',
        data: { test: true, formData }
      };
    }

    const requestBody = {
      name: formData.name,
      school: formData.academy, // academy를 school로 매핑
      email: formData.email,
      phone_number: formData.phone.replace(/-/g, ''), // 하이픈 제거 후 전송
      organization_type: formData.organization_type, // 사용자가 선택한 기관 유형
      region: "", // 빈 문자열로 설정
      extra: "" // 빈 문자열로 설정
    };

    const API_URL = process.env.REACT_APP_CONSULTATION_API_URL || "https://api-prod.iammathking.com/api/v3/organization/business_request";
    
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(requestBody),
      mode: "cors",
      credentials: "omit"
    });

    if (!response.ok) {
      console.error('❌ API 응답 오류:', response.status, response.statusText);
      return {
        success: false,
        message: '서버 응답 오류가 발생했습니다. 다시 시도해주세요.',
        data: { status: response.status, statusText: response.statusText }
      };
    }

    // 응답 본문이 비어있을 수 있으므로 안전하게 처리
    let data = null;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        data = await response.json();
      } catch (error) {
        console.log('응답 본문이 JSON이 아니거나 비어있음');
      }
    }

    console.log('✅ 무료체험 신청 성공:', { status: response.status, data });
    
    // API 응답에서 추가 정보 확인
    if (data) {
      console.log('📋 API 응답 상세:', JSON.stringify(data, null, 2));
    }
    
    return {
      success: true,
      message: '무료체험 신청이 완료되었습니다! 곧 담당자가 연락드리겠습니다.',
      data: data
    };

  } catch (error) {
    console.error('❌ 무료체험 신청 API 오류:', error);
    return {
      success: false,
      message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      data: error
    };
  }
};

/**
 * 무료체험 신청 데이터 유효성 검사 함수
 */
export const validateConsultationData = (formData: ConsultationFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('이름을 입력해주세요.');
  }

  if (!formData.phone.trim()) {
    errors.push('연락처를 입력해주세요.');
  } else {
    // 하이픈 제거 후 유효성 검사
    const cleanPhone = formData.phone.replace(/-/g, '');
    if (!/^010\d{8}$/.test(cleanPhone)) {
      errors.push('올바른 연락처 형식을 입력해주세요. (01000000000)');
    }
  }

  if (!formData.email.trim()) {
    errors.push('이메일을 입력해주세요.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('올바른 이메일 형식을 입력해주세요.');
  }

  if (!formData.academy.trim()) {
    errors.push('학원명을 입력해주세요.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}; 