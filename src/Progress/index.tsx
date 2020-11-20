import * as React from 'react'
import styled from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface IProgressProps {
  type: keyof Colors
  complete: number
}

const StyledProgress = styled.div`
  margin-top: 40px;
  height: 8px;
  width: 100%;
  background: ${(props) => props.theme.colors.shade} 0% 0% no-repeat padding-box;
  border-radius: 2px;
`

const Completed = styled.div<{ type: string; completed: string }>`
  height: 8px;
  width: ${(props) => props.completed};
  background-color: ${(props) => props.theme.colors[props.type]};
  border-radius: 2px;
`

export const Progress: React.FunctionComponent<IProgressProps> = ({
  type,
  complete
}) => {
  return (
    <StyledProgress>
      <Completed type={type} completed={`${complete}%`} />
    </StyledProgress>
  )
}
