import styled from "styled-components";

export const Container = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
`;

export const Pie = styled.div<{ percentage: number; color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    ${({ color }) => color} ${({ percentage }) => percentage}%,
    ${({ theme }) => theme.colors.borderPrimary}
      ${({ percentage }) => percentage}%
  );
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 50%;
  }
`;
