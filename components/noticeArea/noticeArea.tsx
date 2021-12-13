import styled from '@emotion/styled'

const NoticeAnchor = styled.a`
  color: #0d5297;
  text-decoration: underline;
  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }
`
export default function NoticeArea() {
  return (
    <div>
      <ul>
        <li>まとめ　 → <NoticeAnchor href="https://manasas.dev/">ポートフォリオ</NoticeAnchor></li>
        <li>読書とか → <NoticeAnchor href="https://note.com/thetalemon/">note</NoticeAnchor></li>
        <li>コード　 → <NoticeAnchor href="https://github.com/thetalemon">github</NoticeAnchor></li>
        <li>生存確認 → <NoticeAnchor href="https://twitter.com/thetalemon">Twitter</NoticeAnchor></li>
      </ul>
    </div>
  );
}
