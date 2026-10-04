import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { nav, profile } from '../data/content'

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false)
  const links = nav[lang]
  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(5,7,10,.72)', backdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(255,255,255,.055)', zIndex: 1200 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: 'space-between' }}>
          <Typography onClick={() => go('inicio')} sx={{ fontSize: '1.05rem', fontWeight: 900, cursor: 'pointer' }}>
            EG<span style={{ color: '#168cff' }}>.</span>
          </Typography>
          <Stack direction="row" spacing={.4} alignItems="center" sx={{ display: { xs: 'none', lg: 'flex' } }}>
            {links.map(([label, id]) => <Button data-cursor key={id} color="inherit" onClick={() => go(id)}>{label}</Button>)}
            <Box sx={{ ml: 1, p: .35, border: '1px solid rgba(255,255,255,.12)', borderRadius: 999, bgcolor: 'rgba(255,255,255,.03)' }}>
              <Button data-cursor size="small" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} sx={{ minWidth: 54, color: 'primary.light' }}>
                {lang === 'es' ? 'ES | EN' : 'EN | ES'}
              </Button>
            </Box>
            <Button data-cursor variant="outlined" sx={{ ml: 1 }} onClick={() => go('contacto')}>{t.heroContact}</Button>
          </Stack>
          <IconButton color="inherit" onClick={() => setOpen(true)} sx={{ display: { xs: 'inline-flex', lg: 'none' } }}>
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, minHeight: '100%', p: 2.5, bgcolor: '#080c11' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Typography fontWeight={900}>{profile.name}</Typography>
            <IconButton color="inherit" onClick={() => setOpen(false)}><CloseRoundedIcon /></IconButton>
          </Stack>
          <Stack>
            {links.map(([label, id]) => <Button data-cursor key={id} color="inherit" sx={{ justifyContent: 'flex-start', py: 1.35 }} onClick={() => go(id)}>{label}</Button>)}
            <Button data-cursor color="primary" sx={{ justifyContent: 'flex-start', mt: 1 }} onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              {lang === 'es' ? 'English' : 'Español'}
            </Button>
            <Button data-cursor variant="outlined" sx={{ mt: 2 }} onClick={() => go('contacto')}>{t.heroContact}</Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}