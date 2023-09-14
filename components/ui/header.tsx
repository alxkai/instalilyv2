import Image from 'next/image';
import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'
import LogoWhite from '@/public/images/logo_white.svg'

export default function Header() {
  return (
    <header className="absolute w-full z-30 sticky top-0 bg-[#181818]">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Instalily">
              <Image src={LogoWhite} alt="Logo" className="w-[250px]" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="GraebenbachMonoMed hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="#who-we-are" className="text-[#f2f2f2] hover:text-[#E0FF1F] px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  WHO WE ARE
                </Link>
              </li>
              <li>
                <Link href="#what-we-do" className="text-[#f2f2f2] hover:text-[#E0FF1F] px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  WHAT WE DO
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-[#f2f2f2] hover:text-[#E0FF1F] px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  NEWS
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#f2f2f2] hover:text-[#E0FF1F] px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  TEAM
                </Link>
              </li>
              {/* 1st level: hover 
              <Dropdown title="Support">
                {/* 2nd level: hover 
                <li>
                  <Link href="/contact" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="/help/frequently-asked-questions" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="/404" className="font-medium text-sm text-gray-400 hover:text-purple-600 flex py-2 px-4 leading-tight">
                    404
                  </Link>
                </li>
              </Dropdown>
            */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/*
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              */}
              <li>
                <Link href="https://forms.fillout.com/t/kuanhAGqDwus" target="_blank" rel="noopener noreferrer" className="btn-sm pt-2.5 GraebenbachMonoMed text-[#181818] text-[14px] bg-[#A2F9DA] hover:bg-[#E0FF1F] ml-3">
                  GET STARTED
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
