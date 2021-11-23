module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        White: "#fff",
        Backgroundprimary: "#F6F9FC",
        Backgroundsecondary: "#E3364E",
        Backgroundfooter: "#F6F9FC",
        Backgroundfooterinput: "#0C2A4D",
        titeltext: "#2B3445",
        border: "#E5E5E5",
        bodytext: "#4B566B",
        footer: "#0C0E30",
        footertext: "#AEB4BE",
        disabletext: "#C4C4C4",
        blue: "#18BFD6",
        star: "#FAAF00",
      },
      boxShadow: {
        sm: "0px 0px 21px rgba(0, 0, 0, 0.25)",
        md: "0px 4px 17px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Lalezar: ["Lalezar", "sans"],
        Scheherazade: ["Scheherazade", "Lalezar", "sans"],
      },
      gridTemplateColumns: {
        amazing: "11rem auto",
        amazing_sm: "14rem auto",
      },
      minWidth: {
        1024: "1024px",
        640: "640px",
        1280: "1280px",
        1536: "1536px",
        64: "15rem",
        "1/2": "49.6%",
        "1/3": "32.95%",
        "1/4": "24.6%",
        "1/5": "19.6%",
        full: "100%",
      },
      minHeight: {
        0: "0",
        12: "3rem",
        84: "21.5rem",
        screen: "100vh",
      },
      margin: {
        "1/2": "0.2%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      zIndex: ["hover"],
    },
  },
  plugins: [],
};
