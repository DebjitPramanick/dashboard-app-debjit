import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import * as Styles from "./index.styled";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <Styles.ToggleButton onClick={onToggle} $isDark={isDark}>
      <MdLightMode className="sun" />
      <MdDarkMode className="moon" />
    </Styles.ToggleButton>
  );
};

export default ThemeToggle;
