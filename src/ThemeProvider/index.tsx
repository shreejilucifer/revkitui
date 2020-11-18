import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './GlobalStyle'

interface IRevkitThemeProps {
  backgroundColor?: string
}

export const RevkitTheme: React.FunctionComponent<IRevkitThemeProps> = (
  props
) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        backgroundColor={
          props.backgroundColor ? props.backgroundColor : theme.colors.tint
        }
      />
      {props.children}
    </ThemeProvider>
  )
}
