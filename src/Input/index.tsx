import * as React from 'react'
import styled, { css } from 'styled-components'
import { AlertIcon, LensIcon, CheckIcon } from '../Icons'
import { Paragraph } from '../Paragraph'

interface IInputProps {
  placeholder?: string
  errorMessage?: string
  successMessage?: string
  label?: string
  width?: string
  disabled?: boolean
  icon?: 'alert' | 'search' | 'tick'
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
  defaultValue?: string | number | readonly string[] | undefined
}

const StyledInputWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  & > p:first-child {
    margin-bottom: 8px;
  }
  & > p:last-child {
    margin-top: 4px;
  }
`

const StyledInputContainer = styled.div<{ disabled: boolean }>`
  & input {
    width: 100%;
    height: 52px;
    background-color: ${(props) => props.theme.colors.bright};
    box-shadow: 0px 4px 8px #2c27380a;
    border: 2px solid #dbe2ea;
    border-radius: 4px;
    padding: 16px;
    outline: none;
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
    font-family: 'IBM Plex Sans', sans-serif;
    &::placeholder {
      color: ${(props) => props.theme.colors.muted};
    }
    &:focus {
      border: 2px solid ${(props) => props.theme.colors.accent};
    }

    ${(props) =>
      props.disabled &&
      css`
        background-color: ${(props) => props.theme.colors.tint};
        &::placeholder {
          color: rgba(44, 39, 56, 0.24);
        }
        &:hover {
          cursor: not-allowed;
        }
      `}
  }
  position: relative;

  & > span {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    margin-top: auto;
  }
`

export const Input: React.FunctionComponent<IInputProps> = ({
  label,
  width = '360px',
  successMessage,
  errorMessage,
  placeholder,
  disabled = false,
  icon,
  onChange,
  defaultValue
}) => {
  return (
    <StyledInputWrapper width={width}>
      {label && (
        <Paragraph weight='semibold' size={1} type='secondary'>
          {label}
        </Paragraph>
      )}
      <StyledInputContainer disabled={disabled}>
        <input
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        {icon === 'alert' && (
          <span>
            <AlertIcon color='accent' size={2} />
          </span>
        )}
        {icon === 'search' && (
          <span>
            <LensIcon color='accent' size={2} />
          </span>
        )}
        {icon === 'tick' && (
          <span>
            <CheckIcon color='accent' size={2} />
          </span>
        )}
      </StyledInputContainer>
      {errorMessage && (
        <Paragraph type='error' size={2}>
          {errorMessage}
        </Paragraph>
      )}
      {successMessage && (
        <Paragraph type='success' size={2}>
          {successMessage}
        </Paragraph>
      )}
    </StyledInputWrapper>
  )
}
