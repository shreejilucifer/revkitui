import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface ISpinnerProps {
  type?: keyof Colors
}

const StyledSpinner = styled.svg<{
  type: string
  viewBox?: string
}>`
  animation: rotate 1s linear infinite;
  margin: 40px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: ${(props) => props.theme.colors[props.type]};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export const Spinner: React.FunctionComponent<ISpinnerProps> = ({
  type = 'primary'
}) => {
  return (
    <StyledSpinner type={type} viewBox='0 0 50 50'>
      <circle
        className='path'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
      />
    </StyledSpinner>
  )
}
