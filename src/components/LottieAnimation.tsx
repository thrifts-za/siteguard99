'use client'

import { useEffect, useRef } from 'react'
import lottie, { AnimationItem } from 'lottie-web'

interface LottieAnimationProps {
  src: string
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieAnimation({
  src,
  loop = true,
  autoplay = true,
  className
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Destroy previous animation if exists
      if (animationRef.current) {
        animationRef.current.destroy()
      }

      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        path: src
      })

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy()
        }
      }
    }
  }, [src, loop, autoplay])

  return <div ref={containerRef} className={className} />
}
