'use client'

import { useRef } from 'react'
import Image from 'next/image'

interface Benefit {
  _id: string
  title: string
  description: string
  icon?: {
    asset?: {
      url?: string
    }
  }
  colorScheme?: string
  order?: number
}

interface ServicesSliderProps {
  benefits: Benefit[]
}

// Map color schemes to CSS classes
const colorClassMap: Record<string, string> = {
  purple: '_1',
  blue: '_3',
  orange: '_2',
  pink: '_4',
  green: '_5',
  yellow: '_6',
}

// Default icons for benefits if not provided from Sanity
const defaultIcons: Record<string, string> = {
  'Design board': '/images/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png',
  'Fixed monthly rate': '/images/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png',
  'Fast delivery': '/images/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png',
  'Top-notch quality': '/images/678548430d58f4cbecec199d_Star--Streamline-Nova.png',
  'Flexible and scalable': '/images/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png',
  'Unique and all yours': '/images/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png',
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

  const getIconUrl = (benefit: Benefit) => {
    if (benefit.icon?.asset?.url) {
      return benefit.icon.asset.url
    }
    return defaultIcons[benefit.title] || '/images/678548430d58f4cbecec199d_Star--Streamline-Nova.png'
  }

  return (
    <div className="services__list">
      <div className="container p-b-0">
        <div className="services__row" ref={servicesRowRef}>
          {benefits.map((benefit, index) => (
            <div key={benefit._id} className={`services__col ${index === benefits.length - 1 ? 'last' : ''}`}>
              <div className={`services__block ${colorClassMap[benefit.colorScheme || ''] || `_${(index % 6) + 1}`}`}>
                <Image
                  src={getIconUrl(benefit)}
                  alt=""
                  width={80}
                  height={80}
                  className="image-8"
                />
              </div>
              <div className="services__header">{benefit.title}</div>
              <p className="services__p">{benefit.description}</p>
            </div>
          ))}
          <div className="div-block-18"></div>
        </div>

        {/* Scroll arrows */}
        <div className="services-arrows">
          <div className="left-arrow-2" onClick={() => scrollServices('left')}>
            <div className="w-icon-slider-left"></div>
          </div>
          <div className="right-arrow-2" onClick={() => scrollServices('right')}>
            <div className="w-icon-slider-right"></div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="slider-wrapper _33">
          <div className="slider-resource w-slider">
            <div className="mask-blog w-slider-mask">
              {benefits.map((benefit, index) => (
                <div key={`mobile-${benefit._id}`} className="blog-item w-slide">
                  <div className={`services__col ${index === benefits.length - 1 ? 'last' : ''}`}>
                    <div className={`services__block ${colorClassMap[benefit.colorScheme || ''] || `_${(index % 6) + 1}`}`}>
                      <Image
                        src={getIconUrl(benefit)}
                        alt=""
                        width={80}
                        height={80}
                        className="image-8"
                      />
                    </div>
                    <div className="services__header">{benefit.title}</div>
                    <p className="services__p">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="left-arrow-2 w-slider-arrow-left">
              <div className="w-icon-slider-left"></div>
            </div>
            <div className="right-arrow-2 w-slider-arrow-right">
              <div className="w-icon-slider-right"></div>
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
