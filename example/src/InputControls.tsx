import * as React from 'react'
import {
  Alert,
  Container,
  Progress,
  Spinner,
  Tag,
  Button,
  Input,
  Textarea,
  Stepper
} from 'revkitui'
import styled from 'styled-components'

interface IInputControlsProps {}

const StyledButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  & button {
    margin-right: 20px;
  }
`
const StyledInputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  & > div {
    margin-right: 20px;
  }
`
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
      <StyledButtonContainer>
        <Button
          text='Button'
          variant='bright'
          size='small'
          onClick={() => console.log('hello')}
        />

        <Button
          text='Button'
          variant='accent'
          size='small'
          onClick={() => console.log('hello')}
        />

        <Button
          text='Button'
          variant='ghost'
          size='small'
          onClick={() => console.log('hello')}
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          text='Button'
          variant='bright'
          size='medium'
          onClick={() => console.log('hello')}
        />
        <Button
          text='Button'
          variant='accent'
          size='medium'
          onClick={() => console.log('hello')}
        />
        <Button
          text='Button'
          variant='ghost'
          size='medium'
          onClick={() => console.log('hello')}
        />
      </StyledButtonContainer>
      <StyledButtonContainer>
        <Button
          text='Button'
          variant='bright'
          size='large'
          onClick={() => console.log('hello')}
        />

        <Button
          text='Button'
          variant='accent'
          size='large'
          onClick={() => console.log('hello')}
        />

        <Button
          text='Button'
          variant='ghost'
          size='large'
          onClick={() => console.log('hello')}
        />
      </StyledButtonContainer>
      <StyledInputContainer>
        <Input
          onChange={(e) => {
            console.log(e.target.value)
          }}
          label='Label'
          errorMessage='Validation Error Message'
          placeholder='Placeholder'
        />
        <Input
          defaultValue='Value'
          label='Label'
          successMessage='Validation success message'
          placeholder='Placeholder'
        />
        <Input
          label='Label'
          errorMessage='Validation Error Message'
          placeholder='Placeholder'
          disabled
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          label='Label'
          errorMessage='Validation Error Message'
          placeholder='Placeholder'
          icon='search'
        />
        <Input
          label='Label'
          successMessage='Validation success message'
          placeholder='Placeholder'
          icon='tick'
        />
        <Input
          label='Label'
          errorMessage='Validation Error Message'
          placeholder='Placeholder'
          disabled
          icon='alert'
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Textarea
          label='Label'
          errorMessage='Validation Error Message'
          placeholder='Placeholder'
        />
        <Textarea
          label='Label'
          successMessage='Validation success message'
          placeholder='Placeholder'
        />
        <Textarea
          label='Label'
          errorMessage='Validation Error Message'
          placeholder='Placeholder'
          disabled
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Stepper onDecrement={(value) => console.log(value)} />
        <Stepper onDecrement={(value) => console.log(value)} disabled />
      </StyledInputContainer>
    </Container>
  )
}

export default InputControls
