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
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
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
  justifyContent: string
  alignItems: string
}>`
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => (props.type === 'full' ? '100%' : '80%')};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`

export const Container: React.FunctionComponent<IContainerProps> = ({
  type,
  flex,
  flexDirection,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  children
}) => {
  return (
    <StyledContainer
      alignItems={alignItems}
      justifyContent={justifyContent}
      type={type}
      flex={flex}
      flexDirection={flexDirection}
    >
      {children}
    </StyledContainer>
  )
}
