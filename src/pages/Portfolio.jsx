import HeroSection from '@/components/HeroSection'
import PortfolioGallery from '@/components/PortfolioGallery'
import React from 'react'
import { portfolioImages } from '@/data/portfolio'
import { portfolioImages2 } from '@/data/portfolio2'

const Portfolio = () => {
  return (
    <>
      <HeroSection
        title="Our Portfolio"
        description="Take a look at our finest photography work showcasing creativity, passion, and moments captured from around the world."
        height="h-[80vh]"
        showButtons={false}
        bg="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PortfolioGallery data={portfolioImages2}/>
    </>
  )
}

export default Portfolio