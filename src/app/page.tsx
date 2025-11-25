import Image from 'next/image'
import Link from 'next/link'
import { safeFetch } from '@/sanity/client'
import { pageDataQuery } from '@/sanity/queries'
import { PageData } from '@/types/sanity'
import LottieAnimation from '@/components/LottieAnimation'
import FaqSection from '@/components/FaqSection'
import ServicesSlider from '@/components/ServicesSlider'
import Logo from '@/components/Logo'

// Default data for fallback when Sanity is not available
const defaultData: PageData = {
  siteSettings: {
    siteName: 'SiteGuard99',
    contactEmail: 'hello@designjoy.co',
    loginUrl: 'https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ',
    stripePaymentUrl: 'https://buy.stripe.com/9B68wP42335o38v2v57bW09',
    calendarBookingUrl: 'https://calendly.com/designjoy/15min',
  },
  hero: {
    headlinePart1: 'Design subscriptions for',
    headlineItalic: 'everyone',
    subtitle: 'Pause or cancel anytime.',
    memberCardBadge: 'Start today',
    memberCardTitle1: 'Join',
    memberCardTitle2: 'SiteGuard99',
    memberCardSubtitle: 'One subscription to rule them all.',
    bookCallTitle: 'Book a 15-min intro call',
    bookCallSubtitle: 'Schedule now',
  },
  howItWorks: {
    titlePart1: 'The way design',
    titleItalic: "should've",
    titlePart2: 'been done in the first place',
    cards: [
      { title: 'Subscribe', description: "Subscribe to a plan & request as many designs as you'd like.", type: 'subscribe' },
      { title: 'Request', description: "Request whatever you'd like, from mobile apps to logos.", type: 'request' },
      { title: 'Receive', description: 'Receive your design within two business days on average.', type: 'receive' },
    ],
    servicePills: ['Mobile apps', 'Presentations', 'Logos', 'Social Media', 'Email', 'Webflow', 'Print design', 'Packaging', 'Ad creative', 'Landing pages', 'Branding', 'Display ads', 'User interface'],
  },
  about: {
    storyText: 'First launched in 2017, SiteGuard99 revolutionized the design industry with its subscription-based model. To this day, SiteGuard99 is run entirely by Brett. SiteGuard99 doesn\'t hire extra designers or outsource work—instead, it focuses on delivering top-notch quality to a limited roster of clients at a time.',
    founderName: 'Brett',
    founderLink: 'https://x.com/BrettFromDJ',
    yearFounded: '2017',
  },
  benefitsSection: {
    eyebrow: 'Membership benefits',
    titlePart1: "It's",
    titleItalic: '"you\'ll never go back"',
    titlePart2: 'better',
    subtitle: "SiteGuard99 replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won't want to go anywhere else.",
  },
  benefits: [
    { _id: '1', title: 'Design board', description: 'Easily manage your design queue with a Trello board.', colorScheme: 'purple', order: 1 },
    { _id: '2', title: 'Fixed monthly rate', description: 'No surprises here! Pay the same fixed price each month.', colorScheme: 'blue', order: 2 },
    { _id: '3', title: 'Fast delivery', description: 'Get your design one at a time in just a couple days on average.', colorScheme: 'orange', order: 3 },
    { _id: '4', title: 'Top-notch quality', description: 'Senior design quality at your fingertips, whenever you need it.', colorScheme: 'pink', order: 4 },
    { _id: '5', title: 'Flexible and scalable', description: 'Scale up or down as needed, and pause or cancel at anytime.', colorScheme: 'green', order: 5 },
    { _id: '6', title: 'Unique and all yours', description: 'Every design is made especially for you and is 100% yours.', colorScheme: 'yellow', order: 6 },
  ],
  clientLogos: [],
  testimonials: [
    { _id: '1', quote: 'SiteGuard99 shows that they know the art of subtlety.', authorName: 'Webflow', authorTitle: '' },
    { _id: '2', quote: 'Design is everything, and these guys have nailed it.', authorName: "Kevin O'Leary", authorTitle: 'Shark Tank' },
  ],
  recentWorkSection: {
    title: 'Recent work',
    subtitle: 'We\'re talking "Product of the Year" good.',
    ctaText: 'See recent work',
    ctaUrl: 'https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects',
    servicesTitle: 'Apps, websites, logos & more',
    servicesSubtitle: 'All the things you need under one roof.',
  },
  recentWorkItems: [],
  services: [
    { _id: '1', name: 'Web design' },
    { _id: '2', name: 'Logos' },
    { _id: '3', name: 'Slide decks' },
    { _id: '4', name: 'Branding' },
    { _id: '5', name: 'Social media' },
    { _id: '6', name: 'UI/UX design' },
    { _id: '7', name: 'Webflow development' },
    { _id: '8', name: 'Mobile apps' },
    { _id: '9', name: 'Print design' },
    { _id: '10', name: 'Email' },
    { _id: '11', name: 'Display ads' },
    { _id: '12', name: 'Icons' },
    { _id: '13', name: 'Brand guides' },
  ],
  pricing: {
    eyebrow: 'PRICING',
    title: 'One subscription,',
    titleItalic: 'endless possibilities',
    planName: 'Monthly Club',
    planBadge: 'PAUSE OR CANCEL ANYTIME',
    price: '$5,995',
    pricePeriod: '/month',
    features: ['One request at a time', 'Avg. 48 hour delivery', 'Unlimited brands', 'Webflow development', 'Unlimited stock photos', 'Up to 2 users', 'Pause or cancel anytime'],
    ctaText: 'Join today',
    pauseTitle: 'Pause anytime',
    pauseDescription: 'Temporarily pause your subscription anytime, no sweat.',
    trialTitle: 'Try it for a week',
    trialDescription: 'Not loving it after a week? Get 75% back, no questions asked.',
  },
  faqSection: {
    titleItalic: 'Frequently',
    titleRegular: 'asked questions',
    bookCallTitle: 'Book a 15-min intro call',
    emailPrompt: 'Prefer to email?',
  },
  faqItems: [
    { _id: '1', question: 'How fast will I receive my designs?', answer: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.' },
    { _id: '2', question: 'How does onboarding work?', answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe." },
    { _id: '3', question: 'Who are the designers?', answer: "SiteGuard99 is a one-man agency, ran by Brett, the founder. SiteGuard99 does not employ other designers, or outsource work to any other entity." },
    { _id: '4', question: 'Is there a limit to how many requests I can make?', answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one." },
    { _id: '5', question: 'How does the pause feature work?', answer: "We understand you may not have enough design work to fill up entire month. Billing cycles are based on 31 day period." },
    { _id: '6', question: 'How do you handle larger requests?', answer: "Larger requests are broken down on SiteGuard99's end. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done." },
    { _id: '7', question: 'What programs do you design in?', answer: 'Most requests are designed using Figma.' },
    { _id: '8', question: 'How does Webflow development work?', answer: "Webflow development is included with all subscriptions and is simply treated as a design request." },
    { _id: '9', question: 'How will I request designs?', answer: "SiteGuard99 offers a ton of flexibility in how you request designs using Trello." },
    { _id: '10', question: "What if I don't like the design?", answer: "No worries! We'll continue to revise the design until you're 100% satisfied." },
    { _id: '11', question: "Are there any requests you don't support?", answer: "Absolutely. SiteGuard99 does not cover: 3D modeling, animated graphics, document design, complex packaging, extensive print design, and Adobe InDesign documents." },
    { _id: '12', question: 'What if I only have a single request?', answer: "That's fine. You can pause your subscription when finished and return when you have additional design needs." },
    { _id: '13', question: 'Are there any refunds?', answer: "Due to the high quality nature of the work, there will be no refunds issued past the first week of service." },
    { _id: '14', question: 'Can I use SiteGuard99 for just a month?', answer: "For sure. Whether you need SiteGuard99 for a month or a year, the choice is yours." },
  ],
  footer: {
    ctaTitle: 'See if SiteGuard99 is the right fit for you',
    ctaTitleItalic: '(it totally is)',
    ctaSubtitle: 'Schedule a quick, 15 minute guided tour through SiteGuard99.',
    noticeText: 'SiteGuard99 is experiencing a high volume of bookings, so slots are limited. For faster service, email for a same-day response.',
    headquarters: 'Headquartered in Phoenix, Arizona',
    termsUrl: 'https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc',
    privacyUrl: 'https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02',
  },
  graphics: null,
}

// Default image paths (fallbacks when Sanity images are not available)
const defaultImages = {
  heroMemberCard: '/images/678548430d58f4cbecec196c_card.png',
  heroCallAvatar: '/images/678548430d58f4cbecec196f_Group 11.png',
  subscribePriceTag: '/images/678548430d58f4cbecec1977_price.svg',
  requestSmile: '/images/678548430d58f4cbecec197e_Smile.png',
  testimonialWebflowLogo: 'https://cdn.prod.website-files.com/678005a5d025f688a34957f1/678199f71b779683c0d14a8f_65dd4dae1c85fee7c339650a_Webflow_logo_2023%20(1)%201.svg',
  testimonialAuthorImage: '/images/678548430d58f4cbecec19bd_Group 1171274555.png',
  pricingCardImage: '/images/678548430d58f4cbecec19a8_Group 1171274554.png',
  pricingSmileIcon: '/images/678548430d58f4cbecec19a3_smile.svg',
  pricingPauseIcon: '/images/678548430d58f4cbecec19b6_Pause-Circle--Streamline-Micro.svg',
  pricingCheckIcon: '/images/678548430d58f4cbecec19b7_Validation-Check-Circle--Streamline-Micro.svg',
  pricingDecorative1: '/images/678548430d58f4cbecec19d5_Group 1171274461.svg',
  faqBookCallImage: '/images/678548430d58f4cbecec19b9_Group 10.png',
  faqEmailIcon: '/images/678548430d58f4cbecec19bb_Send-Email--Streamline-Ultimate.png',
  footerSmileyFaces: '/images/678548430d58f4cbecec19d8_Smiley faces.svg',
  arrowIcon: '/images/678548430d58f4cbecec196a_arrow.svg',
  phoneIcon: '/images/678548430d58f4cbecec19bf_Phone--Streamline-Ultimate (1).svg',
  chevronIcon: '/images/678548430d58f4cbecec19b8_chevron-down 1.svg',
  servicesDecorative1: '/images/678548430d58f4cbecec19d4_pink.svg',
  servicesDecorative2: '/images/678548430d58f4cbecec19d6_Group 1171274487.svg',
  clientLogos: [
    { name: 'Nectar', logoUrl: '/images/678548430d58f4cbecec1986_Nectar-sleep-logo-vector 1.svg' },
    { name: 'Buy Me a Coffee', logoUrl: '/images/678548430d58f4cbecec1987_bmc-full-logo 1.svg' },
    { name: 'Levels', logoUrl: '/images/678548430d58f4cbecec198a_svg.svg' },
    { name: 'Beehiiv', logoUrl: '/images/678548430d58f4cbecec1989_Vector.svg' },
    { name: 'Otta', logoUrl: '/images/678548430d58f4cbecec1988_6203180d8e14605fb2d2c003_Vector 1.svg' },
  ],
  recentWorkImages: [
    { name: 'Project 1', imageUrl: '/images/678548430d58f4cbecec19ea_Group 1171274558.png' },
    { name: 'Project 2', imageUrl: '/images/678548430d58f4cbecec19ee_Group 1171274560.png' },
    { name: 'Project 3', imageUrl: '/images/678548430d58f4cbecec19de_Group 1171274563.png' },
    { name: 'Project 4', imageUrl: '/images/678548430d58f4cbecec19e6_Group 1171274559.png' },
    { name: 'Project 5', imageUrl: '/images/678548430d58f4cbecec19e2_Group 1171274561.png' },
    { name: 'Project 6', imageUrl: '/images/678548430d58f4cbecec19da_Group 1171274562.png' },
  ],
  awardBadges: [
    { companyName: 'Buy Me A Coffee', companyLogoUrl: '/images/6785582d859f4a059de5f543_Group 1171274565.svg', awardTitle: 'Fintech Product of the Year', awardSourceLogoUrl: '/images/678557d2de5ecf01f3e67f14_producthunt-official (1) 1.svg' },
    { companyName: 'Switchboard', companyLogoUrl: '/images/6785584fcfd39e0459ff4001_Switchboard_Logo_Symbol 4.svg', awardTitle: 'Remote Work Product of the Year', awardSourceLogoUrl: '/images/678557d2de5ecf01f3e67f14_producthunt-official (1) 1.svg' },
  ],
  benefitIcons: [
    { benefitName: 'Design board', iconUrl: '/images/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png' },
    { benefitName: 'Fixed monthly rate', iconUrl: '/images/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png' },
    { benefitName: 'Fast delivery', iconUrl: '/images/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png' },
    { benefitName: 'Top-notch quality', iconUrl: '/images/678548430d58f4cbecec199d_Star--Streamline-Nova.png' },
    { benefitName: 'Flexible and scalable', iconUrl: '/images/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png' },
    { benefitName: 'Unique and all yours', iconUrl: '/images/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png' },
  ],
}

export default async function Home() {
  // Fetch data from Sanity
  const sanityData = await safeFetch<PageData>(pageDataQuery)

  // Merge Sanity data with defaults (fallback for missing data)
  const data: PageData = {
    siteSettings: sanityData?.siteSettings || defaultData.siteSettings,
    hero: sanityData?.hero || defaultData.hero,
    howItWorks: sanityData?.howItWorks || defaultData.howItWorks,
    about: sanityData?.about || defaultData.about,
    benefitsSection: sanityData?.benefitsSection || defaultData.benefitsSection,
    benefits: sanityData?.benefits?.length ? sanityData.benefits : defaultData.benefits,
    clientLogos: sanityData?.clientLogos || defaultData.clientLogos,
    testimonials: sanityData?.testimonials?.length ? sanityData.testimonials : defaultData.testimonials,
    recentWorkSection: sanityData?.recentWorkSection || defaultData.recentWorkSection,
    recentWorkItems: sanityData?.recentWorkItems || defaultData.recentWorkItems,
    services: sanityData?.services?.length ? sanityData.services : defaultData.services,
    pricing: sanityData?.pricing || defaultData.pricing,
    faqSection: sanityData?.faqSection || defaultData.faqSection,
    faqItems: sanityData?.faqItems?.length ? sanityData.faqItems : defaultData.faqItems,
    footer: sanityData?.footer || defaultData.footer,
    graphics: sanityData?.graphics || null,
  }

  const { siteSettings, hero, howItWorks, about, benefitsSection, benefits, testimonials, recentWorkSection, services, pricing, faqSection, faqItems, footer, graphics } = data

  // Create images object with Sanity URLs or fallbacks
  const images = {
    heroMemberCard: graphics?.heroMemberCard || defaultImages.heroMemberCard,
    heroCallAvatar: graphics?.heroCallAvatar || defaultImages.heroCallAvatar,
    subscribePriceTag: graphics?.subscribePriceTag || defaultImages.subscribePriceTag,
    requestSmile: graphics?.requestSmile || defaultImages.requestSmile,
    testimonialWebflowLogo: graphics?.testimonialWebflowLogo || defaultImages.testimonialWebflowLogo,
    testimonialAuthorImage: graphics?.testimonialAuthorImage || defaultImages.testimonialAuthorImage,
    pricingCardImage: graphics?.pricingCardImage || defaultImages.pricingCardImage,
    pricingSmileIcon: graphics?.pricingSmileIcon || defaultImages.pricingSmileIcon,
    pricingPauseIcon: graphics?.pricingPauseIcon || defaultImages.pricingPauseIcon,
    pricingCheckIcon: graphics?.pricingCheckIcon || defaultImages.pricingCheckIcon,
    pricingDecorative1: graphics?.pricingDecorative1 || defaultImages.pricingDecorative1,
    faqBookCallImage: graphics?.faqBookCallImage || defaultImages.faqBookCallImage,
    faqEmailIcon: graphics?.faqEmailIcon || defaultImages.faqEmailIcon,
    footerSmileyFaces: graphics?.footerSmileyFaces || defaultImages.footerSmileyFaces,
    arrowIcon: graphics?.arrowIcon || defaultImages.arrowIcon,
    phoneIcon: graphics?.phoneIcon || defaultImages.phoneIcon,
    chevronIcon: graphics?.chevronIcon || defaultImages.chevronIcon,
    servicesDecorative1: graphics?.servicesDecorative1 || defaultImages.servicesDecorative1,
    servicesDecorative2: graphics?.servicesDecorative2 || defaultImages.servicesDecorative2,
    clientLogos: graphics?.clientLogos?.length ? graphics.clientLogos : defaultImages.clientLogos,
    recentWorkImages: graphics?.recentWorkImages?.length ? graphics.recentWorkImages : defaultImages.recentWorkImages,
    awardBadges: graphics?.awardBadges?.length ? graphics.awardBadges : defaultImages.awardBadges,
    benefitIcons: graphics?.benefitIcons?.length ? graphics.benefitIcons : defaultImages.benefitIcons,
  }

  // Build pills for marquee rows
  const pills1 = howItWorks?.servicePills?.slice(0, 5) || ['Mobile apps', 'Presentations', 'Logos', 'Social Media', 'Email']
  const pills2 = howItWorks?.servicePills?.slice(5, 10) || ['Webflow', 'Print design', 'Packaging', 'Ad creative', 'Landing pages']
  const pills3 = howItWorks?.servicePills?.slice(10) || ['Branding', 'Email', 'Display ads', 'Packaging', 'User interface']

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="container hero-container">
          <div className="inner-container">
            <div className="hero__flex">
              <div className="hero__left">
                <div className="hero__left-top">
                  <Link href="#" className="hero__logo-block w-inline-block">
                    <Logo
                      logoUrl={siteSettings?.headerLogoUrl}
                      siteName={siteSettings?.siteName || 'SiteGuard99'}
                      variant="header"
                    />
                  </Link>
                  <div className="hero__buttons-flex">
                    <a
                      href={siteSettings?.loginUrl || '#'}
                      target="_blank"
                      className="button-outline w-inline-block"
                    >
                      <div>Login</div>
                    </a>
                    <Link href="#book" className="button-outline w-inline-block">
                      <Image
                        src={images.phoneIcon}
                        alt=""
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
                    {hero?.headlinePart1} <span className="text-italics">{hero?.headlineItalic}</span>
                  </h1>
                  <p className="hero__left-bottom-p">
                    <span className="text-span _3">{hero?.subtitle}</span>
                  </p>
                </div>
              </div>
              <div className="div-block-37">
                <div className="hero__member-card">
                  <div className="hero__member-card-badge">
                    <LottieAnimation
                      src="/images/67840672d2c7cd35037e445d_Main Scene.json"
                      loop={true}
                      autoplay={true}
                      className="lottie-animation-5"
                    />
                    <div>{hero?.memberCardBadge}</div>
                  </div>
                  <div className="hero__member-card-splash">
                    <div className="hero__member-card-header">{hero?.memberCardTitle1}</div>
                    <div className="hero__member-card-header">{hero?.memberCardTitle2}</div>
                    <div className="hero__member-card-p">{hero?.memberCardSubtitle}</div>
                    <Link href="#pricing" className="button w-button">
                      See pricing
                    </Link>
                  </div>
                  <Link href="#book" className="hero__member-card-call w-inline-block">
                    <div className="hero__member-card-call-left">
                      <Image
                        src={images.heroCallAvatar}
                        alt=""
                        width={48}
                        height={48}
                        className="image-2"
                      />
                      <div>
                        <div>{hero?.bookCallTitle}</div>
                        <div className="hero__member-card-call-schedule">{hero?.bookCallSubtitle}</div>
                      </div>
                    </div>
                    <Image
                      src={images.arrowIcon}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Image
                    src={images.heroMemberCard}
                    alt=""
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

      {/* How It Works Section */}
      <div className="hiw">
        <div className="container mmmm">
          <div className="inner-container">
            <div className="hiw__header-wrapper">
              <h2>
                {howItWorks?.titlePart1} <span className="text-italics">{howItWorks?.titleItalic}</span> {howItWorks?.titlePart2}
              </h2>
            </div>
            <div className="w-layout-grid hiw__grid">
              {/* Subscribe Card */}
              <div className="hiw__card">
                <div className="hiw__card-gradient">
                  <div className="hiw__card-header">{howItWorks?.cards?.[0]?.title || 'Subscribe'}</div>
                  <p className="hiw__card-p text-black _2">
                    {howItWorks?.cards?.[0]?.description || "Subscribe to a plan & request as many designs as you'd like."}
                  </p>
                </div>
                <Image
                  src={images.subscribePriceTag}
                  alt=""
                  width={200}
                  height={200}
                  className="image-3"
                />
              </div>

              {/* Request Card */}
              <div className="hiw__card _2">
                <div className="hiw__card-gradient _2">
                  <div className="hiw__card-header">{howItWorks?.cards?.[1]?.title || 'Request'}</div>
                  <p className="hiw__card-p">
                    {howItWorks?.cards?.[1]?.description || "Request whatever you'd like, from mobile apps to logos."}
                  </p>
                </div>
                <div className="receive__image-wrapper">
                  <div className="marquees">
                    <div className="marquee-1 _2">
                      <div className="marquee-1-inner">
                        <div className="marquee-1-element">
                          {pills1.map((pill, i) => (
                            <div key={i} className="service-pill">
                              <div>{pill}</div>
                            </div>
                          ))}
                        </div>
                        <div className="marquee-1-element">
                          {pills1.map((pill, i) => (
                            <div key={`dup-${i}`} className="service-pill">
                              <div>{pill}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="marquee-1 _2 _4455">
                      <div className="marquee-1-inner _6886">
                        <div className="marquee-1-element">
                          {pills2.map((pill, i) => (
                            <div key={i} className="service-pill">
                              <div>{pill}</div>
                            </div>
                          ))}
                        </div>
                        <div className="marquee-1-element">
                          {pills2.map((pill, i) => (
                            <div key={`dup-${i}`} className="service-pill">
                              <div>{pill}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="marquee-1 _2">
                      <div className="marquee-1-inner">
                        <div className="marquee-1-element">
                          {pills3.map((pill, i) => (
                            <div key={i} className="service-pill">
                              <div>{pill}</div>
                            </div>
                          ))}
                        </div>
                        <div className="marquee-1-element">
                          {pills3.map((pill, i) => (
                            <div key={`dup-${i}`} className="service-pill">
                              <div>{pill}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="request__block">
                      <Image
                        src={images.requestSmile}
                        alt=""
                        width={80}
                        height={80}
                        className="image-7"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Receive Card */}
              <div className="hiw__card _3">
                <div className="hiw__card-gradient _3">
                  <div className="hiw__card-header">{howItWorks?.cards?.[2]?.title || 'Receive'}</div>
                  <p className="hiw__card-p">
                    {howItWorks?.cards?.[2]?.description || 'Receive your design within two business days on average.'}
                  </p>
                </div>
                <div className="div-block-2">
                  <div className="stack">
                    <div className="front-design"></div>
                    <div className="middle-design"></div>
                    <div className="bottom-design"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div className="logos__row">
              {images.clientLogos.map((client, i) => (
                <Image key={i} src={client.logoUrl} alt={client.name} width={120} height={40} />
              ))}
            </div>
          </div>
          <div className="grid-line-right"></div>
          <div className="grid-line-left"></div>
        </div>
      </div>

      {/* Services / About Section */}
      <div className="services">
        <div className="container p-b-0">
          <div className="inner-container">
            <div className="div-block-32">
              <p className="story-text _4">
                First launched in {about?.yearFounded || '2017'}, {siteSettings?.siteName || 'SiteGuard99'}{' '}
                <span className="text-italics">revolutionized</span> the design industry with its
                subscription-based model. To this day, {siteSettings?.siteName || 'SiteGuard99'} is run entirely by{' '}
                <a href={about?.founderLink || 'https://x.com/BrettFromDJ'} target="_blank" className="link">
                  {about?.founderName || 'Brett'}
                </a>
                . {siteSettings?.siteName || 'SiteGuard99'} doesn&apos;t hire extra designers or outsource work—instead, it
                focuses on delivering top-notch quality to a limited roster of clients at a time.
              </p>
            </div>
            <div className="hiw__header-wrapper">
              <div className="eyebrow">{benefitsSection?.eyebrow || 'Membership benefits'}</div>
              <h1 className="max">
                {benefitsSection?.titlePart1 || "It's"} <span className="text-italics">{benefitsSection?.titleItalic || '"you\'ll never go back"'}</span>{' '}
                <span>{benefitsSection?.titlePart2 || 'better'}</span>
              </h1>
              <p className="benefits__p">
                {benefitsSection?.subtitle || "SiteGuard99 replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won't want to go anywhere else."}
              </p>
            </div>
          </div>
          <div className="grid-line-right"></div>
          <div className="grid-line-left"></div>
        </div>
      </div>

      {/* Services Slider */}
      <ServicesSlider benefits={benefits} />

      {/* Testimonials */}
      <div className="pricing">
        <div className="container">
          <div className="inner-container slider">
            <div className="w-layout-grid grid-3">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div key={testimonial._id} className="div-block-17">
                  <div className="div-block-14">
                    <div className="text-block-2">
                      &quot;{testimonial.quote}&quot;
                      <br />
                    </div>
                    {index === 0 ? (
                      <Image
                        src={images.testimonialWebflowLogo}
                        alt=""
                        width={100}
                        height={32}
                        className="image-12"
                        unoptimized
                      />
                    ) : (
                      <div className="div-block-15">
                        <Image
                          src={images.testimonialAuthorImage}
                          alt=""
                          width={48}
                          height={48}
                          className="image-13"
                        />
                        <div className="div-block-16">
                          <div className="text-block-3">{testimonial.authorName}</div>
                          <div>{testimonial.authorTitle}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid-line-right"></div>
          <div className="grid-line-left"></div>
        </div>
      </div>

      {/* Recent Work Section */}
      <div className="pricing p-b-120">
        <div className="container m-t-0">
          <div className="inner-container">
            <div className="div-block-27">
              <div className="div-block-28">
                <div className="marquee">
                  <div className="marquee-inner">
                    <div className="marquee-element">
                      {images.recentWorkImages.map((work, i) => (
                        <Image key={i} src={work.imageUrl} alt={work.name} width={726} height={400} className="image-26" />
                      ))}
                    </div>
                    <div className="marquee-element">
                      {images.recentWorkImages.map((work, i) => (
                        <Image key={`dup-${i}`} src={work.imageUrl} alt={work.name} width={726} height={400} className={i === 0 ? 'image-26 _3' : 'image-26'} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="_44959">
                  <div>
                    <div className="div-block-33">
                      {images.awardBadges.map((badge, i) => (
                        <div key={i} className="div-block-34">
                          <div className="div-block-36">
                            <div className="div-block-35">
                              <Image src={badge.companyLogoUrl} alt="" width={24} height={24} />
                            </div>
                            <div>{badge.companyName}</div>
                          </div>
                          <div className="text-block-4">{badge.awardTitle}</div>
                          <Image src={badge.awardSourceLogoUrl} alt="" width={100} height={20} className="image-31" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hiw__card-header left _4">{recentWorkSection?.title || 'Recent work'}</div>
                  <p className="hero__left-bottom-p m-t-12 left">
                    {recentWorkSection?.subtitle || 'We\'re talking "Product of the Year" good.'}
                  </p>
                  <a
                    href={recentWorkSection?.ctaUrl || 'https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects'}
                    target="_blank"
                    className="button-filled m-t-24 m-t-12 w-inline-block"
                  >
                    <div>{recentWorkSection?.ctaText || 'See recent work'}</div>
                  </a>
                </div>
              </div>
              <div className="async _4">
                <div>
                  <div className="div-block-29">
                    {services.map((service) => (
                      <div key={service._id} className={`new-service-pill ${service.name === '+ more' ? 'more' : ''}`}>
                        <div>{service.name}</div>
                      </div>
                    ))}
                    <div className="new-service-pill more">
                      <div>+ more</div>
                    </div>
                  </div>
                  <div className="div-block-31 _444">
                    <div className="hiw__card-header">{recentWorkSection?.servicesTitle || 'Apps, websites, logos & more'}</div>
                    <p className="hero__left-bottom-p m-t-12">
                      {recentWorkSection?.servicesSubtitle || 'All the things you need under one roof.'}
                    </p>
                  </div>
                </div>
                <Image src={images.servicesDecorative1} alt="" width={200} height={200} className="image-27" />
                <Image src={images.servicesDecorative2} alt="" width={200} height={200} className="image-30" />
              </div>
            </div>
          </div>
          <div className="grid-line-right"></div>
          <div className="grid-line-left"></div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing">
        <div className="container p-b-0 p-t-0">
          <div className="hiw__header-wrapper">
            <div className="eyebrow">{pricing?.eyebrow || 'PRICING'}</div>
            <h1 className="dddd">
              {pricing?.title || 'One subscription,'} <span className="text-italics">{pricing?.titleItalic || 'endless possibilities'}</span>
            </h1>
          </div>
          <div className="pricing__flex">
            <div className="div-block-3">
              <div>
                <div className="hero__member-card-badge m-b-24">
                  <LottieAnimation
                    src="/images/67840672d2c7cd35037e445d_Main Scene.json"
                    loop={true}
                    autoplay={true}
                    className="lottie-animation-5"
                  />
                  <div>{hero?.memberCardBadge || 'Start today'}</div>
                </div>
                <div className="hero__member-card-header">{hero?.memberCardTitle1 || 'Join'}</div>
                <div className="hero__member-card-header bottom">{hero?.memberCardTitle2 || 'SiteGuard99'}</div>
              </div>
              <Image
                className="image-10"
                src={images.pricingCardImage}
                alt=""
                width={1631}
                height={900}
              />
            </div>
            <div className="pricing__card">
              <div className="div-block-4">
                <div className="pricing__card-header">{pricing?.planName || 'Monthly Club'}</div>
                <div className="div-block-5">
                  <div>{pricing?.planBadge || 'PAUSE OR CANCEL ANYTIME'}</div>
                </div>
              </div>
              <div className="div-block-6">
                <h2 className="m-t-0 m-b-0 _3">{pricing?.price || '$5,995'}</h2>
                <div className="pricing__month">{pricing?.pricePeriod || '/month'}</div>
              </div>
              <div className="div-block-7">
                <div className="w-layout-grid grid">
                  <div className="pricing__list">
                    {pricing?.features?.slice(0, 4).map((feature, i) => (
                      <div key={i}>{feature}</div>
                    ))}
                  </div>
                  <div className="pricing__list">
                    {pricing?.features?.slice(4).map((feature, i) => (
                      <div key={i}>{feature}</div>
                    ))}
                  </div>
                </div>
                <div className="included">
                  <div>Included</div>
                </div>
              </div>
              <div className="div-block-9">
                <a
                  href={siteSettings?.stripePaymentUrl || 'https://buy.stripe.com/9B68wP42335o38v2v57bW09'}
                  target="_blank"
                  className="div-block-7-copy-copy w-inline-block"
                >
                  <div className="div-block-8">
                    <Image src={images.pricingSmileIcon} alt="" width={24} height={24} />
                  </div>
                  <div>{pricing?.ctaText || 'Join today'}</div>
                </a>
              </div>
              <Image src={images.pricingDecorative1} alt="" width={200} height={200} className="image-29" />
            </div>
          </div>
          <div className="w-layout-grid grid-2">
            <div className="div-block-10 _1">
              <div className="div-block-11">
                <div className="div-block-12">
                  <Image src={images.pricingPauseIcon} alt="" width={24} height={24} />
                  <div className="hiw__card-header m-b-0">{pricing?.pauseTitle || 'Pause anytime'}</div>
                </div>
                <p className="hiw__card-p text-black">
                  {pricing?.pauseDescription || 'Temporarily pause your subscription anytime, no sweat.'}
                </p>
              </div>
            </div>
            <div className="div-block-10">
              <div className="div-block-11 _2">
                <div className="div-block-12">
                  <Image src={images.pricingCheckIcon} alt="" width={24} height={24} className="invert" />
                  <div className="hiw__card-header m-b-0">{pricing?.trialTitle || 'Try it for a week'}</div>
                </div>
                <p className="hiw__card-p text-black">
                  {pricing?.trialDescription || 'Not loving it after a week? Get 75% back, no questions asked.'}
                </p>
              </div>
            </div>
          </div>
          <div className="logos__row">
            {images.clientLogos.map((client, i) => (
              <Image key={i} src={client.logoUrl} alt={client.name} width={120} height={40} />
            ))}
          </div>
          <div className="grid-line-right"></div>
          <div className="grid-line-left"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection
        titleItalic={faqSection?.titleItalic || 'Frequently'}
        titleRegular={faqSection?.titleRegular || 'asked questions'}
        bookCallTitle={faqSection?.bookCallTitle || 'Book a 15-min intro call'}
        emailPrompt={faqSection?.emailPrompt || 'Prefer to email?'}
        contactEmail={siteSettings?.contactEmail || 'hello@designjoy.co'}
        faqItems={faqItems}
      />

      {/* Footer Section */}
      <div id="book" className="footer">
        <div className="container hero-container foooooo">
          <div className="inner-container">
            <div className="footer__flex">
              <div className="div-block-25 desktop">
                <div className="hero__left white">
                  <div className="hero__left-top">
                    <Link href="#" className="hero__logo-block invert w-inline-block">
                      <Logo
                        logoUrl={siteSettings?.footerLogoUrl}
                        siteName={siteSettings?.siteName || 'SiteGuard99'}
                        variant="footer"
                      />
                    </Link>
                  </div>
                  <div className="footer__bottom-top">
                    <h1 className="top footer__header">
                      {footer?.ctaTitle || 'See if SiteGuard99 is the right fit for you'}{' '}
                      <span className="text-italics">{footer?.ctaTitleItalic || '(it totally is)'}</span>
                    </h1>
                    <p className="hero__left-bottom-p m-b-d foooo">
                      {footer?.ctaSubtitle || 'Schedule a quick, 15 minute guided tour through SiteGuard99.'}
                    </p>
                  </div>
                </div>
                <div className="smiles-desktop">
                  <Image
                    src={images.footerSmileyFaces}
                    alt=""
                    width={800}
                    height={400}
                    className="footer-smiles"
                  />
                  <div className="div-block-26">
                    <div className="head">{footer?.headquarters || 'Headquartered in Phoenix, Arizona'}</div>
                    <a href={footer?.termsUrl || '#'} target="_blank" className="text-link _3">
                      Terms of service
                    </a>
                    <a href={footer?.privacyUrl || '#'} target="_blank" className="text-link _3">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
              <div className="book-a-call-wrapper">
                <div className="div-block-38">
                  <div className="text-block-6">
                    {footer?.noticeText?.replace('{email}', '') || 'SiteGuard99 is experiencing a high volume of bookings, so slots are limited. For faster service, email'}{' '}
                    <a href={`mailto:${siteSettings?.contactEmail || 'hello@designjoy.co'}`} className="text-link pink">
                      {siteSettings?.contactEmail || 'hello@designjoy.co'}
                    </a>{' '}
                    for a same-day response.
                  </div>
                </div>
                <div className="book-desktop">
                  {/* Calendly embed placeholder */}
                  <div
                    style={{
                      width: '100%',
                      height: '600px',
                      background: '#1a1a1a',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ marginBottom: '20px' }}>Book a Call</p>
                      <a
                        href={siteSettings?.calendarBookingUrl || 'https://calendly.com/designjoy/15min'}
                        target="_blank"
                        className="button w-button"
                        style={{
                          background: '#fff',
                          color: '#000',
                          padding: '12px 24px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                        }}
                      >
                        Schedule a 15-min call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smiles-mobile">
                <Image
                  src={images.footerSmileyFaces}
                  alt=""
                  width={200}
                  height={50}
                />
                <div className="div-block-26">
                  <div className="head">{footer?.headquarters || 'Headquartered in Phoenix, Arizona'}</div>
                  <a href={footer?.termsUrl || '#'} target="_blank" className="text-link _3">
                    Terms of service
                  </a>
                  <a href={footer?.privacyUrl || '#'} target="_blank" className="text-link _3">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-line-right dark"></div>
          <div className="grid-line-left dark"></div>
        </div>
      </div>
    </div>
  )
}
