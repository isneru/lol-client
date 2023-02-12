/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif"
    },
    extend: {
      colors: {
        background: "#f9f9f9",
        text: "#0a0a0a",
        riot: {
          primary: "#eb0029",
          hover: "#c73033"
        },
        facebook: {
          primary: "#1877f2",
          hover: "#0966de"
        },
        google: {
          primary: "#ffffff",
          hover: "#f7f7f7"
        },
        apple: {
          primary: "#000000",
          hover: "#141414"
        },
        xbox: {
          primary: "#107c10",
          hover: "#076907"
        },
        input: {
          background: "#ededed",
          placeholder: "#919191",
          text: "#0a0a0a",
          border: "#333333"
        }
      },
      backgroundImage: {
        worldchamps17: "url('/group-worldchamps2017-splash.jpg')"
      }
    }
  },
  plugins: []
}
