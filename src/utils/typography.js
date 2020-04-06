import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
import sternGroveTheme from 'typography-theme-stern-grove'

const typography = new Typography(sternGroveTheme)

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
