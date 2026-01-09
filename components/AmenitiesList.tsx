import { amenities } from '@/data/amenities'
import { IconType } from 'react-icons'

export default function AmenitiesList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {amenities.map((amenity, index) => {
        const Icon = amenity.icon
        return (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-3 sm:space-x-4"
          >
            <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
              <Icon className="text-primary-600 text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{amenity.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{amenity.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

