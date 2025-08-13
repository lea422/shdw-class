import React from 'react';
import ScaledLayout from './ScaledLayout';

type Props = {
  baseHeight: number;
  children: React.ReactNode;
};

export default function Stage1280({ baseHeight, children }: Props) {
  return (
    <ScaledLayout baseWidth={1280} baseHeight={baseHeight} fit="contain">
      {children}
    </ScaledLayout>
  );
}
