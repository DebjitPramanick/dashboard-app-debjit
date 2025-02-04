import styled from "styled-components";
import { Box, Flex } from "~/components/atoms";
import { PageContainer } from "~/components/layout";
import colors from "~/styles/colors";

export const Root = styled(Box)`
  background-color: ${colors.BG_NEUTRAL_WEAKEST};
  min-height: 100vh;
  min-width: 100dvh;
  padding: 24px 0;
`;

export const Container = styled(PageContainer)``;

export const Card = styled(Box)`
  background-color: ${colors.BG_SURFACE};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const CardsContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;
