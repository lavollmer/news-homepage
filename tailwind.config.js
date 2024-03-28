/** @type {import('tailwindcss').Config} */
module.exports = {
  // content array is to specify the files that Tailwind should look for classes in
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter-regular': ['Inter-Regular', 'sans-serif'],
        'inter-bold': ['Inter Bold', 'sans-serif'],
        'inter-extra-bold': ['Inter ExtraBold', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['focus'], // this line enables focus for ring
      outline: ['focus'], // this line enables focus for outline
    },
  },
  plugins: [],
}

