/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primaryLightColor: '#fcfdfd',
      primaryDarkColor: '#14152c',
      buttonColor: '#f49c07',
      primaryLightTxtColor: '#000',
      primaryDarkTxtColor: '#fff',
      secondaryTextColor: '#A9A7BB',
      secondaryLightColor: '#f2f3f2',
      secondaryDarkColor: '#1d1d36',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.fuchsia,
      green: colors.emerald,
      purple: colors.violet,
      red: colors.red,
      blue: colors.blue,
    },
  },
  plugins: [],
};
