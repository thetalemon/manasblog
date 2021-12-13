import styled from '@emotion/styled'
import Footer from '../footer/footer'　
import CommonMeta from '../meta'
import { ReactNode } from 'react'

const Main = styled.main`
  width: 100vw;
  min-width: 360px;
  max-width: 840px;
  margin: 0 auto;
`

type propsType = {
  title?: string,
  children: ReactNode
}

export default function PageTemplate(props: propsType) {
  const meta = props.title ? (<CommonMeta title={ props.title } />) : (<CommonMeta />);
  return (
    <div>
      {meta}
      <Main>
        {props.children}
        <Footer/>
      </Main>
    </div>
  );
}