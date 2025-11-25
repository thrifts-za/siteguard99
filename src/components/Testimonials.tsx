'use client'

import Image from 'next/image'
import { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="pricing">
      <div className="container">
        <div className="inner-container slider">
          <div className="w-layout-grid grid-3">
            {/* First Testimonial */}
            <div className="div-block-17">
              <div className="div-block-14">
                <div className="text-block-2">
                  &quot;Designjoy shows that they know the art of subtlety.&quot;
                </div>
                <Image
                  src="https://cdn.prod.website-files.com/678005a5d025f688a34957f1/678199f71b779683c0d14a8f_65dd4dae1c85fee7c339650a_Webflow_logo_2023%20(1)%201.svg"
                  alt="Webflow"
                  width={100}
                  height={32}
                  className="image-12"
                  unoptimized
                />
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="div-block-17">
              <div className="div-block-14">
                <div className="text-block-2">
                  &quot;Design is everything, and these guys have nailed it.&quot;
                </div>
                <div className="div-block-15">
                  <Image
                    src="/images/678548430d58f4cbecec19bd_Group 1171274555.png"
                    alt="Kevin O'Leary"
                    width={48}
                    height={48}
                    className="image-13"
                  />
                  <div className="div-block-16">
                    <div className="text-block-3">Kevin O&apos;Leary</div>
                    <div>Shark Tank</div>
                  </div>
                </div>
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
