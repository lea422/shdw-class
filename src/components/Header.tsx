import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  padding: 20px 50px;
  border-bottom: 0.50px solid #CDBEF7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 1024px) {
    padding: 16px 24px;
    gap: 24px;
  }
  @media (max-width: 600px) {
    padding: 4px 8px;
    gap: 4px;
    height: 36px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  min-width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  @media (max-width: 600px) {
    gap: 2px;
  }
`;

const StyledLogoIcon = styled(LogoIcon)`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  @media (max-width: 600px) {
    width: 16px;
    height: 16px;
  }
`;

const LogoText1 = styled.div`
  color: #835EEB;
  font-size: 19.5px;
  font-family: 'Godo B', sans-serif;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    font-weight: 400;
  }
`;

const LogoText2 = styled.div`
  color: #835EEB;
  font-size: 19.5px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    font-weight: 600;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #33373B;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 23.20px;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #835EEB;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #835EEB;
    
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LoginButton = styled.a`
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10);
  width: 120px;
  text-align: center;
  display: inline-block;

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.05);
    border-color: #835EEB;
    box-shadow: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const DownloadButton = styled.a`
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10);
  width: 120px;
  text-align: center;
  display: inline-block;

  &:hover {
    color: #835EEB;
    background: rgba(131, 94, 235, 0.05);
    border-color: #835EEB;
    box-shadow: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Header = () => {
  const LOGIN_URL = "https://class.iammathking.com/login";
  const DOWNLOAD_URL = "#"; // 추후 앱 다운로드 링크로 변경 예정

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <StyledLogoIcon />
        <LogoText1>수학대왕</LogoText1>
        <LogoText2>CLASS</LogoText2>
      </LogoContainer>
      <RightSection>
        <NavContainer>
          <NavItem to="/">홈</NavItem>
          <NavItem to="/pricing">요금안내</NavItem>
          <NavItem to="/notice">공지사항</NavItem>
        </NavContainer>
        <DownloadButton 
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          앱 다운로드
        </DownloadButton>
        <LoginButton 
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          로그인
        </LoginButton>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header; 