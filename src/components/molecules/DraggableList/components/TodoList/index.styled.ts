import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const AddTodoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.borderAccent};
  }
`;

export const AddButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.textAccent};
  }
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
`;

export const Checkbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.buttonPrimary : theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.buttonPrimary : "transparent"};
  cursor: pointer;
  position: relative;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.buttonPrimary};
  }

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 4px;
    width: 3px;
    height: 7px;
    border: solid ${({ theme }) => theme.colors.bgSecondary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: ${({ theme }) => theme.transitions.default};
  }
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const TodoText = styled.span<{ completed: boolean }>`
  flex: 1;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.7 : 1)};
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  opacity: 0;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};

  ${TodoItem}:hover & {
    opacity: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
`;
