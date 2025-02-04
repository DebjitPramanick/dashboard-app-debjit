export interface TableProps {
  children: React.ReactNode;
  displayTitle?: string;
  tableProps?: React.HTMLAttributes<HTMLTableElement>;
}

export interface DataCellProps {
  children: React.ReactNode;
  caption?: string;
  fallbackText?: string;
  width?: string;
  textBold?: boolean;
  textLabelProps?: React.HTMLAttributes<HTMLElement>;
  rightSectionNode?: React.ReactNode;
}

export interface HeaderCellProps {
  children: React.ReactNode;
  width?: string;
  rightSectionNode?: React.ReactNode;
}

export interface StickyColProps {
  children: React.ReactNode;
  caption?: string;
  isHeader?: boolean;
  fallbackText?: string;
  left?: string;
  width?: string;
  textLabelProps?: React.HTMLAttributes<HTMLElement>;
  rightSectionNode?: React.ReactNode;
}

export interface TableRowProps {
  children: React.ReactNode;
}

export interface TableHeadProps {
  children: React.ReactNode;
}
