import React from 'react'
import type { TimelineEvent } from '../../types/events'
import styles from './EventMarker.module.css'

type Props = { event: TimelineEvent; onClick?: () => void }

const EventMarker: React.FC<Props> = ({ event, onClick }) => {
  return (
    <div className={styles.row} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.dot} aria-hidden>
        <div className={styles.year}>{event.year}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.title}>{event.title}</div>
        <div className={styles.summary}>{event.summary}</div>
      </div>
    </div>
  )
}

export default EventMarker