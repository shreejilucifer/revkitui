import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface ICardProps {
  backgroundColor: keyof Colors | string
  height?: string
  width?: string
  padding?: string
}

const StyledCard = styled.div<{
  height: string
  width: string
  backgroundColor: string
  padding: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 40px;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  box-shadow: 0px 16px 56px #2c273814;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`

export const Card: React.FunctionComponent<ICardProps> = ({
  backgroundColor,
  height = '275px',
  width = '275px',
  padding = '40px',
  children
}) => {
  return (
    <StyledCard
      padding={padding}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
    >
      {children}
    </StyledCard>
  )
}
