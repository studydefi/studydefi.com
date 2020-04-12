import "../global.css"
import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: `IBM Plex Sans`,
      styles: [`200`, `300`, `400`, `700`],
    },
    {
      name: `Roboto`,
      styles: [`400`],
    },
  ],
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["Roboto", "serif"],
  blockMarginBottom: "2rem",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      textDecoration: `none`,
      color: "var(--textLink)",
    },
    "a:hover": {
      textDecoration: `underline`,
    },
    p: {
      color: `var(--textNormal)`,
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: `IBM Plex Sans, Sans Serif`,
      color: `var(--textTitle)`,
      marginTop: rhythm(2.5),
    },
    hr: {
      background: `var(--hr)`,
    },
  }),
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
