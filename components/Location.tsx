import { FaMapMarkerAlt, FaWalking, FaTrain, FaPlane } from 'react-icons/fa'
import AnimateOnScroll from './AnimateOnScroll'

export default function Location() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimateOnScroll direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">Perfect Location</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Centrally located between historic Old Town and modern financial district
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <AnimateOnScroll direction="right" delay={200}>
            <div>
              <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl mb-4 sm:mb-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg transition-transform hover:scale-110 flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-600 text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Neue Kräme 23<br />
                      60311 Frankfurt am Main<br />
                      Germany
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <AnimateOnScroll direction="right" delay={300}>
                  <div className="flex items-start space-x-3 sm:space-x-4 group hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-primary-100 p-2 sm:p-3 rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                      <FaWalking className="text-primary-600 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Nearby Attractions</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        3-minute walk to Römerburg square • 5-minute walk to River Main • Close to Zeil shopping street
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="right" delay={400}>
                  <div className="flex items-start space-x-3 sm:space-x-4 group hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-primary-100 p-2 sm:p-3 rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                      <FaTrain className="text-primary-600 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Transport Links</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Quick connections to Frankfurt Trade Fair and Frankfurt Airport
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="right" delay={500}>
                  <div className="flex items-start space-x-3 sm:space-x-4 group hover:bg-gray-50 p-3 sm:p-4 rounded-lg transition-all duration-300">
                    <div className="bg-primary-100 p-2 sm:p-3 rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                      <FaPlane className="text-primary-600 text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Parking</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Public parking available 100 metres from the hotel
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="left" delay={300}>
            <div className="bg-gray-200 rounded-xl overflow-hidden aspect-square sm:aspect-video lg:aspect-square hover:shadow-xl transition-shadow duration-300 min-h-[300px] sm:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5!2d8.6847!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzM5LjIiTiA4wrA0MScwNC45IkU!5e0!3m2!1sen!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

