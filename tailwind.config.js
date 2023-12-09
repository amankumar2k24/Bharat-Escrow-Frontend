module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    boxSizing: true,
  }
}