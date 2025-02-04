import { forwardRef } from "react";
import { useTheme } from "styled-components";
import { isNil } from "lodash";

import { Box } from "~/components/atoms";
import { LabelSmall, ParaSmall } from "~/components/typography/";

import * as Styles from "./index.styled";
import {
  TableProps,
  DataCellProps,
  HeaderCellProps,
  StickyColProps,
} from "./types";

const BaseTable = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { children, displayTitle, tableProps, ...rootProps } = props;

  return (
    <Styles.Root ref={ref} {...rootProps}>
      {displayTitle ? (
        <Styles.TableTitle>{displayTitle}</Styles.TableTitle>
      ) : null}
      <Box style={{ overflowX: "auto" }}>
        <Styles.Table {...tableProps}>{children}</Styles.Table>
      </Box>
    </Styles.Root>
  );
});

const DataCell = forwardRef<HTMLTableCellElement, DataCellProps>(
  (props, ref) => {
    const {
      children,
      caption,
      fallbackText = "not enough data",
      width,
      textBold,
      textLabelProps,
      ...rootProps
    } = props;
    const theme = useTheme();

    const hasChildren = !isNil(children);

    return (
      <Styles.DataCell
        width={width}
        textBold={textBold}
        ref={ref}
        {...rootProps}
      >
        <Styles.CellContent>
          <LabelSmall
            color={
              hasChildren
                ? theme.colors.TEXT_NEUTRAL_STRONG
                : theme.colors.TEXT_NEUTRAL_WEAKEST
            }
            style={{
              whiteSpace: hasChildren ? undefined : "nowrap",
            }}
            {...textLabelProps}
          >
            {hasChildren ? children : fallbackText}
          </LabelSmall>
          {caption ? (
            <Styles.CellCaptionText>{caption}</Styles.CellCaptionText>
          ) : null}
        </Styles.CellContent>
      </Styles.DataCell>
    );
  }
);

const HeaderCell = forwardRef<HTMLTableHeaderCellElement, HeaderCellProps>(
  (props, ref) => {
    const { children, width, rightSectionNode, ...rootProps } = props;
    const theme = useTheme();

    return (
      <Styles.HeaderCell width={width} ref={ref} {...rootProps}>
        <Styles.CellContent>
          <ParaSmall color={theme.colors.TEXT_NEUTRAL_NORMAL}>
            {children}
          </ParaSmall>
          {rightSectionNode}
        </Styles.CellContent>
      </Styles.HeaderCell>
    );
  }
);

const StickyCol = forwardRef<HTMLTableCellElement, StickyColProps>(
  (props, ref) => {
    const {
      children,
      caption,
      isHeader,
      fallbackText = "not enough data",
      left,
      width,
      textLabelProps,
      rightSectionNode,
      ...rootProps
    } = props;
    const theme = useTheme();

    const hasChildren = !isNil(children);

    return (
      <>
        {isHeader ? (
          <Styles.StickyHeaderCell
            left={left}
            width={width}
            ref={ref}
            {...rootProps}
          >
            <Styles.CellContent>
              <ParaSmall color={theme.colors.TEXT_NEUTRAL_NORMAL}>
                {children}
              </ParaSmall>
              {rightSectionNode}
            </Styles.CellContent>
          </Styles.StickyHeaderCell>
        ) : (
          <Styles.StickyDataCell
            left={left}
            width={width}
            ref={ref}
            {...rootProps}
          >
            <Styles.CellContent>
              <LabelSmall
                color={
                  hasChildren
                    ? theme.colors.TEXT_NEUTRAL_STRONG
                    : theme.colors.TEXT_NEUTRAL_WEAKEST
                }
                style={{
                  whiteSpace: hasChildren ? undefined : "nowrap",
                }}
                {...textLabelProps}
              >
                {hasChildren ? children : fallbackText}
              </LabelSmall>
              {caption ? (
                <Styles.CellCaptionText>{caption}</Styles.CellCaptionText>
              ) : null}
            </Styles.CellContent>
          </Styles.StickyDataCell>
        )}
      </>
    );
  }
);

BaseTable.displayName = "BaseTable";
DataCell.displayName = "DataCell";
HeaderCell.displayName = "HeaderCell";
StickyCol.displayName = "StickyCol";

interface Table {
  Td: typeof DataCell;
  Th: typeof HeaderCell;
  Tr: typeof Styles.TableRow;
  Head: typeof Styles.TableHead;
  Body: typeof Styles.TableBody;
  StickyCol: typeof StickyCol;
}

const Table = Object.assign(BaseTable, {
  Td: DataCell,
  Th: HeaderCell,
  Tr: Styles.TableRow,
  Head: Styles.TableHead,
  Body: Styles.TableBody,
  StickyCol: StickyCol,
});

HeaderCell.defaultProps = {
  width: "100px",
};

DataCell.defaultProps = {
  width: "100px",
};

StickyCol.defaultProps = {
  width: "100px",
};

export default Table;
