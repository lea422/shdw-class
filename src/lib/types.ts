export interface Notice {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// 기관 유형 타입
export type OrganizationType = 'school' | 'academy';

// 무료체험 신청 데이터 타입
export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  academy: string;
  organization_type: OrganizationType;
  created_at?: string;
}

// API 응답 타입
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
} 