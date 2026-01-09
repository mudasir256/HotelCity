'use client'

import { useState } from 'react'
import { FaCalendarAlt, FaUsers, FaSearch } from 'react-icons/fa'
import { format, addDays } from 'date-fns'

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [checkOut, setCheckOut] = useState(format(addDays(new Date(), 1), 'yyyy-MM-dd'))
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would redirect to a booking page or open a booking modal
    window.open('https://www.booking.com/hotel/de/neuekraeme.en-us.html?aid=1188619&label=6960ffbdb63884449d598ce3&sid=017965d2d4a8bb8a4eb1a55ce46c6d97&all_sr_blocks=6155102_91904271_0_0_0&checkin=2026-01-11&checkout=2026-01-12&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=6155102_91904271_0_0_0&hpos=2&matching_block_id=6155102_91904271_0_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=distance_from_search&sr_pri_blocks=6155102_91904271_0_0_0__4050&srepoch=1767964644&srpvid=7b4f5d60338804f4&type=total&ucfs=1&#hotelTmpl', '_blank')
  }

  return (
    <section id="booking" className="section-padding bg-white -mt-10 sm:-mt-20 relative z-30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-scale-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-6 sm:mb-8">Book Your Stay</h2>
            <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-2 text-primary-600" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-2 text-primary-600" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaUsers className="inline mr-2 text-primary-600" />
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rooms
                </label>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2 sm:mb-2"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Room' : 'Rooms'}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center group text-sm sm:text-base"
                >
                  <FaSearch className="mr-2 transition-transform group-hover:rotate-12" />
                  Search
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500 text-center mt-4">
              Best price guaranteed • Free cancellation • No booking fees
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

