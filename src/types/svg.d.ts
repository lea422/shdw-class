declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
} 

// Global typing for Meta Pixel
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}