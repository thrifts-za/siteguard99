'use client'

import Image from 'next/image'
import { HowItWorksSection, ClientLogo } from '@/lib/types'
import { urlFor } from '@/sanity/image'

interface HowItWorksProps {
  data: HowItWorksSection
  clientLogos: ClientLogo[]
}

export default function HowItWorks({ data, clientLogos }: HowItWorksProps) {
  return (
    <div className="hiw">
      <div className="container mmmm">
        <div className="inner-container">
          <div className="hiw__header-wrapper">
            <h2>
              {data?.titlePart1 || 'The way design'}{' '}
              <span className="text-italics">{data?.titleItalic || "should've"}</span>{' '}
              {data?.titlePart2 || 'been done in the first place'}
            </h2>
          </div>

          <div className="w-layout-grid hiw__grid">
            {/* Subscribe Card */}
            <div className="hiw__card">
              <div className="hiw__card-gradient">
                <div className="hiw__card-header">Subscribe</div>
                <p className="hiw__card-p text-black _2">
                  Subscribe to a plan &amp; request as many designs as you&apos;d like.
                </p>
              </div>
              <Image
                src="/images/678548430d58f4cbecec1977_price.svg"
                alt="Price"
                width={200}
                height={200}
                className="image-3"
              />
            </div>

            {/* Request Card */}
            <div className="hiw__card _2">
              <div className="hiw__card-gradient _2">
                <div className="hiw__card-header">Request</div>
                <p className="hiw__card-p">
                  Request whatever you&apos;d like, from mobile apps to logos.
                </p>
              </div>
              <div className="receive__image-wrapper">
                <div className="marquees">
                  <div className="marquee-1 _2">
                    <div className="marquee-1-inner">
                      <div className="marquee-1-element">
                        <div className="service-pill"><div>Mobile apps</div></div>
                        <div className="service-pill"><div>Presentations</div></div>
                        <div className="service-pill"><div>Logos</div></div>
                        <div className="service-pill"><div>Social Media</div></div>
                        <div className="service-pill"><div>Email</div></div>
                      </div>
                      <div className="marquee-1-element">
                        <div className="service-pill"><div>Mobile apps</div></div>
                        <div className="service-pill"><div>Presentations</div></div>
                        <div className="service-pill"><div>Logos</div></div>
                        <div className="service-pill"><div>Social Media</div></div>
                        <div className="service-pill"><div>Email</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-1 _2 _4455">
                    <div className="marquee-1-inner _6886">
                      <div className="marquee-1-element">
                        <div className="service-pill"><div>Webflow</div></div>
                        <div className="service-pill"><div>Print design</div></div>
                        <div className="service-pill"><div>Packaging</div></div>
                        <div className="service-pill"><div>Ad creative</div></div>
                        <div className="service-pill"><div>Landing pages</div></div>
                      </div>
                      <div className="marquee-1-element">
                        <div className="service-pill"><div>Webflow</div></div>
                        <div className="service-pill"><div>Print design</div></div>
                        <div className="service-pill"><div>Packaging</div></div>
                        <div className="service-pill"><div>Ad creative</div></div>
                        <div className="service-pill"><div>Landing pages</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-1 _2">
                    <div className="marquee-1-inner">
                      <div className="marquee-1-element">
                        <div className="service-pill"><div>Branding</div></div>
                        <div className="service-pill"><div>Email</div></div>
                        <div className="service-pill"><div>Display ads</div></div>
                        <div className="service-pill"><div>Packaging</div></div>
                        <div className="service-pill"><div>User interface</div></div>
                      </div>
                      <div className="marquee-1-element">
                        <div className="service-pill"><div>Branding</div></div>
                        <div className="service-pill"><div>Email</div></div>
                        <div className="service-pill"><div>Display ads</div></div>
                        <div className="service-pill"><div>Packaging</div></div>
                        <div className="service-pill"><div>User interface</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="request__block">
                    <Image
                      src="/images/678548430d58f4cbecec197e_Smile.png"
                      alt="Smile"
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
                <div className="hiw__card-header">Receive</div>
                <p className="hiw__card-p">
                  Receive your design within two business days on average.
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
            <Image src="/images/678548430d58f4cbecec1986_Nectar-sleep-logo-vector 1.svg" alt="Nectar" width={120} height={40} />
            <Image src="/images/678548430d58f4cbecec1987_bmc-full-logo 1.svg" alt="BMC" width={120} height={40} />
            <Image src="/images/678548430d58f4cbecec198a_svg.svg" alt="Logo" width={120} height={40} />
            <Image src="/images/678548430d58f4cbecec1989_Vector.svg" alt="Logo" width={120} height={40} />
            <Image src="/images/678548430d58f4cbecec1988_6203180d8e14605fb2d2c003_Vector 1.svg" alt="Logo" width={120} height={40} />
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
