import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'utils/globals'
import theme from 'utils/theme'
import StyledContainer from './styles'

interface Props {
  children: any
}

function Container({children}: Props): JSX.Element {
  const selectedTheme = theme.dark

  return (
    <ThemeProvider theme={selectedTheme}>
      <StyledContainer>
        <GlobalStyle />
        {children}
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Container