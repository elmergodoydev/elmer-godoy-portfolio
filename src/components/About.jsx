import { Box, Container, Typography } from '@mui/material'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { motion } from 'motion/react'
import SectionHeader from './SectionHeader'

export default function About({ t }) {
  return (
    <Box id="sobre-mi" className="section-v3 about-section">
      <Container maxWidth="xl">
        <SectionHeader eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
        <Box className="about-grid">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }}>
            <Typography className="body-large">{t.aboutP1}</Typography>
            <Typography className="body-large" sx={{ mt: 2 }}>{t.aboutP2}</Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65, delay: .08 }}>
            <Box className="about-process glass" data-cursor>
              <Typography fontWeight={800} sx={{ mb: 1.6 }}>{t.processTitle}</Typography>
              {t.process.map((item, index) => (
                <motion.div key={item} className="process-row" whileHover={{ x: 6 }}>
                  <span className="process-index">0{index + 1}</span>
                  <span className="process-check"><CheckCircleOutlineRoundedIcon fontSize="inherit" /></span>
                  <Typography color="text.secondary">{item}</Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}