import styles from './DivergenceConvergenceDiagram.module.css'

export default function DivergenceConvergenceDiagram() {
  return (
    <figure className={styles.figure}>
      <svg
        viewBox="0 0 760 210"
        className={styles.svg}
        role="img"
        aria-labelledby="dd-title dd-desc"
      >
        <title id="dd-title">Double-diamond process diagram</title>
        <desc id="dd-desc">
          Four phases: Pre-design, then a Generative phase where ideas diverge (Workshops 1 and 2),
          then an Evaluative phase where ideas converge (Workshop 3), then Post-design.
        </desc>

        {/* ── Connector lines ── */}
        <line x1="60" y1="100" x2="120" y2="100" stroke="#D1D5DB" strokeWidth="1.5" />
        <line x1="640" y1="100" x2="700" y2="100" stroke="#D1D5DB" strokeWidth="1.5" />

        {/* ── Left diamond — Generative / Diverge ── */}
        <path
          d="M 120 100 L 260 38 L 400 100 L 260 162 Z"
          fill="#FEF9C3"
          stroke="#CA8A04"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* ── Right diamond — Evaluative / Converge ── */}
        <path
          d="M 360 100 L 500 38 L 640 100 L 500 162 Z"
          fill="#DCFCE7"
          stroke="#16A34A"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* ── Overlap region (slightly lighter) ── */}
        <path
          d="M 360 100 L 400 82 L 400 118 Z"
          fill="#E5F5E0"
          stroke="none"
        />

        {/* ── End dots ── */}
        <circle cx="120" cy="100" r="5" fill="#6B7280" />
        <circle cx="640" cy="100" r="5" fill="#6B7280" />

        {/* ── Phase labels (outside) ── */}
        <text x="60" y="96" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="inherit">
          Pre-
        </text>
        <text x="60" y="109" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="inherit">
          design
        </text>
        <text x="700" y="96" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="inherit">
          Post-
        </text>
        <text x="700" y="109" textAnchor="middle" fontSize="11" fill="#6B7280" fontFamily="inherit">
          design
        </text>

        {/* ── Diamond labels ── */}
        <text x="260" y="93" textAnchor="middle" fontSize="12" fontWeight="600" fill="#854D0E" fontFamily="inherit">
          Generative
        </text>
        <text x="260" y="108" textAnchor="middle" fontSize="11" fill="#A16207" fontFamily="inherit">
          Workshops 1 & 2
        </text>

        <text x="500" y="93" textAnchor="middle" fontSize="12" fontWeight="600" fill="#14532D" fontFamily="inherit">
          Evaluative
        </text>
        <text x="500" y="108" textAnchor="middle" fontSize="11" fill="#166534" fontFamily="inherit">
          Workshop 3
        </text>

        {/* ── Diverge / Converge labels below ── */}
        <text x="260" y="183" textAnchor="middle" fontSize="11" fill="#A16207" fontFamily="inherit">
          Diverge
        </text>
        <text x="500" y="183" textAnchor="middle" fontSize="11" fill="#166534" fontFamily="inherit">
          Converge
        </text>

        {/* ── Arrows below diamonds ── */}
        <path
          d="M 160 175 Q 260 170 360 175"
          fill="none"
          stroke="#CA8A04"
          strokeWidth="1"
          strokeDasharray="3 2"
          markerEnd="url(#arrowAmber)"
        />
        <path
          d="M 400 175 Q 500 170 600 175"
          fill="none"
          stroke="#16A34A"
          strokeWidth="1"
          strokeDasharray="3 2"
          markerEnd="url(#arrowGreen)"
        />

        <defs>
          <marker id="arrowAmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="#CA8A04" />
          </marker>
          <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="#16A34A" />
          </marker>
        </defs>
      </svg>
      <figcaption className={styles.caption}>
        Figure: Double-diamond design process — divergent generative phases and convergent evaluative
        phase across three workshops.
      </figcaption>
    </figure>
  )
}
