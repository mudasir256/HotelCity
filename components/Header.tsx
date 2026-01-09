'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/98 shadow-xl backdrop-blur-md border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className={`container-custom transition-all duration-500 ${isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'}`}>
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+4969284046"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors group"
            >
              <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
                <FaPhone className="text-primary-600 group-hover:text-white text-sm transition-colors" />
              </div>
              <span className="font-medium text-sm">+49 69 284046</span>
            </a>
            <Link 
              href="/#booking" 
              className="btn-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl transform rotate-90 transition-transform duration-300" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100 mt-4 pb-6 border-t border-gray-200 pt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+4969284046"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all"
            >
              <FaPhone className="text-primary-600" />
              <span className="font-medium">+49 69 284046</span>
            </a>
            <Link
              href="/#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center mt-2 mx-4"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

