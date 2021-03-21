module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['hover'],
      backgroundColor: ['hover'],
      textColor: ['hover']
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
