import styles from './DesignIterations.module.css'

const iterations = [
  {
    number: '01',
    label: 'First iteration',
    theme: 'Discover & explore',
    steps: [
      'Semi-structured interviews with 3 gamers',
      'Affinity diagram analysis (MetroRetro)',
      'Workshop 1 — ideation with user',
      '6 low-fidelity prototype sketches',
    ],
    finding: 'Training was a proxy for the real need: social contact.',
    outcome: 'Revised problem statement — shifted focus from activity to connection.',
  },
  {
    number: '02',
    label: 'Second iteration',
    theme: 'Generate concepts',
    steps: [
      'Prototyping 2 — two divergent concepts',
      'Skattejakt (geocaching treasure hunt)',
      'Fibbly (tangible social connector)',
      'Supervisor formative evaluation',
    ],
    finding: 'Fibbly addressed the core problem; Skattejakt still prescribed the activity.',
    outcome: 'Decided to pursue Fibbly — shifted focus to tangible interaction design.',
  },
  {
    number: '03',
    label: 'Third iteration',
    theme: 'Refine & evaluate',
    steps: [
      'Self-observation of boredom & fidgeting',
      'Participatory observation of user at home',
      'Prototype 3 — slime ball with Arduino',
      'Summative evaluation via roleplay',
    ],
    finding: 'Form and haptic interaction were well-received; social risk-removal concept validated.',
    outcome: 'Positive user feedback on feel, responsiveness, and concept premise.',
  },
]

export default function DesignIterations() {
  return (
    <div className={styles.grid} role="list" aria-label="Design iterations">
      {iterations.map((iter) => (
        <div key={iter.number} className={styles.card} role="listitem">
          <div className={styles.cardHeader}>
            <span className={styles.number} aria-hidden="true">{iter.number}</span>
            <div>
              <p className={styles.label}>{iter.label}</p>
              <p className={styles.theme}>{iter.theme}</p>
            </div>
          </div>
          <ul className={styles.steps}>
            {iter.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
          <div className={styles.finding}>
            <span className={styles.findingLabel}>Finding</span>
            <p>{iter.finding}</p>
          </div>
          <div className={styles.outcome}>
            <span className={styles.outcomeLabel}>Outcome</span>
            <p>{iter.outcome}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
