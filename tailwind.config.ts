import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ff007b",
        
"secondary": "#0061db",
        
"accent": "#00ca21",
        
"neutral": "#150b17",
        
"base-100": "#142a30",
        
"info": "#00e4ff",
        
"success": "#6eff61",
        
"warning": "#ff7e00",
        
"error": "#ff446a",
"body": {"background-color": "#e3e6e6e",}
        },
      },
    ],
  },
}
export default config
