import { amenities } from '@/data/amenities'
import { IconType } from 'react-icons'
import AnimateOnScroll from './AnimateOnScroll'

interface Amenity {
  icon: IconType
  title: string
  description: string
}

export default function Amenities() {
  const featuredAmenities = amenities.slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Hotel Amenities</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Enjoy a wide range of amenities and services designed to make your stay comfortable and memorable.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredAmenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <AnimateOnScroll key={index} direction="scale" delay={index * 100}>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-primary-100 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-primary-600 text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{amenity.description}</p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

