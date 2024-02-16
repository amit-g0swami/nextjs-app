import { create } from 'zustand'
import {
  CpuChipIcon,
  FingerPrintIcon,
  LinkIcon,
  ShieldCheckIcon,
  BoltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Innovation.',
    description:
      'Stay ahead with our technology-driven solutions that redefine efficiency and bring a fresh perspective to logistics management',
    icon: CpuChipIcon
  },
  {
    name: 'Reliability.',
    description:
      'We are your trusted logistics companion, ensuring that your shipments reach their destination on time, every time.',
    icon: FingerPrintIcon
  },
  {
    name: 'Partnership.',
    description:
      'Your success is our success. We work collaboratively, understanding your unique needs and offering customized solutions.',
    icon: LinkIcon
  }
]

const stats = [
  { name: '91-xxx-xxxx-xxx', value: 'Phone' },
  { name: 'coo@shippivot.in', value: 'Email' },
  { name: 'Dwarka, Delhi', value: 'Location' },
  { name: 'India', value: 'Country' }
]

const navigation = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Services', href: '#services' },
  { name: 'Support', href: '#support' }
]

const services = [
  {
    name: 'Comprehensive Logistics Solutions',
    description:
      'Our comprehensive logistics solutions cover the entire spectrum of your supply chain needs. Our integrated approach ensures seamless operations and optimized costs.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Technology-Driven Solutions',
    description:
      'Unlock the power of real-time visibility and control with our cutting-edge technology. Our systems provide actionable insights, allowing you to monitor, manage, and optimize your supply chain in a way that suits your business goals.',
    icon: CpuChipIcon
  },
  {
    name: 'Customized Strategies',
    description:
      'At Shippivot, we recognize that every business is unique. Our team collaborates closely with you to understand your challenges and design bespoke logistics strategies that align with your objectives.',
    icon: BoltIcon
  },
  {
    name: 'Cost Efficiency',
    description:
      'Discover cost-effective logistics solutions tailored to your budget. We optimize resources, minimize waste, and drive efficiency to ensure your logistics operations are as cost-effective as possible.',
    icon: CurrencyDollarIcon
  }
]

type HomeManagementState = {
  features: typeof features
  stats: typeof stats
  navigation: typeof navigation
  services: typeof services
}

const useHomeStore = create<HomeManagementState>(() => ({
  features: features,
  stats: stats,
  navigation: navigation,
  services: services
}))

export default useHomeStore
