'use client'

import { useRef, useState, useEffect } from 'react'
import FeatIllustration from '@/public/images/features-illustration.png'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import TabsImage01 from '@/public/images/tab1.jpg'
import TabsImage02 from '@/public/images/tab2.jpg'
import TabsImage03 from '@/public/images/tab3.jpg'
import Icon00 from '@/public/images/icon00.svg'

export default function Tabs() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
	  if ( tabs.current && tabs.current.parentElement ) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])    

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="GraebenbachMono text-[#F2F2F2] h2 mb-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">AN AI AGENT FOR EVERY USE CASE</h2>
            <p className="GraebenbachMono text-[22px] text-gray-100" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">
              Create and deploy specialized AI Action Agents
            </p>
          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                onClick={() => setTab(1)}
              >

                <span className="text-[#F2F2F2] GraebenbachMono group-hover:text-[#A2F9DA] transition-colors mt-1 duration-150 ease-in-out">MARKETING</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                onClick={() => setTab(2)}
              >
                <span className="text-[#F2F2F2] GraebenbachMono group-hover:text-[#A2F9DA] transition-colors mt-1 duration-150 ease-in-out">CUSTOMER SERVICE</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                onClick={() => setTab(3)}
              >
                <span className="text-[#F2F2F2] GraebenbachMono group-hover:text-[#A2F9DA] transition-colors mt-1 duration-150 ease-in-out">E-COMMERCE</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col mt-16 pb-10" data-aos="fade-up" ref={tabs}>

                {/* Item 1 */}
                <div
                  className="relative w-full mx-auto cursor-pointer"
                  onClick={() => setTab(2)} // Set the new tab index when clicked
                >
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage01} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2 text-[#F2F2F2]">Marketing AI Action Agent</h4>
                      <p className="text-lg text-gray-400">Reach a greater audience and boost engagement.</p>
                      <br/>
                      <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                        <li className="flex items-center mx-2 my-1">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 mb-14 md:mb-7 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Enable data-driven decision making to enhance customer satisfaction through real-time bot insights.</span>
                        </li>
                        <li className="flex items-center mx-2 my-1">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Receive descriptive, data-driven feedback</span>
                        </li>
                        <li className="flex items-center mx-2 my-1">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Brainstorm effective marketing strategy</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </Transition>
                </div>

                {/* Item 2 */}
                <div
                  className="relative w-full mx-auto cursor-pointer"
                  onClick={() => setTab(3)} // Set the new tab index when clicked
                >
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage02} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2 text-[#F2F2F2]">Customer Service AI Agent</h4>
                      <p className="text-lg text-gray-400">Accelerate customer flows and support services.</p>
                      <br/>
                      <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                        <li className="flex items-center mx-2 my-1">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Assist customers in finding the exact product they need</span>
                        </li>
                        <li className="flex items-center mx-2 my-1">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Provide personal post-purchase support</span>
                        </li>
                        <li className="flex items-center mx-2 my-1">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Increase buyers confidence and decrease time to cart</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </Transition>
                </div>

                {/* Item 3 */}
                <div
                  className="relative w-full mx-auto cursor-pointer"
                  onClick={() => setTab(1)} // Set the new tab index when clicked
                >
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage03} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2 text-[#F2F2F2]">E-Commerce AI Agent</h4>
                        <p className="text-lg text-gray-400">Manage the entirety of your online platform.</p>
                        <br/>
                        <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                          <li className="flex items-center mx-2 my-1">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Identify opportunities to upsell related products</span>
                          </li>
                          <li className="flex items-center mx-2 my-1">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Ensure compliance across your platform</span>
                          </li>
                          <li className="flex items-center mx-2 my-1">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>Streamline order processing with accuracy</span>
                          </li>
                        </ul>
                    </div>
                  </article>
                </Transition>
                </div>

              </div>
            </div>

          </div>
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 pt-12 pb-10 items-start md:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle Border */}
                <circle className="stroke-current text-purple-600" cx="32" cy="32" r="30" strokeWidth="2" fill="none" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="GraebenbachMono h4 mb-2 text-[#F2F2F2]">1. MARKETING AI AGENT</h4>
              <p className="text-lg text-gray-400 text-center">An AI assistant tailored exactly to your enterprise needs.</p>
            </div>


            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div aria-hidden="true" className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="400"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle Border */}
                <circle className="stroke-current text-purple-600" cx="32" cy="32" r="30" strokeWidth="2" fill="transparent" />
                {/* Inner Circle Border */}
                <circle className="stroke-current text-purple-100" cx="32" cy="32" r="20" strokeWidth="2" fill="transparent" />
                {/* Solid Circle in the Center (Pulsing) */}
                <circle className="animate-pulse" cx="32" cy="32" r="10" fill="#A2F9DA" />
              </svg>
              <h4 className="GraebenbachMono h4 mb-2 text-[#F2F2F2]">2. ACTIVATION</h4>
              <p className="text-lg text-gray-400 text-center">Increase points of interception for customer impact.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle Border */}
                <circle className="stroke-current text-purple-600" cx="32" cy="32" r="30" strokeWidth="2" fill="none" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="GraebenbachMono h4 mb-2 text-[#F2F2F2]">3. RETENTION</h4>
              <p className="text-lg text-gray-400 text-center">
                Secure customer relationships and see substantial gains in your CRR
              </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
