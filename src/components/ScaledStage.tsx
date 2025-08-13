'use client';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  /** 디자인 기준 가로(px). 기본 1920 */
  baseWidth?: number;
  /** 디자인 기준 세로(px). 필수 */
  baseHeight: number;
  /** 스테이지 안에 넣을 JSX */
  children: React.ReactNode;
};

/**
 * 1920px(기본) 이상에서는 레이아웃 고정,
 * 1920px 미만에서는 전체를 동일 비율로 축소하는 래퍼.
 * 외부 CSS 불필요. 어디든 감싸서 사용 가능.
 */
export default function ScaledStage({
  baseWidth = 1920,
  baseHeight,
  children,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth || 0;
      const calculatedScale = w / baseWidth;
      const finalScale = w >= baseWidth ? 1 : calculatedScale;
      
      console.log('ScaledStage update:', { 
        containerWidth: w, 
        baseWidth, 
        calculatedScale, 
        finalScale,
        isFixed: w >= baseWidth
      });
      
      setScale(finalScale);
    };

    // 즉시 실행
    update();

    // ResizeObserver 사용
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === el) {
            update();
          }
        }
      });
      ro.observe(el);
      return () => ro.disconnect();
    } else {
      // fallback: window resize
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
  }, [baseWidth]);

  console.log('ScaledStage render:', { baseWidth, baseHeight, scale, containerHeight: baseHeight * scale });
  
  return (
    <div
      ref={outerRef}
      style={{
        width: '100%',
        height: baseHeight * scale, // 스케일 반영한 실제 높이
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        '--base-width': `${baseWidth}px`,
        '--current-scale': scale,
        border: '2px solid blue', // 외부 컨테이너 디버깅용
        backgroundColor: 'rgba(0,0,255,0.1)', // 외부 컨테이너 배경
      } as React.CSSProperties}
    >
      <div
        style={{
          position: 'relative',
          width: baseWidth,
          height: baseHeight,
          '--current-scale': scale,
          border: '2px solid red', // 내부 컨테이너 디버깅용
          backgroundColor: 'rgba(255,0,0,0.1)', // 내부 컨테이너 배경
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
