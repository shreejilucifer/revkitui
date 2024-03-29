import React from 'react'
import {
  Container,
  RevkitTheme,
  Legend,
  Callout,
  Button,
  Paragraph
} from 'revkitui'
import Branding from './branding.svg'
import Colors from './Colors'
import Icons from './Icons'
import InputControls from './InputControls'
import Typeface from './Typeface'
import TypeScale from './TypeScale'

const App = () => {
  return (
    <RevkitTheme>
      <Container type='full'>
        <img src={Branding} alt='RevkitUI' width='100%' />
      </Container>
      <Legend rank={1} title='Typeface' />
      <Typeface />
      <Legend rank={2} title='Colors' />
      <Colors />
      <Legend rank={3} title='Icons' />
      <Icons />

      <Legend rank={4} title='Inputs Controls' />
      <InputControls />
      <Legend rank={5} title='Logos' />
      <Legend rank={6} title='Avatars' />
      <Legend rank={7} title='List and Rating' />
      <Legend rank={8} title='Popover' />
      <Legend rank={9} title='Tooltip' />
      <Legend rank={10} title='Misc' />
      <Legend rank={11} title='Type Scale' />
      <TypeScale />
      <Legend rank={12} title='Headers' />
      <Legend rank={13} title='Flaps' />
      <Legend rank={14} title='Modals' />
      <Legend rank={15} title='Callouts' />
      <Container type='fluid'>
        <Callout
          title='Callout Title'
          content='Supportive text for the callout goes here like a pro, which informs
            and helps users decide what they should do next.'
        >
          <Container flex flexDirection='row' type='full'>
            <Button text='Action' variant='accent' mr='20px' />
            <Button text='Action' variant='ghost' />
          </Container>
        </Callout>
        <Callout
          backgroundColor='shade'
          title='Callout Title'
          content='Supportive text for the callout goes here like a pro, which informs
            and helps users decide what they should do next.'
        >
          <Container flex flexDirection='row' type='full'>
            <Button text='Action' variant='accent' mr='20px' />
            <Button text='Action' variant='ghost' />
          </Container>
        </Callout>
        <Callout>
          <Container
            flex
            flexDirection='row'
            type='full'
            justifyContent='space-between'
          >
            <Container type='full' flex flexDirection='row' alignItems='center'>
              <Paragraph>Supportive text for the callout.</Paragraph>
            </Container>
            <Container
              type='full'
              flex
              flexDirection='row'
              justifyContent='flex-end'
            >
              <Button text='Action' variant='accent' mr='20px' />
              <Button text='Action' variant='ghost' />
            </Container>
          </Container>
        </Callout>
        <Callout backgroundColor='shade'>
          <Container
            flex
            flexDirection='row'
            type='full'
            justifyContent='space-between'
          >
            <Container type='full' flex flexDirection='row' alignItems='center'>
              <Paragraph>Supportive text for the callout.</Paragraph>
            </Container>
            <Container
              type='full'
              flex
              flexDirection='row'
              justifyContent='flex-end'
            >
              <Button text='Action' variant='accent' mr='20px' />
              <Button text='Action' variant='ghost' />
            </Container>
          </Container>
        </Callout>
      </Container>
      <Legend rank={16} title='Charts' />
      <Legend rank={17} title='Cards' />
      <Legend rank={18} title='Forms' />
    </RevkitTheme>
  )
}

export default App
