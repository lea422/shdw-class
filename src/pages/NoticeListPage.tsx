import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styled from 'styled-components';

interface Notice {
  id: number;
  title: string;
  date: string;
  tag?: string;
}

const NoticeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 1024px) {
    gap: 14px;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const NoticeItem = styled.div`
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 8px;
  
  @media (max-width: 768px) {
    padding-bottom: 6px;
  }
`;

const NoticeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 3px;
  }
`;

const NoticeTag = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: #8B5CF6;
  padding: 2px 8px;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 1px 6px;
  }
`;

const NoticeTitle = styled.p`
  font-weight: 500;
  color: #1F2937;
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const NoticeDate = styled.p`
  font-size: 14px;
  color: #6B7280;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const NoticeListPage = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('❌ Supabase fetch error:', error);
      } else {
        setNotices(data || []);
      }
    };

    fetchNotices();
  }, []);

  return (
    <NoticeListContainer>
      {notices.map((item) => (
        <NoticeItem key={item.id}>
          <NoticeHeader>
            {item.tag && (
              <NoticeTag>
                {item.tag}
              </NoticeTag>
            )}
            <NoticeTitle>📌 {item.title}</NoticeTitle>
          </NoticeHeader>
          <NoticeDate>{item.date}</NoticeDate>
        </NoticeItem>
      ))}
    </NoticeListContainer>
  );
};

export default NoticeListPage;