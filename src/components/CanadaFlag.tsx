import Image from "next/image";

/**
 * Official Canadian Flag (The Maple Leaf / l'Unifolié)
 * Uses the official Pantone-colour SVG with the proper 11-point maple leaf.
 */
export default function CanadaFlag({
  width = 40,
  className = "",
  alt = "Flag of Canada",
}: {
  width?: number;
  className?: string;
  alt?: string;
}) {
  const height = width / 2;

  return (
    <Image
      src="/canada-flag.svg"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
