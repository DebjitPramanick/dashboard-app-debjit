import "@fontsource/manrope/200.css"; // ExtraLight
import "@fontsource/manrope/300.css"; // Light
import "@fontsource/manrope/400.css"; // Regular
import "@fontsource/manrope/500.css"; // Medium
import "@fontsource/manrope/600.css"; // SemiBold
import "@fontsource/manrope/700.css"; // Bold
import "@fontsource/manrope/800.css"; // ExtraBold
import { useState } from "react";

// import DashboardPage from "./pages/dashboard";
import { GlobalStyles } from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { DashboardProvider } from "./contexts/DashboardContext";
import DNDListPage from "./pages/dnd-list";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <DashboardProvider>
        {/* <DashboardPage /> */}
        <DNDListPage isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
