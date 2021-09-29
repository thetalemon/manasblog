
import styled from '@emotion/styled'

const HeaderAreaHeader = styled.header`
  position: relative;
`
const HeaderImage = styled.img`
  width: 100%;
  display: block;
`
const HeaderTitleArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 50px;
  transform: translate(-50%, -50%);
`
const HeaderAnchor = styled.a`
  color: rgba(0, 0, 0, 0.6);
  font-size: 50px;
  transform: translate(-50%, -50%);
  &:hover{
    opacity: 0.5;
  }

  @media only screen and (max-width: 500px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 30px;
  }
`

const PortfolioAnchorWrapP = styled.p`
  font-size: 30px;
  margin: 0;
  text-align: right;
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`

const PortfolioAnchor = styled.a`
  color: rgba(0, 0, 0, 0.4);
  transform: translate(-50%, -50%);
  &:hover{
    opacity: 0.5;
  }
`

export default function IndexTitle() {
  return (
    <HeaderAreaHeader>
      <HeaderImage
        src="https://manasas.dev/top/aza2109.png"
        alt="まなさすのブログ"
      />
      <HeaderTitleArea>
        <HeaderAnchor href={'/'}>manasblog</HeaderAnchor><br />
        <PortfolioAnchorWrapP>
          <PortfolioAnchor href={'https://manasas.dev/'}>portfolio</PortfolioAnchor>
        </PortfolioAnchorWrapP>
      </HeaderTitleArea>
    </HeaderAreaHeader>
  );
}