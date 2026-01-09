import { rooms } from '@/data/rooms'
import RoomCard from '@/components/RoomCard'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata = {
  title: 'Rooms & Suites | Hotel City Kräme am Römer',
  description: 'Discover our comfortable rooms with modern amenities, free WiFi, and city views in the heart of Frankfurt.',
}

export default function RoomsPage() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center text-white pt-24 pb-16 md:pb-24" style={{ backgroundImage: "url('/images/building/bca8b9949b9e103e94b449d9998f6401.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-accent-900/85"></div>
        <div className="relative z-10 container-custom py-8 md:py-12">
          <div className="animate-fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 sm:mb-4">Our Rooms & Suites</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-2xl">
              Experience comfort and elegance in our well-appointed rooms, each designed to provide a perfect stay in Frankfurt.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rooms.map((room, index) => (
              <AnimateOnScroll key={room.id} direction="up" delay={index * 100}>
                <RoomCard room={room} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

