'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { KlaviyoPageData } from '@/types/klaviyo'
import './../../app/klaviyo/klaviyo.css'

const CalBooker = dynamic(
  () => import('@/components/CalBooker').then(mod => mod.default),
  { ssr: false, loading: () => <div className="klaviyo-calendar-loading" /> }
)

interface Props {
  data: KlaviyoPageData
}

const defaultFaqs = [
  { _id: '1', question: 'What makes your commission model risk-free?', answer: 'You pay $0 upfront. We only earn when we generate revenue for you. If we don\'t make you money, you don\'t pay us a cent.' },
  { _id: '2', question: 'How quickly will I see results?', answer: 'Most clients see their first revenue from our email campaigns within 30 days. Full optimization typically happens over 60-90 days.' },
  { _id: '3', question: 'What\'s the minimum commitment?', answer: 'We work on a month-to-month basis. No long-term contracts. You can cancel anytime if you\'re not seeing results.' },
  { _id: '4', question: 'Do you work with all ecommerce platforms?', answer: 'Yes! Shopify, WooCommerce, BigCommerce, Magento - if it connects to Klaviyo, we can help you scale.' },
  { _id: '5', question: 'What commission rate do you charge?', answer: 'We charge 20% of net email-attributed revenue, billed on the 1st of each month for the previous month\'s performance.' },
]

// Email images from the public folder
const emailImages = [
  '/klaviyo-emails/5.27.25_Vault_Product_Push_4_V1.png',
  '/klaviyo-emails/5.29.25_VaultProductPush_8_V1.png',
  '/klaviyo-emails/6.10.25_VaultProductPush_4_V1.png',
  '/klaviyo-emails/6.11.25_Leads_Push_2_Week2_V1.png',
  '/klaviyo-emails/6.11.25_VaultProductPush_5_V1.png',
  '/klaviyo-emails/6.11.25_VaultProductPush_5_V2.png',
  '/klaviyo-emails/6.2.25_VaultProductPush_1_V1.png',
  '/klaviyo-emails/6.24.25_SierraMadrexTheVaultLaunch_V1.png',
  '/klaviyo-emails/6.4.25_VaultProductPush_2_V1.png',
  '/klaviyo-emails/6.9.25_VaultProductPush_3_V2.png',
  '/klaviyo-emails/6.png',
  '/klaviyo-emails/7.28.25_VaultProductPush_PirettiCampaign1_V2.png',
  '/klaviyo-emails/7.30.25_VaultProductPush_PirettiCampaign2_V1.png',
  '/klaviyo-emails/email_new_1.png',
  '/klaviyo-emails/email_new_2.png',
  '/klaviyo-emails/email_new_3.png',
  '/klaviyo-emails/email_new_4.png',
  '/klaviyo-emails/email_new_5.png',
  '/klaviyo-emails/email_new_6.png',
  '/klaviyo-emails/email_new_7.png',
  '/klaviyo-emails/email_new_8.png',
]

export default function KlaviyoLanding({ data }: Props) {
  const { page, faqItems = [] } = data
  const [isVisible, setIsVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [revenueInput, setRevenueInput] = useState(20000)

  // Section visibility defaults
  const showPricingHook = page?.showPricingHook !== false
  const showPainPoints = page?.showPainPoints !== false
  const showSolution = page?.showSolution !== false
  const showEmailExamples = page?.showEmailExamples !== false
  const showBenefits = page?.showBenefits !== false
  const showTestimonials = page?.showTestimonials === true // Off by default
  const showWhoFor = page?.showWhoFor !== false
  const showCalculator = page?.showCalculator !== false
  const showPricing = page?.showPricing !== false
  const showGuarantee = page?.showGuarantee !== false
  const showFaq = page?.showFaq !== false

  const cyclingWords = page?.heroCyclingWords?.length
    ? page.heroCyclingWords
    : ['Revenue Machine', 'Cash Generator', 'Profit Engine', 'Money Printer']

  const faqs = faqItems.length > 0 ? faqItems : defaultFaqs
  const commissionRate = page?.commissionRate || 20

  // Distribute images across columns - each image appears in only ONE column
  // Images are duplicated within each column for seamless infinite scroll
  const totalImages = emailImages.length
  const basePerColumn = Math.floor(totalImages / 4)
  const remainder = totalImages % 4

  const col1End = basePerColumn + (remainder > 0 ? 1 : 0)
  const col2End = col1End + basePerColumn + (remainder > 1 ? 1 : 0)
  const col3End = col2End + basePerColumn + (remainder > 2 ? 1 : 0)

  const col1Images = emailImages.slice(0, col1End)
  const col2Images = emailImages.slice(col1End, col2End)
  const col3Images = emailImages.slice(col2End, col3End)
  const col4Images = emailImages.slice(col3End)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const words = cyclingWords
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const type = () => {
      const currentWord = words[wordIndex]

      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1))
        setIsTyping(true)
        charIndex++

        if (charIndex === currentWord.length) {
          setIsTyping(false)
          timeoutId = setTimeout(() => {
            isDeleting = true
            type()
          }, 2000)
          return
        }
        timeoutId = setTimeout(type, 100)
      } else {
        charIndex--
        setDisplayText(currentWord.substring(0, charIndex))
        setIsTyping(true)

        if (charIndex === 0) {
          isDeleting = false
          wordIndex = (wordIndex + 1) % words.length
          setIsTyping(false)
          timeoutId = setTimeout(type, 500)
          return
        }
        timeoutId = setTimeout(type, 50)
      }
    }

    type()
    return () => clearTimeout(timeoutId)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const calculateCommission = (revenue: number) => {
    return Math.round(revenue * (commissionRate / 100))
  }

  return (
    <div className="klaviyo-page">
      {/* TOP BAR */}
      {page?.showTopBar !== false && (
        <div className="klaviyo-top-bar">
          <span>{page?.topBarText || 'Simple Pricing • 100% Commission Based • Pay Only for Previous Month\'s Revenue'}</span>
        </div>
      )}

      {/* HERO */}
      <section className="klaviyo-hero">
        <div className="klaviyo-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="klaviyo-particle" />
          ))}
        </div>
        <div className="klaviyo-glow-orb klaviyo-glow-orb-1" />
        <div className="klaviyo-glow-orb klaviyo-glow-orb-2" />

        <div className="klaviyo-container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div className={isVisible ? 'klaviyo-float-up' : ''} style={{ animationDelay: '0.1s' }}>
            <span className="klaviyo-hero-eyebrow">
              <span className="klaviyo-pulse-dot" />
              {page?.heroEyebrow || 'FOR ECOMMERCE BRANDS DOING $50K-$500K/MONTH'}
            </span>
          </div>

          <h1 className={`klaviyo-h1 ${isVisible ? 'klaviyo-float-up' : ''}`} style={{ animationDelay: '0.2s', marginBottom: '24px' }}>
            {page?.heroHeadline || 'We Turn Your Email List Into a'}
            <br />
            <span className="klaviyo-typewriter">
              <span className={`klaviyo-typewriter-text klaviyo-gradient-text ${isTyping ? 'typing' : ''}`}>
                {displayText}
              </span>
            </span>
          </h1>

          <p className={`klaviyo-text-xl ${isVisible ? 'klaviyo-float-up' : ''}`} style={{ animationDelay: '0.3s', maxWidth: '600px', margin: '0 auto 32px' }}>
            {page?.heroSubheadline || '100% commission-based. You only pay when we make you money.'}
          </p>

          <div className={isVisible ? 'klaviyo-float-up' : ''} style={{ animationDelay: '0.4s', marginBottom: '48px' }}>
            <a href="#book" className="klaviyo-btn-glow">
              {page?.heroCtaText || 'Book Free Strategy Call'} →
            </a>
            <p className="klaviyo-text-sm" style={{ marginTop: '16px' }}>No commitment required</p>
          </div>

          {/* Transparent Pricing Calculator */}
          <div className={isVisible ? 'klaviyo-float-up' : ''} style={{ animationDelay: '0.5s', marginTop: '32px' }}>
            <span className="klaviyo-section-label" style={{ marginBottom: '16px', display: 'inline-block' }}>Transparent Pricing</span>
            <h2 className="klaviyo-h2" style={{ marginBottom: '16px' }}>See Your Investment</h2>
            <p className="klaviyo-text" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              We take {commissionRate}% of net email revenue generated. Billed on the 1st of each month for the previous month.
            </p>

            <div className="klaviyo-calculator klaviyo-hover-glow" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="klaviyo-calculator-input-group">
                <label className="klaviyo-calculator-label">
                  Enter your expected monthly email revenue:
                </label>
                <input
                  type="text"
                  className="klaviyo-calculator-input"
                  value={`$${revenueInput.toLocaleString()}`}
                  placeholder="Type your amount..."
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '')
                    setRevenueInput(Number(value) || 0)
                  }}
                />
                <span className="klaviyo-calculator-hint">👆 Click to edit</span>
              </div>

              <div className="klaviyo-calculator-result">
                <div className="klaviyo-calculator-result-label">Your investment would be:</div>
                <div className="klaviyo-calculator-result-value klaviyo-mono">
                  ${calculateCommission(revenueInput).toLocaleString()}
                </div>
              </div>

              <p className="klaviyo-calculator-note">
                That&apos;s ${(revenueInput - calculateCommission(revenueInput)).toLocaleString()} in your pocket from email alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      {showPainPoints && (
        <section className="klaviyo-problem klaviyo-section">
          <div className="klaviyo-container" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <span className="klaviyo-section-label">The Problem</span>
            <h2 className="klaviyo-section-heading">{page?.painSectionTitle || 'Sound Familiar?'}</h2>

            <div className="klaviyo-problem-grid">
              {[
                { icon: '📉', title: 'Revenue Leaking', desc: 'Your email list grows but revenue stays flat. Thousands of subscribers, zero engagement.' },
                { icon: '🛒', title: 'Abandoned Carts', desc: 'Customers add items but never buy. Your abandoned cart rate is embarrassingly high.' },
                { icon: '⏰', title: 'No Time', desc: 'You know email works but you\'re too busy running your business to figure it out.' },
                { icon: '💸', title: 'Agency Burn', desc: 'Agencies charge $5K/month with no guarantees. You\'re paying for "potential" not results.' },
              ].map((pain, i) => (
                <div key={i} className="klaviyo-problem-card klaviyo-hover-lift">
                  <div className="klaviyo-icon-text">{pain.icon}</div>
                  <div className="klaviyo-card-title">{pain.title}</div>
                  <div className="klaviyo-card-desc">{pain.desc}</div>
                </div>
              ))}
            </div>

            <p className="klaviyo-text-xl" style={{ marginTop: '48px' }}>
              What if you could fix all of this with <span className="klaviyo-green">zero risk</span>?
            </p>
          </div>
        </section>
      )}

      {/* SOLUTION SECTION */}
      {showSolution && (
        <section className="klaviyo-solution klaviyo-section">
          <div className="klaviyo-container" style={{ maxWidth: '900px', textAlign: 'center' }}>
            <span className="klaviyo-section-label">The Solution</span>
            <h2 className="klaviyo-section-heading">
              {page?.solutionTitle || 'Done-For-You Klaviyo'}{' '}
              <span className="klaviyo-gradient-text">{page?.solutionTitleItalic || 'That Actually Works'}</span>
            </h2>
            <p className="klaviyo-text-lg" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
              100% commission-based email marketing. We handle everything while you focus on your business.
            </p>

            <div className="klaviyo-solution-steps">
              {[
                { num: '01', title: 'Audit', desc: 'We deep-dive into your Klaviyo account and find every revenue leak. Free, no strings attached.' },
                { num: '02', title: 'Build', desc: 'We set up 8+ automated flows, pop-ups, and campaign templates. Everything optimized for conversions.' },
                { num: '03', title: 'Scale', desc: 'We continuously optimize based on data. A/B testing, segmentation, and seasonal campaigns that print money.' },
              ].map((step, i) => (
                <div key={i} className="klaviyo-solution-step">
                  <div className="klaviyo-solution-step-num">{step.num}</div>
                  <div style={{ flex: 1, paddingTop: '8px', textAlign: 'left' }}>
                    <div className="klaviyo-h3">{step.title}</div>
                    <div className="klaviyo-text">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EMAIL EXAMPLES - Bidirectional Slider */}
      {showEmailExamples && (
        <section className="klaviyo-section" style={{ overflow: 'hidden' }}>
          <div className="klaviyo-container" style={{ maxWidth: '1400px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="klaviyo-section-label">Our Work</span>
              <h2 className="klaviyo-section-heading">
                Emails That <span className="klaviyo-gradient-text">Convert</span>
              </h2>
            </div>

            <div className="klaviyo-slider-wrapper">
              <div className="klaviyo-bidi-slider">
                {/* Column 1 - Up */}
                <div className="klaviyo-slider-column klaviyo-slider-column-up">
                  {[...col1Images, ...col1Images, ...col1Images].map((img, i) => (
                    <div key={`col1-${i}`} className="klaviyo-slider-image">
                      <img src={img} alt={`Email example ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
                {/* Column 2 - Down */}
                <div className="klaviyo-slider-column klaviyo-slider-column-down">
                  {[...col2Images, ...col2Images, ...col2Images].map((img, i) => (
                    <div key={`col2-${i}`} className="klaviyo-slider-image">
                      <img src={img} alt={`Email example ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
                {/* Column 3 - Up */}
                <div className="klaviyo-slider-column klaviyo-slider-column-up">
                  {[...col3Images, ...col3Images, ...col3Images].map((img, i) => (
                    <div key={`col3-${i}`} className="klaviyo-slider-image">
                      <img src={img} alt={`Email example ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
                {/* Column 4 - Down */}
                <div className="klaviyo-slider-column klaviyo-slider-column-down">
                  {[...col4Images, ...col4Images, ...col4Images].map((img, i) => (
                    <div key={`col4-${i}`} className="klaviyo-slider-image">
                      <img src={img} alt={`Email example ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHAT'S INCLUDED */}
      {showBenefits && (
        <section className="klaviyo-section klaviyo-section-alt">
          <div className="klaviyo-container" style={{ maxWidth: '700px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="klaviyo-section-label">What You Get</span>
              <h2 className="klaviyo-section-heading">Everything Included</h2>
            </div>

            <div>
              {(page?.priceIncludes || [
                'Full Klaviyo account setup & management',
                '8+ automated email flows (40+ emails)',
                '2-4 campaigns per week',
                'Pop-up design & optimization',
                'A/B testing & optimization',
                'Weekly performance reports',
              ]).map((item: string, i: number) => (
                <div key={i} className="klaviyo-benefit-item">
                  <div className="klaviyo-benefit-check">✓</div>
                  <div className="klaviyo-h4">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHO THIS IS FOR */}
      {showWhoFor && (
        <section className="klaviyo-section">
          <div className="klaviyo-container" style={{ maxWidth: '900px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="klaviyo-section-label">Is This For You?</span>
              <h2 className="klaviyo-section-heading">{page?.whoForTitle || 'Perfect Fit Check'}</h2>
            </div>

            <div className="klaviyo-who-grid">
              <div className="klaviyo-who-for-box yes klaviyo-hover-lift">
                <div className="klaviyo-who-title green">{page?.whoForYesTitle || '✓ This IS For You If...'}</div>
                <ul>
                  {(page?.whoForYesList || [
                    'You run an ecommerce store doing $50K-$500K/month',
                    'You have an email list but it\'s not generating revenue',
                    'You want predictable, automated revenue',
                    'You\'re willing to share revenue for results',
                    'You want a partner, not just a vendor',
                  ]).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="klaviyo-who-for-box no klaviyo-hover-lift">
                <div className="klaviyo-who-title red">{page?.whoForNoTitle || '✗ This Is NOT For You If...'}</div>
                <ul>
                  {(page?.whoForNoList || [
                    'You\'re doing less than $50K/month',
                    'You want to manage emails yourself',
                    'You\'re not willing to share data',
                    'You expect overnight results',
                    'You\'ve never used Klaviyo before',
                  ]).map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DETAILED PRICING */}
      {showPricing && (
        <section className="klaviyo-section">
          <div className="klaviyo-container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="klaviyo-section-label">Simple Pricing</span>
              <h2 className="klaviyo-section-heading">
                {page?.pricingTitle || '100% Commission'}{' '}
                <span className="klaviyo-gradient-text">{page?.pricingTitleItalic || 'Based'}</span>
              </h2>
            </div>

            <div className="klaviyo-pricing-card klaviyo-hover-glow">
              <div className="klaviyo-pricing-content">
                <span className="klaviyo-badge">{page?.offerBadge || 'RISK-FREE'}</span>
                <div className="klaviyo-price-big">{commissionRate}%</div>
                <div className="klaviyo-text-muted" style={{ marginBottom: '32px' }}>of net email revenue • Billed monthly</div>

                <div className="klaviyo-pricing-stats">
                  <div>
                    <div className="klaviyo-stat-number klaviyo-text-white">$0</div>
                    <div className="klaviyo-text-xs">Setup Fee</div>
                  </div>
                  <div>
                    <div className="klaviyo-stat-number klaviyo-text-white">$0</div>
                    <div className="klaviyo-text-xs">Monthly Retainer</div>
                  </div>
                  <div>
                    <div className="klaviyo-stat-number klaviyo-green">1st</div>
                    <div className="klaviyo-text-xs">Billed Monthly</div>
                  </div>
                </div>

                <p className="klaviyo-green klaviyo-h4" style={{ marginBottom: '32px' }}>
                  {page?.guarantee || 'You pay nothing until we generate revenue.'}
                </p>

                <a href="#book" className="klaviyo-btn-glow" style={{ width: '100%', justifyContent: 'center' }}>
                  {page?.pricingCtaText || 'Start Risk-Free'} →
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GUARANTEE */}
      {showGuarantee && (
        <section className="klaviyo-guarantee">
          <div className="klaviyo-container">
            <div className="klaviyo-guarantee-box klaviyo-hover-glow">
              <div className="klaviyo-guarantee-icon">🛡️</div>
              <h2 className="klaviyo-h2">Our Risk-Free Guarantee</h2>
              <p className="klaviyo-text" style={{ maxWidth: '500px', margin: '0 auto' }}>
                If we don&apos;t generate at least 20% more email revenue in your first 60 days,
                you pay us absolutely nothing. Zero. We&apos;re that confident.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {showFaq && (
        <section className="klaviyo-section">
          <div className="klaviyo-container-narrow">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="klaviyo-section-label">FAQ</span>
              <h2 className="klaviyo-section-heading">{page?.faqTitle || 'Questions?'}</h2>
            </div>

            <div className="klaviyo-faq-list">
              {faqs.map((faq) => (
                <div
                  key={faq._id}
                  className={`klaviyo-faq-item ${openFaq === faq._id ? 'active' : ''}`}
                >
                  <button
                    className="klaviyo-faq-question"
                    onClick={() => setOpenFaq(openFaq === faq._id ? null : faq._id)}
                    aria-expanded={openFaq === faq._id}
                  >
                    <span className="klaviyo-faq-question-text">{faq.question}</span>
                    <span className="klaviyo-faq-icon">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                      </svg>
                    </span>
                  </button>
                  <div className="klaviyo-faq-answer">
                    <div className="klaviyo-faq-answer-inner">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section id="book" className="klaviyo-final-cta" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="klaviyo-particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="klaviyo-particle" />
          ))}
        </div>
        <div className="klaviyo-glow-orb klaviyo-glow-orb-1" />
        <div className="klaviyo-container" style={{ maxWidth: '900px', position: 'relative', zIndex: 5 }}>
          <h2 className="klaviyo-h2">{page?.ctaTitle || 'Ready to Scale?'}</h2>
          <p className="klaviyo-text-xl" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            {page?.ctaSubtitle || 'Book a free 15-minute call to see if we\'re a fit.'}
          </p>

          {page?.ctaUrgencyText && (
            <div className="klaviyo-badge" style={{ marginBottom: '32px' }}>
              <span className="klaviyo-pulse-dot" style={{ marginRight: '8px' }} />
              {page.ctaUrgencyText}
            </div>
          )}

          <div className="klaviyo-calendar-wrapper">
            <CalBooker
              username={page?.calUsername || 'thewordpressteam'}
              eventSlug={page?.calEventSlug || '30min'}
            />
          </div>

          <div className="klaviyo-trust-items">
            <div className="klaviyo-trust-item"><span className="klaviyo-green">✓</span> No Commitment</div>
            <div className="klaviyo-trust-item"><span className="klaviyo-green">✓</span> 100% Free Audit</div>
            <div className="klaviyo-trust-item"><span className="klaviyo-green">✓</span> Zero Pressure</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="klaviyo-footer">
        <div className="klaviyo-container">
          <p className="klaviyo-text-muted" style={{ marginBottom: '16px' }}>
            © {new Date().getFullYear()} The WordPress Team. All rights reserved.
          </p>
          <p className="klaviyo-text-sm">
            Results vary based on your business, products, and commitment level.
          </p>
        </div>
      </footer>
    </div>
  )
}
