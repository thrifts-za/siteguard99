import Image from 'next/image'

interface LogoProps {
  logoUrl?: string
  siteName: string
  variant: 'header' | 'footer'
  className?: string
  color?: 'default' | 'red'
}

export default function Logo({ logoUrl, siteName, variant, className = '', color = 'default' }: LogoProps) {
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

  // Text placeholder with WordPress icon and nice styling
  // Footer has parent .invert class that applies filter:invert(), so we use black which becomes white
  const isFooter = variant === 'footer'
  const useRed = color === 'red' || (!isFooter && color === 'default')

  // Red filter for the WordPress icon
  const redFilter = 'brightness(0) saturate(100%) invert(29%) sepia(93%) saturate(2080%) hue-rotate(342deg) brightness(99%) contrast(97%)'

  return (
    <span
      className={`font-bold text-xl tracking-tight flex items-center gap-2 ${className}`}
      style={{
        fontFamily: 'var(--font-figtree), sans-serif',
        color: useRed ? '#e63946' : '#000000'
      }}
    >
      <Image
        src="/images/wordpress-seeklogo-black.svg"
        alt="WordPress"
        width={24}
        height={24}
        className="object-contain"
        style={useRed ? { filter: redFilter } : {}}
      />
      {siteName}
    </span>
  )
}
