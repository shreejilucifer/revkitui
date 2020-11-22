import * as React from 'react'
import { Alert, Container, Progress, Spinner, Tag } from 'revkitui'

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
      <Progress type='accent' complete={50} />
      <Progress type='warning' complete={20} />
      <Progress type='success' complete={80} />
      <Progress type='error' complete={30} />
      <Spinner type='primary' />
      <Spinner type='warning' />
      <Spinner type='success' />
      <Spinner type='error' />
      <Container type='full' flex flexDirection='row'>
        <Tag text='Label' type='bright' iconColor='muted' textColor='muted' />
        <Tag text='Label' type='primary' />
        <Tag text='Label' type='accent' />
        <Tag text='Label' type='warning' />
        <Tag text='Label' type='success' />
        <Tag text='Label' type='error' />
      </Container>
    </Container>
  )
}

export default InputControls
