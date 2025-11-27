import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Custom colors extracted from design screenshots
                'quiz-bg-start': '#A8D5E2',
                'quiz-bg-end': '#6DB4D4',
                'quiz-accent': '#F4C430', // Golden yellow for top border
                'quiz-teal': '#2C5F6F',
                'quiz-teal-light': '#3A7C8F',
                'quiz-blue-light': '#D4EBF7',
                'quiz-nav': '#B8E0F0',
                'quiz-nav-hover': '#9FD3E8',
                'quiz-gray': '#6B7280',
                'quiz-gray-light': '#E5E7EB',
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'quiz-card': '24px',
                'quiz-option': '12px',
            },
            boxShadow: {
                'quiz-card': '0 8px 32px rgba(0, 0, 0, 0.08)',
                'quiz-option': '0 2px 8px rgba(0, 0, 0, 0.04)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-in': 'slideIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}

export default config
