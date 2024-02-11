import React from 'react'
import { AboutSection } from '@/features/home/components/about-section'
import { HeroSection } from '@/features/home/components/hero-section'
import { ServicesSection } from './components/service-section'
import { FooterSection } from './components/footer'
import { SupportSection } from './components/support-section'

export const HomeComponent = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SupportSection />
      <FooterSection />
    </React.Fragment>
  )
}
