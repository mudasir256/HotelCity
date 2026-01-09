# Hotel City Kräme am Römer - Website

A professional, modern website for Hotel City Kräme am Römer in Frankfurt, Germany. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏨 **Homepage** with hero section, featured rooms, amenities, and testimonials
- 🛏️ **Rooms Page** showcasing all available room types with detailed information
- 📅 **Booking Widget** for date selection and room search
- ✨ **Amenities Page** displaying all hotel services and facilities
- 📞 **Contact Page** with contact form, location map, and hotel information
- ❓ **FAQ Page** with common questions and answers
- 📱 **Fully Responsive** design for all devices
- 🎨 **Modern UI** with beautiful gradients and animations
- ⚡ **Fast Performance** with Next.js optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
city-hotel/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── rooms/             # Rooms listing page
│   ├── amenities/         # Amenities page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Logo.tsx           # Hotel logo
│   ├── Hero.tsx           # Hero section
│   ├── BookingWidget.tsx  # Booking form
│   ├── RoomCard.tsx       # Room card component
│   └── ...                # Other components
├── data/                  # Data files
│   ├── rooms.ts           # Room data
│   ├── amenities.ts       # Amenities data
│   └── faq.ts             # FAQ data
└── types/                 # TypeScript types
    └── room.ts            # Room interface
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **date-fns** - Date manipulation

## Hotel Information

- **Name**: Hotel City Kräme am Römer - Self Check In
- **Address**: Neue Kräme 23, 60311 Frankfurt am Main, Germany
- **Phone**: +49 69 284046
- **Check-in**: From 15:00
- **Check-out**: Until 12:00

## Features Implemented

✅ Responsive navigation with mobile menu
✅ Hero section with call-to-action
✅ Booking widget with date selection
✅ Room listings with images and details
✅ Amenities showcase
✅ Contact form and location map
✅ FAQ accordion
✅ Testimonials section
✅ Modern, professional design
✅ SEO-friendly metadata

## Customization

You can easily customize:
- Colors in `tailwind.config.js`
- Hotel data in `data/` directory
- Room information in `data/rooms.ts`
- Amenities in `data/amenities.ts`
- FAQ questions in `data/faq.ts`

## License

This project is created for Hotel City Kräme am Römer.

# HotelCity
