module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        light: '#F0F0F0',
        DEFAULT: '#808080',
      },
      'red': '#E6553B',
    },
    extend: {
      height: {
        'half-screen': '50vh',
      },
      fontFamily:{
        'sans': ['Noto Sans TC', 'system-ui', 'sans-serif'],
        'dis1': ['Squada One'],
        'dis2': ['Paytone One'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}