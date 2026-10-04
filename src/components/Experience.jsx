import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import * as m from 'motion/react-m'
import SectionHeader from './SectionHeader'
import { experience } from '../data/content'

export default function Experience({ lang, t }) {
  return (
    <Box id="experiencia" className="section-v3 experience-section">
      <Container maxWidth="xl">
        <SectionHeader
          eyebrow={t.expEyebrow}
          title={t.expTitle}
          text={t.expText}
        />

        <Box className="timeline-v3">
          <div className="timeline-track">
            <span />
          </div>

          {experience.map((item, index) => (
            <m.div
              key={item.company}
              className="timeline-item-v3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
              transition={{
                duration: .55,
                delay: index * .05
              }}
            >
              <div className="timeline-node">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <m.div
                className="timeline-content glass"
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(22,140,255,.45)'
                }}
                data-cursor
              >
                <Typography className="timeline-period">
                  {lang === 'es' ? item.period : item.periodEn}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: .7,
                    fontSize: {
                      xs: '1.2rem',
                      md: '1.45rem'
                    }
                  }}
                >
                  {lang === 'es' ? item.role : item.roleEn}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mt: .45 }}
                >
                  {item.company}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1.4,
                    lineHeight: 1.72
                  }}
                >
                  {lang === 'es'
                    ? item.description
                    : item.descriptionEn}
                </Typography>
              </m.div>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}