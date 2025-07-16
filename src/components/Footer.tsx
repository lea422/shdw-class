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
    padding: 100px 0;
    background: #F9FAFB;
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
    padding: 20px;
    background: #F9FAFB;
    flex-direction: column;
    gap: 24px;
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
  height: 38px;
  padding: 0 16px 0 12px;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  color: #D1D5DB;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 768px) {
    color: #575C64;
    font-size: 15px;
    line-height: 30px;
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
    gap: 4px;
  }
`;

const InfoText = styled.div`
  color: #D1D5DB;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 300;
  line-height: 30px;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 12px;
    line-height: 18px;
    white-space: normal;
  }
`;

const InfoLink = styled(InfoText).attrs({ as: 'a' })`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: #835EEB;
  }
  
  @media (max-width: 768px) {
    color: #7A828D;
    font-size: 14px;
    line-height: 20px;
  }
`;

const SNSButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const SNSButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #33373B;
  border: 1px solid #E5E7EB;
  border-radius: 50%;
  color: #D1D5DB;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #835EEB;
    border-color: #835EEB;
    color: #ffffff;
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    color: #575C64;
    
    &:hover {
      background: #835EEB;
      border-color: #835EEB;
      color: #ffffff;
    }
  }
`;

const SNSIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
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
    gap: 2px;
    display: flex;
  }
`;

const MobileLinkSection = styled.div`
  @media (max-width: 768px) {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
    margin-top: 12px;
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
                <img src="/footer-headphone.svg" alt="고객센터" style={{ width: '18px', height: '18px' }} />
                고객센터
              </LinkButton>
            </div>
            <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
              <LinkButton as="a" href="https://www.teamturing.com/" target="_blank" rel="noopener noreferrer">
                <img src="/footer-problem.svg" alt="회사소개" style={{ width: '18px', height: '18px' }} />
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
          <SNSButtonGroup>
            <SNSButton href="https://www.instagram.com/mathking_official/" target="_blank" rel="noopener noreferrer">
              <SNSIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
              </SNSIcon>
            </SNSButton>
            <SNSButton href="https://www.youtube.com/@mathking_official" target="_blank" rel="noopener noreferrer">
              <SNSIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                </svg>
              </SNSIcon>
            </SNSButton>
          </SNSButtonGroup>
        </FooterActions>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 