'use client'

import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="heading-secondary mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center">
            <FaHome className="mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

