import "../global.css"
import Typography from "typography"

const typography = new Typography({
  baseFontSize: `18px`,
  googleFonts: [
    {
      name: `IBM Plex Sans`,
      styles: [`200`, `300`, `400`, `700`],
    },
    {
      name: `Roboto`,
      styles: [`400`, `700`, `900`],
    },
  ],
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["Roboto", "serif"],
  headerColor: "var(--textTitle)",
  bodyColor: "var(--textNormal)",
  blockMarginBottom: "2rem",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      textDecoration: `none`,
      color: "var(--textLink)",
    },
    "a:hover": {
      textDecoration: `underline`,
    },
    "h1, h2": { marginTop: rhythm(2.5) },
    "h3, h4": { marginTop: rhythm(2) },
    "h5, h6": { marginTop: rhythm(1.75) },
    hr: { background: `var(--hr)` },
  }),
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
