import Image from 'next/image'

interface LogoProps {
  logoUrl?: string
  siteName: string
  variant: 'header' | 'footer'
  className?: string
}

export default function Logo({ logoUrl, siteName, variant, className = '' }: LogoProps) {
  if (logoUrl) {
    return (
      <Image
        src={logoUrl}
        alt={siteName}
        width={150}
        height={40}
        className={`object-contain ${className}`}
      />
    )
  }

  // Text placeholder with nice styling
  // Note: Footer uses .invert class with filter:invert() so we use black which becomes white
  return (
    <span
      className={`font-bold text-xl tracking-tight ${className}`}
      style={{
        fontFamily: 'var(--font-figtree), sans-serif',
        color: '#000000'
      }}
    >
      {siteName}
    </span>
  )
}
