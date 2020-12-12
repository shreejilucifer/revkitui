import * as React from 'react'
import styled from 'styled-components'
import { Container, Heading, Paragraph } from 'revkitui'

interface ITypeScaleProps {}

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
`

const TypeScale: React.FunctionComponent<ITypeScaleProps> = () => {
  return (
    <Container type='fluid'>
      <StyledContainer>
        <span>
          <Heading size={1} type='primary'>
            HeadingX1
          </Heading>
          <Heading size={2} type='primary'>
            HeadingX2
          </Heading>
          <Heading size={3} type='primary'>
            HeadingX3
          </Heading>
          <Heading size={4} type='primary'>
            HeadingX4
          </Heading>
          <Heading size={5} type='primary'>
            HeadingX5
          </Heading>
          <Heading size={6} type='primary'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='primary'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='primary'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='primary'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='secondary'>
            HeadingX1
          </Heading>
          <Heading size={2} type='secondary'>
            HeadingX2
          </Heading>
          <Heading size={3} type='secondary'>
            HeadingX3
          </Heading>
          <Heading size={4} type='secondary'>
            HeadingX4
          </Heading>
          <Heading size={5} type='secondary'>
            HeadingX5
          </Heading>
          <Heading size={6} type='secondary'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='secondary'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='secondary'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='secondary'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='muted'>
            HeadingX1
          </Heading>
          <Heading size={2} type='muted'>
            HeadingX2
          </Heading>
          <Heading size={3} type='muted'>
            HeadingX3
          </Heading>
          <Heading size={4} type='muted'>
            HeadingX4
          </Heading>
          <Heading size={5} type='muted'>
            HeadingX5
          </Heading>
          <Heading size={6} type='muted'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='muted'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='muted'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='muted'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='accent'>
            HeadingX1
          </Heading>
          <Heading size={2} type='accent'>
            HeadingX2
          </Heading>
          <Heading size={3} type='accent'>
            HeadingX3
          </Heading>
          <Heading size={4} type='accent'>
            HeadingX4
          </Heading>
          <Heading size={5} type='accent'>
            HeadingX5
          </Heading>
          <Heading size={6} type='accent'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='accent'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='accent'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='accent'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='warning'>
            HeadingX1
          </Heading>
          <Heading size={2} type='warning'>
            HeadingX2
          </Heading>
          <Heading size={3} type='warning'>
            HeadingX3
          </Heading>
          <Heading size={4} type='warning'>
            HeadingX4
          </Heading>
          <Heading size={5} type='warning'>
            HeadingX5
          </Heading>
          <Heading size={6} type='warning'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='warning'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='warning'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='warning'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='success'>
            HeadingX1
          </Heading>
          <Heading size={2} type='success'>
            HeadingX2
          </Heading>
          <Heading size={3} type='success'>
            HeadingX3
          </Heading>
          <Heading size={4} type='success'>
            HeadingX4
          </Heading>
          <Heading size={5} type='success'>
            HeadingX5
          </Heading>
          <Heading size={6} type='success'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='success'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='success'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='success'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='error'>
            HeadingX1
          </Heading>
          <Heading size={2} type='error'>
            HeadingX2
          </Heading>
          <Heading size={3} type='error'>
            HeadingX3
          </Heading>
          <Heading size={4} type='error'>
            HeadingX4
          </Heading>
          <Heading size={5} type='error'>
            HeadingX5
          </Heading>
          <Heading size={6} type='error'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='error'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='error'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='error'>
            Label
          </Paragraph>
        </span>
        <span>
          <Heading size={1} type='bright'>
            HeadingX1
          </Heading>
          <Heading size={2} type='bright'>
            HeadingX2
          </Heading>
          <Heading size={3} type='bright'>
            HeadingX3
          </Heading>
          <Heading size={4} type='bright'>
            HeadingX4
          </Heading>
          <Heading size={5} type='bright'>
            HeadingX5
          </Heading>
          <Heading size={6} type='bright'>
            HeadingX6
          </Heading>
          <Paragraph size={1} type='bright'>
            ParagraphX1
          </Paragraph>
          <Paragraph size={2} type='bright'>
            ParagraphX2
          </Paragraph>
          <Paragraph size={3} type='bright'>
            Label
          </Paragraph>
        </span>
      </StyledContainer>
    </Container>
  )
}

export default TypeScale
