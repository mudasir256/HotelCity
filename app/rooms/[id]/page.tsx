import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { rooms } from '@/data/rooms'
import { FaBed, FaUsers, FaWifi, FaTv, FaSnowflake, FaArrowLeft, FaCheck, FaRulerCombined } from 'react-icons/fa'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export async function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id === params.id)
  
  if (!room) {
    return {
      title: 'Room Not Found',
    }
  }

  return {
    title: `${room.name} | Hotel City Kräme am Römer`,
    description: room.description,
  }
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id === params.id)

  if (!room) {
    notFound()
  }

  const content = (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="relative bg-cover bg-center text-white pt-24 pb-16 md:pb-24" style={{ backgroundImage: `url('${room.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-accent-900/85"></div>
        <div className="relative z-10 container-custom py-8 md:py-12">
          <Link 
            href="/rooms" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-all duration-300 hover:translate-x-[-4px] group"
          >
            <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Rooms
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 animate-fade-in-down">{room.name}</h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-3xl animate-fade-in delay-200">{room.description}</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Image */}
              <AnimateOnScroll direction="scale" delay={200}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Room Details */}
              <AnimateOnScroll direction="up" delay={300}>
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">Room Details</h2>
                
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <FaRulerCombined className="text-primary-600 text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">Room Size</h3>
                        <p className="text-sm sm:text-base text-gray-600">{room.size || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <FaBed className="text-primary-600 text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">Bed Type</h3>
                        <p className="text-sm sm:text-base text-gray-600">{room.beds}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <FaUsers className="text-primary-600 text-xl sm:text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">Capacity</h3>
                        <p className="text-sm sm:text-base text-gray-600">Up to {room.capacity} guests</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <span className="text-primary-600 text-xl sm:text-2xl font-bold">★</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">Rating</h3>
                        <p className="text-sm sm:text-base text-gray-600">{room.rating} / 5.0</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 sm:pt-6">
                    <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">Description</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {room.description}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      This room features double-glazed windows for a peaceful stay, free high-speed WiFi, 
                      and modern amenities to ensure your comfort. Located in the heart of Frankfurt, 
                      you'll have easy access to the historic Old Town, shopping districts, and major attractions.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Amenities */}
              <AnimateOnScroll direction="up" delay={400}>
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">Room Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                        <FaCheck className="text-primary-600 flex-shrink-0 text-sm sm:text-base" />
                        <span className="text-sm sm:text-base text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Standard Amenities */}
              <AnimateOnScroll direction="up" delay={500}>
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">Standard Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaWifi className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Free WiFi</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaTv className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Flat-Screen TV with Satellite Channels</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaSnowflake className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Air Conditioning</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Private Bathroom with Shower</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Double-Glazed Windows</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Safety Deposit Box</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Desk & Work Area</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Hairdryer</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Telephone</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <FaCheck className="text-primary-600 text-sm sm:text-base flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">Wake-up Service</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar - Booking & Pricing */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                {/* Pricing Card */}
                <AnimateOnScroll direction="left" delay={200}>
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                        €{room.price}
                      </div>
                      <div className="text-sm sm:text-base text-gray-600">per night</div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Room Size:</span>
                        <span className="font-semibold">{room.size || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Max Guests:</span>
                        <span className="font-semibold">{room.capacity}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Bed Type:</span>
                        <span className="font-semibold">{room.beds}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          {room.rating}
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <Link 
                        href="/#booking" 
                        className="btn-primary w-full text-center block text-sm sm:text-base"
                      >
                        Book This Room
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Hotel Info */}
                <AnimateOnScroll direction="left" delay={300}>
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Hotel Information</h3>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div>
                        <span className="text-gray-600">Check-in:</span>
                        <span className="font-semibold ml-2">From 15:00</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Check-out:</span>
                        <span className="font-semibold ml-2">Until 12:00</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cancellation:</span>
                        <span className="font-semibold ml-2">Free cancellation</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Payment:</span>
                        <span className="font-semibold ml-2">Cashless available</span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Contact */}
                <AnimateOnScroll direction="left" delay={400}>
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4">Need Help?</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                      Have questions about this room? Contact us for more information.
                    </p>
                    <Link 
                      href="/contact" 
                      className="btn-secondary w-full text-center block text-sm sm:text-base"
                    >
                      Contact Us
                    </Link>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return content
}
