import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: `IBM Plex Sans`,
      styles: [`400`, `700`],
    },
    {
      name: `Roboto`,
      styles: [`400`],
    },
  ],
  headerFontFamily: ["IBM Plex Sans", "sans-serif"],
  bodyFontFamily: ["Roboto", "serif"],
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
