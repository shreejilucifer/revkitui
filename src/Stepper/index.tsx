import * as React from 'react'
import styled, { css } from 'styled-components'
import { AddIcon, MinusIcon } from '../Icons'
import { Colors } from '../ThemeProvider/theme'

interface IStepperProps {
  initialValue?: number
  onIncrement?: (value: number) => void
  onDecrement?: (value: number) => void
  disabled?: boolean
}

const StyledStepperContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.tint : props.theme.colors.bright};
  border-radius: 8px;
  box-shadow: 0px 4px 8px #2c273814;
  border: 1px solid #dbe2ea;
  & p {
    padding: 16px 20px 16px 20px;
    font-size: 16px;
    color: ${(props) =>
      props.disabled ? 'rgba(44, 39, 56, 0.24)' : props.theme.colors.primary};
  }
  & span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    color: ${(props) =>
      props.disabled ? 'rgba(44, 39, 56, 0.24)' : props.theme.colors.primary};
    user-select: none;
    font-size: 16px;
    &:hover {
      cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

      ${(props) =>
        !props.disabled &&
        css`
          background-color: ${(props) => props.theme.colors.accent};
          color: ${(props) => props.theme.colors.bright};
        `}
    }
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`

export const Stepper: React.FunctionComponent<IStepperProps> = ({
  initialValue = 0,
  disabled = false,
  onDecrement,
  onIncrement
}) => {
  const [value, setValue] = React.useState(initialValue)
  const [colorP, setColorP] = React.useState<keyof Colors>('primary')
  const [colorM, setColorM] = React.useState<keyof Colors>('primary')

  return (
    <StyledStepperContainer disabled={disabled}>
      <span
        onMouseOver={() => {
          setColorM('bright')
        }}
        onMouseOut={() => {
          setColorM('primary')
        }}
        onClick={() => {
          if (disabled) return
          setValue(value - 1)
          if (onDecrement) onDecrement(value)
        }}
      >
        <MinusIcon color={disabled ? 'muted' : colorM} size={1} />
      </span>
      <p>{value}</p>
      <span
        onMouseOver={() => {
          setColorP('bright')
        }}
        onMouseOut={() => {
          setColorP('primary')
        }}
        onClick={() => {
          if (disabled) return
          setValue(value + 1)
          if (onIncrement) onIncrement(value)
        }}
      >
        <AddIcon color={disabled ? 'muted' : colorP} size={1} />
      </span>
    </StyledStepperContainer>
  )
}
