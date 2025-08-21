// WebAppIntegrationScaled.tsx
// 👉 이 파일 하나를 추가해 import 후 <WebAppIntegrationScaled />로 사용하세요.
import React from "react";
import styled from "styled-components";

/** 반응형 메인 컨테이너 */
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 90vh;
  min-height: 600px;
  max-height: 900px;
  display: grid;
  grid-template-areas: 
    "left center right"
    "left center right";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  gap: 2vw;

  @media (max-width: 1280px) {
    max-width: 100vw;
    height: 85vh;
    min-height: 500px;
    gap: 1.5vw;
  }

  @media (max-width: 1024px) {
    height: 80vh;
    min-height: 450px;
    gap: 1vw;
  }

  @media (max-width: 768px) {
    height: 75vh;
    min-height: 400px;
    grid-template-areas: 
      "center"
      "left"
      "right";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 3vh;
  }

  @media (max-width: 600px) {
    height: 70vh;
    min-height: 350px;
    gap: 2vh;
  }
`;

/** 반응형 중앙 동기화 텍스트 */
const ResponsiveSyncText = styled.div`
  grid-area: center;
  text-align: center;
  color: #835EEB;
  font-weight: 800;
  font-size: clamp(18px, 4vw, 32px);
  line-height: 1.2;
  z-index: 10;
  margin-bottom: 2vh;
  align-self: end;
`;

/** 반응형 이미지 */
const ResponsiveImage = styled.img<{ $position: string }>`
  filter: drop-shadow(0 8px 16px rgba(131,94,235,0.12));
  transition: all 0.3s ease;
  height: auto;
  max-height: 60vh;
  width: auto;

  ${({ $position }) => {
    switch ($position) {
      case 'center':
        return `
          grid-area: center;
          align-self: center;
          height: 50vh;
          max-height: 500px;
        `;
      case 'left':
        return `
          grid-area: left;
          align-self: center;
          height: 45vh;
          max-height: 450px;
          filter: drop-shadow(0 10px 20px rgba(131,94,235,0.15));
        `;
      case 'right':
        return `
          grid-area: right;
          align-self: center;
          height: 50vh;
          max-height: 500px;
          filter: drop-shadow(0 10px 20px rgba(131,94,235,0.15));
        `;
      default:
        return '';
    }
  }}

  @media (max-width: 1024px) {
    ${({ $position }) => {
      switch ($position) {
        case 'center':
          return `
            height: 45vh;
            max-height: 400px;
          `;
        case 'left':
          return `
            height: 40vh;
            max-height: 350px;
          `;
        case 'right':
          return `
            height: 45vh;
            max-height: 400px;
          `;
        default:
          return '';
      }
    }}
  }

  @media (max-width: 768px) {
    ${({ $position }) => {
      switch ($position) {
        case 'center':
          return `
            height: 40vh;
            max-height: 300px;
          `;
        case 'left':
          return `
            height: 35vh;
            max-height: 250px;
          `;
        case 'right':
          return `
            height: 40vh;
            max-height: 300px;
          `;
        default:
          return '';
      }
    }}
  }

  @media (max-width: 600px) {
    ${({ $position }) => {
      switch ($position) {
        case 'center':
          return `
            height: 35vh;
            max-height: 250px;
          `;
        case 'left':
          return `
            height: 30vh;
            max-height: 200px;
          `;
        case 'right':
          return `
            height: 35vh;
            max-height: 250px;
          `;
        default:
          return '';
      }
    }}
  }
`;

/** 반응형 정보 블록 컨테이너 */
const ResponsiveInfoBlock = styled.div<{ $position: 'left' | 'right' }>`
  text-align: ${({ $position }) => $position === 'right' ? 'right' : 'left'};
  max-width: 25vw;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 1vh;

  ${({ $position }) => {
    if ($position === 'right') {
      return `
        grid-area: right;
        align-self: start;
        justify-self: end;
        margin-top: 2vh;
      `;
    } else {
      return `
        grid-area: left;
        align-self: end;
        justify-self: start;
        margin-bottom: 2vh;
      `;
    }
  }}

  @media (max-width: 1024px) {
    max-width: 30vw;
    min-width: 120px;
  }

  @media (max-width: 768px) {
    max-width: 80vw;
    min-width: 200px;
    align-self: center;
    justify-self: center;
    text-align: center;
    margin: 1vh 0;
  }

  @media (max-width: 600px) {
    max-width: 90vw;
    min-width: 180px;
  }
`;

/** 반응형 정보 블록 제목 */
const ResponsiveInfoTitle = styled.div`
  color: #835EEB;
  font-size: clamp(14px, 2.5vw, 20px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1vh;
`;

/** 반응형 칩 스타일 */
const ResponsiveChip = styled.div`
  padding: clamp(6px, 1.5vw, 10px) clamp(10px, 2.5vw, 18px);
  border-radius: 999px;
  background: #f3effd;
  color: #33373b;
  font-size: clamp(10px, 2vw, 14px);
  line-height: 1.4;
  white-space: nowrap;
  transition: all 0.3s ease;
  margin-bottom: 0.5vh;
  display: inline-block;
`;

/** 반응형 칩 컨테이너 */
const ResponsiveChipContainer = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: clamp(3px, 1vw, 8px);
  align-items: ${({ $align }) => $align === 'right' ? 'flex-end' : 'flex-start'};

  @media (max-width: 768px) {
    align-items: center;
  }
`;

/** 반응형 섹션 헤더 컨테이너 */
const SectionHeader = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 1920px) {
    padding-top: 36px;
    padding-bottom: 20px;
    gap: 10px;
  }

  @media (max-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 18px;
    gap: 8px;
  }

  @media (max-width: 1024px) {
    padding-top: 28px;
    padding-bottom: 16px;
    gap: 6px;
  }

  @media (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 14px;
    gap: 5px;
  }
`;

/** 반응형 제목 */
const ResponsiveTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 800;
  text-align: center;

  @media (max-width: 1920px) {
    font-size: 30px;
  }

  @media (max-width: 1440px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

/** 반응형 설명 텍스트 */
const ResponsiveDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 1920px) {
    font-size: 15px;
  }

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

/** 여기부터 실제 섹션 (이미지/텍스트 좌표는 디자인 기준 px) */
export default function WebAppIntegrationScaled() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        margin: 0,
        padding: 0,
        background: "#fff",
      }}
    >
      {/* 섹션 헤더 */}
      <SectionHeader>
        <ResponsiveTitle>
          웹-앱 연동으로 완성되는 교육 시스템
        </ResponsiveTitle>
        <ResponsiveDescription>
          교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br />
          완벽한 교육 생태계를 경험하세요
        </ResponsiveDescription>

        {/* 스토어 버튼들 (원하면 링크 교체) */}
        <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.iammathking&pcampaignid=web_share"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              background: "#111",
              color: "#fff",
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            Google Play
          </a>
          <a
            href="https://apps.apple.com/app/%EC%88%98%ED%95%99%EB%8C%80%EC%99%95-ai%EB%94%94%EC%A7%80%ED%84%B8%EB%AC%8C%EC%A0%9C%EC%A7%91/id1501165233"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              background: "#111",
              color: "#fff",
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            App Store
          </a>
        </div>
      </SectionHeader>

      {/* 반응형 메인 컨테이너 */}
      <MainContainer>
        {/* 중앙 "실시간 동기화" */}
        <ResponsiveSyncText>
          실시간
          <br />
          동기화
        </ResponsiveSyncText>

        {/* 가운데 폰 (3번 목업) */}
        <ResponsiveImage
          src="/WebApp/integration/3.svg"
          alt="모바일 앱"
          $position="center"
        />

        {/* 왼쪽: 1번 목업(태블릿/웹) */}
        <ResponsiveImage
          src="/WebApp/integration/1.svg"
          alt="선생님용 웹사이트(태블릿)"
          $position="left"
        />

        {/* 오른쪽: 4번 목업(랩톱) */}
        <ResponsiveImage
          src="/WebApp/integration/4.svg"
          alt="데스크톱 관리 시스템"
          $position="right"
        />

        {/* 우측 상단 정보 블록 */}
        <ResponsiveInfoBlock $position="right">
          <ResponsiveInfoTitle>
            선생님용 웹사이트
          </ResponsiveInfoTitle>
          <ResponsiveChipContainer $align="right">
            <ResponsiveChip>클래스 및 학생관리</ResponsiveChip>
            <ResponsiveChip>맞춤형 문제 출제</ResponsiveChip>
            <ResponsiveChip>AI 채점 결과 확인</ResponsiveChip>
            <ResponsiveChip>실력 분석 리포트</ResponsiveChip>
          </ResponsiveChipContainer>
        </ResponsiveInfoBlock>

        {/* 좌측 하단 정보 블록 */}
        <ResponsiveInfoBlock $position="left">
          <ResponsiveInfoTitle>
            학생용 모바일 앱
          </ResponsiveInfoTitle>
          <ResponsiveChipContainer $align="left">
            <ResponsiveChip>맞춤형 학습지 수신</ResponsiveChip>
            <ResponsiveChip>AI 힌트 시스템</ResponsiveChip>
            <ResponsiveChip>실시간 채점 피드백</ResponsiveChip>
            <ResponsiveChip>장학금 알림 수신</ResponsiveChip>
          </ResponsiveChipContainer>
        </ResponsiveInfoBlock>
      </MainContainer>
    </section>
  );
}
