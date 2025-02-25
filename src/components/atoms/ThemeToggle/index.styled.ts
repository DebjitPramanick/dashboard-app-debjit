import styled from "styled-components";

export const ToggleButton = styled.button<{ $isDark: boolean }>`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  svg {
    font-size: 20px;
    transition: all 0.3s ease;
  }

  .sun {
    position: absolute;
    transform: ${({ $isDark }) =>
      $isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0)"};
    opacity: ${({ $isDark }) => ($isDark ? 0 : 1)};
  }

  .moon {
    position: absolute;
    transform: ${({ $isDark }) =>
      $isDark ? "scale(1) rotate(0)" : "scale(0) rotate(90deg)"};
    opacity: ${({ $isDark }) => ($isDark ? 1 : 0)};
  }
`;
