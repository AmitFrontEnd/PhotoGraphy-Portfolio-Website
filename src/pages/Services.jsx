import HeroSection from '@/components/HeroSection'
import PricingCard from '@/components/PricingCard'
import ServicesSection from '@/components/ServicesSection'
import { pricingPlans } from '@/data/pricing'
import React from 'react'

const Services = () => {
  return (
    <>
      <HeroSection
  title="Our Services"
  description="Professional photography services designed to capture your special moments with creativity, passion, and attention to detail."
  height="h-[80vh]"
  showButtons={false}
  bg="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
      <section className="max-w-6xl mx-auto py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>
      <ServicesSection/>
    </>
  )
}

export default Services