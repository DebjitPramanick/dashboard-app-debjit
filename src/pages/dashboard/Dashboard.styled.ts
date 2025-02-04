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

export const CardsContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  background-color: ${colors.BG_NEUTRAL_WEAK};
`;
