import { createTheme } from '@mui/material/styles'

export default createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#168cff', light: '#67bcff', dark: '#006bc9' },
    background: { default: '#05070a', paper: '#0b1118' },
    text: { primary: '#f4f7fb', secondary: '#9aabba' },
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
    h1: { fontWeight: 900, letterSpacing: '-0.055em' },
    h2: { fontWeight: 850, letterSpacing: '-0.04em' },
    h3: { fontWeight: 800, letterSpacing: '-0.025em' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 999 } } },
  },
})