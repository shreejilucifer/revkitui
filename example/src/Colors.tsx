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

const Colors: React.FunctionComponent<IColorsProps> = () => {
  return (
    <Container type='fluid'>
      <ColorsContainer>
        <Card backgroundColor='accent'>
          <Heading size={6} type='bright' opacity={0.56}>
            Accent
          </Heading>
          <Heading size={4} type='bright'>
            {Theme.colors.accent}
          </Heading>
        </Card>
        <Card backgroundColor='warning'>
          <Heading size={6} type='bright' opacity={0.56}>
            Warning
          </Heading>
          <Heading size={4} type='bright'>
            {Theme.colors.warning}
          </Heading>
        </Card>
        <Card backgroundColor='success'>
          <Heading size={6} type='bright' opacity={0.56}>
            Success
          </Heading>
          <Heading size={4} type='bright'>
            {Theme.colors.success}
          </Heading>
        </Card>
        <Card backgroundColor='error'>
          <Heading size={6} type='bright' opacity={0.56}>
            Error
          </Heading>
          <Heading size={4} type='bright'>
            {Theme.colors.error}
          </Heading>
        </Card>
        <Card backgroundColor='primary'>
          <Heading size={6} type='bright' opacity={0.56}>
            Primary
          </Heading>
          <Heading size={4} type='bright'>
            {Theme.colors.primary}
          </Heading>
        </Card>
        <Card backgroundColor='secondary'>
          <Heading size={6} type='bright' opacity={0.56}>
            Secondary
          </Heading>
          <Heading size={4} type='bright'>
            {Theme.colors.secondary}
          </Heading>
        </Card>
        <Card backgroundColor='muted'>
          <Heading size={6} type='primary' opacity={0.56}>
            Muted
          </Heading>
          <Heading size={4} type='primary'>
            {Theme.colors.muted}
          </Heading>
        </Card>
        <Card backgroundColor='bright'>
          <Heading size={6} type='primary' opacity={0.56}>
            Bright
          </Heading>
          <Heading size={4} type='primary'>
            {Theme.colors.bright}
          </Heading>
        </Card>
        <Card backgroundColor='shade'>
          <Heading size={6} type='primary' opacity={0.56}>
            Shade
          </Heading>
          <Heading size={4} type='primary'>
            {Theme.colors.shade}
          </Heading>
        </Card>
        <Card backgroundColor='tint'>
          <Heading size={6} type='primary' opacity={0.56}>
            Tint
          </Heading>
          <Heading size={4} type='primary'>
            {Theme.colors.tint}
          </Heading>
        </Card>
      </ColorsContainer>
    </Container>
  )
}

export default Colors
