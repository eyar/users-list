import { createGlobalStyle } from'styled-components';

export const lightTheme = {
  bg: '#eff0f5',
  text: '#050505',
  borde: '#050505'
}
  
export const darkTheme = {
  bg: '#050505',
  text: '#fbfbfc',
  border: '#fbfbfc'
}
  
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props=>props.theme.bg};
    color: ${props=>props.theme.text};
    button{
      background-color: ${props=>props.theme.bg};
      border-color: ${props=>props.theme.border};
      color: ${props=>props.theme.text};
    }
  }
`

export const desktopBreakpoint = 1050;