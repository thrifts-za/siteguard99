'use client'

import React from 'react'

interface GradientIconProps {
  children: React.ReactNode
  className?: string
  particleEffect?: boolean
}

export function GradientIcon({ children, className = '', particleEffect = true }: GradientIconProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-20 blur-xl rounded-full" />

      {/* Particle/dot overlay effect */}
      {particleEffect && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(248,58,60,0.8) 1px, transparent 1px)',
            backgroundSize: '6px 6px'
          }}
        />
      )}

      {/* Icon with gradient text */}
      <div className="relative text-[#f83a3c] drop-shadow-lg">
        {children}
      </div>
    </div>
  )
}

// Particle Icon with full gradient background effect
export function ParticleIcon({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative w-20 h-20 flex items-center justify-center ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-[#f83a3c] to-red-600 opacity-25 blur-2xl rounded-full" />

      {/* Dotted overlay effect */}
      <div
        className="absolute inset-0 opacity-40 rounded-full"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(248,58,60,0.9) 1.5px, transparent 1.5px)',
          backgroundSize: '8px 8px'
        }}
      />

      {/* Icon */}
      <div className="relative text-[#f83a3c] drop-shadow-lg">
        {children}
      </div>
    </div>
  )
}
