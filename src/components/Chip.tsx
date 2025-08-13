import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Chip({ children }: Props) {
  return (
    <div
      style={{
        background: '#F3EFFD',
        color: '#835EEB',
        fontSize: 22,
        fontWeight: 600,
        padding: '10px 24px',
        borderRadius: '20px',
        display: 'inline-block',
        width: 'max-content',
      }}
    >
      {children}
    </div>
  );
}
