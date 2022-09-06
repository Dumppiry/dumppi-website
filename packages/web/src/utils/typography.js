import Typography from "typography"
const typography = new Typography({
  headerFontFamily: [
    "Inter",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Inter", "sans-serif"],
  googleFonts: [
    {
      name: "Inter",
      styles: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    },
  ],
})

export default typography
