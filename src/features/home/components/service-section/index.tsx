'use client'

import useHomeStore from '../../store/home.store'
import { BackGroundDiv } from '@/features/shared/components/background-dev'
import { ServiceSectionList } from './service-section-list'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const ServicesSection = () => {
  const { services } = useHomeStore((state) => state)
  return (
    <BackGroundDiv>
      <Container className="py-10 sm:py-20" id="services">
        <Container
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          id="features"
        >
          <Container className="lg:text-center">
            <Text
              as="p"
              className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
            >
              Our Services
            </Text>
            <Text
              as="h3"
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              Your satisfaction is our top priority
            </Text>
            <Text
              as="p"
              className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
            >
              We work closely with you to understand your unique requirements
              and tailor our solutions accordingly.
            </Text>
          </Container>

          <Container className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {services.map((service, index) => (
                <ServiceSectionList
                  key={index}
                  icon={service.icon}
                  title={service.name}
                  description={service.description}
                />
              ))}
            </ul>
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
