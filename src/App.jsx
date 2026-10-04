import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Focus from './components/Focus'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import { profile, translations } from './data/content'

export default function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero lang={lang} t={t} />
        <About t={t} />
        <Experience lang={lang} t={t} />
        <Projects lang={lang} t={t} />
        <Technologies lang={lang} t={t} />
        <Focus lang={lang} t={t} />
        <Contact t={t} />
      </main>
      <Box component="footer" sx={{ borderTop: '1px solid rgba(255,255,255,.06)', py: 3.2 }}>
        <Container maxWidth="xl">
          <Typography color="text.secondary" sx={{ fontSize: '.78rem' }}>© {new Date().getFullYear()} {profile.name} · Full Stack Developer | Software Engineer</Typography>
        </Container>
      </Box>
    </>
  )
}