import styled, { css } from "styled-components";

import { Box, Flex } from "~/components/atoms";
import { LabelSmall, LabelXSmall } from "~/components/typography";
import { mediaQueryMobile, mediaQueryMobileOrTablet } from "~/styles/mixins";
import { DataCellProps } from "./types";

export const stickyColCss = css`
  background-color: ${({ theme }) => theme.colors.BG_SURFACE};
  border-right: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
  box-shadow: 0px 0px 16px -4px rgba(34, 34, 34, 0.06);
  position: sticky;
  left: 0px;
`;

export const Root = styled(Box)`
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.BG_SURFACE};
  border: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
  border-radius: 4px;
  max-width: 100%;
  overflow-x: auto;

  ${mediaQueryMobileOrTablet} {
    max-width: unset;
    width: 100%;
    margin-left: -36px;
    border-radius: 0;
    padding: 0;
    border-top: 0;
  }

  ${mediaQueryMobile} {
    margin-left: -20px;
  }
`;

export const Table = styled.table`
  height: 1px; // CellContent needs 100% height and it will work only when table has height attribute itself
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  position: relative;
`;

export const CellContent = styled(Flex)`
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const CellCaptionText = styled(LabelXSmall)`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.TEXT_NEUTRAL_WEAKER};

  ${mediaQueryMobileOrTablet} {
    margin-top: 12px;
  }
`;

export const TableTitle = styled(LabelSmall)`
  color: ${({ theme }) => theme.colors.TEXT_NEUTRAL_NORMAL};
  text-align: center;
  margin: 16px 0px;

  ${mediaQueryMobileOrTablet} {
    margin: 8px 36px 20px;
    text-align: left;
  }

  ${mediaQueryMobile} {
    margin-left: 20px;
  }
`;

export const DataCell = styled(Box).attrs({ as: "td" })<DataCellProps>`
  min-width: ${({ width }) => width};
  padding: 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.BG_NEUTRAL_WEAK};
  border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
  background-color: ${({ theme }) => theme.colors.BG_SURFACE};
  text-align: center;

  ${CellContent} {
    ${LabelSmall} {
      font-weight: ${({ theme, textBold }) =>
        textBold ? 800 : theme.fontWeights.medium};
    }
  }

  &:first-child {
    ${CellContent} {
      ${LabelSmall} {
        font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      }
    }
  }

  &:last-child {
    border-right: none;
  }

  ${mediaQueryMobileOrTablet} {
    padding: 0px 8px;
    border-bottom: none;

    &:first-child {
      padding-left: 36px;
    }

    ${CellContent} {
      padding: 12px 0px;
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
    }
  }

  ${mediaQueryMobile} {
    &:first-child {
      padding-left: 20px;
    }
  }
`;

export const HeaderCell = styled(Box).attrs({ as: "th" })`
  min-width: ${({ width }) => width};
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.BG_NEUTRAL_WEAKER};
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }

  ${mediaQueryMobileOrTablet} {
    padding: 0px 8px;
    border-top: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
    border-right: 1px solid ${({ theme }) => theme.colors.BG_NEUTRAL_WEAK};
    border-bottom: 1px solid ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};

    &:first-child {
      padding-left: 36px;
      border-radius: 0;
    }

    &:last-child {
      border-right: 0;
      border-radius: 0;
    }

    ${CellContent} {
      padding: 16px 0 12px;
    }
  }

  ${mediaQueryMobile} {
    &:first-child {
      padding-left: 20px;
    }
  }
`;

export const StickyHeaderCell = styled(HeaderCell)<{ left?: string }>`
  ${mediaQueryMobileOrTablet} {
    ${stickyColCss};
    left: ${({ left }) => left ?? "0px"};
    border-bottom: none;

    ${CellContent} {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.BORDER_NEUTRAL_WEAK};
    }
  }
`;

export const StickyDataCell = styled(DataCell)<{ left?: string }>`
  ${mediaQueryMobileOrTablet} {
    ${stickyColCss};
    left: ${({ left }) => left ?? "0px"};
  }
`;

export const TableRow = styled.tr`
  &:last-child {
    ${DataCell} {
      border-bottom: none;

      ${CellContent} {
        border-bottom: none;
      }
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableHead = styled.thead`
  &::after {
    content: "-";
    display: block;
    line-height: 8px;
    color: transparent;

    ${mediaQueryMobileOrTablet} {
      line-height: 0px;
    }
  }
`;
