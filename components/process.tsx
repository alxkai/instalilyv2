import Image from 'next/image'
import Lily from '@/public/images/lily.png'
import IDS0 from '@/public/images/ids0.png'
import IDS1 from '@/public/images/ids1.png'

export default function Process() {
  return (
    <section>
      <div className="max-w-full mx-auto px-4 sm:px-6 bg-[#F2F2F2] bg-gradient-to-b from-gray-300 via-transparent to-transparent">
        <div className="pt-10 md:pt-16 relative"> {/* Added relative class */}

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-10 md:pb-14 relative z-10"> {/* Added relative and z-10 classes */}
            <Image src={Lily} alt="lily" data-aos="fade-up" data-aos-delay="400" />          
          </div>

          <div className="max-w-6xl mx-auto text-center text-[#F2F2F2] ">
            <p className="mb-1 GraebenbachMonoMed text-[30px] text-[#181818] sm:text-[36px]" data-aos="fade-up">AUTOMATE GROWTH FOR YOUR BUSINESS</p>
            <p className="GraebenbachMono text-[#181818] text-[18px] sm:text-[22px] pb-12" data-aos="fade-up" data-aos-delay="200">
              Make data-driven decisions, reduce costs, and accelerate business growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
