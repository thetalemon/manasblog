
import Image from 'next/image'
import title from '../../public/aza156.png'
import styled from '@emotion/styled'

const BlogTitleAreaDiv = styled.div`
  position: relative;
`

const BlogTitleH2 = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-size: 50px;
  transform: translate(-50%, -50%);
`
export default function SealFrame() {
  return (
    <BlogTitleAreaDiv>
    <Image
      src={title}
      alt="eyecatch"
      width={840}
      height={362}
    />
    <BlogTitleH2>manasblog</BlogTitleH2>
  </BlogTitleAreaDiv>
  );
}