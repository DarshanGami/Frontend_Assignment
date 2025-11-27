# 🎯 Quiz Application - Pixel-Perfect Implementation

A beautiful, interactive quiz web application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project features a pixel-perfect UI matching the provided Figma design.

![Quiz App Preview](./public/cat-paw.png)

## ✨ Features

### 🎨 Design & UI
- **Pixel-perfect implementation** matching Figma design specifications
- Beautiful gradient background (blue theme)
- Smooth animations and transitions
- Hover states on all interactive elements
- Responsive card-based layout
- Custom typography with Playfair Display serif font

### 🧠 Quiz Functionality
- **4 carefully crafted questions** testing general knowledge
- One question displayed at a time
- Previous/Next navigation with elegant arrow buttons
- Progress bar showing completion status
- Answer selection with visual feedback
- Score calculation based on correct answers

### 🎬 Animations
- Smooth score animation from 0 to final percentage
- Progress bar transitions
- Hover effects on buttons and options
- Card entrance animations

### ♿ Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
frontend/
├── public/
│   └── cat-paw.png          # Cat paw illustration
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main quiz page
│   ├── components/
│   │   ├── QuestionCard.tsx # Question display component
│   │   ├── ResultScreen.tsx # Result page with animation
│   │   ├── ProgressBar.tsx  # Progress indicator
│   │   └── NavigationArrows.tsx # Navigation buttons
│   └── data/
│       └── quizData.ts      # Quiz questions & types
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies
```

## 🎮 How to Use

1. **Start the Quiz**: The first question appears automatically
2. **Select an Answer**: Click on any option to select it
3. **Navigate**: Use the arrow buttons to move between questions
4. **View Results**: After answering all questions, see your animated score
5. **Restart**: Click "Start Again" to retake the quiz

## 📝 Quiz Questions

1. **What sound does a cat make?** (Correct: Meow-Meow)
2. **What would you probably find in your fridge?** (Correct: Ice Cream)
3. **What color are bananas?** (Correct: Yellow)
4. **How many stars are in the sky?** (Correct: Infinite)

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Playfair Display (Google Fonts)

## 🎨 Design Details

### Colors
- Primary Blue: `#1e5f7e`
- Light Blue: `#d4ebf2`
- Border Blue: `#89c7e6`
- Background Gradient: `#a8d8ea → #4891bf`

### Typography
- Title: Playfair Display (Italic, Serif)
- Body: System fonts

### Spacing & Sizing
- Card Border Radius: 32px
- Button Border Radius: 8px (rounded-lg)
- Padding: Consistent 12px (p-12 on card)

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Or simply:
   - Push to GitHub
   - Import repository in [Vercel Dashboard](https://vercel.com)
   - Vercel will auto-detect Next.js and deploy

### Environment Variables
No environment variables required for this project.

## 📊 Assumptions Made

1. **Desktop-first design**: Optimized for desktop viewing (as per requirements)
2. **Score calculation**: Based on number of correct answers
3. **Answer persistence**: Selected answers are remembered when navigating back
4. **Animation duration**: 2 seconds for score animation (smooth and visible)
5. **Cat paw visibility**: Shows only on the first question

## ⏱ Development Time

- **Planning & Setup**: 30 minutes
- **Component Development**: 2 hours
- **Styling & Pixel-Perfect Matching**: 1.5 hours
- **Animations & Polish**: 1 hour
- **Testing & Documentation**: 30 minutes
- **Total**: ~5.5 hours

## 🐛 Known Issues

None at this time. All features are working as expected.

## 🔄 Future Enhancements

- [ ] Add mobile responsiveness
- [ ] Implement question shuffle
- [ ] Add timer functionality
- [ ] Store results in local storage
- [ ] Add more question categories
- [ ] Implement difficulty levels
- [ ] Add sound effects
- [ ] Create leaderboard

## 📄 License

This project is created as an assignment and is available for educational purposes.

## 👤 Author

Created with ❤️ using Next.js and modern web technologies.

---

**Demo Link**: [Will be added after Vercel deployment]

**Note**: Make sure to run `npm install` before starting the development server!
