# Wallet Shop - Premium Leather Goods E-commerce Website

A modern, responsive React e-commerce website for a premium wallet shop, built with React, Tailwind CSS, and Framer Motion for animations.

## Features

- 🛒 Full e-commerce UI with product listings
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions using Framer Motion
- 🎨 Modern, elegant design with premium aesthetics
- 🔍 Interactive product cards with hover effects
- 📰 Newsletter subscription with validation
- ⏰ Countdown timer for special offers
- 💬 Customer testimonials section
- 🛍️ Shopping cart icon with badge
- 🔎 Search functionality UI

## Project Structure

```
wallet-shop/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header with mobile menu
│   │   ├── Hero.jsx           # Hero section with CTA
│   │   ├── CategorySection.jsx # Product categories grid
│   │   ├── FeaturedProducts.jsx # Products showcase
│   │   ├── SpecialOffer.jsx   # Special offer with countdown
│   │   ├── Testimonials.jsx   # Customer reviews
│   │   ├── Newsletter.jsx     # Newsletter subscription
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and Tailwind
├── index.html                  # HTML entry point
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # Project documentation
```

## Tech Stack

- **React** - Functional components with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository or navigate to the project directory:

   ```bash
   cd wallet-shop
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- Primary: `#1a1a1a`
- Secondary: `#f5f5f5`
- Accent: `#c9a86c`

### Fonts

- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## Design Highlights

- **Hero Section**: Full-screen hero with animated background pattern, CTA buttons, and floating discount badge
- **Category Grid**: 4-column grid showcasing product categories with hover zoom effects
- **Product Cards**: Interactive cards with quick action buttons (wishlist, share) and "Add to Cart" on hover
- **Special Offer**: Dark section with countdown timer and animated discount badge
- **Testimonials**: Customer reviews with ratings and trust badges
- **Newsletter**: Subscription form with social media links
- **Footer**: Comprehensive footer with navigation links and contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes. Images are sourced from Unsplash and are placeholder images.
