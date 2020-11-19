import * as React from 'react'
import styled from 'styled-components'
import { CrossIcon } from '../Icons'
import { Paragraph } from '../Paragraph'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface IAlertProps {
  type: keyof Colors
  text: string
  textColor?: keyof Colors
  iconColor?: keyof Colors
  onClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const StyledAlert = styled.div<{ type: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 24px 48px #2c273814;
  background-color: ${(props) => props.theme.colors[props.type]};
  margin-top: 20px;
  & svg:hover {
    cursor: pointer;
  }
`

export const Alert: React.FunctionComponent<IAlertProps> = ({
  type,
  text,
  textColor = 'bright',
  iconColor = 'bright',
  onClose
}) => {
  return (
    <StyledAlert type={type}>
      <Paragraph type={textColor}>{text}</Paragraph>
      <CrossIcon color={iconColor} size={2} onClick={onClose} />
    </StyledAlert>
  )
}
