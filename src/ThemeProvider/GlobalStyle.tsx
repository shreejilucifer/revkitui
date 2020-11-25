import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ backgroundColor: string }>`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap');
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
  body {
    background-color: ${(props) => props.backgroundColor};
  }
  * {
    font-family: 'IBM Plex Sans',  sans-serif;
  }
`
