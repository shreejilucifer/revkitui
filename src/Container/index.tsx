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

const StyledContainer = styled.div<IContainerProps>`
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
  children
}) => {
  return (
    <StyledContainer type={type} flex={flex}>
      {children}
    </StyledContainer>
  )
}
