import Link from 'next/link'
import { FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-accent-900/90 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center animate-scale-in"
          style={{
            backgroundImage: "url('/images/building/bca8b9949b9e103e94b449d9998f6401.webp')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 animate-fade-in-down delay-100 px-4">
            Welcome to Hotel City Kräme am Römer
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-4 sm:mb-6 animate-fade-in delay-300 px-4">
            Centrally located in Frankfurt between historic Old Town and modern financial district
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg animate-fade-in delay-400 px-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="animate-pulse flex-shrink-0" />
              <span className="whitespace-nowrap">3 min walk to Römerburg square</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-400 animate-pulse flex-shrink-0" />
              <span>8.6 Rating</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-500 px-4 w-full sm:w-auto">
            <Link href="/#booking" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center group w-full sm:w-auto">
              Book Your Stay
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/rooms" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 w-full sm:w-auto text-center">
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

