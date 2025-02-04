import "@fontsource/manrope";

import DashboardPage from "./pages/dashboard";
import { GlobalStyles } from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DashboardPage />
    </ThemeProvider>
  );
}

export default App;
