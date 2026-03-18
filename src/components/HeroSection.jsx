import React from 'react'
import { Button } from "./ui/button";
import { useLocation } from 'react-router-dom';

const HeroSection = ({
  title,
  description,
  height = "h-screen",
  showButtons = true,
  bg = "/bg1.jpg"
}) => {
  const { pathname } = useLocation()
  return (
    <div className={`relative ${height}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <section className="max-w-6xl mx-auto text-white px-10 pt-80 space-y-6">

          <p className="uppercase">{pathname !== '/contact' && 'Welcome to '}</p>

          <h1 className="text-5xl font-bold">{title}</h1>

          <p className="mt-4 max-w-lg leading-7 opacity-90">
            {description}
          </p>

          {showButtons && (
            <div className="space-x-6">
              <Button variant="secondary" className="p-5 md:p-6 font-semibold rounded-full">
                Our Services
              </Button>

              <Button className="p-5 md:p-6 font-semibold rounded-full">
                Contact Me
              </Button>
            </div>
          )}

        </section>
      </div>
    </div>
  )
}

export default HeroSection