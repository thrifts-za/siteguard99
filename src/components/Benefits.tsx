'use client'

import Image from 'next/image'
import { BenefitsSection, Benefit } from '@/lib/types'

interface BenefitsProps {
  section: BenefitsSection
  benefits: Benefit[]
}

export default function Benefits({ section, benefits }: BenefitsProps) {
  return (
    <div className="services__list">
      <div className="container p-b-0">
        <div className="services__row">
          {/* Design board */}
          <div className="services__col">
            <div className="services__block _1">
              <Image
                src="/images/678548430d58f4cbecec1999_Trello-Logo--Streamline-Logos.png"
                alt="Trello"
                width={80}
                height={80}
                className="image-8"
              />
            </div>
            <div className="services__header">Design board</div>
            <p className="services__p">Easily manage your design queue with a Trello board.</p>
          </div>

          {/* Fixed monthly rate */}
          <div className="services__col">
            <div className="services__block _3">
              <Image
                src="/images/678548430d58f4cbecec199b_Lock-Square-Dial-Pad--Streamline-Nova.png"
                alt="Lock"
                width={80}
                height={80}
                className="image-8 _4"
              />
            </div>
            <div className="services__header">Fixed monthly rate</div>
            <p className="services__p">No surprises here! Pay the same fixed price each month.</p>
          </div>

          {/* Fast delivery */}
          <div className="services__col">
            <div className="services__block _2">
              <Image
                src="/images/678548430d58f4cbecec1997_Flash-Enable-Allow-1--Streamline-Nova.png"
                alt="Flash"
                width={80}
                height={80}
                className="image-8 _3"
              />
            </div>
            <div className="services__header">Fast delivery</div>
            <p className="services__p">Get your design one at a time in just a couple days on average.</p>
          </div>

          {/* Top-notch quality */}
          <div className="services__col">
            <div className="services__block _4">
              <Image
                src="/images/678548430d58f4cbecec199d_Star--Streamline-Nova.png"
                alt="Star"
                width={80}
                height={80}
                className="image-8 _2"
              />
            </div>
            <div className="services__header">Top-notch quality</div>
            <p className="services__p">Senior design quality at your fingertips, whenever you need it.</p>
          </div>

          {/* Flexible and scalable */}
          <div className="services__col">
            <div className="services__block _5">
              <Image
                src="/images/678548430d58f4cbecec199f_Resize-Expand--Streamline-Nova.png"
                alt="Resize"
                width={80}
                height={80}
                className="image-8"
              />
            </div>
            <div className="services__header">Flexible and scalable</div>
            <p className="services__p">Scale up or down as needed, and pause or cancel at anytime.</p>
          </div>

          {/* Unique and all yours */}
          <div className="services__col last">
            <div className="services__block _6">
              <Image
                src="/images/678548430d58f4cbecec19a1_Touch-Id--Streamline-Nova.png"
                alt="Touch ID"
                width={80}
                height={80}
                className="image-8"
              />
            </div>
            <div className="services__header">Unique and all yours</div>
            <p className="services__p">Every design is made especially for you and is 100% yours.</p>
          </div>

          <div className="div-block-18"></div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  )
}
