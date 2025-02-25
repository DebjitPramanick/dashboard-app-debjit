import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  button {
    font-family: 'Manrope', sans-serif;
  }

  input {
    font-family: 'Manrope', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }
`;
