import styled from 'styled-components';

const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const Wrapper = styled.footer`
bottom: 0;
  width: 100%;
  padding: 8px 28px 0 28px;
  text-align: center;
  color: #868e96;
  font-size: 0.7em;
  
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    font-size: 0.8em;
    letter-spacing: 1;
    
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    text-align: left;
    font-size: 1em;
    letter-spacing: 2;
  }
`;

const Footer = () => {
  return (
      <Wrapper>
          © Copyright ⓒ 2022 NOT REAL
      </Wrapper>
  );
};

export default Footer;
