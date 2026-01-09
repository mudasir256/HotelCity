import AmenitiesList from '@/components/AmenitiesList'

export const metadata = {
  title: 'Amenities & Services | Hotel City Kräme am Römer',
  description: 'Discover all the amenities and services available at Hotel City Kräme am Römer in Frankfurt.',
}

export default function AmenitiesPage() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center text-white pt-24 pb-16 md:pb-24" style={{ backgroundImage: "url('/images/building/bca8b9949b9e103e94b449d9998f6401.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 to-accent-900/85"></div>
        <div className="relative z-10 container-custom py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 sm:mb-4">Amenities & Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-2xl">
            Enjoy a wide range of amenities and services designed to make your stay comfortable and memorable.
          </p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <AmenitiesList />
        </div>
      </div>
    </div>
  )
}

