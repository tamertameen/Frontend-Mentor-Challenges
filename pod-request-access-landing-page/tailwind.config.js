/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        clr_primary: 'hsl(var(--clr-primary-hsl) / <alpha-value>)',
        clr_hover: 'hsl(var(--clr-hover-hsl) / <alpha-value>)',
        clr_secondary_1: 'hsl(var(--clr-secondary-1-hsl) / <alpha-value>)',
        clr_secondary_2: 'hsl(var(--clr-secondary-2-hsl) / <alpha-value>)',
        clr_secondary_3: 'hsl(var(--clr-secondary-3-hsl) / <alpha-value>)',
        clr_secondary_4: 'hsl(var(--clr-secondary-4-hsl) / <alpha-value>)',
        clr_neutral: 'hsl(var(--clr-neutral-hsl) / <alpha-value>)',
      },

      fontFamily: {
        Chivo: 'Chivo, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '100vw',
      },
      boxShadow: {
        secondary_1: '0.5rem 1rem 3rem hsl(224, 30%, 27%, 0.2)',
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
        120: '30rem',
        160: '40rem',
        200: '50rem',
      },
      backgroundImage: {
        desktop: "url('../assets/desktop/image-host.jpg')",
        mobile: "url('../assets/mobile/image-host.jpg')",
        tablet: "url('../assets/tablet/image-host.jpg')",
      },
    },
  },
  plugins: [],
}
