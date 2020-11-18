import * as React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
	}
	body::-webkit-scrollbar {
		display: none;
	}
	body::-webkit-scrollbar-track {
		display: none;
	}
	body::-webkit-scrollbar-thumb {
		display: none;
	}
`

const theme: { fonts: { regular: string; semibold: string } } = {
  fonts: {
    regular: 'IBMPlexSansRegular',
    semibold: 'IBMPlexSansSemiBold'
  }
}

interface IRevkitThemeProps {}

export const RevkitTheme: React.FunctionComponent<IRevkitThemeProps> = (
  props
) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}
