import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translate(-50%, -40%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  min-width: 600px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.shadowPrimary};
  animation: ${slideIn} 0.3s ease-out;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.borderAccent};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 14px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  ${({ theme, variant }) =>
    variant === "primary"
      ? `
    background-color: ${theme.colors.buttonPrimary};
    border: none;
    color: ${theme.colors.textPrimary};

    &:hover {
      background-color: ${theme.colors.buttonPrimaryHover};
    }
  `
      : `
    background-color: transparent;
    border: 1px solid ${theme.colors.borderPrimary};
    color: ${theme.colors.textSecondary};

    &:hover {
      border-color: ${theme.colors.borderAccent};
      color: ${theme.colors.textAccent};
    }
  `}
`;

export const TodoSection = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;
`;
