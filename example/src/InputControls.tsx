import * as React from 'react'
import { Alert, Container } from 'revkitui'

interface IInputControlsProps {}

const InputControls: React.FunctionComponent<IInputControlsProps> = () => {
  return (
    <Container type='fluid'>
      <Alert
        text='A bright alert flash for dark backgrounds, which never lose the contrast.'
        type='tint'
        textColor='accent'
        iconColor='accent'
        onClose={() => {
          console.log('hello')
        }}
      />
      <Alert
        text='A dark alert flash for bright backgrounds, which never lose the contrast.'
        type='primary'
        onClose={() => {
          console.log('hello')
        }}
      />
      <Alert
        text='A dark alert flash for bright backgrounds, which never lose the contrast.'
        type='accent'
        onClose={() => {
          console.log('hello')
        }}
      />
      <Alert
        text='A dark alert flash for bright backgrounds, which never lose the contrast.'
        type='warning'
        onClose={() => {
          console.log('hello')
        }}
      />
      <Alert
        text='A dark alert flash for bright backgrounds, which never lose the contrast.'
        type='success'
        onClose={() => {
          console.log('hello')
        }}
      />
      <Alert
        text='A dark alert flash for bright backgrounds, which never lose the contrast.'
        type='error'
        onClose={() => {
          console.log('hello')
        }}
      />
    </Container>
  )
}

export default InputControls
