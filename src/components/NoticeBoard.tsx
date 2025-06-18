import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../lib/supabase';
import { Notice } from '../lib/types';

const NoticeBoardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
`;

const NoticeTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
`;

const NoticeDate = styled.p`
  color: #666;
  font-size: 0.9em;
  margin: 5px 0;
`;

const NoticeContent = styled.p`
  color: #444;
  line-height: 1.5;
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
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotices(data || []);
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