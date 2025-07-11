import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';

const HeaderContainer = styled.header`
  width: 100vw;
  min-width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  border-bottom: 0.5px solid #CDBEF7;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    max-width: 100vw;
    padding: 0 16px;
  }
  @media (max-width: 1024px) {
    padding: 0 8px;
    gap: 24px;
  }
  @media (max-width: 600px) {
    padding: 0 4px;
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
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  pointer-events: auto;
  z-index: 1001;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $color: string }>`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.$color};
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 23.20px;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;

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
    font-size: 12px;
  }
`;

const LoginButton = styled.a`
  padding: 8px 16px;
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
  width: 100px;
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
  padding: 8px 16px;
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
  width: 100px;
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
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const LOGIN_URL = "https://class.iammathking.com/login";
  const DOWNLOAD_URL = "https://hi.iammathking.com/v4zqjr";

  // 스크롤 위치에 따라 메뉴 색상 변경
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 배경이 #fff(스크롤 80px 이상)이면 #222, 그 외에는 #fff
  const navColor = isScrolled ? '#222222' : '#ffffff';

  const handleNavClick = (path: string) => {
    console.log('Navigation clicked:', path);
    navigate(path);
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoContainer to="/">
          <StyledLogoIcon />
          <LogoText1>수학대왕</LogoText1>
          <LogoText2>CLASS</LogoText2>
        </LogoContainer>
        <RightSection>
          <NavContainer>
            <NavItem to="/" $color={navColor} onClick={() => handleNavClick('/')}>홈</NavItem>
            <NavItem to="/pricing" $color={navColor} onClick={() => handleNavClick('/pricing')}>요금안내</NavItem>
            <NavItem to="/notice" $color={navColor} onClick={() => handleNavClick('/notice')}>공지사항</NavItem>
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
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header; 