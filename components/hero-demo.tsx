import Image from 'next/image'
import Grow from '@/public/images/grow.png'
import HeroImage from '@/public/images/about-hero.jpg'

export default function HeroDemo() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image className="w-full h-full object-cover" src={Grow} width={1440} height={394} priority alt="About" />
        <div className="absolute inset-0 bg-gray-900 opacity-30" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-30 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4 GraebenbachMono text-[#F2F2F2]" data-aos="fade-up">INSTALILY DEMOS</h1>
          </div>
        </div>
      </div>

    </section>
  )
}