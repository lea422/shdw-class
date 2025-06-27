import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styled from 'styled-components';

interface Notice {
  id: number;
  title: string;
  date: string;
  tag?: string;
}

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
    <div className="space-y-4">
      {notices.map((item) => (
        <div key={item.id} className="border-b pb-2">
          <div className="flex items-center gap-2 mb-1">
            {item.tag && (
              <span className="text-xs font-semibold text-white bg-purple-500 px-2 py-0.5 rounded">
                {item.tag}
              </span>
            )}
            <p className="font-medium">📌 {item.title}</p>
          </div>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticeListPage;