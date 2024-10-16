module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "300px",
      md: "560px",
      lg: "1020px",
      xl: "1440px",
      xsm: "552px",
      mobile: "410px",
    },
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        veryDarkBlue: "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
