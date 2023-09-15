import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import Grow from '@/public/images/grow.png'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section 
      className="bg-[#A2F9DA]"
      style={{
        backgroundImage: `url('/images/grow.png')` 
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="pt-10 pb-10 w-full">

          {/* Section header */}
          <div className="max-w-full text-center p-10 pb-10">
            <div className="bg-opacity-70 bg-gray-800 p-1 inline-block">
              <span className="GraebenbachMonoMed text-[44px] text-[#FFFFFF] md:text-[50px] " data-aos="fade-up" data-aos-delay="100">
                YOUR NEXT PRIVATE AI ACTION AGENT
              </span>
            </div>
            <div className="bg-opacity-70 bg-gray-800 p-1 mt-0 inline-block">
              <p className="GraebenbachMono text-[17px] text-gray-100 mb-0" data-aos="fade-up" data-aos-delay="200">
                Gain early access to the next evolution of AI powered marketing and e-commerce tools.
              </p>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none mt-4 sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-[#181818] GraebenbachMonoMed hover:bg-[#E0FF1F] hover:text-[#181818] w-full mb-4 sm:w-auto sm:mb-0"
                  href="https://forms.fillout.com/t/kuanhAGqDwus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET STARTED
                </a>
              </div>
              {/*
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
              </div>
                */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
