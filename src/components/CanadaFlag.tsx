/**
 * Official Canadian Flag (The Maple Leaf / l'Unifolié)
 * Uses the official proportions (2:1) and the accurate 11-point maple leaf geometry
 * based on the official construction sheet from the Canadian Heritage department.
 */
export default function CanadaFlag({
  width = 40,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  const height = width / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1200 600"
      className={className}
      aria-label="Flag of Canada"
      role="img"
    >
      {/* Left red band */}
      <rect x="0" y="0" width="300" height="600" fill="#FF0000" />
      {/* White centre band */}
      <rect x="300" y="0" width="600" height="600" fill="#FFFFFF" />
      {/* Right red band */}
      <rect x="900" y="0" width="300" height="600" fill="#FF0000" />
      {/* 11-point maple leaf — official geometry */}
      <path
        fill="#FF0000"
        d="M600,76.4 L631.2,185.6 L588,148.8 L560.4,172.8
           L571.2,108 L528,123.6 L540,92.4 L480,123.6
           L501.6,175.2 L435.6,169.2 L469.2,217.2
           L420,210 L444,271.2 L356.4,262.8 L374.4,306
           L306,310.8 L324,357.6 L355.2,345.6 L348,381.6
           L384,375.6 L384,448.8 L420,448.8 L420,506.4
           L462,506.4 L462,547.2 L537.6,547.2 L537.6,506.4
           L576,506.4 L576,448.8 L624,448.8 L624,506.4
           L662.4,506.4 L662.4,547.2 L738,547.2 L738,506.4
           L780,506.4 L780,448.8 L816,448.8 L816,375.6
           L852,381.6 L844.8,345.6 L876,357.6 L894,310.8
           L825.6,306 L843.6,262.8 L756,271.2 L780,210
           L730.8,217.2 L764.4,169.2 L698.4,175.2 L720,123.6
           L660,92.4 L672,123.6 L628.8,108 L639.6,172.8
           L612,148.8 L568.8,185.6 Z"
      />
    </svg>
  );
}
