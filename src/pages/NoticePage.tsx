import { useEffect, useState } from "react";
import { useNavigate, useLocation, Routes, Route, NavLink } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { ReactComponent as ArrowIcon } from "../assets/arrow-icon.svg";

const faqList = [
  { question: "Q. 수학대왕은 어떤 서비스인가요?", answer: "AI 채점, 클리닉, 개념 학습 콘텐츠를 제공하는 수학 학습 플랫폼입니다." },
  { question: "Q. 학원에서 어떻게 활용하나요?", answer: "학생별 맞춤 학습과 오답 클리닉을 학원 수업에 연동하여 활용할 수 있어요." },
];

interface Notice {
  id: number;
  title: string;
  date: string;
  tag?: string;
}

function FaqPage() {
  return (
    <div className="space-y-4">
      {faqList.map((item, idx) => (
        <div key={idx} className="border p-4 rounded-xl bg-gray-50">
          <p className="font-bold mb-1">{item.question}</p>
          <p className="text-sm text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

function NoticeListPage() {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const { data, error } = await supabase.from("notices").select("*").order("date", { ascending: false });
      if (!error) setNotices(data || []);
    };
    fetchNotices();
  }, []);

  return (
    <div className="space-y-4">
      {notices.map((item, idx) => (
        <div key={idx} className="border-b pb-2">
          <div className="flex items-center gap-2 mb-1">
            {item.tag && <span className="text-xs font-semibold text-white bg-purple-500 px-2 py-0.5 rounded">{item.tag}</span>}
            <p className="font-medium">📌 {item.title}</p>
          </div>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default function NoticePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/notice") {
      navigate("/notice/faq", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* 탭 버튼 */}
      <div className="flex gap-1 mb-6 w-full max-w-[300px] mx-auto bg-gray-100 p-1 rounded-full relative">
        <NavLink
          to="/notice/announcements"
          className={({ isActive }) =>
            `flex-1 text-center py-2 text-sm font-semibold rounded-full transition ${
              isActive ? "bg-white text-purple-600 shadow-md" : "text-gray-500"
            }`
          }
        >
          공지사항
        </NavLink>
        <NavLink
          to="/notice/faq"
          className={({ isActive }) =>
            `flex-1 text-center py-2 text-sm font-semibold rounded-full transition ${
              isActive ? "bg-white text-purple-600 shadow-md" : "text-gray-500"
            }`
          }
        >
          자주 묻는 질문
        </NavLink>
      </div>

      {/* CTA 버튼 */}
      <div className="text-center mb-10">
        <a
          href="https://your-demo-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          <span>데모 체험하기</span>
          <ArrowIcon className="w-4 h-4" />
        </a>
      </div>

      <Routes>
        <Route path="faq" element={<FaqPage />} />
        <Route path="announcements" element={<NoticeListPage />} />
      </Routes>
    </div>
  );
} 