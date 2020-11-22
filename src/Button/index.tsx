import * as React from 'react'
import styled, { css } from 'styled-components'

type ButtonTypes = {
  accent: string
  ghost: string
  bright: string
}

type ButtonSizes = {
  small: string
  medium: string
  large: string
}

interface IButtonProps {
  variant?: keyof ButtonTypes
  size?: keyof ButtonSizes
  disabled?: boolean
  text: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StyledButton = styled.button<{
  variant: string
  size: string
}>`
  text-align: center;
  background: none;
  border-radius: 4px;
  outline: none;
  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.variant === 'bright' &&
    css`
      background-color: ${(props) => props.theme.colors.bright};
      color: #7c9cbf;
      box-shadow: 0px 2px 4px #2c273814;
      border: 1px solid #dbe2ea;

      &:hover {
        box-shadow: 0px 12px 24px #2c273814;
      }

      &:active {
        box-shadow: 0px 2px 4px #2c273814;
        border: 1px solid #0880ae;
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.tint};
        color: rgba(44, 39, 56, 0.24);
        &:hover {
          cursor: not-allowed;
        }
      }
    `}

  ${(props) =>
    props.variant === 'accent' &&
    css`
      background-color: ${(props) => props.theme.colors.accent};
      color: #ebf4f8;
      box-shadow: 0px 2px 4px #2c273814;
      border: 1px solid ${(props) => props.theme.colors.accent};

      &:hover {
        box-shadow: 0px 12px 24px #2c273829;
      }

      &:active {
        box-shadow: 0px 2px 4px #2c273814;
        border: 1px solid #2c2738db;
      }

      &:disabled {
        border: none;
        background-color: ${(props) => props.theme.colors.shade};
        color: rgba(44, 39, 56, 0.24);
        &:hover {
          cursor: not-allowed;
        }
      }
    `}

  ${(props) =>
    props.variant === 'ghost' &&
    css`
      background-color: transparent;
      color: #7c9cbf;
      box-shadow: none;
      border: 2px solid ${(props) => props.theme.colors.muted};

      &:hover {
        color: ${(props) => props.theme.colors.accent};
        border: 2px solid ${(props) => props.theme.colors.accent};
      }

      &:active {
        color: ${(props) => props.theme.colors.secondary};
        border: 2px solid ${(props) => props.theme.colors.secondary};
      }

      &:disabled {
        border: 2px solid #2c27383d;
        color: rgba(44, 39, 56, 0.24);
        &:hover {
          cursor: not-allowed;
        }
      }
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 8px 28px 8px 28px;
      font-size: 18px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 14px 45px 14px 45px;
      font-size: 20px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 18px 65px 18px 65px;
      font-size: 20px;
    `}
`

export const Button: React.FunctionComponent<IButtonProps> = ({
  variant = 'bright',
  size = 'small',
  disabled = false,
  onClick,
  text
}) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  )
}
