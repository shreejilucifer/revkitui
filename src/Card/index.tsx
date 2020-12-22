import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface ICardProps {
  backgroundColor: keyof Colors | string
  height?: string
  width?: string
  padding?: string
  borderRadius?: string
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

const StyledCard = styled.div<{
  height: string
  width: string
  backgroundColor: string
  padding: string
  justifyContent: string
  alignItems: string
  borderRadius: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border-radius: ${(props) => props.borderRadius};
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
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  borderRadius = '40px',
  children
}) => {
  return (
    <StyledCard
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      alignItems={alignItems}
      height={height}
      width={width}
    >
      {children}
    </StyledCard>
  )
}
