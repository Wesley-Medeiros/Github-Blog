import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
