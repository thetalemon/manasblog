import styled from '@emotion/styled'
import Footer from '../footer/footer'　
import CommonMeta from '../meta'

const Main = styled.main`
  width: 100vw;
  min-width: 360px;
  max-width: 840px;
  margin: 0 auto;
`

export default function PageTemplate(props) {
  return (
    <div>
      <CommonMeta />
      <Main>
        {props.children}
        <Footer/>
      </Main>
    </div>
  );
}