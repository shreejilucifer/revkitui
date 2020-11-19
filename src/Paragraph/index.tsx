import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface IParagraphProps {
  size?: 1 | 2 | 3
  type?: keyof Colors
  weight?: 'regular' | 'semibold'
}

const calculateFontSize = (size: number): string => {
  switch (size) {
    case 1:
      return '16px'
    case 2:
      return '14px'
    case 3:
      return '12px'
    default:
      return '16px'
  }
}

const StyledParagraph = styled.p<{
  size: number
  type: string
  weight: number
}>`
  font-size: ${(props) => calculateFontSize(props.size)};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.theme.colors[props.type]};
`

export const Paragraph: React.FunctionComponent<IParagraphProps> = ({
  children,
  size = 1,
  type = 'primary',
  weight = 'regular'
}) => {
  return (
    <StyledParagraph
      size={size}
      type={type}
      weight={weight === 'regular' ? 400 : 600}
    >
      {children}
    </StyledParagraph>
  )
}
