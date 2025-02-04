import "@fontsource/manrope";

import DashboardPage from "./pages/dashboard";
import { GlobalStyles } from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";
import { DashboardProvider } from "./contexts/DashboardContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardProvider>
        <DashboardPage />
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
