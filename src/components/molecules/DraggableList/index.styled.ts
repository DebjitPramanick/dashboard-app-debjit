import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  font-weight: 500;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreatedBy = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const ListsContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: auto;
`;

export const AddListButton = styled.button`
  height: 36px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: ${({ theme }) => theme.colors.textAccent};
  }
`;

export const ListContainer = styled.div`
  min-width: 350px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.shadowPrimary};
  overflow-y: auto;

  &:hover {
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.shadowAccent};
  }
`;

export const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgHover};
  }
`;

export const ListTitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ListTitle = styled.p`
  font-size: 16px;
  font-weight: 550;
  margin: 0;
`;

export const ListTitleProgress = styled.div`
  display: flex;
  align-items: center;
`;

export const ListTitleActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const AddTaskButton = styled.button`
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

export const DeleteListButton = styled(AddTaskButton)`
  &:hover {
    color: ${({ theme }) => theme.colors.error || "#ff4d4d"};
  }
`;

export const ItemsContainer = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;
