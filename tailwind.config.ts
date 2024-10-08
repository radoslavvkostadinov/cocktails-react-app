/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'orange-wall': "url('/src/images/fresh.jpg')",
				'wallpaper': "url('/src/images/wallpaper.jpg')",
				'orange-gradient': "url('/src/images/orange-gradient.jpg')",
				'pattern': "url('/src/images/pattern.jpg')",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				fontFamily: {
					roboto: ['Roboto', 'sans-serif'],
				},
				screens: {
					'xs': '400px',
					'sm': '640px',
					'md': '768px',
					'lg': '1050px',
					'xl': '1380px',
					'2xl': '1920px',
				},
				gridTemplateColumns: {
					"two-by-two": "minmax(0, 1fr) 12px minmax(0, 1fr)",
				},
				gridTemplateRows: {
					"sm-main-grid":
						"minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.4fr) minmax(0, 1fr) minmax(0, 1fr)",
					"md-main-grid":
						"minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.6fr) minmax(0, 1fr) minmax(0, 1fr)",
					"xl-main-grid":
						"minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 1fr)",
				},

			}
		}
	},
	plugins: [tailwindcssAnimate],
}

