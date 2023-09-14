import Image from 'next/image'

import TeamImage01 from '@/public/images/team00.png'
import TeamImage02 from '@/public/images/team01.png'
import TeamImage03 from '@/public/images/team02.png'
import TeamImage04 from '@/public/images/team03.png'
import TeamImage05 from '@/public/images/team04.png'
import TeamImage06 from '@/public/images/team05.png'
import TeamImage07 from '@/public/images/team06.png'
import TeamImage08 from '@/public/images/team07.png'
import TeamImage09 from '@/public/images/team08.png'
import TeamImage10 from '@/public/images/team09.png'
import TeamImage11 from '@/public/images/team10.png'

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 GraebenbachMono text-[#F2F2F2]">
            <h2 className="h4 mb-4">Leadership team with 10+ years of collaboration</h2>
            <p className="text-xl text-gray-400">Staff expertise in engineering, software development, product and UI/UX design based in NYC.</p>
          </div>

          {/* Team members */}
          <div className="GraebenbachMonoMed text-[#F2F2F2] sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage01} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Amit Shah</h4>
                <div className="text-gray-500 mb-1">Founder & CEO</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@laraamprecht</a>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage02} width={120} height={120} alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">Karim Motani</h4>
                <div className="text-gray-500 mb-1">VP, Business Development</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@marie_moon</a>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage03} width={120} height={120} alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">Sumantro Das</h4>
                <div className="text-gray-500 mb-1">VP, Product & Partnerships</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@mr_sebastian</a>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage04} width={120} height={120} alt="Team member 04" />
                <h4 className="text-xl font-medium mb-1">Hongyi Wu</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@timothychandran</a>
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage05} width={120} height={120} alt="Team member 05" />
                <h4 className="text-xl font-medium mb-1">Cristin Connerney</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA]  hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@dominikprasad</a>
              </div>
            </div>

            {/* 6th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage06} width={120} height={120} alt="Team member 06" />
                <h4 className="text-xl font-medium mb-1">Iris Cheng</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@daryamagic</a>
              </div>
            </div>

            {/* 7th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage07} width={120} height={120} alt="Team member 07" />
                <h4 className="text-xl font-medium mb-1">Alex Kim</h4>
                <div className="text-gray-500 mb-1">Product Designer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@quentinrenvoye</a>
              </div>
            </div>

            {/* 8th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage08} width={120} height={120} alt="Team member 08" />
                <h4 className="text-xl font-medium mb-1">Morgann Thain</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@hello_chuzeville</a>
              </div>
            </div>

            {/* 9th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage09} width={120} height={120} alt="Team member 08" />
                <h4 className="text-xl font-medium mb-1">Morgann Thain</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@hello_chuzeville</a>
              </div>
            </div>

            {/* 10th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage10} width={120} height={120} alt="Team member 08" />
                <h4 className="text-xl font-medium mb-1">Morgann Thain</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@hello_chuzeville</a>
              </div>
            </div>

            {/* 11th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage11} width={120} height={120} alt="Team member 08" />
                <h4 className="text-xl font-medium mb-1">Morgann Thain</h4>
                <div className="text-gray-500 mb-1">Software Engineer</div>
                <a className="block text-[#A2F9DA] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@hello_chuzeville</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
