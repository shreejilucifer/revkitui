import * as React from 'react'
import styled from 'styled-components'

interface IHeadingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6
  type?:
    | 'accent'
    | 'warning'
    | 'success'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'muted'
    | 'bright'
    | 'shade'
    | 'tint'
}

const calculateFontSize = (size: number): string => {
  switch (size) {
    case 1:
      return '72px'
    case 2:
      return '64px'
    case 3:
      return '56px'
    case 4:
      return '34px'
    case 5:
      return '28px'
    case 6:
      return '20px'
    default:
      return '72px'
  }
}

const StyledHeading = styled.h1<{ size: number; type: string }>`
  font-size: ${(props) => calculateFontSize(props.size)};
  font-weight: 600;
  color: ${(props) => props.theme.colors[props.type]};
`

export const Heading: React.FunctionComponent<IHeadingProps> = (props) => {
  return (
    <StyledHeading
      type={props.type ? props.type : 'primary'}
      size={props.size ? props.size : 1}
    >
      {props.children}
    </StyledHeading>
  )
}
