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
`;

const LeftSection = styled.div`
  flex: 1 1 0;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 80px;
  display: flex;
`;

const LinkGroup = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
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
`;

const CompanyInfo = styled.div`
  width: 335px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const InfoText = styled.div`
  color: #D1D5DB;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 18px;
`;

const InfoLink = styled(InfoText).attrs({ as: 'a' })`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #835EEB;
  }
`;

const SocialLinks = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  display: flex;
`;

const SocialButton = styled.a`
  width: 48px;
  height: 48px;
  position: relative;
  background: #33373B;
  border-radius: 9999px;
  border: 1px solid #E5E7EB;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    border-color: #835EEB;
    background: rgba(131, 94, 235, 0.1);
  }
`;

const SocialIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: #D1D5DB;
    transition: all 0.3s ease;
  }

  ${SocialButton}:hover & svg {
    fill: #835EEB;
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
            <div style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
              <InfoText>
                사업자등록번호 254-87-01382 | 대표자명 최민규
              </InfoText>
              <InfoText>
                통신판매업 제 2023-서울강남-00798 호
              </InfoText>
              <InfoText>
                주소 서울특별시 강남구 언주로 540, 5층 (역삼동, 코원타워)
              </InfoText>
              <InfoText>
                전화 070-7732-4869
              </InfoText>
              <InfoText>
                ⓒTuring Co.,Ltd. All rights reserved.
              </InfoText>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <InfoLink href="https://docs.google.com/document/u/1/d/e/2PACX-1vSk3Pu7ySBM0-cMTDOmH3rF_7vyzPzzec_kFZRanJ3mvmuf6jLyUuHndrFNQoXQCr3SujRGGYennDy4/pub" target="_blank" rel="noopener noreferrer">이용약관</InfoLink>
              <InfoLink href="https://docs.google.com/document/u/1/d/e/2PACX-1vTVLKPyzChzxEaZChVDWZjtDz7Sgm_xD2-rDqMMCSdwzyx19Az0Q8nqacPQY0tkbHVszy9eA_eHyMR0/pub" target="_blank" rel="noopener noreferrer">개인정보취급방침</InfoLink>
              <InfoLink href="https://docs.google.com/document/d/e/2PACX-1vQ1kh6vbZ6vqsmDlrASJTQWYmJKwA2ixeTaVZxacTBuh4MUG5aAiRg4fBBx7G74Ac4R5MIIvKqu2BO1/pub" target="_blank" rel="noopener noreferrer">마케팅 정보 수신동의</InfoLink>
            </div>
          </CompanyInfo>
        </LeftSection>
        <SocialLinks>
          <SocialButton href="https://www.youtube.com/@mathking_official" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </SocialIcon>
          </SocialButton>
          <SocialButton href="https://www.facebook.com/turingclass" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
          </SocialButton>
          <SocialButton href="https://www.instagram.com/iammathking_kr/" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </SocialIcon>
          </SocialButton>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 