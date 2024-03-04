import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xxs: "420px",
      xsm: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1640px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      colors: {
        dark: "#171717",
        light:"#FEFAEE",
        "color-1": "#9C356D",
        "color-2": "#FCD68B",
        "color-3": "#F9784C",

      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700"
      },
      fontSize: {
        "h1-85":"85px",
        "h2-48":"48px",
        "h3-32":"32px",
        "tab-txt":"64px",
        "mobile-txt":"50px",
        "medium-text-2":"24px",
        "medium-txt":"20px",
        "card-text":"16px",
        "small-text":"14px",
        
      },
      lineHeight: {
        "h1": "95px",
        "tab":"64px",
        "mobile":"56px",
        "h2": "48px",
        "h3": "32px",
        "medium": "24px",
        "card":"22.4px",
        "logo" : "17px"

      },
      letterSpacing: {
        "h1-h2" : "0.32px",
      },
      gap: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xxl:"40px"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "40px"
      },
      
      boxShadow:{
        "bg-shadow" : "0 0 -100px -120px linear-gradient(151.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",
        md: '-60px 0px 60px -40px rgba(249, 120, 76, 1),  -15px 60px 50px -20px rgba(156, 53, 109, 1) '
      },
      backgroundImage:{
        "card-grad":"linear-gradient(96.36deg, #FCD68B 0%, #FFFFFF 100%)",
        "text-grad" : " linear-gradient(172.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",
        "small-menu":"linear-gradient(342.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%)",
        "company-gradient":"linear-gradient(355.70deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;




export default config;