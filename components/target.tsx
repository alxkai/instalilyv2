import Image from 'next/image'
import TargetImage from '@/public/images/features-02-image.png'
import Link from 'next/link';
import Lily3 from '@/public/images/lily3.png'

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-0">

          {/* Section header */}
          <div className="max-w-6xl mx-auto text-center mb-20 md:mb-0 pt-0 md:pb-20">
            <h2 className="GraebenbachMono h3 text-[#F2F2F2]" data-aos="fade-up">WE ARE ON A MISSION TO EMPOWER ENTERPRISES WITH AI.</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-20 ml-0 md:ml-12 rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <Image className="mx-auto md:max-w-none" src={Lily3} width={400} height={520} alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl mb-10 md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2 text-[#F2F2F2]"><span className="text-[#F2F2F2]">Enterprise Adoption</span></h4>
                    <p className="text-lg text-gray-400">We offer a foundationally different perspective on the future of AI-powered solutions, not just focused on reasoning but also enabling businesses to drive actionable outcomes.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                  <h4 className="h4 mb-2 text-[#F2F2F2]"><span className="text-[#F2F2F2]">Intelligent Action Assistant</span></h4>
                    <p className="text-lg text-gray-400">We combine the power of globalized reasoning and localized data, leveraging both proprietary and open-source models..</p>
                  </div>
                  <div className="mt-6 mb-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                  <h4 className="h4 mb-2 text-[#F2F2F2]"><span className="text-[#F2F2F2]">Instalily Decisioning System</span></h4>
                    <p className="text-lg text-gray-400">We have developed a sophisticated decisioning system that optimizes cost, required output fidelity, potential for hallucination, and the balance between reasoning and action. This ensures that your business LLM will be tailored to your unique needs.</p>
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
