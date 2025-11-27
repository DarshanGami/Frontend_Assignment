import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Figma Design Colors
                'primary-dark': '#15313D',
                'primary-blue': '#69C5E1',
                'primary-light': '#96E5FF',
                'primary-light-80': '#96E5FF80',
                'primary-light-5': '#96E5FF0D',
                'secondary-blue': '#6FC6E2',
                'secondary-blue-2': '#77C7E3',
                'accent-blue': '#3CABDA',
                'bg-light': '#F4FDFF',
                'bg-gray': '#E3E3E3',
                'bg-gray-2': '#E6E6E6',
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
                'gradient-light': 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
                'gradient-light-10': 'linear-gradient(89.72deg, rgba(198, 233, 247, 0.1) 0.09%, rgba(229, 248, 255, 0.1) 99.91%)',
                'gradient-complex': 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)',
                'gradient-glass': 'linear-gradient(112.86deg, rgba(255, 255, 255, 0.4) -6.68%, rgba(255, 255, 255, 0.12) 45.63%, rgba(255, 255, 255, 0.4) 103.45%)',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
};
export default config;
