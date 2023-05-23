/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#001F3D",
            lg: "#151983"
          },
          secondary: {
            DEFAULT: "#1863D6",
            xs: "#B6CBE1",
            md: "#155083",
            lg: "#481583"
          },
          gray: {
            DEFAULT: "#89949b"
          }
        }
      },
      fontFamily: {
        'freight': ['Fira Sans'],
        'fira': ['Fira Sans']
      }
    },
  },
  plugins: [],
}

