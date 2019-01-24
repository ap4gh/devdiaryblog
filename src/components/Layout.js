import React from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {

  constructor() {
    super()
    this.state = {
      theme: window.localStorage.app_theme
    }
  }

  getPreferredTheme = () => {
    return window.localStorage.app_theme || null;
  }

  setPreferredTheme = (theme_name) => {
    window.localStorage.setItem('app_theme', theme_name)
  }

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

  componentDidMount = () => {
    if (!this.getPreferredTheme()) {
      window.localStorage.setItem('app_theme', 'light')
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
        <div className="main-header">
          <h1
            style={{
              ...scale(1),
              marginTop: 0,
            }}
          >
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
          <label className="theme-toggler">
            <span>Dark</span>
            <Toggle
              defaultChecked={this.state.theme == 'dark'}
              onChange={e => this.changeTheme(e)}
            />
          </label>
        </div>
      )
    } else {
      header = (
        <div className="main-header">
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              color: `#3b9f56`
            }}
          >
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
          <label className="theme-toggler">
            <span>Dark</span>
            <Toggle
              defaultChecked={this.state.theme == 'dark'}
              onChange={e => this.changeTheme(e)}
            />
          </label>
        </div>
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
          {header}
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
