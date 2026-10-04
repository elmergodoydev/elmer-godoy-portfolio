import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as m from 'motion/react-m'

export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      <Box sx={{ mb: { xs: 4, md: 5.5 }, maxWidth: 820 }}>
        <Typography
          sx={{
            color: 'primary.main',
            fontWeight: 800,
            letterSpacing: '.18em',
            fontSize: '.72rem',
            textTransform: 'uppercase',
            mb: 1.4
          }}
        >
          {eyebrow}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.1rem', md: '3.55rem' },
            lineHeight: .98
          }}
        >
          {title}
        </Typography>

        {text && (
          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              lineHeight: 1.8,
              maxWidth: 700
            }}
          >
            {text}
          </Typography>
        )}
      </Box>
    </m.div>
  )
}