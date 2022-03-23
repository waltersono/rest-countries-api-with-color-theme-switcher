import React, { useState, useEffect } from "react";

const Topbar = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.remove(`theme-light`);
    document.getElementsByTagName("body")[0].classList.remove(`theme-dark`);
    document.getElementsByTagName("body")[0].classList.add(`theme-${theme}`);
    document.getElementsByTagName("body")[0].classList.add("home");
  }, [theme]);

  const handleChangeTheme = () => {
    if (theme == "dark") setTheme("light");

    if (theme == "light") setTheme("dark");
  };

  return (
    <div className="topbar" onClick={handleChangeTheme}>
      <div className="topbar__container">
        <a href="/" className="topbar__title">
          Where in the world?
        </a>
        <button className="topbar__btn" onClick={onChangeTheme}>
          <i
            className={`fa-solid fa-${
              theme == "dark" ? "sun" : "moon"
            } topbar__icon`}
          ></i>
          <span className="topbar__btn-text">
            {theme == "dark" ? "Light" : "Dark"} Mode
          </span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
