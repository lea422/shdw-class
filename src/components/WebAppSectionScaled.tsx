'use client';
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 120px 40px;
  background: #fff;

  @media (max-width: 1920px) {
    padding: 100px 32px;
  }

  @media (max-width: 1440px) {
    padding: 80px 24px;
  }

  @media (max-width: 1024px) {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  height: 800px;
  min-width: 1200px;

  @media (max-width: 1920px) {
    max-width: 100vw;
    padding: 0 32px;
    height: 700px;
    min-width: 1000px;
  }

  @media (max-width: 1440px) {
    max-width: 100vw;
    padding: 0 24px;
    height: 600px;
    min-width: 800px;
  }

  @media (max-width: 1024px) {
    height: auto;
    min-width: 600px;
  }

  @media (max-width: 768px) {
    min-width: 400px;
  }
`;

const LeftColumn = styled.div`
  position: absolute;
  left: 40px;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;

  @media (max-width: 1920px) {
    left: 32px;
    top: 100px;
    width: 240px;
  }

  @media (max-width: 1440px) {
    left: 24px;
    top: 100px;
    width: 200px;
  }

  @media (max-width: 1024px) {
    width: 160px;
  }

  @media (max-width: 768px) {
    width: 140px;
  }
`;

const RightColumn = styled.div`
  position: absolute;
  right: 40px;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 280px;

  @media (max-width: 1920px) {
    right: 32px;
    top: 100px;
    width: 240px;
  }

  @media (max-width: 1440px) {
    right: 24px;
    top: 100px;
    width: 200px;
  }

  @media (max-width: 1024px) {
    width: 160px;
  }

  @media (max-width: 768px) {
    width: 140px;
  }
`;

const CenterColumn = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 200px;

  @media (max-width: 1920px) {
    top: 60px;
    width: 180px;
  }

  @media (max-width: 1440px) {
    top: 50px;
    width: 150px;
  }

  @media (max-width: 1024px) {
    width: 130px;
  }

  @media (max-width: 768px) {
    width: 110px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 1440px) {
    margin-bottom: 16px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(131, 94, 235, 0.12));

  @media (max-width: 1920px) {
    max-width: 240px;
  }

  @media (max-width: 1440px) {
    max-width: 200px;
  }

  @media (max-width: 1024px) {
    max-width: 160px;
  }

  @media (max-width: 768px) {
    max-width: 140px;
  }
`;

const CenterImage = styled(Image)`
  max-width: 200px;

  @media (max-width: 1920px) {
    max-width: 180px;
  }

  @media (max-width: 1440px) {
    max-width: 150px;
  }

  @media (max-width: 1024px) {
    max-width: 110px;
  }

  @media (max-width: 768px) {
    max-width: 90px;
  }
`;

const Title = styled.div`
  color: #835eeb;
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 12px;

  @media (max-width: 1920px) {
    font-size: 22px;
    margin: 18px 0 10px;
  }

  @media (max-width: 1440px) {
    font-size: 20px;
    margin: 16px 0 8px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    margin: 14px 0 8px;
  }
`;

const ChipList = styled.div<{ align?: 'right' | 'left' }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: ${({ align }) => (align === 'right' ? 'flex-end' : 'flex-start')};

  @media (max-width: 1440px) {
    gap: 8px;
  }
`;

const Chip = styled.div`
  padding: 10px 18px;
  border-radius: 999px;
  background: #f3effd;
  color: #33373b;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;

  @media (max-width: 1920px) {
    padding: 9px 16px;
    font-size: 13px;
    line-height: 19px;
  }

  @media (max-width: 1440px) {
    padding: 8px 14px;
    font-size: 13px;
    line-height: 19.5px;
  }

  @media (max-width: 1024px) {
    padding: 7px 12px;
    font-size: 12px;
    line-height: 18px;
  }
`;

const SyncText = styled.div`
  color: #835eeb;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 1920px) {
    font-size: 32px;
    margin-bottom: 18px;
  }

  @media (max-width: 1440px) {
    font-size: 28px;
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
    margin-bottom: 14px;
  }
`;

export default function WebAppSectionScaled() {
  return (
    <Section>
      <Container>
        {/* 왼쪽 컬럼: 학생용 모바일 앱 */}
        <LeftColumn>
          <ImageContainer>
            <Image src="/WebApp/integration/1.svg" alt="학생용 모바일 앱" />
          </ImageContainer>
          <TextContainer>
            <Title>학생용 모바일 앱</Title>
            <ChipList align="left">
              <Chip>맞춤형 학습지 수신</Chip>
              <Chip>AI 힌트 시스템</Chip>
              <Chip>실시간 채점 피드백</Chip>
              <Chip>장학금 알림 수신</Chip>
            </ChipList>
          </TextContainer>
        </LeftColumn>

        {/* 중앙 컬럼: 실시간 동기화 */}
        <CenterColumn>
          <TextContainer>
            <SyncText>
              실시간
              <br />
              동기화
            </SyncText>
          </TextContainer>
          <ImageContainer>
            <CenterImage src="/WebApp/integration/3.svg" alt="중앙 모바일 앱" />
          </ImageContainer>
        </CenterColumn>

        {/* 오른쪽 컬럼: 선생님용 웹사이트 */}
        <RightColumn>
          <ImageContainer>
            <Image src="/WebApp/integration/4.svg" alt="선생님용 웹사이트" />
          </ImageContainer>
          <TextContainer>
            <Title>선생님용 웹사이트</Title>
            <ChipList align="right">
              <Chip>클래스 및 학생관리</Chip>
              <Chip>맞춤형 문제 출제</Chip>
              <Chip>AI 채점 결과 확인</Chip>
              <Chip>실력 분석 리포트</Chip>
            </ChipList>
          </TextContainer>
        </RightColumn>
      </Container>
    </Section>
  );
}

