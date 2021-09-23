import styled from '@emotion/styled'

const HeaderAreaHeader = styled.footer`
  background: #add8e6;
`

const HeaderAnchor = styled.a`
  display: block;
  font-size: 16px;
  margin: 16px 0;
  padding: 4px 0;
  text-align: center;
  color: white;
`
export default function Footer() {
  return (
    <HeaderAreaHeader>
      <HeaderAnchor href={`https://manasas.dev/`}>© 2021 manasas</HeaderAnchor>
    </HeaderAreaHeader>
  );
}