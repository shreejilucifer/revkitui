import * as React from 'react'
import { Card } from '../Card'
import { Container } from '../Container'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
// eslint-disable-next-line no-unused-vars
import { Colors } from '../ThemeProvider/theme'

interface ICalloutProps {
  title?: string
  content?: string
  backgroundColor?: keyof Colors
}

export const Callout: React.FunctionComponent<ICalloutProps> = ({
  title,
  content,
  children,
  backgroundColor = 'bright'
}) => {
  return (
    <Container type='full'>
      <Card
        borderRadius={title || content ? undefined : '20px'}
        height={title || content ? '290px' : '80px'}
        width='100%'
        backgroundColor={backgroundColor}
        justifyContent='space-around'
      >
        {title && (
          <Container type='full' flex flexDirection='column'>
            <Heading size={3}>{title}</Heading>
            <Paragraph>{content}</Paragraph>
          </Container>
        )}
        {children}
      </Card>
    </Container>
  )
}
