import Render from '../component/Render';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`

const Main = () => {
  return (
    <Section>
      <Render />
    </Section>
  );
};

export default Main;