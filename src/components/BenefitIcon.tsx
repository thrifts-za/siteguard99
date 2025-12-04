'use client'

import Image from 'next/image'
import {
  Shield,
  ShieldCheck,
  Lock,
  Key,
  Fingerprint,
  Zap,
  Rocket,
  Gauge,
  Timer,
  Cloud,
  CloudUpload,
  Database,
  HardDrive,
  Activity,
  LineChart,
  Eye,
  Bell,
  RefreshCw,
  Wrench,
  Settings,
  Drill,
  Star,
  Award,
  BadgeCheck,
  Sparkles,
  Headphones,
  MessageCircle,
  Mail,
  Phone,
  TrendingUp,
  DollarSign,
  CreditCard,
  Wallet,
  Maximize,
  Layers,
  Grid3X3,
  Move,
  Clock,
  Calendar,
  Hourglass,
  CheckCircle,
  Heart,
  ThumbsUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  'shield': Shield,
  'shield-check': ShieldCheck,
  'lock': Lock,
  'key': Key,
  'fingerprint': Fingerprint,
  'zap': Zap,
  'rocket': Rocket,
  'gauge': Gauge,
  'timer': Timer,
  'cloud': Cloud,
  'cloud-upload': CloudUpload,
  'database': Database,
  'hard-drive': HardDrive,
  'activity': Activity,
  'chart-line': LineChart,
  'eye': Eye,
  'bell': Bell,
  'refresh-cw': RefreshCw,
  'wrench': Wrench,
  'settings': Settings,
  'tool': Drill,
  'star': Star,
  'award': Award,
  'badge-check': BadgeCheck,
  'sparkles': Sparkles,
  'headphones': Headphones,
  'message-circle': MessageCircle,
  'mail': Mail,
  'phone': Phone,
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  'credit-card': CreditCard,
  'wallet': Wallet,
  'maximize': Maximize,
  'layers': Layers,
  'grid': Grid3X3,
  'move': Move,
  'clock': Clock,
  'calendar': Calendar,
  'hourglass': Hourglass,
  'check-circle': CheckCircle,
  'heart': Heart,
  'thumbs-up': ThumbsUp,
  'users': Users,
}

interface BenefitIconProps {
  iconName?: string
  iconUrl?: string
  colorScheme?: string
  size?: number
  className?: string
  showGradientEffect?: boolean
}

export function BenefitIcon({
  iconName,
  iconUrl,
  size = 48,
  className = '',
}: BenefitIconProps) {
  // If custom icon image is provided, use it
  if (iconUrl) {
    return (
      <Image
        src={iconUrl}
        alt=""
        width={size}
        height={size}
        className={`object-contain ${className}`}
      />
    )
  }

  // Otherwise, use Lucide icon - solid white
  const IconComponent = iconMap[iconName || 'star'] || Star

  return (
    <IconComponent
      className={`text-white ${className}`}
      style={{ width: size, height: size }}
      strokeWidth={2}
      fill="white"
    />
  )
}
