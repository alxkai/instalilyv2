import Image from 'next/image'
import TargetImage from '@/public/images/features-02-image.png'
import Link from 'next/link';

export default function Target() {
  return (
    <section id="who-we-are">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-0">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center pb-12 pt-0 md:pb-20">
            <h2 className="GraebenbachMono h3 text-[#F2F2F2]" data-aos="fade-up">We are on a mission to empower marketers and turbocharge growth in their business.</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <Image className="mx-auto md:max-w-none" src={TargetImage} width={540} height={520} alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-[#F2F2F2]"><span className="text-[#F2F2F2]">.</span> For developers</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                  <h4 className="h4 mb-2 text-[#F2F2F2]"><span className="text-[#F2F2F2]">.</span> For designers</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="mt-6 mb-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                  <h4 className="h4 mb-2 text-[#F2F2F2]"><span className="text-[#F2F2F2]">.</span> For teams</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="mb-12">
                    <Link href="/about" target="_blank" rel="noopener noreferrer" className="btn-sm pt-2.5 GraebenbachMonoMed text-[#181818] text-[14px] bg-[#A2F9DA] hover:bg-[#E0FF1F] w-full">
                      LEARN MORE ABOUT OUR TEAM
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
