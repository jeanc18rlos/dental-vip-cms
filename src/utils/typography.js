import Typography from "typography"
import elkGlenTheme from "typography-theme-elk-glen"

elkGlenTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete elkGlenTheme.googleFonts

const typography = new Typography(
  {
    baseFontSize: "17px",
    baseLineHeight: 1.6,
    headerFontFamily: [
      "Roboto"
    ],
    bodyFontFamily: ["Roboto"],
  },
  elkGlenTheme
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
