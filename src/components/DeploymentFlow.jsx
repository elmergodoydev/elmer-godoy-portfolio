import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import * as m from 'motion/react-m'
import { flowSteps } from '../data/content'
import DeploymentIcon from './DeploymentIcon'

export default function DeploymentFlow({ lang, caption }) {
  const [active, setActive] = useState(0)
  const [moving, setMoving] = useState(-1)

  useEffect(() => {
    let nextTimer

    const holdTimer = window.setTimeout(() => {
      setMoving(active)

      nextTimer = window.setTimeout(() => {
        setActive((value) => (value + 1) % flowSteps.length)
        setMoving(-1)
      }, 520)
    }, 1900)

    return () => {
      window.clearTimeout(holdTimer)
      window.clearTimeout(nextTimer)
    }
  }, [active])

  return (
    <Box className="flow-stage-shell" aria-label={caption}>
      <Box className="flow-sequence">
        {flowSteps.map((step, index) => {
          const isActive = index === active
          const isReached = index < active
          const title = lang === 'es' ? step.label : step.labelEn
          const sub = lang === 'es' ? step.sub : step.subEn

          return (
            <div key={step.mark} className="flow-sequence-unit">
              <m.div
                className={`flow-card glass ${isActive ? 'flow-card-active' : ''} ${isReached ? 'flow-card-reached' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: 1,
                  y: isActive ? -5 : 0,
                  scale: isActive ? 1.025 : 1,
                }}
                transition={{ duration: .55, ease: 'easeOut' }}
                onMouseEnter={() => setActive(index)}
                data-cursor
              >
                <div className="flow-card-top">
                  <span className="flow-mark">{step.mark}</span>
                </div>

                <div className="flow-card-main">
                  <span className="flow-brand">
                    <DeploymentIcon index={index} />
                  </span>

                  <span className="flow-text">
                    <strong>{title}</strong>
                    <small>{sub}</small>
                  </span>
                </div>

                <span className="flow-beacon" />
              </m.div>

              {index < flowSteps.length - 1 && (
                <div
                  className={`flow-connector ${index < active ? 'connector-complete' : ''} ${index === moving ? 'connector-active' : ''}`}
                  aria-hidden="true"
                >
                  <span className="flow-connector-track" />
                  <span className="flow-connector-beam" />
                  <i />
                </div>
              )}
            </div>
          )
        })}
      </Box>

      <div className="flow-caption">
        <span className="pulse-dot" />
        {caption}
      </div>
    </Box>
  )
}