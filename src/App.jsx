
import Title from './components/title/Title'
import Button from './components/button/Button'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme, {darkThemeColors} from './theme'
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
  html, body{
    background-color: ${props => props.theme.colors.white};
  }
`

const dinamicTheme = {
  ...theme,
  colors:{
    ...theme.colors,
    ...darkThemeColors
  }
}

function App() {

  const [activeTheme, setActiveTheme] = useState(dinamicTheme)

  const handleTheme = () => (activeTheme === theme) 
  ? setActiveTheme(dinamicTheme)
  : setActiveTheme(theme)

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <div className="App">
        <Title />
        <Button>Clique aqui</Button>
        <Button onClick={handleTheme}>Mudar o tema</Button>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, hic.</p>
        <Title>Titulo</Title>
      </div>
    </ThemeProvider>
  )
}

export default App
