export const metadata = {
  title: 'INSTALILY.AI',
  description: 'At Instalily, we believe in empowering enterprises to create a competitive edge through AI. Our app enables you to effortlessly address any question and harness the full potential of artificial intelligence to propel your business forward.',
}

import Hero from '@/components/hero-home'
import Process from '@/components/process'
import FeaturesHome from '@/components/features'
import Tabs from '@/components/tabs'
import Target from '@/components/target'
import News from '@/components/news'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <FeaturesHome />
      <Tabs />
      <Target />
      <News />     
    </>
  )
}
