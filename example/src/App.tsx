import React from 'react'
import { Container, RevkitTheme } from 'revkitui'
import Branding from './branding.svg'

const App = () => {
  return (
    <RevkitTheme>
      <Container type='full'>
        <img src={Branding} alt='RevkitUI' width='100%' />
      </Container>
      <Container type='fluid'>Hello world</Container>
    </RevkitTheme>
  )
}

export default App
