import { Facebook, Hamburger, HamburgerIcon, Instagram, Menu, MenuIcon, Twitter, X } from 'lucide-react'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import ModeToggle from './ModeToggle'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const navItems = [
    {
      item: 'Home',
      link: '/'
    },
    {
      item: 'Portfolio',
      link: '/portfolio'
    },
    {
      item: 'Services',
      link: '/services'
    },
    {
      item: 'Contact',
      link: '/contact'
    },
  ]
  const iconItems = [
    {
      item: Facebook,
      link: '/'
    },
    {
      item: Twitter,
      link: '/'
    },
    {
      item: Instagram,
      link: '/'
    },
  ]

  return (
    <div className='w-full fixed top-0 left-0 z-[90] backdrop-blur-md bg-black/40'>
      <header className="max-w-6xl mx-auto text-white px-10 py-6 flex items-center justify-between ">
        <div>
          <img src='/logo.png' alt="logo" />
        </div>
        <nav
          className={`fixed  top-[83px] w-[calc(100%-5rem)] overflow-hidden
  transition-[max-height] duration-500
  ${showNav ? 'max-h-60 border' : 'max-h-0'}
  md:static md:w-auto md:max-h-none md:overflow-visible md:flex`}
        >
          <div className="flex flex-col gap-4 bg-white text-black p-4
  md:flex-row md:items-center md:gap-8 md:bg-transparent md:text-white md:p-0">

            {navItems.map((item, index) => (
              <Fragment key={index}>
                <Link to={item.link}
                  onClick={() => setShowNav(!showNav)}
                >{item.item}</Link>
                {item.item !== 'Contact' && <hr className="md:hidden" />}
              </Fragment>
            ))}

          </div>
        </nav>
        <div className='flex gap-6 hidden md:flex'>
          {
            iconItems.map((item, index) => {
              const Icon = item.item
              return (<a href="/" key={index} className='rounded-full p-2  outline-1 bg-black'>
                <Icon size={18} />
              </a>)
            })
          }
        </div>
        <MenuIcon className='md:hidden' onClick={() => {
          setShowNav(!showNav)
        }} />
        <ModeToggle />
      </header>
    </div>

  )
}

export default Header