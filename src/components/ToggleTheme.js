import React, { useState } from "react";
import "./ToogleTheme.css";
import { ReactComponent as MoonIcon } from "../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../assets/svg/sun.svg";

export default function ThemeToggle(props) {
  const { onDarkModeChange } = props;

  const [isEnabled, setIsEnabled] = useState(false);

  function onChange() {
    setIsEnabled((prevState) => !prevState);
    onDarkModeChange();
  }
  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onClick={onChange}
        />
      </div>
    </label>
  );
}
