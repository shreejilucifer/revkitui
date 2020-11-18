import * as React from 'react'
import styled from 'styled-components'

interface IContainerProps {
  type: 'full' | 'fluid'
}

const StyledContainer = styled.div<IContainerProps>`
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => (props.type === 'full' ? '100%' : '80%')};
`

export const Container: React.FunctionComponent<IContainerProps> = ({
  type,
  children
}) => {
  return <StyledContainer type={type}>{children}</StyledContainer>
}
