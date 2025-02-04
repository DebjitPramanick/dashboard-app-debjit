import styled from "styled-components";
import { Box, Flex } from "~/components/atoms";
import { ParaLargeStrong, ParaSmall } from "~/components/typography";
import colors from "~/styles/colors";

interface CardProps {
  title: string;
  description?: string;
  headerRightSectionNode?: React.ReactNode;
  children: React.ReactNode;
  [key: string]: any;
}

const Card = ({
  title,
  description,
  headerRightSectionNode,
  children,
  ...rest
}: CardProps) => {
  return (
    <Root {...rest}>
      <Header>
        <Box>
          <ParaLargeStrong>{title}</ParaLargeStrong>
          {description && (
            <ParaSmall mt="2px" color={colors.TEXT_NEUTRAL_WEAK}>
              {description}
            </ParaSmall>
          )}
        </Box>
        {headerRightSectionNode}
      </Header>
      <Content>{children}</Content>
    </Root>
  );
};

export default Card;

export const Root = styled(Box)`
  width: 100%;
  background-color: ${colors.BG_SURFACE};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
`;

const Header = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
`;

const Content = styled(Box)`
  padding: 24px;
`;

export const Divider = styled(Box)`
  height: 1px;
  width: 100%;
  background-color: ${colors.BG_NEUTRAL_WEAK};
`;
