import Link from 'next/link'
import Logo from './Logo'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm sm:text-base text-gray-400">
              Centrally located hotel in Frankfurt between historic Old Town and modern financial district.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm">
                  Neue Kräme 23<br />
                  60311 Frankfurt am Main<br />
                  Germany
                </span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <FaPhone className="text-primary-400 flex-shrink-0 text-sm sm:text-base" />
                <a href="tel:+4969284046" className="hover:text-white transition-colors text-xs sm:text-sm">
                  +49 69 284046
                </a>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3">
                <FaEnvelope className="text-primary-400 flex-shrink-0 text-sm sm:text-base" />
                <a href="mailto:info@hotelcitykrame.de" className="hover:text-white transition-colors text-xs sm:text-sm break-all">
                  info@hotelcitykrame.de
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Policies</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>Check-in: From 15:00</li>
              <li>Check-out: Until 12:00</li>
              <li>Pet-friendly</li>
              <li>Free WiFi</li>
              <li>Self Check-in Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hotel City Kräme am Römer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

