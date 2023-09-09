import '@/styles/globals.css'
// global css
import 'bootstrap/dist/css/bootstrap.min.css' 
//  bootstrap 
import { ThemeProvider } from 'styled-components'
// styled components
const theme = {
  colors :{
    primary:'#355C7D'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>

  ) 
 
}
