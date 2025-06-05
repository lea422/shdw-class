import React, { useState } from 'react';
import styled from 'styled-components';

const NoticeContainer = styled.div`
  padding: 60px 50px;
  min-height: calc(100vh - 60px);
  background: #FFFFFF;
`;

const NoticeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  h1 {
    color: black;
    font-size: 46px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    margin-bottom: 48px;
    text-align: center;
  }
`;

const TabWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 30px;
  background: #F8F9FA;
  border-radius: 12px;
  padding: 4px;
  margin: 0 auto 50px;
`;

const TabList = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const TabIndicator = styled.div<{ activeTab: number }>`
  position: absolute;
  left: ${props => props.activeTab * 50}%;
  width: 50%;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  border: none;
  background: none;
  color: ${props => props.isActive ? '#835EEB' : '#858585'};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: ${props => props.isActive ? '300' : '300'};
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  height: 10px;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    color: #835EEB;
  }
`;

const TabContent = styled.div<{ isActive: boolean }>`
  display: ${props => props.isActive ? 'block' : 'none'};
  width: 100%;
`;

const ContentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentItem = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

const ItemTitleWrapper = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h2`
  color: #33373B;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding-right: 24px;
`;

const ItemDate = styled.div`
  color: #666;
  font-size: 14px;
  margin-top: 8px;
`;

const Arrow = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  flex-shrink: 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 2px;
    background: #835EEB;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${props => props.isOpen ? '-135deg' : '45deg'});
    transition: transform 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 2px;
    background: #835EEB;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(${props => props.isOpen ? '135deg' : '-45deg'});
    transition: transform 0.3s ease;
  }
`;

const ItemContent = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${props => props.isOpen ? '16px' : '0'};
  
  p {
    color: #575C64;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
  }
`;

const NoticeTag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: #835EEB;
  color: white;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 8px;
`;

interface NoticeItemProps {
  tag?: string;
  title: string;
  date?: string;
  content: string;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ tag, title, date, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContentItem onClick={() => setIsOpen(!isOpen)}>
      <ItemHeader>
        <ItemTitleWrapper>
          {tag && <NoticeTag>{tag}</NoticeTag>}
          <ItemTitle>{title}</ItemTitle>
          {date && <ItemDate>{date}</ItemDate>}
        </ItemTitleWrapper>
        <Arrow isOpen={isOpen} />
      </ItemHeader>
      <ItemContent isOpen={isOpen}>
        <p>{content}</p>
      </ItemContent>
    </ContentItem>
  );
};

const Notice = () => {
  const [activeTab, setActiveTab] = useState(0);

  const notices = [
    {
      tag: '신규',
      title: '2024년 수학대왕 CLASS 신규 강좌 안내',
      date: '2024.03.15',
      content: '새로운 강좌가 오픈되었습니다. 많은 관심 부탁드립니다.'
    },
    {
      tag: '안내',
      title: '시스템 업데이트 안내',
      date: '2024.03.10',
      content: '더 나은 서비스 제공을 위해 시스템 업데이트를 진행합니다.'
    },
    {
      title: '수학대왕 CLASS 이용 가이드',
      date: '2024.03.01',
      content: '수학대왕 CLASS 서비스 이용 방법을 안내해드립니다.'
    }
  ];

  const faqs = [
    {
      title: '수학대왕 클래스는 어떤 선생님들이 사용할 수 있나요?',
      content: '수학대왕 클래스는 초/중/고등학교 수학 선생님들을 위한 서비스입니다. 학원, 공부방 등 교육기관에서도 활용 가능하며, 개인 과외 선생님도 사용하실 수 있습니다.'
    },
    {
      title: 'AI 채점은 얼마나 정확한가요?',
      content: '수학대왕의 AI 채점 시스템은 99% 이상의 정확도를 보장합니다. 특히 서술형 문제의 경우, 다양한 풀이 방법을 인식하여 정확한 채점이 가능합니다.'
    },
    {
      title: '학생들의 학습 데이터는 어떻게 관리되나요?',
      content: '모든 학습 데이터는 암호화되어 안전하게 저장되며, 개인정보보호법을 준수합니다. 선생님은 실시간으로 학생들의 학습 현황과 성취도를 확인할 수 있습니다.'
    },
    {
      title: '문제 은행은 얼마나 많은 문제가 있나요?',
      content: '현재 30만 문제 이상의 데이터베이스를 보유하고 있으며, 매주 새로운 문제가 추가됩니다. AI가 학생 수준에 맞는 맞춤형 문제를 추천해드립니다.'
    }
  ];

  return (
    <NoticeContainer>
      <NoticeContent>
        <h1>수학대왕의<br />소식을 확인하세요</h1>
        
        <TabWrapper>
          <TabIndicator activeTab={activeTab} />
          <TabList>
            <TabButton
              isActive={activeTab === 0}
              onClick={() => setActiveTab(0)}
            >
              공지사항
            </TabButton>
            <TabButton
              isActive={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              자주 묻는 질문
            </TabButton>
          </TabList>
        </TabWrapper>

        <TabContent isActive={activeTab === 0}>
          <ContentList>
            {notices.map((notice, index) => (
              <NoticeItem
                key={index}
                tag={notice.tag}
                title={notice.title}
                date={notice.date}
                content={notice.content}
              />
            ))}
          </ContentList>
        </TabContent>

        <TabContent isActive={activeTab === 1}>
          <ContentList>
            {faqs.map((faq, index) => (
              <NoticeItem
                key={index}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </ContentList>
        </TabContent>
      </NoticeContent>
    </NoticeContainer>
  );
};

export default Notice; 