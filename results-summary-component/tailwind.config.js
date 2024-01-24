/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        clr_neutral_1: 'hsl(var(--clr-neutral-hsl-1) / <alpha-value>)',
        clr_neutral_2: 'hsl(var(--clr-neutral-hsl-2) / <alpha-value>)',
        clr_neutral_3: 'hsl(var(--clr-neutral-hsl-3) / <alpha-value>)',
        clr_neutral_4: 'hsl(var(--clr-neutral-hsl-4) / <alpha-value>)',

        clr_primary_1: 'hsl(var(--clr-primary-hsl-1) / <alpha-value>)',
        clr_primary_2: 'hsl(var(--clr-primary-hsl-2) / <alpha-value>)',

        clr_secondary_1: 'hsl(var(--clr-secondary-hsl-1) / <alpha-value>)',
        clr_secondary_2: 'hsl(var(--clr-secondary-hsl-2) / <alpha-value>)',

        clr_accent_1: 'hsl(var(--clr-accent-hsl-1) / <alpha-value>)',
        clr_accent_2: 'hsl(var(--clr-accent-hsl-2) / <alpha-value>)',
        clr_accent_3: 'hsl(var(--clr-accent-hsl-3) / <alpha-value>)',
        clr_accent_4: 'hsl(var(--clr-accent-hsl-4) / <alpha-value>)',
      },

      fontFamily: {
        Hanken: 'Hanken Grotesk, sans-serif',
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
      maxWidth: {
        mw_46: '46rem',
      },
    },
  },
  plugins: [],
}
