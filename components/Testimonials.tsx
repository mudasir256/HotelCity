import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import AnimateOnScroll from './AnimateOnScroll'

const testimonials = [
  {
    name: 'Sarah & Michael',
    location: 'Couple from Berlin',
    rating: 5,
    text: 'Perfect location! We loved being so close to the historic Old Town. The room was clean, comfortable, and the self check-in was super convenient.',
    date: 'December 2023',
  },
  {
    name: 'Thomas',
    location: 'Business Traveler',
    rating: 5,
    text: 'Great hotel for business trips. Excellent WiFi, quiet rooms, and easy access to the financial district. Will definitely stay again.',
    date: 'November 2023',
  },
  {
    name: 'Emma Family',
    location: 'Family with Kids',
    rating: 5,
    text: 'Family-friendly hotel with spacious rooms. The kids loved the breakfast buffet, and we appreciated the pet-friendly policy for our dog.',
    date: 'October 2023',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">What Our Guests Say</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Couples in particular like the location – they rated it 8.6 for a two-person trip.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} direction="up" delay={index * 150}>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 transition-transform hover:scale-125" />
                  ))}
                </div>
                <FaQuoteLeft className="text-primary-200 text-2xl sm:text-3xl mb-3 sm:mb-4 transition-transform group-hover:scale-110" />
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-3 sm:pt-4">
                  <p className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

