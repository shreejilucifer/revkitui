import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors, theme } from '../ThemeProvider/theme'
import { Cross } from './CrossIcon'
import { Alert } from './AlertIcon'
import { Check } from './CheckIcon'
import { ChevronBottom } from './ChevronBottomIcon'
import { More } from './MoreIcon'
import { Lens } from './LensIcon'
import { Add } from './AddIcon'
import { Minus } from './MinusIcon'

interface IIconProps {
  color: keyof Colors
  size?: number
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const StyledIcon = styled.div<{ size: number }>`
  display: flex;
  & > svg {
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

export const AlertIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <Alert color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}

export const CheckIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <Check color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}

export const ChevronBottomIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <ChevronBottom color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}
export const MoreIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <More color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}

export const LensIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <Lens color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}

export const AddIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <Add color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}

export const MinusIcon: React.FunctionComponent<IIconProps> = ({
  color,
  size = 1,
  onClick
}) => {
  return (
    <StyledIcon size={size}>
      <Minus color={theme.colors[color]} onClick={onClick} />
    </StyledIcon>
  )
}
