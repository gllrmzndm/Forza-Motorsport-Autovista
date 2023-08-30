/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Environment: "Environment",
        Robot: "Robot",
      },
      transitionDuration: {
        '10000': '10000ms',
        '15000': '15000ms',
        '20000': '20000ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}