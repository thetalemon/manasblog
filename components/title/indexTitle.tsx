
import Image from 'next/image'
import styled from '@emotion/styled'

const HeaderAreaHeader = styled.header`
  position: relative;
  height: 250px;
`

const HeaderAnchor = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-size: 50px;
  transform: translate(-50%, -50%);
`
export default function IndexTitle() {
  return (
    <HeaderAreaHeader>
      <Image
        src="https://manasas.dev/aza156-2.png"
        alt="eyecatch"
        width={840}
        height={250}
      />
      <HeaderAnchor href={'/'}>manasblog</HeaderAnchor>
    </HeaderAreaHeader>
  );
}