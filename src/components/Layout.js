import React from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'

import { rhythm } from '../utils/typography'
import { HalfMoon, Sun } from './Emoji'

// Webpack does'nt understand window object on browser, so this trick
// will return the windows object from the browser.
const windowGlobal = typeof window !== 'undefined' && window
// Only light and dark themes are valid, if there is an invalid change
// by the end-user, light theme will be set by default
const valid_themes = ['light', 'dark']

class Layout extends React.Component {
  constructor() {
    super()
    // Theme is set to null by default.
    this.state = {
      theme: null
    }
  }
  /**
   * getpreferred theme will read the `app_theme` variable 
   * stored in localStorage. If the theme name is not valid
   * i.e. not from `valid_themes` array, then it will just 
   * return a null.
   */
  getPreferredTheme = () => {
    if (valid_themes.indexOf(windowGlobal.localStorage.app_theme) === -1) return null
    return windowGlobal.localStorage.app_theme;
  }
  /**
   * setPreferredTheme set the `app_theme` variable in localStorage.
   * If the theme name passed is not valid then it will just set a
   * theme of light by default.
   */
  setPreferredTheme = (theme_name) => {
    if (valid_themes.indexOf(theme_name) === -1) {
      const err = new Error(`THEME ERROR: Invalid theme ${theme_name}`)
      console.error(err)
      return windowGlobal.localStorage.setItem('app_theme', 'light')
    }
    return windowGlobal.localStorage.setItem('app_theme', theme_name)
  }
  // Handle when react-toggle is changed.
  changeTheme = e => {
    if (e.target.checked) {
      this.setPreferredTheme('dark')
    } else {
      this.setPreferredTheme('light')
    }
    this.setState({
      theme: this.getPreferredTheme()
    })
  }
  /**
   * Main purpose of using componentDidMount here is for persistant
   * storage of `app_theme` preference. So in the beginning of app 
   * render, it will read and set the theme of the app. If theme exist
   * then it will just use and if not then just set it to light by
   * default.
   */
  componentDidMount = () => {
    if (!this.getPreferredTheme()) {
      this.setPreferredTheme('light')
    }
    this.setState({
      theme: this.getPreferredTheme()
    })
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <h1 className="brand">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="sub-brand">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className={`theme-${this.state.theme} app-container `}>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(27),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <div className="main-header">
            {header}
            {/* Toggle switch for changing theme */}  
            <Toggle
              className="react-toggle-switch"
              checked={this.state.theme == 'dark'}
              onChange={e => this.changeTheme(e)}
              icons={{
                unchecked: <Sun />,
                checked: <HalfMoon />
              }}
            />
          </div>
          {children}
          <footer>
            © {new Date().getFullYear()} <a href="https://twitter.com/ap4tt">@ap4tt</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
