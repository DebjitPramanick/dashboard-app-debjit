import { TooltipProps } from "recharts";
import styled, { useTheme } from "styled-components";
import { Box, Flex } from "~/components/atoms";
import { LabelSmallStrong, ParaSmall } from "~/components/typography";
import { camelToNormal, formatNumber } from "~/utils";

const ChartToolTipContent = (props: TooltipProps<any, any>) => {
  const theme = useTheme();

  const { active, payload, label } = props;

  let nodeToRender;

  if (!active || !payload || payload.length === 0) {
    nodeToRender = null;
  } else {
    nodeToRender = (
      <Root>
        <ContentWrapper>
          {label ? (
            <ParaSmall color={theme.colors.TEXT_NEUTRAL_WEAK} mb="8px">
              {label}
            </ParaSmall>
          ) : null}
          {payload?.map((item) => (
            <Item key={item.name as string}>
              <VerticalLine
                $color={item.color || theme.colors.BORDER_ACCENT_NORMAL}
              />
              <Box>
                <Value theme={theme}>
                  {formatNumber(item.value as number)}
                </Value>
                <ParaSmall color={theme.colors.TEXT_NEUTRAL_NORMAL}>
                  {camelToNormal(item.name as string)}
                </ParaSmall>
              </Box>
            </Item>
          ))}
        </ContentWrapper>
      </Root>
    );
  }

  return nodeToRender;
};

export default ChartToolTipContent;

const Root = styled(Box)`
  background: ${({ theme }) => theme.colors.BG_SURFACE};
  border-radius: 12px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  min-width: 240px;
  padding: 16px 0px;
  position: relative;
`;

const VerticalLine = styled(Box)<{ $color: string }>`
  height: 36px;
  width: 2px;
  margin-right: 16px;
  border-radius: 10px;
  background-color: ${({ $color }) => $color};
`;

const ContentWrapper = styled(Flex)`
  padding-left: 16px;
  gap: 4px;
  flex-direction: column;
`;

const Item = styled(Flex)`
  align-items: center;

  & + & {
    margin-top: 8px;
  }
`;

const Value = styled(LabelSmallStrong)`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.TEXT_NEUTRAL_STRONG};
`;
