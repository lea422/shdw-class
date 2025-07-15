import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 72px 0 128px;
  background: #33373B;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 48px 0 128px;
    background: #F3F4F6;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 120px;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 64px;
  display: inline-flex;
  
  @media (max-width: 768px) {
    width: 375px;
    padding: 48px 20px 128px 20px;
    background: #F9FAFB;
    flex-direction: column;
    gap: 48px;
    align-items: flex-start;
  }
`;

const LeftSection = styled.div`
  flex: 1 1 0;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }
`;

const LinkGroup = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 2px;
  }
`;

const LinkButton = styled.div`
  height: 32px;
  padding: 0 12px 0 8px;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: flex;
  color: #D1D5DB;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 768px) {
    color: #575C64;
    font-size: 13px;
    line-height: 18px;
  }
`;

const CompanyInfo = styled.div`
  width: 335px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
  
  @media (max-width: 768px) {
    width: 100%;
    gap: 8px;
  }
`;

const InfoText = styled.div`
  color: #D1D5DB;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 13px;
    line-height: 18px;
    white-space: normal;
  }
`;

const InfoLink = styled(InfoText).attrs({ as: 'a' })`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 13px;
    line-height: 18px;
  }
`;

const StoreButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`;

const StoreButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 140px;
  height: 48px;
  padding: 0 24px;
  background: #33373B;
  border: 1px solid #E5E7EB;
  border-radius: 24px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  box-shadow: none;
  transition: background 0.2s, border 0.2s;
  cursor: pointer;
  &:hover {
    background: rgba(131, 94, 235, 0.1);
    border-color: #835EEB;
  }
  img {
    width: 28px;
    height: 28px;
    display: block;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    padding: 0;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 9999px;
    justify-content: center;
    align-items: center;
    
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const FooterActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin-top: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const MobileInfoSection = styled.div`
  @media (max-width: 768px) {
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: flex;
  }
`;

const MobileLinkSection = styled.div`
  @media (max-width: 768px) {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <LinkGroup>
            <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
              <LinkButton as="a" href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpf.kakao.com%2F_xexdrDxj%2Fchat#login" target="_blank" rel="noopener noreferrer">
                <div style={{ width: '12px', height: '12px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: '11.25px', height: '10.70px', left: '0.37px', top: '0.65px', position: 'absolute', background: '#575C64' }} />
                </div>
                고객센터
              </LinkButton>
            </div>
            <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
              <LinkButton as="a" href="https://www.teamturing.com/" target="_blank" rel="noopener noreferrer">
                <div style={{ width: '12px', height: '12px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: '4.44px', height: '9.68px', left: '11px', top: '10.84px', position: 'absolute', transform: 'rotate(180deg)', transformOrigin: 'top left', background: '#575C64' }} />
                  <div style={{ width: '4.44px', height: '9.68px', left: '1px', top: '1.16px', position: 'absolute', background: '#575C64' }} />
                </div>
                회사소개
              </LinkButton>
            </div>
          </LinkGroup>
          <CompanyInfo>
            <MobileInfoSection>
              <InfoText>
                사업자등록번호 254-87-01382 | 대표자명 최민규
              </InfoText>
              <InfoText>
                통신판매업 제 2023-서울강남-00798 호
              </InfoText>
              <InfoText>주소 서울특별시 강남구 언주로85길 23-6, 3층 (역삼동, DW 빌딩)</InfoText>
              <InfoText>
                전화 070-7732-4869
              </InfoText>
              <InfoText>
                ⓒTuring Co.,Ltd. All rights reserved.
              </InfoText>
            </MobileInfoSection>
            <MobileLinkSection>
              <InfoLink href="https://docs.google.com/document/u/1/d/e/2PACX-1vSk3Pu7ySBM0-cMTDOmH3rF_7vyzPzzec_kFZRanJ3mvmuf6jLyUuHndrFNQoXQCr3SujRGGYennDy4/pub" target="_blank" rel="noopener noreferrer">이용약관</InfoLink>
              <InfoLink href="https://docs.google.com/document/u/1/d/e/2PACX-1vTVLKPyzChzxEaZChVDWZjtDz7Sgm_xD2-rDqMMCSdwzyx19Az0Q8nqacPQY0tkbHVszy9eA_eHyMR0/pub" target="_blank" rel="noopener noreferrer">개인정보취급방침</InfoLink>
              <InfoLink href="https://docs.google.com/document/d/e/2PACX-1vQ1kh6vbZ6vqsmDlrASJTQWYmJKwA2ixeTaVZxacTBuh4MUG5aAiRg4fBBx7G74Ac4R5MIIvKqu2BO1/pub" target="_blank" rel="noopener noreferrer">마케팅 정보 수신동의</InfoLink>
            </MobileLinkSection>
          </CompanyInfo>
        </LeftSection>
        <FooterActions>
          <StoreButtonGroup>
            <StoreButton href="https://play.google.com/store/apps/details?id=com.turing.mathking" target="_blank" rel="noopener noreferrer">
              <img src="/Google_Play_logo.svg" alt="Google Play" />
            </StoreButton>
            <StoreButton href="https://apps.apple.com/kr/app/id6476763492" target="_blank" rel="noopener noreferrer">
              <img src="/App_Store_logo.svg" alt="App Store" />
            </StoreButton>
          </StoreButtonGroup>
        </FooterActions>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 