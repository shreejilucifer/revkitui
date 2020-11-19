import * as React from 'react'
import styled from 'styled-components'

interface IContainerProps {
  type: 'full' | 'fluid'
  flex?: boolean
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit'
}

const StyledContainer = styled.div<{
  type: 'full' | 'fluid'
  flex?: boolean
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit'
}>`
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => (props.type === 'full' ? '100%' : '80%')};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
`

export const Container: React.FunctionComponent<IContainerProps> = ({
  type,
  flex,
  flexDirection,
  children
}) => {
  return (
    <StyledContainer type={type} flex={flex} flexDirection={flexDirection}>
      {children}
    </StyledContainer>
  )
}
