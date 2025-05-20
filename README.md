# Eclypse Luxury Fashion Website

![Eclypse Logo](public/logo/logo.png)

## Overview

Eclypse is a premium luxury fashion brand website built with Next.js and Tailwind CSS. The website features a modern, elegant design with smooth animations, parallax effects, and a fully responsive layout. It includes both dark and light mode support, providing an exceptional user experience across all devices.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Animations & Effects**:
  - Parallax scrolling
  - Fade-in on scroll
  - Hover and micro-interactions
  - Smooth page transitions
  - Grain texture overlay
- **Modern UI Components**:
  - Custom video hero section
  - Product grid with hover effects
  - Interactive product details
  - Expandable accordion sections
  - Testimonial carousel
  - Custom cursor (desktop)
- **Pages**:
  - Home page with product showcase
  - Checkout page with form validation
  - Custom 404 error page
- **Accessibility**: Built with accessibility best practices

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first styling
- **Locomotive Scroll**: Smooth scrolling
- **Lucide Icons**: Consistent icon set
- **next-themes**: Dark/light mode implementation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/eclypse-fashion.git
   cd eclypse-fashion
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) **in your browser.**

## Project Structure

```text
eclypse-fashion/
├── app/                    # Next.js App Router
│   ├── checkout/           # Checkout page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── custom-cursor.tsx   # Custom cursor
│   ├── footer.tsx          # Footer
│   ├── grain-texture.tsx   # Grain texture overlay
│   ├── hero.tsx            # Hero section
│   ├── navbar.tsx          # Navigation bar
│   ├── page-transition.tsx # Page transitions
│   ├── parallax-section.tsx # Parallax effect
│   ├── philosophy.tsx      # Philosophy section
│   ├── product-accordion.tsx # Product accordion
│   ├── product-details.tsx # Product details
│   ├── product-grid.tsx    # Product grid
│   ├── smooth-scroll-provider.tsx # Smooth scroll
│   ├── testimonials.tsx    # Testimonials
│   └── theme-toggle.tsx    # Theme toggle
├── hooks/                  # Custom React hooks
│   └── use-mobile.tsx      # Mobile detection
├── public/                 # Static assets
│   ├── images/             # Images
│   ├── logo/               # Logos
│   └── videos/             # Videos
├── utils/                  # Utility functions
│   ├── animation.ts        # Animation utils
│   └── asset-path.ts       # Asset path utils
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind config
└── tsconfig.json           # TypeScript config
```

## Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme. The main theme uses black and white, with red accents and neutral grays.

### Adding New Pages

Add a new directory in the `app` folder with a `page.tsx` file. Example:

```text
app/about/page.tsx
```

### Modifying Components

All components are in the `components` directory and can be customized as needed.

## Browser Support

Tested on all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- **Design & Development:** [Your Name]
- **Images & Videos:** [Source]
- **Fonts:** Inter, Playfair Display (Google Fonts)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
