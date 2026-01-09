import Link from 'next/link'
import { FaHotel } from 'react-icons/fa'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-1.5 sm:p-2 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
        <FaHotel className="text-white text-lg sm:text-xl md:text-2xl transition-transform group-hover:scale-110" />
      </div>
      <div className="flex flex-col">
        <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-gray-900 leading-tight group-hover:text-primary-600 transition-colors">
          Hotel City
        </span>
        <span className="font-serif font-bold text-sm sm:text-base md:text-lg text-primary-600 leading-tight group-hover:text-accent-600 transition-colors">
          Kräme am Römer
        </span>
      </div>
    </Link>
  )
}

