import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@mui/material/styles'
import { LazyMotion, domAnimation } from 'motion/react'
import App from './App'
import theme from './theme/theme'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LazyMotion features={domAnimation}>
        <App />
        <Analytics />
      </LazyMotion>
    </ThemeProvider>
  </React.StrictMode>,
)