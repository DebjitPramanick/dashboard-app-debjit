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
  const { children, tableProps, ...rootProps } = props;

  return (
    <Styles.Root ref={ref} {...rootProps}>
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
      fallbackText = "not enough data",
      width,
      textBold,
      textLabelProps,
      rightSectionNode,
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
          {rightSectionNode}
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

const Table = Object.assign(BaseTable, {
  Td: DataCell,
  Th: HeaderCell,
  Tr: Styles.TableRow,
  Head: Styles.TableHead,
  Body: Styles.TableBody,
  StickyCol: StickyCol,
});

HeaderCell.defaultProps = {
  width: "160px",
};

DataCell.defaultProps = {
  width: "160px",
};

StickyCol.defaultProps = {
  width: "120px",
};

export default Table;
