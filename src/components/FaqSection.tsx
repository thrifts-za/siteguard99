'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FaqItem {
  _id: string
  question: string
  answer: string
}

interface FaqSectionProps {
  titleItalic: string
  titleRegular: string
  bookCallImage?: string
  bookCallTitle: string
  emailPrompt: string
  contactEmail: string
  faqItems: FaqItem[]
}

export default function FaqSection({
  titleItalic,
  titleRegular,
  bookCallTitle,
  emailPrompt,
  contactEmail,
  faqItems,
}: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="pricing">
      <div className="container faqq">
        <div className="inner-container">
          <div className="hero__flex">
            <div className="faq__left">
              <h1>
                <span className="text-italics">{titleItalic}</span> {titleRegular}
              </h1>
              <div className="div-block-13">
                {faqItems.map((item, index) => (
                  <div key={item._id} className="faq__row" onClick={() => toggleFaq(index)}>
                    <div>
                      <div className="faq__question m-b-0">{item.question}</div>
                      <p
                        className="faq__answer"
                        style={{ display: openFaq === index ? 'block' : 'none' }}
                      >
                        {item.answer}
                      </p>
                    </div>
                    <Image
                      src="/images/678548430d58f4cbecec19b8_chevron-down 1.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="faq__arrow"
                      style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="faq__card" style={{ backgroundImage: 'url(/images/call-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="faq__card-inner">
                <Image
                  src="/images/group10.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="image-11"
                />
                <div className="hero__member-card-header _2">{bookCallTitle}</div>
                <Link href="#book" className="button w-button">
                  Book a call
                </Link>
              </div>
              <a
                href={`mailto:${contactEmail}?subject=Website%20Inquiry`}
                className="hero__member-card-call w-inline-block"
              >
                <div className="hero__member-card-call-left">
                  <Image
                    src="/images/678548430d58f4cbecec19bb_Send-Email--Streamline-Ultimate.png"
                    alt=""
                    width={48}
                    height={48}
                    className="image-2 send"
                  />
                  <div>
                    <div>{emailPrompt}</div>
                    <div className="hero__member-card-call-schedule">{contactEmail}</div>
                  </div>
                </div>
                <Image
                  src="/images/678548430d58f4cbecec196a_arrow.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
