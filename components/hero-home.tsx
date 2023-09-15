import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section 
      className="bg-[#A2F9DA]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23f2f2f2' fill-opacity='0.68' fill-rule='evenodd'/%3E%3C/svg%3E")` 
      }}
      >
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
