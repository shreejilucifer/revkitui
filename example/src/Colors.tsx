import * as React from 'react'
import styled from 'styled-components'
import { Container, Card, Theme } from 'revkitui'

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
        <Card
          type='showcase'
          backgroundColor='accent'
          showcaseLabel='Accent'
          showcaseTitle={Theme.colors.accent}
        />
        <Card
          type='showcase'
          backgroundColor='warning'
          showcaseLabel='Warning'
          showcaseTitle={Theme.colors.warning}
        />
        <Card
          type='showcase'
          backgroundColor='success'
          showcaseLabel='Success'
          showcaseTitle={Theme.colors.success}
        />
        <Card
          type='showcase'
          backgroundColor='error'
          showcaseLabel='Error'
          showcaseTitle={Theme.colors.error}
        />
        <Card
          type='showcase'
          backgroundColor='primary'
          showcaseLabel='Primary'
          showcaseTitle={Theme.colors.primary}
        />
        <Card
          type='showcase'
          backgroundColor='secondary'
          showcaseLabel='Secondary'
          showcaseTitle={Theme.colors.secondary}
        />
        <Card
          type='showcase'
          backgroundColor='muted'
          showcaseLabel='Muted'
          showcaseTitle={Theme.colors.muted}
        />
        <Card
          type='showcase'
          backgroundColor='bright'
          showcaseLabel='Bright'
          showcaseTitle={Theme.colors.bright}
        />
        <Card
          type='showcase'
          backgroundColor='shade'
          showcaseLabel='Shade'
          showcaseTitle={Theme.colors.shade}
        />
        <Card
          type='showcase'
          backgroundColor='tint'
          showcaseLabel='Tint'
          showcaseTitle={Theme.colors.tint}
        />
      </ColorsContainer>
    </Container>
  )
}

export default Colors
