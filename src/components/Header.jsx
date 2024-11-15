import React, { useState, useEffect } from 'react' // Added 

import Solid from "../assets/images/solid.svg"




const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false)

  useEffect(() => {
    const storedThemeMode = localStorage.getItem("themeMode");

    if (
      storedThemeMode === "dark" ||
      (!storedThemeMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem("themeMode", "light"); // Set to "light" when toggling to light mode
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      localStorage.setItem("themeMode", "dark"); // Set to "dark" when toggling to dark mode
      document.documentElement.classList.add("dark")
    }
  }

 


  return (
    <header id='header'>
    <div className="container">
      <a  className="logo" href="#">
        <img src={Solid} alt="silicon logotype" className="logo" /> 
        
      </a>
      <nav id="main-menu" className="navbar"/>
      <nav className="navbar">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Contact</a>
      
      </nav>

      <div className="theme-switch">
        <label className='toggle-switch' htmlFor='darkmode-switch' aria-label='darkmode switch'>
          <input id='darkmode-switch' type='checkbox' checked={isDarkMode} onChange={handleThemeToggle}/>
          <span className='slider'></span>
        </label>
        <label className='switch-label'htmlFor='darkmode-switch'>Dark mode </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
    <i className="fa-light fa-user-large"></i>
    <span>Sign in / up</span>
</a>
        
          
      </div>
    </header>
  );
};











export default Header
