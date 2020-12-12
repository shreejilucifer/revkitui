import * as React from 'react'
import {
  Container,
  Card,
  AlertIcon,
  CheckIcon,
  CrossIcon,
  ChevronBottomIcon,
  MoreIcon,
  LensIcon,
  AddIcon,
  MinusIcon
} from 'revkitui'
import styled from 'styled-components'

interface IIconsProps {}

const StyledIcons = styled.div`
  margin-top: 20px;
  width: 100%;
`
const Icons: React.FunctionComponent<IIconsProps> = () => {
  return (
    <Container type='fluid'>
      <StyledIcons>
        <Card backgroundColor='bright' width='100%'>
          <Container flex flexDirection='row' type='full'>
            <AlertIcon color='primary' />
            <CrossIcon color='primary' />
            <CheckIcon color='primary' />
            <ChevronBottomIcon color='primary' />
            <MoreIcon color='primary' />
            <LensIcon color='primary' />
            <AddIcon color='primary' />
            <MinusIcon color='primary' />
          </Container>
        </Card>
      </StyledIcons>
    </Container>
  )
}

export default Icons
