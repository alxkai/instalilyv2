export const metadata = {
  title: 'INSTALILY.AI - Demo Page',
  description: 'At Instalily, we believe in empowering enterprises to create a competitive edge through AI. Our app enables you to effortlessly address any question and harness the full potential of artificial intelligence to propel your business forward.',
}

import HeroDemo from '@/components/hero-demo'
import TeamImages from '@/components/team-images'
import Timeline from '@/components/timeline'
import Team from '@/components/team'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Career from '@/components/career'
import Clients from '@/components/clients'
import Newsletter from '@/components/newsletter'

export default function Demo() {
  return (
    <>
      <HeroDemo />
      <Team />
      <Career />
    </>
  )
}