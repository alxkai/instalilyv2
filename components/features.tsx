import Image from 'next/image'
import FeatIllustration from '@/public/images/features-illustration.png'
import FeatAvatar from '@/public/images/features-avatar.jpg'
import Lily from '@/public/images/lily.png'
import IDS0 from '@/public/images/ids0.png'
import IDS1 from '@/public/images/ids1.png'
import Link from 'next/link'

export default function Features() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 pt-20 pb-20 items-start md:max-w-none">
          {/* 1st item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up">
            <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
            </svg>
            <h4 className="GraebenbachMono h4 mb-2 text-[#F2F2F2]">1. MARKETING AI AGENT</h4>
            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <g fill="none" fillRule="evenodd">
                <path className="stroke-current text-purple-300" d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2" strokeWidth="2" strokeLinecap="square" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M36 32l-4-3-4 3V22h8z" />
              </g>
            </svg>
            <h4 className="GraebenbachMono h4 mb-2 text-[#F2F2F2]">2. ACTIVATION</h4>
            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
              <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
              <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
            </svg>
            <h4 className="GraebenbachMono h4 mb-2 text-[#F2F2F2]">3. RETENTION</h4>
            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>


        <div className="border-t border-gray-800">

          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-full md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up" data-aos-anchor="[data-aos-id-features-home]">
                <div className="relative">
                <video className="md:max-w-none" width="100%" autoPlay muted loop>
                    <source src="/videos/vid00.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-anchor="[data-aos-id-features-home]">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="GraebenbachMono text-[#F2F2F2] text-xl mb-2">Lightning fast workflow</div>
                  <h3 className="GraebenbachMonoMed text-[#A2F9DA] text-[44px] mb-1">CREATIVE AI AGENT</h3>
                  <p className="text-xl text-gray-400 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                  <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Premium statistics</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited jobs</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Free goods</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>No code required</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Always up to date</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                  <Link href="https://forms.fillout.com/t/kuanhAGqDwus" target="_blank" rel="noopener noreferrer" className="btn-sm pt-2.5 GraebenbachMonoMed text-[#181818] text-[14px] bg-[#A2F9DA] hover:bg-[#E0FF1F] w-full">
                  GET STARTED
                </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
