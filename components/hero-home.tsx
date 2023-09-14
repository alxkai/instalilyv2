import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="bg-[#A2F9DA]">
      <div className="w-full mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="pt-10 pb-10 w-full">

          {/* Section header */}
          <div className="max-w-full text-center p-10 pb-10">
            <span className="GraebenbachMonoMed text-[36px] md:text-[46px]" data-aos="fade-up" data-aos-delay="100">
              YOUR NEXT PRIVATE AI ACTION AGENT
            </span>
            <p className="GraebenbachMono text-[17px] text-gray-800 mb-8" data-aos="fade-up" data-aos-delay="200">
              Gain early access to the next evolution of AI powered marketing and e-commerce tools.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            
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
