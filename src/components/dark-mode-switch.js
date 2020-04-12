import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const DarkModeSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div style={{ position: `absolute`, top: 0, right: 0 }}>
          <div onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")} style={{
            color: theme === "dark" ? `#fe921f` : `#444`,
            fontSize: `24px`,
            userSelect: `none`,
            cursor: `pointer`
          }}>
            ☾
          </div>
        </div>
      )}
    </ThemeToggler>
  )
}

export default DarkModeSwitch
