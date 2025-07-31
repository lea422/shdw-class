import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    @media (max-width: 600px) {
      height: auto;
      min-height: 100vh;
    }
  }
  
  body {
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
    @media (max-width: 600px) {
      height: auto;
      min-height: 100vh;
    }
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* 커스텀 스크롤바 - WebKit 브라우저 (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    backdrop-filter: blur(2px);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(131, 94, 235, 0.6);
    border-radius: 4px;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(107, 70, 193, 0.8);
    transform: scale(1.1);
    backdrop-filter: blur(6px);
  }

  ::-webkit-scrollbar-thumb:active {
    background: rgba(91, 59, 163, 0.9);
    backdrop-filter: blur(8px);
  }

  ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(2px);
  }

  /* Firefox 스크롤바 */
  html {
    scrollbar-width: thin;
    scrollbar-color: rgba(131, 94, 235, 0.6) rgba(0, 0, 0, 0.03);
  }

  /* 모바일에서 스크롤바 숨김 (선택사항) */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
    
    html {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
); 