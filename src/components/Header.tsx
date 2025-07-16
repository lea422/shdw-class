import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

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
  @media (max-width: 768px) {
    height: 48px;
  }
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
  @media (max-width: 768px) {
    padding: 0 12px;
    gap: 16px;
    height: 48px;
  }
  @media (max-width: 600px) {
    padding: 0 8px;
    gap: 8px;
    height: 48px;
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
  @media (max-width: 375px) {
    gap: 1px;
  }
`;

const StyledLogoIcon = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    font-weight: 600;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 25px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 10px;
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
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

const LoginButton = styled.a`
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #835EEB;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 11px;
    padding: 6px 12px;
  }
  color: white;
  border: 1px solid #835EEB;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10);
  width: 64px;
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
  @media (max-width: 600px) {
    display: none;
  }
`;

const DownloadButton = styled.a`
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 13px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.10);
  width: 64px;
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
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 8px;
  z-index: 2001;
  @media (max-width: 600px) {
    display: flex;
  }
  @media (max-width: 375px) {
    padding: 4px;
  }
`;

const MobileDrawerOverlay = styled.div.withConfig({ shouldForwardProp: (prop) => prop !== 'open' })<{ open: boolean }>`
  display: none;
  @media (max-width: 600px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    z-index: 2000;
    transition: background 0.3s;
  }
`;

const MobileDrawer = styled.div.withConfig({ shouldForwardProp: (prop) => prop !== 'open' })<{ open: boolean }>`
  display: none;
  @media (max-width: 600px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 65vw;
    max-width: 260px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 16px rgba(0,0,0,0.08);
    z-index: 2001;
    padding: 20px 16px 16px 16px;
    animation: slideIn 0.3s;
    @keyframes slideIn {
      from { right: -100vw; }
      to { right: 0; }
    }
  }
  @media (max-width: 480px) {
    width: 70vw;
    max-width: 240px;
    padding: 18px 14px 14px 14px;
  }
  @media (max-width: 375px) {
    width: 75vw;
    max-width: 220px;
    padding: 16px 12px 12px 12px;
  }
  @media (max-width: 320px) {
    width: 80vw;
    max-width: 200px;
    padding: 14px 10px 10px 10px;
  }
`;

const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  @media (max-width: 480px) {
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: 375px) {
    gap: 18px;
    margin-top: 18px;
  }
  @media (max-width: 320px) {
    gap: 14px;
    margin-top: 14px;
  }
`;

const MobileNavItem = styled(Link)`
  color: #835EEB;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 6px;
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    margin-bottom: 4px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

const MobileDrawerButton = styled.a`
  margin-top: 20px;
  padding: 10px 0;
  border-radius: 30px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  text-decoration: none;
  background: #835EEB;
  color: white;
  border: 1px solid #835EEB;
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 15px;
    padding: 9px 0;
    margin-top: 18px;
    margin-bottom: 8px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    padding: 8px 0;
    margin-top: 16px;
    margin-bottom: 6px;
  }
  @media (max-width: 320px) {
    font-size: 13px;
    padding: 7px 0;
    margin-top: 14px;
    margin-bottom: 5px;
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 홈 페이지가 아닌 다른 페이지에서는 항상 검정색, 홈 페이지에서는 스크롤에 따라 결정
  const navColor = isHome ? (isScrolled ? '#222222' : '#ffffff') : '#222222';

  const handleNavClick = (path: string) => {
    setDrawerOpen(false);
    navigate(path);
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoContainer to="/">
          <StyledLogoIcon src="/logo.svg" alt="수학대왕 CLASS 로고" />
          <LogoText1>수학대왕</LogoText1>
          <LogoText2>CLASS</LogoText2>
        </LogoContainer>
        <RightSection>
          <NavContainer>
            <NavItem to="/" $color={navColor} onClick={() => handleNavClick('/')}>홈</NavItem>
            <NavItem to="/pricing" $color={navColor} onClick={() => handleNavClick('/pricing')}>요금안내</NavItem>
            <NavItem to="/notice" $color={navColor} onClick={() => handleNavClick('/notice')}>공지사항</NavItem>
          </NavContainer>
          <ButtonGroup>
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
          </ButtonGroup>
          <HamburgerButton onClick={() => setDrawerOpen(true)}>
            <FiMenu size={28} color="#835EEB" />
          </HamburgerButton>
        </RightSection>
      </HeaderInner>
      {/* 모바일 드로어 오버레이 */}
      <MobileDrawerOverlay open={drawerOpen} onClick={() => setDrawerOpen(false)} />
      <MobileDrawer open={drawerOpen}>
        <HamburgerButton onClick={() => setDrawerOpen(false)} style={{ alignSelf: 'flex-end' }}>
          <FiX size={32} color="#835EEB" />
        </HamburgerButton>
        <MobileNav>
          <MobileNavItem to="/" onClick={() => handleNavClick('/')}>홈</MobileNavItem>
          <MobileNavItem to="/pricing" onClick={() => handleNavClick('/pricing')}>요금안내</MobileNavItem>
          <MobileNavItem to="/notice" onClick={() => handleNavClick('/notice')}>공지사항</MobileNavItem>
        </MobileNav>
        <MobileDrawerButton href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">앱 다운로드</MobileDrawerButton>
        <MobileDrawerButton href={LOGIN_URL} target="_blank" rel="noopener noreferrer">로그인</MobileDrawerButton>
      </MobileDrawer>
    </HeaderContainer>
  );
};

export default Header; 