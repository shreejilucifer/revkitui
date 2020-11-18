import * as React from 'react'
import styled from 'styled-components'
import { Container } from '../Container'
import { Heading } from '../Heading'

interface ILegendProps {
  title: string
  rank: number
}

const TitleContainer = styled.span`
  margin-left: 20px;
`
const StyledLegend = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.shade};
  margin-top: 20px;
`

export const Legend: React.FunctionComponent<ILegendProps> = (props) => {
  return (
    <StyledLegend>
      <Container flex flexDirection='row' type='full'>
        <Heading size={5} type='muted'>
          {props.rank > 9 ? props.rank : `0${props.rank}`}
        </Heading>
        <TitleContainer>
          <Heading type='primary' size={5}>
            {props.title}
          </Heading>
        </TitleContainer>
      </Container>
    </StyledLegend>
  )
}
