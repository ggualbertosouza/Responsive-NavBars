import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { GlobalStyle } from "./style/Global";
import NavBar from "./NavBar/NavBar";

export default function App(){
  return(
    <ThemeProvider theme={theme}>
      <NavBar />
      <GlobalStyle />
    </ThemeProvider>
  )
}