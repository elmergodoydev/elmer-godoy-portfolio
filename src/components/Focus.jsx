import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import * as m from 'motion/react-m'
import SectionHeader from './SectionHeader'
import { focus } from '../data/content'

export default function Focus({ lang, t }) {
  return (
    <Box id="enfoque" className="section-v3 focus-section">
      <Container maxWidth="xl">
        <SectionHeader
          eyebrow={t.focusEyebrow}
          title={t.focusTitle}
          text={t.focusText}
        />

        <Box className="focus-layout-v3">
          <m.div
            className="focus-core glass"
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: .3 }}
          >
            <div className="core-rings">
              <span />
              <span />
              <span />
            </div>

            <AutoAwesomeRoundedIcon
              sx={{
                fontSize: 54,
                color: 'primary.light',
                position: 'relative',
                zIndex: 2
              }}
            />

            <Typography
              variant="h4"
              sx={{
                mt: 2,
                textAlign: 'center'
              }}
            >
              {lang === 'es'
                ? 'Problema → Solución'
                : 'Problem → Solution'}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 1.5,
                textAlign: 'center',
                maxWidth: 300,
                lineHeight: 1.7
              }}
            >
              {lang === 'es'
                ? 'Análisis, diseño, desarrollo y entrega con una visión de extremo a extremo.'
                : 'Analysis, design, development and delivery with an end-to-end view.'}
            </Typography>
          </m.div>

          <Box className="focus-grid-v3">
            {focus.map((item, index) => (
              <m.div
                key={item.title}
                className="focus-card-v3 glass"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{
                  duration: .45,
                  delay: index * .05
                }}
                whileHover={{ y: -6 }}
                data-cursor
              >
                <span className="focus-num">0{index + 1}</span>
                <span className="focus-symbol">{item.icon}</span>

                <Typography fontWeight={800}>
                  {lang === 'es' ? item.title : item.titleEn}
                </Typography>

                <span className="focus-line" />
              </m.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}