import Image from 'next/image'
import Link from 'next/link'
import { FaBed, FaUsers, FaWifi, FaTv, FaSnowflake } from 'react-icons/fa'
import { Room } from '@/types/room'

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold transform transition-transform group-hover:scale-105">
          €{room.price}/night
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {room.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">{room.description}</p>
        
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center space-x-2 transition-transform hover:scale-110">
            <FaBed className="text-primary-600" />
            <span>{room.beds}</span>
          </div>
          <div className="flex items-center space-x-2 transition-transform hover:scale-110">
            <FaUsers className="text-primary-600" />
            <span>{room.capacity} Guests</span>
          </div>
          <div className="flex items-center space-x-2 transition-transform hover:scale-110">
            <FaWifi className="text-primary-600" />
            <span>Free WiFi</span>
          </div>
          {room.amenities.includes('AC') && (
            <div className="flex items-center space-x-2 transition-transform hover:scale-110">
              <FaSnowflake className="text-primary-600" />
              <span>AC</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
            <span className="text-xs sm:text-sm text-gray-600">({room.rating})</span>
          </div>
          <Link href={`/rooms/${room.id}`} className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 group/link w-full sm:w-auto text-center">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

