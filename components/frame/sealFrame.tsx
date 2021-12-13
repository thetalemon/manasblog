import Image from 'next/image'
import seal from '../../public/favicon.ico'
import styled from '@emotion/styled'

const CardDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  padding-top: 30px;
  border: 2px solid #add8e6;
  margin-top: 50px;
  @media (max-width: 840px) {
    padding-top: 50px;
    border: none;
    border-top: 2px solid #add8e6;
  }
`

const SealDiv = styled.div`
  position: absolute;
  top: -32px;
  left: calc(50% - 32px);
`

type Props = {
  children: React.ReactNode
}

export default function SealFrame(props: Props) {
  return (
    <CardDiv>
      <SealDiv>
        <Image
          src={seal}
          alt="eyecatch"
          width={64}
          height={64}
        />
      </SealDiv>
      {props.children}
    </CardDiv>
  );
}