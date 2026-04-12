import React from "react";
import { useRecoilState } from "recoil";
import { ThemeAtom } from "../../recoil/ThemeAtom";

const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(ThemeAtom);
  localStorage.setItem("theme", theme);
  function HandleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div>
      <button onClick={HandleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
