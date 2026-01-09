import Link from 'next/link'
import { rooms } from '@/data/rooms'
import RoomCard from './RoomCard'
import { FaArrowRight } from 'react-icons/fa'
import AnimateOnScroll from './AnimateOnScroll'

export default function FeaturedRooms() {
  const featuredRooms = rooms.slice(0, 3)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Featured Rooms</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Experience comfort and elegance in our well-appointed rooms, each designed to provide a perfect stay in Frankfurt.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredRooms.map((room, index) => (
            <AnimateOnScroll key={room.id} direction="up" delay={index * 100}>
              <RoomCard room={room} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll direction="up" delay={400}>
          <div className="text-center">
            <Link href="/rooms" className="btn-secondary inline-flex items-center group">
              View All Rooms
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

