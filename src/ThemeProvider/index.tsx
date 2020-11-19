import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './GlobalStyle'

interface IRevkitThemeProps {
  backgroundColor?: string
}

export const RevkitTheme: React.FunctionComponent<IRevkitThemeProps> = ({
  backgroundColor = theme.colors.tint,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle backgroundColor={backgroundColor} />
      {children}
    </ThemeProvider>
  )
}

export const Theme = theme
