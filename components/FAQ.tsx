'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { faqs } from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-sm sm:text-base text-gray-900 pr-3 sm:pr-4">{faq.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="text-primary-600 flex-shrink-0 text-sm sm:text-base" />
            ) : (
              <FaChevronDown className="text-primary-600 flex-shrink-0 text-sm sm:text-base" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

