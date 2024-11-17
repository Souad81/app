import React, { useState, useEffect } from "react"
import Solid from "../assets/images/solid.svg"

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedThemeMode = localStorage.getItem("themeMode")

    if (
      storedThemeMode === "dark" ||
      (!storedThemeMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("themeMode", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  };

  return (
    <header id="header">
      <div className="container">
        <a className="logo" href="#">
          <img src={Solid} alt="Silicon Logotype" className="logo" />
        </a>
        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>
        <div className="theme-switch">
          <label className="toggle-switch" htmlFor="darkmode-switch" aria-label="Dark Mode Switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleThemeToggle}
            />
            <span className="slider"></span>
          </label>
          <label className="switch-label" htmlFor="darkmode-switch">
            Dark mode
          </label>
        </div>
        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa-light fa-user-large"></i>
          <span>Sign in / up</span>
        </a>
      </div>
    </header>
  )
}

export default Header
