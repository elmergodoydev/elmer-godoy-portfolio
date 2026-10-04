import { Box, Button, Container, Stack, Typography } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { motion } from 'motion/react'
import { profile } from '../data/content'

export default function Contact({ t }) {
  return (
    <Box id="contacto" className="section-v3 contact-section">
      <Container maxWidth="xl">
        <motion.div className="contact-v3 glass" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
          <div className="contact-grid-bg" />
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '.16em', fontSize: '.72rem', textTransform: 'uppercase' }}>{t.contactEyebrow}</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.35rem', md: '4.1rem' }, mt: 1.4, maxWidth: 850, lineHeight: .98 }}>{t.contactTitle}</Typography>
            <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.8, maxWidth: 650 }}>{t.contactText}</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 3.2 }}>
              <Button data-cursor size="large" variant="contained" startIcon={<EmailRoundedIcon />} endIcon={<ArrowForwardRoundedIcon />} href={`mailto:${profile.email}`}>{profile.email}</Button>
              <Button data-cursor size="large" variant="outlined" startIcon={<LinkedInIcon />} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</Button>
            </Stack>
          </Box>
          <div className="contact-orb"><span /><span /><span /></div>
        </motion.div>
      </Container>
    </Box>
  )
}