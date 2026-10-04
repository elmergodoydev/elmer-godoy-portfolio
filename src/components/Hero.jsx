import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { motion } from 'motion/react'
import DeploymentFlow from './DeploymentFlow'
import { profile } from '../data/content'
import profileImage from '../assets/images/elmer-profile.png'


export default function Hero({ lang, t }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Box id="inicio" className="hero-v3">
      <div className="hero-halo halo-one" />
      <div className="hero-halo halo-two" />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
        <Box className="hero-layout">
          <Box className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .65, ease: 'easeOut' }}
            >
              <Stack direction="row" spacing={1.1} alignItems="center" className="hero-eyebrow">
                <span className="status-dot" />
                <Typography color="primary.main">{t.heroEyebrow}</Typography>
              </Stack>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}
            >
              <Typography component="h1" className="hero-title-v3" aria-label="Elmer Godoy Angeles" sx={{ fontSize: { xs: '3rem', sm: '3.8rem', md: '4.8rem', lg: '5.8rem' } }}>
                <motion.span
                  className="hero-name-line"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -25,
                      filter: 'blur(8px)',
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 0.7,
                      },
                    },
                  }}
                >
                  ELMER
                </motion.span>

                <motion.span
                  className="hero-name-line"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -25,
                      filter: 'blur(8px)',
                    },
                    show: {
                      opacity: 1,
                      x: 0,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 0.7,
                      },
                    },
                  }}
                >
                  GODOY ANGELES<span className="blue-dot">.</span>
                </motion.span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .65, delay: .32 }}
            >
              <Typography className="hero-role-v3" sx={{ fontSize: { xs: '1.05rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' } }}>{profile.role}</Typography>
              <Typography className="hero-lead-v3">{t.heroLead}</Typography>


              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 3.2 }}>
                <Button data-cursor size="large" variant="contained" endIcon={<ArrowForwardRoundedIcon />} onClick={() => scroll('proyectos')}>
                  {t.heroCta}
                </Button>
                <Button data-cursor size="large" variant="outlined" onClick={() => scroll('contacto')}>
                  {t.heroContact}
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.4 }}>
                {['Full Stack', 'Automatización', 'Integración'].map((item) => (
                  <Chip data-cursor key={item} label={item} variant="outlined" />
                ))}
              </Stack>
            </motion.div>
          </Box>

          <Box className="hero-visual">
            <motion.div
              className="profile-frame glass"
              initial={{ opacity: 0, x: 34, scale: .96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: .9, delay: .13 }}
            >
              <img src={profileImage} alt="Elmer Godoy Angeles" />
              <div className="profile-shade" />
              <div className="profile-meta">
                <span>{lang === 'es' ? 'Construcción · Integración · Despliegue' : 'Build · Integrate · Deploy'}</span>
              </div>
            </motion.div>

            <DeploymentFlow lang={lang} caption={t.heroFlow} />
          </Box>
        </Box>
      </Container>

      <div className="hero-scroll-note"><span>SCROLL</span><i /></div>
    </Box>
  )
}
