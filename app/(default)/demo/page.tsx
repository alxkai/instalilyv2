export const metadata = {
  title: 'INSTALILY.AI - Demo Page',
  description: 'At Instalily, we believe in empowering enterprises to create a competitive edge through AI. Our app enables you to effortlessly address any question and harness the full potential of artificial intelligence to propel your business forward.',
}

import HeroDemo from '@/components/hero-demo'
import ContentDemo from '@/components/content-demo'

export default function Demo() {
  return (
    <>
      <HeroDemo />
      <ContentDemo />
    </>
  )
}