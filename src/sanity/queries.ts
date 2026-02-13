import { groq } from 'next-sanity'

// Klaviyo Landing Page Query
export const klaviyoPageDataQuery = groq`{
  "page": *[_type == "klaviyoLandingPage"][0] {
    seo {
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      "ogImageUrl": ogImage.asset->url,
      ogType,
      twitterCard,
      twitterTitle,
      twitterDescription,
      "twitterImageUrl": twitterImage.asset->url,
      robotsNoIndex,
      robotsNoFollow
    },
    // Section Visibility
    showPricingHook,
    showPainPoints,
    showSolution,
    showEmailExamples,
    showBenefits,
    showTestimonials,
    showWhoFor,
    showCalculator,
    showPricing,
    showGuarantee,
    showFaq,
    // Hero
    showTopBar,
    topBarText,
    heroEyebrow,
    heroHeadline,
    heroHeadlineItalic,
    heroSubheadline,
    heroCtaText,
    heroStats,
    heroCyclingWords,
    // Pain Points
    painSectionTitle,
    painSectionSubtitle,
    // Solution
    solutionEyebrow,
    solutionTitle,
    solutionTitleItalic,
    solutionDescription,
    "solutionImageUrl": solutionImage.asset->url,
    // Benefits
    benefitsSectionEyebrow,
    benefitsSectionTitle,
    // Features
    featuresSectionEyebrow,
    featuresSectionTitle,
    featuresSectionTitleItalic,
    // Email Examples
    emailExamplesEyebrow,
    emailExamplesTitle,
    emailExamplesTitleItalic,
    // Pricing
    pricingEyebrow,
    pricingTitle,
    pricingTitleItalic,
    offerName,
    offerBadge,
    price,
    pricePeriod,
    priceIncludes,
    guarantee,
    pricingCtaText,
    urgencyText,
    // Calculator
    calculatorTitle,
    calculatorSubtitle,
    commissionRate,
    // Who This Is For
    whoForTitle,
    whoForYesTitle,
    whoForYesList,
    whoForNoTitle,
    whoForNoList,
    // FAQ
    faqTitle,
    faqTitleItalic,
    // CTA
    ctaTitle,
    ctaSubtitle,
    ctaButtonText,
    ctaUrgencyText,
    calUsername,
    calEventSlug
  },
  "painPoints": *[_type == "klaviyoPainPoint"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  },
  "benefits": *[_type == "klaviyoBenefit"] | order(order asc) {
    _id,
    title,
    description,
    stat,
    icon,
    colorScheme,
    order
  },
  "features": *[_type == "klaviyoFeature"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    includes,
    "imageUrl": image.asset->url,
    order
  },
  "faqItems": *[_type == "klaviyoFaqItem"] | order(order asc) {
    _id,
    question,
    answer,
    order
  },
  "testimonials": *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    authorName,
    authorTitle,
    "authorImageUrl": authorImage.asset->url,
    "companyLogoUrl": companyLogo.asset->url
  },
  "emailExamples": *[_type == "klaviyoEmailExample"] | order(order asc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    category,
    brandName,
    stats,
    order
  },
  "siteSettings": *[_type == "siteSettings"][0] {
    siteName,
    contactEmail,
    "headerLogoUrl": headerLogo.asset->url,
    headerLogoColor
  }
}`

// Fetch site settings with SEO, tracking, and favicons
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  siteName,
  siteUrl,
  contactEmail,
  "headerLogoUrl": headerLogo.asset->url,
  "footerLogoUrl": footerLogo.asset->url,

  // SEO
  seo {
    metaTitle,
    metaDescription,
    metaKeywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    "ogImageUrl": ogImage.asset->url,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    "twitterImageUrl": twitterImage.asset->url,
    twitterSite,
    twitterCreator,
    robotsNoIndex,
    robotsNoFollow
  },

  // Favicons
  "faviconUrl": favicon.asset->url,
  "faviconSvgUrl": faviconSvg.asset->url,
  "favicon16Url": favicon16.asset->url,
  "favicon32Url": favicon32.asset->url,
  "appleTouchIconUrl": appleTouchIcon.asset->url,
  "androidChrome192Url": androidChrome192.asset->url,
  "androidChrome512Url": androidChrome512.asset->url,
  "maskIconUrl": maskIcon.asset->url,
  maskIconColor,
  msapplicationTileColor,
  themeColor,

  // Tracking
  googleAnalyticsId,
  googleTagManagerId,
  facebookPixelId,
  hotjarId,
  clarityId,
  customHeadScripts,
  customBodyStartScripts,
  customBodyEndScripts,

  // Social & Integrations
  socialLinks,
  showLoginButton,
  loginUrl,
  pricingCtaUrl,
  stripePaymentUrl,
  calendarBookingUrl
}`

// Fetch all page data in one query
export const pageDataQuery = groq`{
  "siteSettings": *[_type == "siteSettings"][0] {
    siteName,
    siteUrl,
    "headerLogoUrl": headerLogo.asset->url,
    "footerLogoUrl": footerLogo.asset->url,
    headerLogoColor,
    footerLogoColor,
    seo {
      metaTitle,
      metaDescription,
      "ogImageUrl": ogImage.asset->url
    },
    socialLinks,
    contactEmail,
    showLoginButton,
    loginUrl,
    pricingCtaUrl,
    stripePaymentUrl,
    calendarBookingUrl
  },
  "hero": *[_type == "heroSection"][0] {
    headlinePart1,
    headlineItalic,
    subtitle,
    memberCardBadge,
    memberCardTitle1,
    memberCardTitle2,
    memberCardSubtitle,
    memberCardImage,
    bookCallTitle,
    bookCallSubtitle,
    "founderImageUrl": founderImage.asset->url
  },
  "howItWorks": *[_type == "howItWorksSection"][0] {
    titlePart1,
    titleItalic,
    titlePart2,
    cards[] {
      title,
      description,
      "iconUrl": icon.asset->url
    },
    servicePills
  },
  "about": *[_type == "aboutSection"][0] {
    storyText,
    founderName,
    founderLink,
    yearFounded
  },
  "benefitsSection": *[_type == "benefitsSection"][0] {
    eyebrow,
    titlePart1,
    titleItalic,
    titlePart2,
    subtitle
  },
  "benefits": *[_type == "benefit"] | order(order asc) {
    _id,
    title,
    description,
    emoji,
    "iconUrl": icon.asset->url,
    background,
    colorScheme,
    order
  },
  "clientLogos": *[_type == "clientLogo"] | order(order asc) {
    _id,
    name,
    "logoUrl": logo.asset->url,
    useRedColor
  },
  "testimonials": *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    authorName,
    authorTitle,
    "authorImageUrl": authorImage.asset->url,
    "companyLogoUrl": companyLogo.asset->url
  },
  "recentWorkSection": *[_type == "recentWorkSection"][0] {
    title,
    subtitle,
    ctaText,
    ctaUrl,
    servicesTitle,
    servicesSubtitle
  },
  "recentWorkItems": *[_type == "recentWorkItem"] | order(order asc) {
    _id,
    projectName,
    image,
    award,
    awardSource,
    awardLogo
  },
  "services": *[_type == "serviceCategory"] | order(order asc) {
    _id,
    name
  },
  "pricing": *[_type == "pricingSection"][0] {
    eyebrow,
    title,
    titleItalic,
    planName,
    planBadge,
    price,
    pricePeriod,
    features,
    ctaText,
    pauseTitle,
    pauseDescription,
    trialTitle,
    trialDescription,
    memberCardImage,
    clientsEyebrow,
    clientsTitle,
    clientsTitleItalic,
    clientsTitleBreak,
    clientsSubtitle,
    "clientLogos": clientLogos[]-> {
      _id,
      name,
      "logoUrl": logo.asset->url,
      useRedColor
    }
  },
  "faqSection": *[_type == "faqSection"][0] {
    titleItalic,
    titleRegular,
    bookCallImage,
    bookCallTitle,
    emailPrompt
  },
  "faqItems": *[_type == "faqItem"] | order(order asc) {
    _id,
    question,
    answer
  },
  "footer": *[_type == "footerSection"][0] {
    ctaTitle,
    ctaTitleItalic,
    ctaSubtitle,
    noticeText,
    headquarters,
    termsUrl,
    privacyUrl
  },
  "graphics": *[_type == "siteGraphics"][0] {
    // Hero
    "heroMemberCard": heroMemberCard.asset->url,
    "heroCallAvatar": heroCallAvatar.asset->url,

    // How It Works
    "subscribePriceTag": subscribePriceTag.asset->url,
    "requestSmile": requestSmile.asset->url,

    // Client Logos
    "clientLogos": clientLogos[] {
      name,
      "logoUrl": logo.asset->url
    },

    // Testimonials
    "testimonialWebflowLogo": testimonialWebflowLogo.asset->url,
    "testimonialAuthorImage": testimonialAuthorImage.asset->url,

    // Recent Work
    "recentWorkImages": recentWorkImages[] {
      name,
      "imageUrl": image.asset->url
    },
    "awardBadges": awardBadges[] {
      companyName,
      "companyLogoUrl": companyLogo.asset->url,
      awardTitle,
      "awardSourceLogoUrl": awardSourceLogo.asset->url
    },

    // Pricing
    "pricingCardImage": pricingCardImage.asset->url,
    "pricingSmileIcon": pricingSmileIcon.asset->url,
    "pricingPauseIcon": pricingPauseIcon.asset->url,
    "pricingCheckIcon": pricingCheckIcon.asset->url,
    "pricingDecorative1": pricingDecorative1.asset->url,

    // FAQ
    "faqBookCallImage": faqBookCallImage.asset->url,
    "faqEmailIcon": faqEmailIcon.asset->url,

    // Footer
    "footerSmileyFaces": footerSmileyFaces.asset->url,

    // UI Icons
    "arrowIcon": arrowIcon.asset->url,
    "phoneIcon": phoneIcon.asset->url,
    "chevronIcon": chevronIcon.asset->url,

    // Benefit Icons
    "benefitIcons": benefitIcons[] {
      benefitName,
      "iconUrl": icon.asset->url
    },

    // Services Decorative
    "servicesDecorative1": servicesDecorative1.asset->url,
    "servicesDecorative2": servicesDecorative2.asset->url
  }
}`
