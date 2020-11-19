import * as React from 'react'
import { Container, Heading, Paragraph } from 'revkitui'
import styled from 'styled-components'
interface ITypefaceProps {}

const TypefaceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-around;
`

const Card = styled.div`
  height: 320px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2738;
  border-radius: 40px;
  & > h1 {
    font-size: 196px;
  }
`

const Info = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > span {
    margin-bottom: 20px;
  }
`

const Typeface: React.FunctionComponent<ITypefaceProps> = () => {
  return (
    <Container type='fluid'>
      <TypefaceContainer>
        <Card>
          <Heading type='tint'>Aa</Heading>
        </Card>
        <Info>
          <span>
            <Heading type='muted' size={6}>
              Open Source
            </Heading>
            <Heading type='primary' size={4}>
              IBM Plex Sans
            </Heading>
          </span>
          <span>
            <Paragraph>Regular</Paragraph>
            <Paragraph>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </Paragraph>
          </span>
          <span>
            <Paragraph weight='semibold'>SemiBold</Paragraph>
            <Paragraph weight='semibold'>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </Paragraph>
          </span>
        </Info>
      </TypefaceContainer>
    </Container>
  )
}

export default Typeface
