import { Box, Container, Typography } from '@mui/material'
import { motion } from 'motion/react'
import SectionHeader from './SectionHeader'
import TechIcon from './TechIcon'
import { technologies, techLabels } from '../data/content'

export default function Technologies({ lang, t }) {
  return (
    <Box id="tecnologias" className="section-v3 tech-section">
      <Container maxWidth="xl">
        <SectionHeader eyebrow={t.techEyebrow} title={t.techTitle} text={t.techText} />
        <Box className="tech-groups-v3">
          {Object.entries(technologies).map(([group, list], groupIndex) => (
            <motion.div key={group} className="tech-group-v3 glass" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: groupIndex * .06 }}>
              <Typography sx={{ fontWeight: 800, mb: 2.2 }}>{techLabels[lang][group]}</Typography>
              <Box className="tech-grid-v3">
                {list.map((tech, index) => (
                  <motion.div key={tech} className="tech-item-v3" whileHover={{ y: -8, scale: 1.03 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }} data-cursor>
                    <span className="tech-icon-v3"><TechIcon name={tech} /></span>
                    <Typography component="span">{tech}</Typography>
                    <span className="tech-scan" style={{ animationDelay: `${index * 120}ms` }} />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}