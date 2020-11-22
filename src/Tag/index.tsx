import * as React from 'react'
import styled from 'styled-components'
import { CrossIcon } from '../Icons'
import { Paragraph } from '../Paragraph'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface ITagProps {
  type: keyof Colors
  text: string
  textColor?: keyof Colors
  iconColor?: keyof Colors
  onClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const StyledTag = styled.div<{ type: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 2px 4px #2c273814;
  background-color: ${(props) => props.theme.colors[props.type]};
  margin-top: 20px;
  margin-right: 10px;
  & p {
    margin-right: 20px;
  }
  & svg:hover {
    cursor: pointer;
  }
`

export const Tag: React.FunctionComponent<ITagProps> = ({
  type,
  text,
  iconColor = 'bright',
  textColor = 'bright',
  onClose
}) => {
  return (
    <StyledTag type={type}>
      <Paragraph size={3} type={textColor}>
        {text}
      </Paragraph>
      <CrossIcon color={iconColor} size={1} onClick={onClose} />
    </StyledTag>
  )
}
