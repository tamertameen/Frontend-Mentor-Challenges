/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        clr_neutral: 'hsl(var(--clr-neutral-hsl) / <alpha-value>)',
        clr_primary: 'hsl(var(--clr-primary-hsl) / <alpha-value>)',
        clr_secondary: 'hsl(var(--clr-secondary-hsl) / <alpha-value>)',
        clr_accent: 'hsl(var(--clr-accent-hsl) / <alpha-value>)',
      },

      fontFamily: {
        WorkSans: 'Work Sans, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '100vw',
      },
      boxShadow: {
        neutral_4: '0.5rem 1rem 3rem hsl(224, 30%, 27%, 0.2)',
      },
      fontSize: {
        fs_700: '1.75rem',
        fs_900: '5rem',
      },
      width: {
        custom: '36rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
      },
    },
  },
  plugins: [],
}
