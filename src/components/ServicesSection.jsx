import React from 'react'
import ServicesCard from "./ui/ServicesCard";
import { services } from "@/data/services";
const ServicesSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}

      </div>

    </section>
  )
}

export default ServicesSection