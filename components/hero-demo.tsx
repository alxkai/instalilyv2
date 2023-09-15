import Image from 'next/image';
import Grow from '@/public/images/grow.png';
import HeroImage from '@/public/images/about-hero.jpg';

export default function HeroDemo() {
  return (
    <section 
      style={{
        backgroundImage: `url('/images/grow.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-30 md:pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="h2 mb-14 nd:mb-8 GraebenbachMono text-[#F2F2F2]" data-aos="fade-up" style={{ letterSpacing: '0.05em' }}>
              INSTALILY DEMOS
            </h1>
          </div>
        </div>
      </div>

    </section>
  )
}
