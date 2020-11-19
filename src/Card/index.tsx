import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'
import ShowcaseCard from './Showcase'

interface ICardProps {
  backgroundColor: keyof Colors
  height?: string
  width?: string
  type: 'showcase' | 'basic'
  showcaseLabel?: string
  showcaseTitle?: string
}

export const Card: React.FunctionComponent<ICardProps> = ({
  type,
  backgroundColor,
  height = '275px',
  width = '275px',
  showcaseLabel,
  showcaseTitle
}) => {
  if (type === 'showcase') {
    return (
      <ShowcaseCard
        backgroundColor={backgroundColor}
        height={height}
        width={width}
        label={showcaseLabel}
        title={showcaseTitle}
      />
    )
  }
  return null
}
