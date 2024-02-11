'use client'

import Image from 'next/image'
import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

export const AboutSection = () => {
  const { features } = useHomeStore()
  return (
    <section className="overflow-hidden py-10 sm:py-20" id="about-us">
      <Container className="mx-auto max-w-7xl px-6 lg:px-8">
        <Container className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Container className="lg:pr-8 lg:pt-4">
            <Container className="lg:max-w-lg">
              <Text
                as="h2"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                About Us
              </Text>
              <Text
                as="p"
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                A better workflow
              </Text>
              <Text as="p" className="mt-6 text-lg leading-8 text-gray-600">
                Our commitment to delivering unparalleled logistics solutions
                has made us the preferred partner for businesses seeking
                precision, speed, and cost-effectiveness.
              </Text>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <Container key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </Container>
                ))}
              </dl>
            </Container>
          </Container>
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </Container>
      </Container>
    </section>
  )
}
