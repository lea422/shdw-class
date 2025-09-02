import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import ConsultationForm from './ConsultationForm';

// ChannelService를 window 객체에 추가하기 위한 타입 확장
declare global {
  interface Window {
    ChannelService?: any;
    isDrawerOpen?: boolean;
    closeDrawer?: () => void;
  }
}

const FloatingButtonContainer = styled.div<{ $isVisible: boolean; $isOpen: boolean }>`
  position: fixed !important;
  bottom: 24px !important; /* 위로 0.5px 더 이동 (23.5px → 24px) */
  right: 135px !important; /* 오른쪽으로 10px 더 이동 (145px → 135px) */
  z-index: 1000;
  opacity: 1 !important; /* 항상 완전히 불투명하게 유지 */
  transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0.8)'};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* opacity transition 제거 */
  pointer-events: auto !important; /* 항상 클릭 가능하게 유지 */
  
  /* 모바일에서 모달이 열렸을 때 버튼 숨기기 */
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'none' : 'block'};
    right: 25px !important; /* 오른쪽으로 110px 이동 (135px - 110px) */
    bottom: 44px !important; /* 위로 20px 이동 (24px + 20px) */
  }
`;

const ChatIcon = styled.div<{ $isClose?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.75rem; /* 15px 더 줄임 (59px → 44px) */
  height: 2.75rem;
  background: ${props => props.$isClose ? '#ffffff' : 'transparent'};
  border-radius: ${props => props.$isClose ? '45%' : '50%'};
  box-shadow: ${props => props.$isClose ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none'};
  position: relative;
  z-index: 9999 !important; /* 최상위 레이어로 설정 */
  opacity: 1 !important; /* 항상 완전히 불투명하게 유지 */
  transition: all 0.3s ease;

  &:hover {
    /* 확대 효과 제거 */
  }
  
  &:active {
    transform: scale(0.98); /* 클릭 효과 줄임 (0.95 → 0.98) */
    transform-origin: center center; /* 가운데 축을 기준으로 축소 */
    transition: all 0.1s ease;
  }
  
  /* 모바일에서 아이콘 크기 줄이기 */
  @media (max-width: 768px) {
    width: 1.8125rem; /* 15px 더 줄임 (44px → 29px) */
    height: 1.8125rem; /* 15px 더 줄임 (44px → 29px) */
  }
  
  img {
    width: 44px; /* 15px 줄임 (59px → 44px) */
    height: 44px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.15));
  }
  
  svg {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
    
    /* 모바일에서 Channel.io 버튼과 동일한 크기로 조정 */
    @media (max-width: 768px) {
      width: 26px; /* Channel.io 기본 크기와 맞춤 */
      height: 26px;
    }
    
    @media (max-width: 480px) {
      width: 24px; /* Channel.io 모바일 크기와 맞춤 */
      height: 24px;
    }
    
    @media (max-width: 375px) {
      width: 22px; /* Channel.io 작은 모바일 크기와 맞춤 */
      height: 22px;
    }
    
    @media (max-width: 320px) {
      width: 20px; /* Channel.io 매우 작은 모바일 크기와 맞춤 */
      height: 20px;
    }
  }
`;

const FloatingButtonText = styled.span`
  white-space: nowrap;
  position: relative;
  transition: all 0.3s ease;
`;

const FloatingButton = styled.button`
  background: none;
  border: none;
  color: #33373B;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  position: relative;
  width: 8rem;
  height: 3.5rem;
  justify-content: center;

  &:hover {
    color: #835EEB;
    /* 확대 효과 제거, 텍스트 컬러 전환만 유지 */
  }

  &:active {
    transform: translateY(0) scale(0.95);
    transition: all 0.1s ease;
  }
  
  /* 모바일에서 버튼 크기 줄이기 */
  @media (max-width: 768px) {
    width: 6.5rem; /* 20px 줄임 (8rem → 6.5rem) */
    height: 2.75rem; /* 20px 줄임 (3.5rem → 2.75rem) */
    font-size: 0.75rem; /* 폰트 크기도 조정 */
    gap: 0.375rem; /* 간격 조정 */
  }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  /* 모바일에서 Channel.io 버튼과 동일한 크기로 조정 */
  @media (max-width: 768px) {
    width: 7rem; /* Channel.io 기본 크기와 맞춤 */
    height: 3rem;
    font-size: 0.875rem;
    gap: 0.125rem;
    
    &:hover {
      // 호버 효과 제거
    }
  }
  
  @media (max-width: 480px) {
    width: 6.5rem; /* Channel.io 모바일 크기와 맞춤 */
    height: 2.75rem;
    font-size: 0.8125rem;
    gap: 0.125rem;
  }
  
  @media (max-width: 375px) {
    width: 6rem; /* Channel.io 작은 모바일 크기와 맞춤 */
    height: 2.5rem;
    font-size: 0.75rem;
    gap: 0.125rem;
  }
`;

// ModalOverlay 제거 - 배경 흐리게 효과 없음

const MobileCloseButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const ModalContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 5.625rem; /* 위로 2px 이동 (5.5rem → 5.625rem) */
  right: 8.4375rem; /* 1번 버튼 위치에 맞춰 조정 */
  width: 24.6875rem;
  height: 42.8125rem; /* 685px 높이로 설정 (15px 감소) */
  max-height: 42.8125rem;
  background: white;
  z-index: 2002;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(50px)'};
  transform-origin: bottom right;
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 32px rgba(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow-y: auto;

  /* 말풍선 꼬리 */
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    right: 1.25rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid white;
  }

  /* 모바일에서 전체화면 모달 */
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    bottom: auto;
    right: auto;
    border-radius: 0;
    transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(100%)'};
    transform-origin: bottom center;
    
    /* 말풍선 꼬리 제거 */
    &::after {
      display: none;
    }
  }
`;









interface SideDrawerProps {
  isModalOpen?: boolean;
  onDrawerStateChange?: (isOpen: boolean) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isModalOpen = false, onDrawerStateChange }) => {
  const [isOpen, setIsOpen] = useState(isModalOpen);

  const handleOpen = () => {
    setIsOpen(true);
    onDrawerStateChange?.(true);
    
    // Channel.io 모달이 열려있으면 완전히 닫기
    try {
      // Channel.io 서비스가 있으면 hide 호출
      if (window.ChannelService && window.ChannelService.hide) {
        window.ChannelService.hide();
      }
      
      // 추가로 DOM 요소를 직접 조작하여 Channel.io 모달 닫기
      const channelModal = document.querySelector('#ch-plugin-messenger');
      if (channelModal) {
        const channelModalStyle = channelModal as HTMLElement;
        channelModalStyle.style.display = 'none';
        channelModalStyle.style.visibility = 'hidden';
        channelModalStyle.style.opacity = '0';
      }
      
      // Channel.io 버튼도 일시적으로 숨기기
      const channelButton = document.querySelector('#ch-plugin-launcher');
      if (channelButton) {
        const channelButtonStyle = channelButton as HTMLElement;
        channelButtonStyle.style.display = 'none';
        // 1초 후 다시 표시
        setTimeout(() => {
          channelButtonStyle.style.display = '';
        }, 1000);
      }
      
    } catch (error) {
      console.log('Channel.io 모달 닫기 실패:', error);
    }
    
    // 키보드 포커스 관리
    setTimeout(() => {
      const closeButton = document.querySelector('[data-close-button]') as HTMLElement;
      if (closeButton) closeButton.focus();
    }, 100);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onDrawerStateChange?.(false);
    document.body.style.overflow = 'auto';
    
    // Channel.io 버튼 다시 표시
    try {
      const channelButton = document.querySelector('#ch-plugin-launcher');
      if (channelButton) {
        const channelButtonStyle = channelButton as HTMLElement;
        channelButtonStyle.style.display = '';
      }
    } catch (error) {
      console.log('Channel.io 버튼 복원 실패:', error);
    }
  }, [onDrawerStateChange]);

  // isModalOpen prop 변경 시 isOpen 상태 동기화
  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  // handleOverlayClick 제거 - 배경 클릭으로 모달 닫기 기능 없음

  // 1번 플로팅 버튼 위치 고정을 위한 useEffect
  useEffect(() => {
    const fixButtonPosition = () => {
      const buttonContainer = document.querySelector('[data-floating-button]') as HTMLElement;
      if (buttonContainer) {
        // 강제로 위치 고정
        buttonContainer.style.position = 'fixed';
        
        // data-z-index 속성에서 올바른 z-index 값 가져오기
        const correctZIndex = buttonContainer.getAttribute('data-z-index') || '1000';
        buttonContainer.style.zIndex = correctZIndex;
        
        // 모든 화면 크기에서 동일한 위치로 고정
        buttonContainer.style.bottom = '24px'; /* 위로 0.5px 더 이동 */
        buttonContainer.style.right = '135px'; /* 오른쪽으로 10px 더 이동 */
      }
    };

    // 초기 위치 고정
    fixButtonPosition();
    
    // 화면 크기 변경 시 위치 재고정
    window.addEventListener('resize', fixButtonPosition);
    
    // 주기적으로 위치 확인 및 고정 (다른 스타일이 덮어쓸 경우 대비)
    const interval = setInterval(fixButtonPosition, 1000);
    
    return () => {
      window.removeEventListener('resize', fixButtonPosition);
      clearInterval(interval);
    };
  }, []);

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
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleClose]);

  // 전역 함수 등록 및 상태 동기화
  React.useEffect(() => {
    // 전역 상태 등록
    window.isDrawerOpen = isOpen;
    window.closeDrawer = handleClose;
    
    // Channel.io 버튼 클릭 감지
    const handleChannelButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const channelButton = document.querySelector('#ch-plugin-launcher');
      
      // Channel.io 버튼이 클릭되었고 1번 모달이 열려있으면 1번 모달 닫기
      if (channelButton && (target === channelButton || channelButton.contains(target)) && isOpen) {
        console.log('Channel.io 버튼 클릭 감지, 1번 모달 자동 닫기');
        handleClose();
      }
    };

    // Channel.io 버튼 클릭 이벤트 리스너 추가
    document.addEventListener('click', handleChannelButtonClick, true);
    
    // Channel.io 모달 상태 감지 (폴링 방식) - 더 강화된 감지
    const checkChannelModal = setInterval(() => {
      try {
        // Channel.io 모달이 열려있는지 확인하는 방법들
        const channelElements = document.querySelectorAll('[class*="channel"], [class*="chat"], [class*="messenger"], #ch-plugin-messenger, [id*="ch-plugin"]');
        const isChannelModalOpen = Array.from(channelElements).some(el => {
          const rect = el.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(el);
          return rect.width > 0 && rect.height > 0 && 
                 computedStyle.display !== 'none' &&
                 computedStyle.visibility !== 'hidden' &&
                 computedStyle.opacity !== '0';
        });
        
        // 추가로 Channel.io 특정 클래스나 속성 확인
        const channelModal = document.querySelector('#ch-plugin-messenger');
        const isChannelModalVisible = channelModal && 
          window.getComputedStyle(channelModal).display !== 'none' &&
          window.getComputedStyle(channelModal).visibility !== 'hidden';
        
        // Channel.io 모달이 열려있으면 1번 모달 자동 닫기
        if ((isChannelModalOpen || isChannelModalVisible) && isOpen) {
          console.log('Channel.io 모달 감지, 1번 모달 자동 닫기');
          handleClose();
        }
      } catch (error) {
        // 에러 무시
      }
    }, 500); // 더 빠른 감지를 위해 500ms로 변경

    return () => {
      clearInterval(checkChannelModal);
      document.removeEventListener('click', handleChannelButtonClick, true);
      window.isDrawerOpen = false;
      window.closeDrawer = undefined;
    };
  }, [isOpen, handleClose]);

  return (
    <>
      {/* 1번 플로팅 버튼 (항상 표시, 모달 상태에 따라 아이콘 변경) */}
      <FloatingButtonContainer 
        $isVisible={true} 
        $isOpen={isOpen}
        style={{ zIndex: isOpen ? 10000 : 1000 }}
        data-floating-button
        data-z-index={isOpen ? 10000 : 1000}
      >
        <FloatingButton onClick={isOpen ? handleClose : handleOpen} aria-label={isOpen ? "무료체험 신청 닫기" : "무료체험 신청 열기"}>
          <FloatingButtonText>무료체험신청</FloatingButtonText>
          <ChatIcon $isClose={isOpen}>
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }}>
                <path d="M6 6L18 18M18 6L6 18" stroke="#666666" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <img 
                src="/Assets/icon/무료체험.svg" 
                alt="무료체험" 
              />
            )}
          </ChatIcon>
        </FloatingButton>
      </FloatingButtonContainer>

      {/* 모달 항상 렌더링, 애니메이션으로 표시/숨김 제어 */}
      <ModalContainer $isOpen={isOpen}>
        {/* 모바일에서 우측상단 닫기버튼 */}
        <MobileCloseButton onClick={handleClose} aria-label="닫기">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px' }}>
            <path d="M6 6L18 18M18 6L6 18" stroke="#666666" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </MobileCloseButton>
        
        <div style={{ padding: '30px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '12px' }}>
            <h2 style={{ margin: 0, color: '#33373B', fontSize: '22px', fontWeight: 700, fontFamily: 'Pretendard, sans-serif' }}>
              무료 체험 신청
            </h2>
          </div>
          <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: '1.5', marginBottom: '12px', fontFamily: 'Pretendard, sans-serif' }}>
            궁금한 점이 있으신가요?<br />
            아래 폼을 작성해주시면 빠르게 연락드리겠습니다.
          </p>
          <ConsultationForm onClose={handleClose} />
        </div>
      </ModalContainer>
    </>
  );
};

export default SideDrawer; 