import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("taskmateTheme") || "medium"
  );

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("taskmateTheme", theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={`light ${theme === "light" && "activeTheme"}`}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={`medium ${theme === "medium" && "activeTheme"}`}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={`dark ${theme === "dark" && "activeTheme"}`}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={`gOne ${theme === "gOne" && "activeTheme"}`}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={`gTwo ${theme === "gTwo" && "activeTheme"}`}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={`gThree ${theme === "gThree" && "activeTheme"}`}
        ></span>
      </div>
    </header>
  );
};
