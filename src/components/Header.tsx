import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  @media (max-width: 768px) {
    padding: 20px 20px;
    gap: 20px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  min-width: fit-content;
  text-decoration: none;
`;

const LogoIcon = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
  flex-shrink: 0;
`;

const LogoIconPart1 = styled.div`
  width: 9.09px;
  height: 17.89px;
  left: 3.25px;
  top: 4.33px;
  position: absolute;
  background: #835EEB;
`;

const LogoIconPart2 = styled.div`
  width: 9.09px;
  height: 11.33px;
  left: 13.66px;
  top: 4.33px;
  position: absolute;
  background: #835EEB;
`;

const LogoIconPart3 = styled.div`
  width: 9.09px;
  height: 7.54px;
  left: 13.66px;
  top: 14.69px;
  position: absolute;
  background: #CDBEF7;
`;

const LogoText1 = styled.div`
  color: #835EEB;
  font-size: 19.50px;
  font-family: 'Godo B', sans-serif;
  font-weight: 400;
  white-space: nowrap;
`;

const LogoText2 = styled.div`
  color: #835EEB;
  font-size: 19.50px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  white-space: nowrap;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

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

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoIcon>
          <LogoIconPart1 />
          <LogoIconPart2 />
          <LogoIconPart3 />
        </LogoIcon>
        <LogoText1>수학대왕</LogoText1>
        <LogoText2>CLASS</LogoText2>
      </LogoContainer>
      <RightSection>
        <NavContainer>
          <NavItem to="/">홈</NavItem>
          <NavItem to="/pricing">요금안내</NavItem>
          <NavItem to="/notice">공지사항</NavItem>
        </NavContainer>
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