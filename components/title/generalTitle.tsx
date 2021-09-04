import styled from '@emotion/styled'

const BlogTitleAreaDiv = styled.div`
  background: #add8e6;
`

const BlogTitleAnchor = styled.a`
  display: block;
  font-size: 24px;
  padding: 5px 10px;
  color: white;
`
export default function SealFrame() {
  return (
    <BlogTitleAreaDiv>
      <BlogTitleAnchor href={`/`}>manasblog</BlogTitleAnchor>
    </BlogTitleAreaDiv>
  );
}