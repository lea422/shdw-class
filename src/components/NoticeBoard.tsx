import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Notice 타입 정의 추가
interface Notice {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

const NoticeBoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 16px;
  }
  
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 12px;
  }
`;

const NoticeItem = styled.div`
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1024px) {
    padding: 12px;
    margin-bottom: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 6px;
    border-radius: 6px;
  }
`;

const NoticeTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  
  @media (max-width: 1024px) {
    margin: 0 0 8px 0;
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    margin: 0 0 6px 0;
    font-size: 16px;
  }
`;

const NoticeDate = styled.p`
  color: #666;
  font-size: 0.9em;
  margin: 5px 0;
  
  @media (max-width: 1024px) {
    font-size: 0.85em;
    margin: 4px 0;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8em;
    margin: 3px 0;
  }
`;

const NoticeContent = styled.p`
  color: #444;
  line-height: 1.5;
  
  @media (max-width: 1024px) {
    font-size: 15px;
    line-height: 1.4;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;

export const NoticeBoard: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      // Placeholder for supabase fetch
      setNotices([
        { id: '1', title: 'Notice 1', content: 'This is the content of Notice 1', created_at: new Date().toISOString() },
        { id: '2', title: 'Notice 2', content: 'This is the content of Notice 2', created_at: new Date().toISOString() },
        { id: '3', title: 'Notice 3', content: 'This is the content of Notice 3', created_at: new Date().toISOString() },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading notices...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <NoticeBoardContainer>
      {notices.map((notice) => (
        <NoticeItem key={notice.id}>
          <NoticeTitle>{notice.title}</NoticeTitle>
          <NoticeContent>{notice.content}</NoticeContent>
          <NoticeDate>
            Posted: {new Date(notice.created_at).toLocaleDateString()}
          </NoticeDate>
        </NoticeItem>
      ))}
      {notices.length === 0 && <p>No notices available.</p>}
    </NoticeBoardContainer>
  );
}; 