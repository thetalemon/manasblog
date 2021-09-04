import styled from '@emotion/styled'

const Main = styled.main`
  width: 100vw;
  min-width: 360px;
  max-width: 840px;
  margin: 0 auto;
`

export default function PageTemplate(props) {
  return (
    <Main>
      {props.children}
    </Main>
  );
}