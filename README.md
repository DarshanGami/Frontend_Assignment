# Quiz Application

A beautiful, quiz application built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This project demonstrates modern web development practices with a focus on accessibility, animations, and clean code architecture.

![Quiz App](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

## Features

✨ **Pixel-Perfect Design** - Matches the provided Figma screenshots exactly  
🎨 **Beautiful UI** - Gradient backgrounds, glassmorphism effects, smooth animations  
♿ **Fully Accessible** - WCAG 2.1 compliant with keyboard navigation and ARIA labels  
📱 **Responsive** - Desktop-first design with graceful scaling  
🎭 **Smooth Animations** - Framer Motion powered transitions and micro-interactions  
⚡ **Fast & Modern** - Built with Next.js 14 App Router and React Server Components  
🔒 **Type-Safe** - Full TypeScript coverage with strict mode  
🧪 **Tested** - Unit tests for quiz logic  

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Code Quality:** ESLint + Prettier
- **Testing:** Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The application will hot-reload as you make changes.

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

## Project Structure

```
quiz-app/
├── public/
│   └── assets/
│       └── mascot.svg          # Cat paw mascot
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Quiz page
│   │   ├── results/
│   │   │   └── page.tsx        # Results page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/
│   │   │   ├── QuizCard.tsx    # Main card container
│   │   │   ├── ProgressBar.tsx # Progress indicator
│   │   │   ├── OptionButton.tsx # Quiz option button
│   │   │   ├── NavigationButton.tsx # Nav arrows
│   │   │   └── Button.tsx      # Reusable button
│   │   └── quiz/
│   │       ├── QuestionHeader.tsx # Quiz title
│   │       ├── QuestionCard.tsx   # Question container
│   │       ├── Mascot.tsx         # Best of Luck card
│   │       └── ResultCard.tsx     # Score display
│   ├── hooks/
│   │   └── useQuiz.ts          # Quiz state management
│   └── lib/
│       ├── types.ts            # TypeScript types
│       └── quizData.ts         # Quiz questions & logic
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Features Implemented

### Quiz Flow
- ✅ 4 quiz questions with multiple choice options
- ✅ Progress bar showing current question (1/4, 2/4, 3/4, 4/4)
- ✅ Previous/Next navigation buttons
- ✅ Submit button on final question
- ✅ Score calculation and percentage display
- ✅ "Start Again" functionality to reset quiz

### Design Elements
- ✅ Gradient background (blue tones)
- ✅ White card with golden top border accent
- ✅ Glassmorphism effect on cards
- ✅ "Best of Luck!" mascot on first question
- ✅ Serif italic heading typography
- ✅ Smooth animations and transitions

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance (WCAG AA)
- ✅ Screen reader friendly

### Interactions
- ✅ Hover states on buttons and options
- ✅ Click animations with Framer Motion
- ✅ Page transition animations
- ✅ Progress bar fill animations
- ✅ Score reveal animation

## Quiz Questions

1. **What sound does a cat make?**
   - Bhau-Bhau
   - Meow-Meow ✓
   - Oink-Oink

2. **What would you probably find in your fridge?**
   - Shoes
   - Ice Cream ✓
   - Books

3. **What color are bananas?**
   - Blue
   - Yellow ✓
   - Red

4. **How many stars are in the sky?**
   - Two
   - Infinite ✓
   - One Hundred

## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)

## Performance

- ✅ Optimized bundle size
- ✅ Code splitting
- ✅ Fast initial page load
- ✅ Smooth 60fps animations
- ✅ Lazy loading where applicable

## Notes

- This is a **frontend-only** implementation with no backend
- Quiz data is stored in memory (resets on page refresh)
- Designed for desktop screens (1440px target) with responsive scaling
- All design elements match the provided Figma screenshots

## License

This project is created for educational/assignment purposes.

## Author

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

---

**Need help?** Check the Next.js documentation at [nextjs.org/docs](https://nextjs.org/docs)
