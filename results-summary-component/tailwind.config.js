/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      clr_neutral_1: 'hsl(var(--clr-neutral-hsl-1))',
      clr_neutral_2: 'hsl(var(--clr-neutral-hsl-2))',
      clr_neutral_3: 'hsl(var(--clr-neutral-hsl-3))',
      clr_neutral_4: 'hsl(var(--clr-neutral-hsl-4))',

      clr_primary_1: 'hsl(var(--clr-primary-hsl-1))',
      clr_primary_2: 'hsl(var(--clr-primary-hsl-2))',

      clr_secondary_1: 'hsl(var(--clr-secondary-hsl-1))',
      clr_secondary_2: 'hsl(var(--clr-secondary-hsl-2))',

      clr_accent_1: 'hsl(var(--clr-accent-hsl-1))',
      clr_accent_2: 'hsl(var(--clr-accent-hsl-2))',
      clr_accent_3: 'hsl(var(--clr-accent-hsl-3))',
      clr_accent_4: 'hsl(var(--clr-accent-hsl-4))',
    },
    extend: {
      fontFamily: {
        Hanken: 'Hanken Grotesk, sans-serif',
      },
    },
  },
  plugins: [],
}
