const ArrowSvg = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block align-middle"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.3))',
      animation: 'arrowGlowPulse 2.5s ease-in-out infinite',
    }}
  >
    <line x1="2" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default ArrowSvg;


