import ContactForm from '@/components/ContactForm'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const Contact = () => {
  return (
    <>
      <HeroSection
        title="Contact Me"
        description="Have a project in mind or want to book a photography session? Feel free to reach out and let's create something amazing together."
        height="h-[80vh]"
        showButtons={false}
        bg="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ContactForm />
    </>
  )
}

export default Contact