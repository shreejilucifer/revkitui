import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors, theme } from '../ThemeProvider/theme'
import { Cross } from './CrossIcon'

interface IIconProps {
  color: keyof Colors
  size?: number
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const StyledIcon = styled.div<{ size: number }>`
  display: flex;
  & svg {
    transform: scale(${(props) => props.size});
  }
`

export const CrossIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <Cross color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}
