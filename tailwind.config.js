/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'shorten-desktop': "url('./assets/images/bg-shorten-desktop.svg')",
        'boost-desktop': "url('./assets/images/bg-boost-desktop.svg')",
      },
      colors: {
        'primary-cyan': 'hsl(var(--primary-cyan))',
        'primary-dark-violet': 'hsl(var(--primary-dark-violet))',
        'secondary-red': 'hsl(var(--secondary-red))',
        'neutral-gray': 'hsl(var(--neutral-gray))',
        'neutral-grayfish-violet': 'hsl(var(--neutral-grayfish-violet))',
        'neutral-very-dark-blue': 'hsl(var(--neutral-very-darl-blue))',
        'neutral-very-dark-violet': 'hsl(var(--neutral-very-dark-violet))',
        'neutral-light': 'rgb(239,241,247)',
      },
    },
  },
  plugins: [],
};
