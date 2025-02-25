import styled from "styled-components";

export const Item = styled.div`
  min-height: 80px;
  width: 350px;
  padding: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  margin-top: 0;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: move;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
    border-color: ${({ theme }) => theme.colors.borderHover};

    .progress-indicator {
      opacity: 0;
    }

    .delete-button {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

export const ActionContainer = styled.div`
  min-height: 18px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  opacity: 0;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const ProgressContainer = styled.div`
  opacity: 1;
  transition: ${({ theme }) => theme.transitions.default};
  position: absolute;
  right: 0;
`;

export const TaskTitle = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 14px;
`;
