import Image from 'next/image'
import FeatIllustration from '@/public/images/features-illustration.png'
import FeatAvatar from '@/public/images/features-avatar.jpg'
import Lily from '@/public/images/lily.png'
import IDS0 from '@/public/images/ids0.png'
import IDS1 from '@/public/images/ids1.png'
import Link from 'next/link'

export default function Features() {
  return (
    <section id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 pt-12 sm:px-6">
        <div>

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
                <div className="md:pr-4 pt-4 pb-4 lg:pr-12 xl:pr-16">
                  <div className="GraebenbachMono text-[#F2F2F2] text-xl mb-1">Lightning fast workflow</div>
                  <h3 className="GraebenbachMonoMed text-[#A2F9DA] text-[44px] mb-1">ACTION AI ASSISTANT</h3>
                  <p className="text-xl text-gray-400 mb-4">Companies depend on Instalily to turbocharge their business through our intelligent conversational chatbot assistant and Enterprise-grade Insights Platform. </p>
                  <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Automate tasks</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Respond to changing customer needs</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Flexibility and Scale</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Outpace competitors</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-6">
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
