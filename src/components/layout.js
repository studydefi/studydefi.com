import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import DarkModeSwitch from "../components/dark-mode-switch"

const logoFontStyles = {
  fontFamily: `IBM Plex Sans, sans-serif`,
  fontWeight: `300`,
  textTransform: `uppercase`,
  color: `#fe921f`,
  letterSpacing: `4px`,
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h3
        style={{
          // ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          ...logoFontStyles,
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
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
          ...logoFontStyles,
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
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div style={{ position: `relative` }}>
        <header style={{ marginTop: `var(--headspace)` }}>{header}</header>
        <DarkModeSwitch />
      </div>
      <main>{children}</main>
      <footer>
        <p>©{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default Layout
