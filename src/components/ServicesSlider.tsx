'use client'

import { useRef } from 'react'
import Image from 'next/image'

interface Benefit {
  _id: string
  title: string
  description: string
  emoji?: string
  iconUrl?: string
  background?: string
  colorScheme?: string
  order?: number
}

interface ServicesSliderProps {
  benefits: Benefit[]
}

// Default emojis for legacy benefits
const defaultEmojis: Record<string, string> = {
  'Design board': '📋',
  'Fixed monthly rate': '💰',
  'Fast delivery': '⚡',
  'Top-notch quality': '⭐',
  'Flexible and scalable': '🔀',
  'Unique and all yours': '💎',
}

export default function ServicesSlider({ benefits }: ServicesSliderProps) {
  const servicesRowRef = useRef<HTMLDivElement>(null)

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRowRef.current) {
      const scrollAmount = 252 // width + gap
      servicesRowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const renderIcon = (benefit: Benefit) => {
    // If custom icon image URL from Sanity, use it
    if (benefit.iconUrl) {
      return (
        <Image
          src={benefit.iconUrl}
          alt=""
          width={80}
          height={80}
          className="image-8"
        />
      )
    }

    // Use emoji from Sanity or fallback
    const emoji = benefit.emoji || defaultEmojis[benefit.title] || '⭐'
    return (
      <span className="text-5xl" role="img" aria-label={benefit.title}>
        {emoji}
      </span>
    )
  }

  // Get background style - use background image if set, otherwise fall back to CSS class
  const getBackgroundStyle = (benefit: Benefit, index: number) => {
    if (benefit.background) {
      return {
        backgroundImage: `url('/images/benefit-bg-${benefit.background}.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    }
    return {}
  }

  // Get CSS class for color-based backgrounds (fallback)
  const getBackgroundClass = (benefit: Benefit, index: number) => {
    if (benefit.background) {
      return '' // No CSS class needed when using image
    }
    // Legacy color scheme support
    const colorClassMap: Record<string, string> = {
      red: '_1',
      purple: '_1',
      blue: '_3',
      orange: '_2',
      pink: '_4',
      green: '_5',
      yellow: '_6',
    }
    return colorClassMap[benefit.colorScheme || ''] || `_${(index % 6) + 1}`
  }

  return (
    <div className="services__list">
      <div className="container p-b-0">
        <div className="services__row" ref={servicesRowRef}>
          {benefits.map((benefit, index) => (
            <div key={benefit._id} className={`services__col ${index === benefits.length - 1 ? 'last' : ''}`}>
              <div
                className={`services__block ${getBackgroundClass(benefit, index)}`}
                style={getBackgroundStyle(benefit, index)}
              >
                {renderIcon(benefit)}
              </div>
              <div className="services__header">{benefit.title}</div>
              <p className="services__p">{benefit.description}</p>
            </div>
          ))}
          <div className="div-block-18"></div>
        </div>

        {/* Scroll arrows */}
        <div className="services-arrows">
          <div className="left-arrow-2" onClick={() => scrollServices('left')} style={{ backgroundColor: '#e63946' }}>
            <div className="w-icon-slider-left" style={{ color: '#ffffff' }}></div>
          </div>
          <div className="right-arrow-2" onClick={() => scrollServices('right')} style={{ backgroundColor: '#e63946' }}>
            <div className="w-icon-slider-right" style={{ color: '#ffffff' }}></div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="slider-wrapper _33">
          <div className="slider-resource w-slider">
            <div className="mask-blog w-slider-mask">
              {benefits.map((benefit, index) => (
                <div key={`mobile-${benefit._id}`} className="blog-item w-slide">
                  <div className={`services__col ${index === benefits.length - 1 ? 'last' : ''}`}>
                    <div
                      className={`services__block ${getBackgroundClass(benefit, index)}`}
                      style={getBackgroundStyle(benefit, index)}
                    >
                      {renderIcon(benefit)}
                    </div>
                    <div className="services__header">{benefit.title}</div>
                    <p className="services__p">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="left-arrow-2 w-slider-arrow-left" style={{ backgroundColor: '#e63946' }}>
              <div className="w-icon-slider-left" style={{ color: '#ffffff' }}></div>
            </div>
            <div className="right-arrow-2 w-slider-arrow-right" style={{ backgroundColor: '#e63946' }}>
              <div className="w-icon-slider-right" style={{ color: '#ffffff' }}></div>
            </div>
            <div className="slide-nav w-slider-nav w-round"></div>
          </div>
        </div>

        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
