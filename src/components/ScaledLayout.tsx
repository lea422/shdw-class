// ScaledLayout.tsx
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  baseWidth: number;   // 디자인 기준 가로(px)
  baseHeight: number;  // 디자인 기준 세로(px)
  children: React.ReactNode;
  fit?: 'contain' | 'width' | 'height'; // 기본 contain: 가로세로 중 더 작은 쪽에 맞춤
};

export default function ScaledLayout({ baseWidth, baseHeight, children, fit = 'contain' }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!outerRef.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const sW = width / baseWidth;
      const sH = height / baseHeight;
      const next =
        fit === 'width' ? sW :
        fit === 'height' ? sH :
        Math.min(sW, sH); // contain
      setScale(next);
    });

    ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [baseWidth, baseHeight, fit]);

  return (
    <div
      ref={outerRef}
      style={{
        position: 'relative',
        width: '100%',
        // 외부 컨테이너의 세로는 스케일을 반영해서 확보 (레이아웃 점프 방지)
        height: baseHeight * scale,
        // 필요시 overflow hidden
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {/* 실제 스테이지: 기준 크기로 고정, 전체를 scale */}
        <div
          style={{
            position: 'relative',
            width: baseWidth,
            height: baseHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
