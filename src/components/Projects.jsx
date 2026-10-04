import { Box, Container, Typography, Chip } from '@mui/material'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import { motion } from 'motion/react'
import SectionHeader from './SectionHeader'
import { projects } from '../data/content'

export default function Projects({ lang, t }) {
  return (
    <Box id="proyectos" className="section-v3 projects-section">
      <Container maxWidth="xl">
        <SectionHeader eyebrow={t.projectsEyebrow} title={t.projectsTitle} text={t.projectsText} />
        <Box className="project-grid-v3">
          {projects.map((project, index) => (
            <motion.article key={project.title} className="project-v3 glass" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .08 }} whileHover={{ y: -10 }} data-cursor>
              <div className="project-topline" />
              <span className="project-index">{project.index}</span>
              <div className="project-orbit"><span /><span /><span /></div>
              <Typography sx={{ color: 'primary.main', fontSize: '.75rem', fontWeight: 800, letterSpacing: '.13em', textTransform: 'uppercase' }}>{project.organization}</Typography>
              <Typography variant="h4" sx={{ mt: 1.3, fontSize: { xs: '1.55rem', md: '1.8rem' } }}>{lang === 'es' ? project.title : project.titleEn}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1.7, lineHeight: 1.72 }}>{lang === 'es' ? project.description : project.descriptionEn}</Typography>
              <Box sx={{ display: 'flex', gap: .8, flexWrap: 'wrap', mt: 2.5 }}>
                {project.technologies.map((tech) => <Chip key={tech} label={tech} size="small" variant="outlined" />)}
              </Box>
              <div className="project-arrow"><ArrowUpwardRoundedIcon /></div>
            </motion.article>
          ))}
        </Box>
      </Container>
    </Box>
  )
}