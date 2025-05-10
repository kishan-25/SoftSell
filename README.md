# SoftSell - Software License Marketplace

## Project Overview
SoftSell is a responsive, marketing website for a fictional software resale startup. The platform serves as a marketplace for buying and selling software licenses, offering secure transactions backed by escrow protection and AI-powered verification.

## Features Implemented

### 1. Responsive UI Components
- **Navbar**: Fully responsive navigation with mobile hamburger menu and dark/light mode toggle
- **Hero Section**: Dynamic headline with animation effects and clear call-to-action buttons
- **How It Works**: Three-step process with icons and descriptions
- **Why Choose Us**: Four key features with icons and descriptions
- **Testimonials**: Customer reviews with star ratings
- **Contact Form**: Complete form with validation and success feedback
- **Footer**: Comprehensive footer with contact details and navigation links

### 2. Technical Features
- **Modern React Implementation**: Functional components with React Hooks
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Dark/Light Mode**: Complete theme toggle functionality throughout the app
- **Form Validation**: Frontend validation for the contact form
- **Animation Effects**: Using Framer Motion for engaging UI interactions
- **Component Architecture**: Modular and reusable component structure

### 3. Design Elements
- **Color Scheme**: 
  - Light Mode: Lime green accent with black/white contrast
  - Dark Mode: Blue accent with dark gray background
- **Typography**: Clean hierarchy with varying weights for readability
- **Icons**: Lucide React icons for consistent visual language
- **Motion Design**: Subtle animations to enhance user experience
- **Visual Feedback**: Interactive elements provide feedback on hover/click

## Tech Stack
- **Framework**: React.js
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Code Structure**: ES6+, modular components

## Implementation Details

### Responsive Navigation
The navigation adjusts for different screen sizes, with a hamburger menu on mobile and expanded navigation on desktop. The dark mode toggle persists across all views.

### Form Validation
The contact form includes:
- Required field validation
- Email format validation
- Success state feedback
- Form reset functionality

### Animation System
Animations are implemented throughout the site:
- Entrance animations for section headers
- Hover effects on interactive elements
- Text rotation in the hero section
- Staggered animations for list items

### Accessibility Considerations
- Semantic HTML structure
- ARIA labels for interactive elements
- Sufficient color contrast in both themes
- Keyboard navigable components

## Design Choices

### Using Lime Green and Blue as Brand Colors
The color scheme was chosen to convey trust (blue in dark mode) and freshness/value (lime in light mode), important qualities for a marketplace dealing with software licenses.

### Animated Hero Text
The rotating words in the hero section ("Excitement", "Discounts", "Deals") immediately communicate the value proposition without requiring users to scroll.

### Card-Based Content Layout
Information is presented in card-based components to chunk content into digestible pieces, making it easier for users to scan and understand the offering.

### Visual Progress Indicators
The "How It Works" section uses visual connectors between steps to clearly illustrate the process flow, helping users understand the service quickly.

## Running Locally
1. Clone the repository:
```bash
git clone https://github.com/kishan-25/SoftSell.git
```
2. Install dependencies:
```bash
cd softsell
npm install
```
3. Start the development server:
```bash
npm start
```