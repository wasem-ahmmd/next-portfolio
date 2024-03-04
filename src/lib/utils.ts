import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





// import type { Config } from "tailwindcss";

// const config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     screens: {
//       xxs: "420px",
//       xsm: "480px",
//       sm: "576px",
//       md: "768px",
//       lg: "992px",
//       xl: "1200px",
//       xxl: "1400px",
//       "3xl": "1640px",
//     },
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         xl: "1200px",
//       },
//     },
//     extend: {
//       fontFamily: {
//         Montserrat: ["Montserrat"],
//       },
//       colors: {
//         dark: "#171717",
//         light:"#FEFAEE",
//         "color-1": "#9C356D",
//         "color-2": "#FCD68B",
//         "color-3": "#F9784C",

//       },
//       fontWeight: {
//         300: "300",
//         400: "400",
//         500: "500",
//         600: "600",
//         700: "700"
//       },
//       fontSize: {
//         "h1-85":"85px",
//         "h2-48":"48px",
//         "h3-32":"32px",
//         "tab-txt":"64px",
//         "mobile-txt":"50px",
//         "medium-text-2":"24px",
//         "medium-txt":"20px",
//         "small-text":"14px",
        
//       },
//       lineHeight: {
//         "h1": "95px",
//         "tab":"64px",
//         "mobile":"56px",
//         "h2": "48px",
//         "h3": "32px",
//         "medium": "24px",
//         "logo" : "17px"

//       },
//       letterSpacing: {
//         "h1-h2" : "0.32px",
//       },
//       gap: {
//         xs: "8px",
//         sm: "12px",
//         md: "16px",
//         lg: "24px",
//         xxl:"40px"
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//         xl: "40px"
//       },
//       backgroundImage:{
//         "text-grad" : " linear-gradient(172.4deg, #FEFAEE 5.26%, #FCD68B 29.9%, #F9784C 53.25%, #9C356D 72.94%)",
//         "small-menu":"linear-gradient(342.27deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%)",
//         "company-gradient":"linear-gradient(355.70deg, #FFFAEF 24.53%, #FCD68B 37.59%, #F9784C 50.72%, #9C356D 62.85%, #171717 76.83%)",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;




// export default config;

// extend: {
//   colors: {
//     border: "hsl(var(--border))",
//     input: "hsl(var(--input))",
//     ring: "hsl(var(--ring))",
//     background: "hsl(var(--background))",
//     foreground: "hsl(var(--foreground))",
//     primary: {
//       DEFAULT: "hsl(var(--primary))",
//       foreground: "hsl(var(--primary-foreground))",
//     },
//     secondary: {
//       DEFAULT: "hsl(var(--secondary))",
//       foreground: "hsl(var(--secondary-foreground))",
//     },
//     destructive: {
//       DEFAULT: "hsl(var(--destructive))",
//       foreground: "hsl(var(--destructive-foreground))",
//     },
//     muted: {
//       DEFAULT: "hsl(var(--muted))",
//       foreground: "hsl(var(--muted-foreground))",
//     },
//     accent: {
//       DEFAULT: "hsl(var(--accent))",
//       foreground: "hsl(var(--accent-foreground))",
//     },
//     popover: {
//       DEFAULT: "hsl(var(--popover))",
//       foreground: "hsl(var(--popover-foreground))",
//     },
//     card: {
//       DEFAULT: "hsl(var(--card))",
//       foreground: "hsl(var(--card-foreground))",
//     },
//   },

//   borderRadius: {
//     lg: "var(--radius)",
//     md: "calc(var(--radius) - 2px)",
//     sm: "calc(var(--radius) - 4px)",
//   },
//   keyframes: {
//     "accordion-down": {
//       from: { height: "0" },
//       to: { height: "var(--radix-accordion-content-height)" },
//     },
//     "accordion-up": {
//       from: { height: "var(--radix-accordion-content-height)" },
//       to: { height: "0" },
//     },
//   },
//   animation: {
//     "accordion-down": "accordion-down 0.2s ease-out",
//     "accordion-up": "accordion-up 0.2s ease-out",
//   },
// },
