import styled from '@emotion/styled'

const CategoryAreaDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const CategoryAnchor = styled.a`
  background: #4682B4;
  width: 25%;
  padding: 5px 0%;
  text-align: center;
  color: white;
  &:hover {
    opacity: 0.7;
  }
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
