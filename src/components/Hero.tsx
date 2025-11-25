'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HeroSection, SiteSettings } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface HeroProps {
  hero: HeroSection
  settings: SiteSettings
}

export default function Hero({ hero, settings }: HeroProps) {
  const siteName = settings?.siteName || 'SiteGuard99'

  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="inner-container">
          <div className="hero__flex">
            {/* Left Side */}
            <div className="hero__left">
              <div className="hero__left-top">
                <Link href="/" className="hero__logo-block w-inline-block">
                  <Image
                    src="/images/678548430d58f4cbecec19d7_Designjoy.svg"
                    alt={siteName}
                    width={150}
                    height={40}
                    className="image-23"
                  />
                </Link>
                <div className="hero__buttons-flex">
                  <Link
                    href={settings?.loginUrl || "https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ"}
                    target="_blank"
                    className="button-outline w-inline-block"
                  >
                    <div>Login</div>
                  </Link>
                  <Link href="#book" className="button-outline w-inline-block">
                    <Image
                      src="/images/678548430d58f4cbecec19bf_Phone--Streamline-Ultimate (1).svg"
                      alt="Phone"
                      width={16}
                      height={16}
                      className="image"
                    />
                    <div>Book a call</div>
                  </Link>
                  <Link href="#pricing" className="button-filled w-inline-block">
                    <div>See pricing</div>
                  </Link>
                </div>
              </div>
              <div className="hero__left-bottom">
                <h1>
                  {hero?.headlinePart1 || 'Design subscriptions for'}{' '}
                  <span className="text-italics">{hero?.headlineItalic || 'everyone'}</span>
                </h1>
                <p className="hero__left-bottom-p">
                  <span className="text-span _3">{hero?.subtitle || 'Pause or cancel anytime.'}</span>
                </p>
              </div>
            </div>

            {/* Right Side - Member Card */}
            <div className="div-block-37">
              <div className="hero__member-card">
                <div className="hero__member-card-badge">
                  <div className="lottie-animation-5"></div>
                  <div>{hero?.memberCardBadge || 'Start today'}</div>
                </div>
                <div className="hero__member-card-splash">
                  <div className="hero__member-card-header">{hero?.memberCardTitle1 || 'Join'}</div>
                  <div className="hero__member-card-header">{hero?.memberCardTitle2 || siteName}</div>
                  <div className="hero__member-card-p">{hero?.memberCardSubtitle || 'One subscription to rule them all.'}</div>
                  <Link href="#pricing" className="button w-button">See pricing</Link>
                </div>
                <Link href="#book" className="hero__member-card-call w-inline-block">
                  <div className="hero__member-card-call-left">
                    <Image
                      src="/images/678548430d58f4cbecec196f_Group 11.png"
                      alt="Founder"
                      width={48}
                      height={48}
                      className="image-2"
                    />
                    <div>
                      <div>{hero?.bookCallTitle || 'Book a 15-min intro call'}</div>
                      <div className="hero__member-card-call-schedule">{hero?.bookCallSubtitle || 'Schedule now'}</div>
                    </div>
                  </div>
                  <Image
                    src="/images/678548430d58f4cbecec196a_arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </Link>
                <Image
                  src="/images/678548430d58f4cbecec196c_card.png"
                  alt="Card mockup"
                  width={688}
                  height={400}
                  className="hero__member-card-mockup"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
