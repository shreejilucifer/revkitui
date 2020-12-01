import * as React from 'react'
import styled, { css } from 'styled-components'

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
    color: ${(props) =>
      props.disabled ? 'rgba(44, 39, 56, 0.24)' : props.theme.colors.primary};
    user-select: none;
    padding: 16px 20px 16px 20px;
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
  return (
    <StyledStepperContainer disabled={disabled}>
      <span
        onClick={() => {
          if (disabled) return
          setValue(value - 1)
          if (onDecrement) onDecrement(value)
        }}
      >
        -
      </span>
      <p>{value}</p>
      <span
        onClick={() => {
          if (disabled) return
          setValue(value + 1)
          if (onIncrement) onIncrement(value)
        }}
      >
        +
      </span>
    </StyledStepperContainer>
  )
}
