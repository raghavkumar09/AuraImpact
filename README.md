# AuraImpact Landing Page

A premium, modern, responsive landing page for a spiritual/social impact platform (SaaS + NGO hybrid UI) built using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

-   **Premium Visual Design**: Harmonious warm and spiritual color palette combining saffron `#f96f24`, gold `#bf9e34`, warm beige `#FAF8F5`, and charcoal text.
-   **Fully Responsive**: Custom layouts optimized for Mobile, Tablet, and Desktop screens.
-   **Smooth Scroll Navigation**: Sticky glassmorphic navbar with scroll-spy active section indicator.
-   **Dark/Light Mode**: Full theme toggle with persistent preferences saved to `localStorage`.
-   **Floating Stats & Animations**: Framer Motion scroll reveal, hover micro-interactions, and floating hero elements.
-   **Animated Stats Counter**: Numeric counters that count up smoothly when scrolled into view.
-   **Interactive Campaigns Grid**: Glassmorphism campaign cards featuring animated progress bars.
-   **Testimonials Slider**: Auto-rotating, pause-on-hover carousel with manual arrow controls and indicators.
-   **Validated Contact Form**: Form validation for Name, Email, Phone, and Message with loading states and a custom success screen.
-   **Interactive Scroll Indicators**: Top scroll progress bar and a floating back-to-top button.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Typography**: Google Fonts (Plus Jakarta Sans & Playfair Display)

---

## 📂 Project Structure

```
.
├── public/                  # Static assets (images, logos)
│   ├── hero_spirituality.png
│   └── mission_community.png
├── src/
│   ├── app/                 # Next.js app router files
│   │   ├── globals.css      # Core style definitions & theme HSL variables
│   │   ├── layout.tsx       # Root layout injecting fonts & ThemeProvider
│   │   └── page.tsx         # Main entry point combining all sections
│   ├── components/          # Reusable UI component sections
│   │   ├── AboutMission.tsx # Mission & Values grid
│   │   ├── BackToTop.tsx    # Scroll to top button
│   │   ├── Campaigns.tsx    # Campaigns progress grid
│   │   ├── CTABanner.tsx    # Premium saffron-gold CTA
│   │   ├── Contact.tsx      # Validated interactive form
│   │   ├── Footer.tsx       # Newsletter & social indicators
│   │   ├── Hero.tsx         # Full-screen hero section
│   │   ├── Navbar.tsx       # Sticky glassmorphic nav
│   │   ├── ScrollProgress.tsx # Horizontal top scroll indicator
│   │   └── ThemeProvider.tsx # Theme toggling state provider
│   └── lib/                 # Shared utilities
│       └── utils.ts         # Class name merging utility (cn)
├── tailwind.config.ts       # Tailwind CSS custom themes & animations
├── tsconfig.json            # TypeScript configuration
└── package.json             # NPM dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Clone or download this project workspace.
2. Navigate to the project root directory:
   ```bash
   cd AuraImpact
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

### Build and Deployment

To compile the application for production:
```bash
npm run build
```

To run the production bundle locally:
```bash
npm run start
```
