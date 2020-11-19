import * as React from 'react'
import styled from 'styled-components'
import { Heading } from '../Heading'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface IShowcaseCardProps {
  backgroundColor: keyof Colors
  height: string
  width: string
  title?: string
  label?: string
}

const StyledCard = styled.div<IShowcaseCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 40px;
  padding: 40px;
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  box-shadow: 0px 16px 56px #2c273814;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  & > h1:first-child {
    opacity: 0.56;
  }
`

const ShowcaseCard: React.FunctionComponent<IShowcaseCardProps> = ({
  backgroundColor,
  height,
  width,
  title,
  label
}) => {
  let labelType: keyof Colors = 'bright'
  let titleType: keyof Colors = 'bright'
  const check = ['muted', 'bright', 'shade', 'tint']

  if (check.includes(backgroundColor)) {
    labelType = 'primary'
    titleType = 'primary'
  }

  return (
    <StyledCard
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      title={title}
      label={label}
    >
      <Heading size={6} type={labelType}>
        {label}
      </Heading>
      <Heading size={4} type={titleType}>
        {title}
      </Heading>
    </StyledCard>
  )
}

export default ShowcaseCard
