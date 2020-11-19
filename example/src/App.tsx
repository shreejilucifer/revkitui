import React from 'react'
import { Container, RevkitTheme, Legend } from 'revkitui'
import Branding from './branding.svg'
import Typeface from './Typeface'

const App = () => {
  return (
    <RevkitTheme>
      <Container type='full'>
        <img src={Branding} alt='RevkitUI' width='100%' />
      </Container>
      <Legend rank={1} title='Typeface' />
      <Typeface />
      <Legend rank={2} title='Colors' />
      <Legend rank={3} title='Icons' />
      <Legend rank={4} title='Inputs' />
      <Legend rank={5} title='Logos' />
      <Legend rank={6} title='Avatars' />
      <Legend rank={7} title='List and Rating' />
      <Legend rank={8} title='Popover' />
      <Legend rank={9} title='Tooltip' />
      <Legend rank={10} title='Misc' />
      <Legend rank={11} title='Type Scale' />
      <Legend rank={12} title='Headers' />
      <Legend rank={13} title='Flaps' />
      <Legend rank={14} title='Modals' />
      <Legend rank={15} title='Callouts' />
      <Legend rank={16} title='Charts' />
      <Legend rank={17} title='Cards' />
      <Legend rank={18} title='Forms' />
    </RevkitTheme>
  )
}

export default App
