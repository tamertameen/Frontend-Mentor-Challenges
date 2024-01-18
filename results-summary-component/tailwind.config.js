/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      /* Test Opacity*/
      test_red: 'hsl(var(--test-red))',
      test_red_1: 'hsl(var(--test-red-1))',
      test_red_0: 'hsl(var(--test-red-0))',

      /* Primary */
      Primary_Light_Red: 'hsl(var(--light-red))',
      Primary_Orangey_Yellow: 'hsl(var(--orangey-yellow))',
      Primary_Green_Teal: 'hsl(var(--green-teal))',
      Primary_Cobalt_Blue: 'hsl(var(--cobalt-blue))',

      /* Gradients */
      Gradient_Slate_Blue: 'hsl(var(--light-slate-blue))',
      Gradient_Royal_Blue: 'hsl(var(--light-royal-blue))',
      Gradient_Violet_Blue: 'hsl(var(--violet-blue))',
      Gradient_Persian_Blue: 'hsl(var(--persian-blue))',

      /* Neutral */

      Neutral_White: 'hsl(var(--white))',
      Neutral_Pale_Blue: 'hsl(var(--pale-blue))',
      Neutral_Light_Lavender: 'hsl(var(--light-lavender))',
      Neutral_Dark_Gray_Blue: 'hsl(var(--dark-gray-blue))',
    },
    extend: {
      fontFamily: {
        Hanken: 'Hanken Grotesk, sans-serif',
      },
    },
  },
  plugins: [],
}
