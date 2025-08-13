// WebAppIntegrationScaled.tsx
// 👉 이 파일 하나를 추가해 import 후 <WebAppIntegrationScaled />로 사용하세요.
import React from "react";

/** 1280 기준 스케일 스테이지 */
function Stage1280({
  baseHeight = 900,
  children,
}: {
  baseHeight?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: baseHeight,
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 1280,
          height: baseHeight,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** 칩 간단 스타일 */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 14px",
        borderRadius: 999,
        background: "#F3EFFD",
        color: "#33373B",
        fontSize: 13,
        lineHeight: "19.5px",
        marginBottom: 8,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </div>
  );
}

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
      <div
        style={{
          paddingTop: 40,
          paddingBottom: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 32,
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          웹-앱 연동으로 완성되는 교육 시스템
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            color: "#666",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          교사는 웹에서 관리하고, 학생은 앱으로 학습하는<br />
          완벽한 교육 생태계를 경험하세요
        </p>

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
      </div>

      {/* ✅ 1280 고정 스테이지 (아래 baseHeight를 시안 세로값에 맞춰 조정) */}
      <Stage1280 baseHeight={900}>
        {/* 중앙 "실시간 동기화" */}
        <div
          style={{
            position: "absolute",
            top: 120,
            left: 640,
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "#835EEB",
            fontWeight: 800,
            fontSize: 32,
            lineHeight: 1.2,
          }}
        >
          실시간
          <br />
          동기화
        </div>

        {/* 가운데 폰 (3번 목업) */}
        <img
          src="/WebApp/integration/3.svg"
          alt="모바일 앱"
          style={{
            position: "absolute",
            top: 180,
            left: 640,
            transform: "translateX(-50%)",
            height: 540,
            filter: "drop-shadow(0 8px 16px rgba(131,94,235,0.12))",
          }}
        />

        {/* 왼쪽: 1번 목업(태블릿/웹) */}
        <img
          src="/WebApp/integration/1.svg"
          alt="선생님용 웹사이트(태블릿)"
          style={{
            position: "absolute",
            top: 200,
            left: -40, // 살짝 잘리게 음수 가능
            height: 560,
            filter: "drop-shadow(0 10px 20px rgba(131,94,235,0.15))",
          }}
        />

        {/* 오른쪽: 4번 목업(랩톱) */}
        <img
          src="/WebApp/integration/4.svg"
          alt="데스크톱 관리 시스템"
          style={{
            position: "absolute",
            top: 260,
            right: -90, // 살짝 컷
            height: 620,
            filter: "drop-shadow(0 10px 20px rgba(131,94,235,0.15))",
          }}
        />

        {/* 우측 상단 정보 블록 */}
        <div
          style={{
            position: "absolute",
            top: 120,
            right: 220,
            textAlign: "right",
          }}
        >
          <div
            style={{
              color: "#835EEB",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            선생님용 웹사이트
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <Chip>클래스 및 학생관리</Chip>
            <Chip>맞춤형 문제 출제</Chip>
            <Chip>AI 채점 결과 확인</Chip>
            <Chip>실력 분석 리포트</Chip>
          </div>
        </div>

        {/* 좌측 하단 정보 블록 */}
        <div
          style={{
            position: "absolute",
            left: 180,
            bottom: 90,
          }}
        >
          <div
            style={{
              color: "#835EEB",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            학생용 모바일 앱
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Chip>맞춤형 학습지 수신</Chip>
            <Chip>AI 힌트 시스템</Chip>
            <Chip>실시간 채점 피드백</Chip>
            <Chip>장학금 알림 수신</Chip>
          </div>
        </div>
      </Stage1280>
    </section>
  );
}
