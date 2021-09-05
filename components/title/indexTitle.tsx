
import Image from 'next/image'
import title from '../../public/aza156.png'
import styled from '@emotion/styled'

const HeaderAreaHeader = styled.header`
  position: relative;
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
        src={title}
        alt="eyecatch"
        width={840}
        height={362}
      />
      <HeaderAnchor href={'/'}>manasblog</HeaderAnchor>
    </HeaderAreaHeader>
  );
}