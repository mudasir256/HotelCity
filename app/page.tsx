import Hero from '@/components/Hero'
import FeaturedRooms from '@/components/FeaturedRooms'
import Amenities from '@/components/Amenities'
import Location from '@/components/Location'
import Testimonials from '@/components/Testimonials'
import BookingWidget from '@/components/BookingWidget'

export default function Home() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <FeaturedRooms />
      <Amenities />
      <Testimonials />
      <Location />
    </>
  )
}

