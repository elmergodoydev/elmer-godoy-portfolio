import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import * as m from 'motion/react-m'
import SectionHeader from './SectionHeader'

export default function About({ t }) {
  return (
    <Box id="sobre-mi" className="section-v3 about-section">
      <Container maxWidth="xl">
        <SectionHeader eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
        <Box className="about-grid">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .65 }}
          >
            <Typography className="body-large">{t.aboutP1}</Typography>
            <Typography className="body-large" sx={{ mt: 2 }}>{t.aboutP2}</Typography>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .65, delay: .08 }}
          >
            <Box className="about-process glass" data-cursor>
              <Typography fontWeight={800} sx={{ mb: 1.6 }}>
                {t.processTitle}
              </Typography>

              {t.process.map((item, index) => (
                <m.div
                  key={item}
                  className="process-row"
                  whileHover={{ x: 6 }}
                >
                  <span className="process-index">0{index + 1}</span>
                  <span className="process-check">
                    <CheckCircleOutlineRoundedIcon fontSize="inherit" />
                  </span>
                  <Typography color="text.secondary">{item}</Typography>
                </m.div>
              ))}
            </Box>
          </m.div>
        </Box>
      </Container>
    </Box>
  )
}