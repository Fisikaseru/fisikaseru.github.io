import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f8a3d",
          dark: "#0b6b2f",
          light: "#25b85d"
        },
        accent: {
          DEFAULT: "#e6f7ef"
        },
        success: "#16a34a",
        warning: "#f59e0b",
        error: "#ef4444",
        neutral: "#111827"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 40px rgba(15, 138, 61, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
