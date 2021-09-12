import Image from 'next/image'
import { transformDate } from '../format/date'
import styled from '@emotion/styled'

const TitleAreaDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: baseline;
  @media (max-width: 840px) {
    display: block;
  }
`
const TitleAnchor = styled.a`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 600;
  @media (max-width: 840px) {
    display: block;
    margin-top: 8px;
  }
`
const PublishedAtDiv = styled.p`
  display: block;
  margin: 0;
  @media (max-width: 840px) {
    text-align: end;
  }
`
const PostDiv = styled.div`
  img {
    width: 100%;
    border: 2px solid #add8e6;
  }
  pre {
    white-space: normal;
  }
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #add8e6;
  }

  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }

  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
`

export default function BlogId({ blog }) {
  return (
    <div>
      <TitleAreaDiv>
        <PublishedAtDiv>{transformDate(blog.publishedAt)}</PublishedAtDiv>
        <TitleAnchor href={`/blog/${blog.id}`}>{blog.title}</TitleAnchor>
      </TitleAreaDiv>

      {blog.eyecatch && blog.eyecatch.url
        ? <Image
        src={blog.eyecatch.url}
        alt="eyecatch"
        width={150}
        height={150}
        />
        : ''
      }

      <PostDiv
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </div>
  );
}
