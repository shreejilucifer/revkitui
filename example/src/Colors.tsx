import * as React from 'react'
import styled from 'styled-components'
import { Container, Card, Theme, Heading } from 'revkitui'

interface IColorsProps {}

const ColorsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`

const COLORS = [
  'accent',
  'warning',
  'success',
  'error',
  'primary',
  'secondary',
  'muted',
  'bright',
  'shade',
  'tint'
]

const DIFF = ['muted', 'bright', 'shade', 'tint']

const Colors: React.FunctionComponent<IColorsProps> = () => {
  return (
    <Container type='fluid'>
      <ColorsContainer>
        {COLORS.map((color, i) => (
          <Card backgroundColor={color} key={i} justifyContent='flex-end'>
            <Heading
              size={6}
              type={DIFF.includes(color) ? 'primary' : 'bright'}
              opacity={0.56}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Heading>
            <Heading
              size={4}
              type={DIFF.includes(color) ? 'primary' : 'bright'}
            >
              {Theme.colors[color]}
            </Heading>
          </Card>
        ))}
      </ColorsContainer>
    </Container>
  )
}

export default Colors
