import styled from '@emotion/styled'

const CategoryAreaDiv = styled.div`
  background: #4682B4;
  display: flex;
  justify-content: space-between;
  padding: 4px 36px;
`

const CategoryAnchor = styled.a`
  color: white;
`
export default function CategoriesBar() {
  return (
    <CategoryAreaDiv>
      <CategoryAnchor href={`/category/input`}>映画・読書</CategoryAnchor>
      <CategoryAnchor href={`/category/diary`}>雑記</CategoryAnchor>
      <CategoryAnchor href={`/category/update`}>更新情報</CategoryAnchor>
      <CategoryAnchor href={`/category/tech`}>技術メモ</CategoryAnchor>
    </CategoryAreaDiv>
  );
}
