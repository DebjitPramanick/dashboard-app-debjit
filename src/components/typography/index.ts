import styled, { css } from "styled-components";

import theme from "~/styles/theme";
import { Text } from "../atoms";

const mediaQuerySmallScreen = "@media (max-width: 599px)";

export const titleLargeCss = css`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.015em;
  }
`;

export const TitleLarge = styled(Text)`
  ${titleLargeCss};
`;

TitleLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleMediumCss = css`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.015em;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TitleMedium = styled(Text)`
  ${titleMediumCss};
`;

TitleMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleSmallCss = css`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const TitleSmall = styled(Text)`
  ${titleSmallCss};
`;

TitleSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const paraLargeCss = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-weight: ${(p) => p.theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ParaLarge = styled(Text)`
  ${paraLargeCss};
`;

ParaLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaLargeStrong = styled(ParaLarge)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const paraMediumCss = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  font-weight: ${(p) => p.theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ParaMedium = styled(Text)`
  ${paraMediumCss};
`;

ParaMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaMediumStrong = styled(ParaMedium)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const paraSmallCss = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;
  font-weight: ${(p) => p.theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const ParaSmall = styled(Text)`
  ${paraSmallCss};
`;

ParaSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaSmallStrong = styled(ParaSmall)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const paraXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.015em;
  font-weight: ${(p) => p.theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const ParaXSmall = styled(Text)`
  ${paraXSmallCss};
`;

ParaXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaXSmallStrong = styled(ParaXSmall)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const labelLargeCss = css`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: ${(p) => p.theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const LabelLarge = styled(Text)`
  ${labelLargeCss};
`;

LabelLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelLargeStrong = styled(LabelLarge)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const labelMediumCss = css`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-weight: ${(p) => p.theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const LabelMedium = styled(Text)`
  ${labelMediumCss};
`;

LabelMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelMediumStrong = styled(LabelMedium)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const labelSmallCss = css`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-weight: ${(p) => p.theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const LabelSmall = styled(Text)`
  ${labelSmallCss};
`;

LabelSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelSmallStrong = styled(LabelSmall)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;

export const labelXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-weight: ${(p) => p.theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const LabelXSmall = styled(Text)`
  ${labelXSmallCss};
`;

LabelXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelXSmallStrong = styled(LabelXSmall)`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;
