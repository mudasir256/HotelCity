import ContactForm from '@/components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata = {
  title: 'Contact Us | Hotel City Kräme am Römer',
  description: 'Get in touch with Hotel City Kräme am Römer. We are here to assist you with your booking and inquiries.',
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center text-white pt-24 pb-16 md:pb-24" style={{ backgroundImage: "url('/images/building/bca8b9949b9e103e94b449d9998f6401.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-accent-900/85"></div>
        <div className="relative z-10 container-custom py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-2xl">
            We're here to help you plan your perfect stay in Frankfurt. Get in touch with us today.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 sm:mb-8">Get in Touch</h2>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Address</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Neue Kräme 23<br />
                      60311 Frankfurt am Main<br />
                      Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FaPhone className="text-primary-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Phone</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      <a href="tel:+4969284046" className="hover:text-primary-600 transition">
                        +49 69 284046
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FaEnvelope className="text-primary-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      <a href="mailto:info@hotelcitykrame.de" className="hover:text-primary-600 transition break-all">
                        info@hotelcitykrame.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FaClock className="text-primary-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Check-in / Check-out</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Check-in: From 15:00<br />
                      Check-out: Until 12:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
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
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

