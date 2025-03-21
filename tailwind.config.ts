import type { Config } from 'tailwindcss'
import tailwindAnimate from "tailwindcss-animate"

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./index.html", "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
  	extend: {
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
  			custom: {
  				'dark-gray': '#2f2f32',
  				'dark-gray-active': '#535359',
  				'footer-bg': '#19191c',
  				'light-gray': '#acacaf',
  				'periwinkle': '#ededf0',
  				'active-gray': '#E0E0E0',
  				'primary-500': '#A55313',
  				'primary-400': '#B05E1D',
  				'shadow-image': '2px 10px 4px 0px #00000040',
  				'info-bg': '#0973dc',
  				'success-bg': '#34A853',
  				'error-bg': '#BC1F1F'
  			}
  		},
  		screens: {
			'sm-430': {
				max: '432px'
			},
			'sm-425': {
				max: '428px'
			},
			'sm-344': {
				max: '345px'
			},
			'sm-320': {
				max: '321px'
			},
			'sm-390': {
				max: '392px'
			},
			'sm-375': {
				max: '379px'
			},
			'md-768': {
				max: '770px'
			},
			'md-762': {
				max: '762px'
			},
			'md-820': {
				max: '823px'
			},
			'md-853': {
				max: '854px'
			},
			'md-540': {
				max: '541px'
			},
		  'md-600': {max: '602px'},
			'md-667': {
				max: '669px'
			},
			'md-736': {
				max: '736px'
			},
			'md-767': {
				max: '767px'
			},
			'md-912': {
				max: '912px'
			},
			'lg-1024': {
				max: '1024px'
			}
		},
  		fontFamily: {
			space: [
  				'Space Grotesk',
  				'serif'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    tailwindAnimate
  ],
} satisfies Config

