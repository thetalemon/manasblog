import styled from '@emotion/styled'

const HeaderAreaHeader = styled.header`
  background: #add8e6;
`

const HeaderAnchor = styled.a`
  display: block;
  font-size: 24px;
  padding: 5px 10px;
  color: white;
`
export default function GeneralTitle() {
  return (
    <HeaderAreaHeader>
      <HeaderAnchor href={`/`}>manasblog</HeaderAnchor>
    </HeaderAreaHeader>
  );
}