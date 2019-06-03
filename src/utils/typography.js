import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'a': {
      color: `#3b9f56`
    },
    'h1.post-title': {
      fontSize: `1.9rem`
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'Montserrat',
      fontWeight: 600
    },
    'h2, h3': {
      marginBottom: '10px'
    },
    'h3': {
      fontSize: '1.55rem'
    },
    '@media only screen and (min-width: 640px)': {
      'p': {
        fontSize: '17px',
        fontWeight: 300,
        lineHeight: 1.7
      }
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
