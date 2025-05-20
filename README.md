# Eclypse Luxury Fashion Website

![Eclypse Logo](public/logo/logo.png)

## Overview

Eclypse is a premium luxury fashion brand website built with Next.js and Tailwind CSS. The website features a modern, elegant design with smooth animations, parallax effects, and a fully responsive layout. It includes both dark and light mode support, providing an exceptional user experience across all devices.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Complete theme support with smooth transitions between modes
- **Animations & Effects**:
  - Parallax scrolling effects
  - Fade-in animations on scroll
  - Hover effects and micro-interactions
  - Smooth page transitions
  - Grain texture overlay for added visual interest
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
- **Accessibility**: Implemented with accessibility best practices

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **Locomotive Scroll**: For smooth scrolling effects
- **Lucide Icons**: For beautiful, consistent icons
- **next-themes**: For dark/light mode implementation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/eclypse-fashion.git
   cd eclypse-fashion
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
eclypse-fashion/
├── app/                    # Next.js App Router
│   ├── checkout/           # Checkout page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── custom-cursor.tsx   # Custom cursor component
│   ├── footer.tsx          # Footer component
│   ├── grain-texture.tsx   # Grain texture overlay
│   ├── hero.tsx            # Hero section
│   ├── navbar.tsx          # Navigation bar
│   ├── page-transition.tsx # Page transition component
│   ├── parallax-section.tsx # Parallax effect component
│   ├── philosophy.tsx      # Philosophy section
│   ├── product-accordion.tsx # Product accordion component
│   ├── product-details.tsx # Product details component
│   ├── product-grid.tsx    # Product grid component
│   ├── smooth-scroll-provider.tsx # Smooth scroll provider
│   ├── testimonials.tsx    # Testimonials component
│   └── theme-toggle.tsx    # Theme toggle component
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Hook for detecting mobile devices
├── public/                 # Static assets
│   ├── images/             # Image assets
│   ├── logo/               # Logo assets
│   └── videos/             # Video assets
├── utils/                  # Utility functions
│   ├── animation.ts        # Animation utility functions
│   └── asset-path.ts       # Asset path utility
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
\`\`\`

## Customization

### Changing Colors

The color scheme can be customized in the `tailwind.config.ts` file. The primary colors used are:

- Black and white for the main theme
- Red accents for interactive elements
- Neutral grays for supporting elements

### Adding New Pages

To add a new page, create a new directory in the `app` folder with a `page.tsx` file. For example:

\`\`\`
app/about/page.tsx
\`\`\`

### Modifying Components

All components are located in the `components` directory and can be modified to suit your needs.

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Design and Development: [Your Name]
- Images and Videos: [Source]
- Fonts: Inter, Playfair Display (Google Fonts)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
