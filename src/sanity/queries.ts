import { groq } from 'next-sanity'

// Fetch all page data in one query
export const pageDataQuery = groq`{
  "siteSettings": *[_type == "siteSettings"][0] {
    siteName,
    "headerLogoUrl": headerLogo.asset->url,
    "footerLogoUrl": footerLogo.asset->url,
    seo,
    socialLinks,
    contactEmail,
    loginUrl,
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
    founderImage
  },
  "howItWorks": *[_type == "howItWorksSection"][0] {
    titlePart1,
    titleItalic,
    titlePart2,
    cards,
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
    icon,
    colorScheme,
    order
  },
  "clientLogos": *[_type == "clientLogo"] | order(order asc) {
    _id,
    name,
    logo
  },
  "testimonials": *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    authorName,
    authorTitle,
    authorImage,
    companyLogo
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
    memberCardImage
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
