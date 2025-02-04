import { useTheme } from "styled-components";
import { useImmer } from "use-immer";
import { Table } from "~/components/molecules";
import { LabelSmallStrong, ParaSmall } from "~/components/typography";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { Box, Flex } from "~/components/atoms";
import Select from "react-select";
import { IStreamingInfoTableData } from "../../types";

interface IStreamingInfoTableProps {
  data: IStreamingInfoTableData[];
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableFilters?: boolean;
}

interface ITableConfigImmerState {
  sortConfig: {
    key: string;
    direction: (typeof SORTING_DIRECTION)[keyof typeof SORTING_DIRECTION];
  };
  searchQuery: string;
  currentPage: number;
  pageSize: number;
  filters: Record<string, string[]>;
}

const SORTING_DIRECTION = {
  ASC: "asc",
  DESC: "desc",
} as const;

const StreamingInfoTable = ({
  data,
  enableSorting = true,
  enablePagination = false,

  enableFilters = false,
}: IStreamingInfoTableProps) => {
  const theme = useTheme();

  const [tableConfig, setTableConfig] = useImmer<ITableConfigImmerState>({
    sortConfig: {
      key: "",
      direction: SORTING_DIRECTION.DESC,
    },
    filters: {},
    searchQuery: "",
    currentPage: 1,
    pageSize: 6,
  });

  const numberOfPages = Math.ceil(data.length / tableConfig.pageSize);

  const handleSort = (key: string, dir: "asc" | "desc") => {
    setTableConfig((draft) => {
      draft.sortConfig.key = key;
      draft.sortConfig.direction = dir;
    });
  };

  const handlePageChange = (page: number) => {
    setTableConfig((draft) => {
      if (page < 1) {
        page = 1;
      }
      if (page > numberOfPages) {
        page = numberOfPages;
      }
      draft.currentPage = page;
    });
  };

  const handleSelectFilter = (filterKey: string, filterValues: string[]) => {
    setTableConfig((draft) => {
      if (filterValues.length === 0) {
        delete draft.filters[filterKey];
      } else {
        draft.filters[filterKey] = filterValues;
      }
    });
  };

  const filteredData = (() => {
    let items = [...data];
    const songNameFilters = tableConfig.filters["songName"] || [];
    const artistFilters = tableConfig.filters["artist"] || [];

    if (songNameFilters.length > 0) {
      items = items.filter((item) => songNameFilters.includes(item.songName));
    }

    if (artistFilters.length > 0) {
      items = items.filter((item) => artistFilters.includes(item.artist));
    }

    return items;
  })();

  const sortedData = [...filteredData].sort(
    (
      firstItem: IStreamingInfoTableData,
      secondItem: IStreamingInfoTableData
    ) => {
      const aValue =
        firstItem[tableConfig.sortConfig.key as keyof IStreamingInfoTableData];
      const bValue =
        secondItem[tableConfig.sortConfig.key as keyof IStreamingInfoTableData];

      if (tableConfig.sortConfig.direction === SORTING_DIRECTION.ASC) {
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue);
        }
        return Number(aValue) - Number(bValue);
      }
      if (typeof aValue === "string" && typeof bValue === "string") {
        return bValue.localeCompare(aValue);
      }
      return Number(bValue) - Number(aValue);
    }
  );

  const paginatedData = sortedData.slice(
    (tableConfig.currentPage - 1) * tableConfig.pageSize,
    tableConfig.currentPage * tableConfig.pageSize
  );

  const getHeaderCellRightSectionNode = (cellKey: string) => {
    if (enableSorting) {
      const isSorted = tableConfig.sortConfig.key === cellKey;
      const isAsc = tableConfig.sortConfig.direction === SORTING_DIRECTION.ASC;
      return (
        <Flex flexDirection="column">
          <AiOutlineCaretUp
            size={14}
            cursor="pointer"
            onClick={() => handleSort(cellKey, SORTING_DIRECTION.ASC)}
            color={
              isSorted && isAsc
                ? theme.colors.ICON_NEUTRAL_STRONG
                : theme.colors.ICON_NEUTRAL_WEAK
            }
          />
          <AiOutlineCaretDown
            size={14}
            cursor="pointer"
            onClick={() => handleSort(cellKey, SORTING_DIRECTION.DESC)}
            color={
              isSorted && !isAsc
                ? theme.colors.ICON_NEUTRAL_STRONG
                : theme.colors.ICON_NEUTRAL_WEAK
            }
          />
        </Flex>
      );
    }
    return null;
  };

  let paginationNode = null;

  const tableActionsNode = [];

  if (enablePagination && paginatedData.length > 0) {
    paginationNode = (
      <Flex justifyContent="flex-end" alignItems="center" mt="24px">
        <MdKeyboardArrowLeft
          size={24}
          cursor="pointer"
          onClick={() => handlePageChange(tableConfig.currentPage - 1)}
        />
        <ParaSmall mx="8px">
          Page {tableConfig.currentPage} of{" "}
          {Math.ceil(sortedData.length / tableConfig.pageSize)}
        </ParaSmall>
        <MdKeyboardArrowRight
          size={24}
          cursor="pointer"
          onClick={() => handlePageChange(tableConfig.currentPage + 1)}
        />
      </Flex>
    );
  }

  if (enableFilters) {
    const songNameFilters = data.map((item) => ({
      label: item.songName,
      value: item.songName,
    }));
    const artistFilters = data.map((item) => ({
      label: item.artist,
      value: item.artist,
    }));

    tableActionsNode.push(
      <Select
        isMulti
        options={artistFilters}
        placeholder="Select Artists"
        key="artist-filter"
        onChange={(selectedOptions) =>
          handleSelectFilter(
            "artist",
            selectedOptions.map((option) => option.value)
          )
        }
        maxMenuHeight={160}
        styles={{
          control: (provided) => ({
            ...provided,
            height: "32px",
            background: theme.colors.BG_NEUTRAL_WEAKEST,
          }),
        }}
      />,
      <Select
        isMulti
        options={songNameFilters}
        placeholder="Select Songs"
        key="songName-filter"
        onChange={(selectedOptions) =>
          handleSelectFilter(
            "songName",
            selectedOptions.map((option) => option.value)
          )
        }
        maxMenuHeight={160}
        styles={{
          control: (provided) => ({
            ...provided,
            height: "32px",
            background: theme.colors.BG_NEUTRAL_WEAKEST,
          }),
        }}
      />
    );
  }
  return (
    <>
      {tableActionsNode.length ? (
        <Flex justifyContent="flex-end" mb="16px" style={{ gap: "8px" }}>
          {tableActionsNode}
        </Flex>
      ) : null}

      <Box minHeight="320px">
        <Table>
          <Table.Head>
            <Table.Tr>
              <Table.StickyCol
                isHeader
                rightSectionNode={getHeaderCellRightSectionNode("userId")}
              >
                User ID
              </Table.StickyCol>
              <Table.Th
                width="104px"
                rightSectionNode={getHeaderCellRightSectionNode("songName")}
              >
                Song Name
              </Table.Th>
              <Table.Th
                width="104px"
                rightSectionNode={getHeaderCellRightSectionNode("artist")}
              >
                Artist
              </Table.Th>
              <Table.Th
                width="104px"
                rightSectionNode={getHeaderCellRightSectionNode(
                  "recentStreamCount"
                )}
              >
                Stream Count
              </Table.Th>
              <Table.Th
                width="104px"
                rightSectionNode={getHeaderCellRightSectionNode("dateStreamed")}
              >
                Date Streamed
              </Table.Th>
            </Table.Tr>
          </Table.Head>

          <Table.Body>
            {paginatedData?.length ? (
              paginatedData.map((item) => (
                <Table.Tr key={`${item.songName}`}>
                  <Table.StickyCol>
                    <LabelSmallStrong color={theme.colors.TEXT_NEUTRAL_STRONG}>
                      {item.userId}
                    </LabelSmallStrong>
                  </Table.StickyCol>
                  <Table.Td textBold>{item.songName}</Table.Td>
                  <Table.Td>{item.artist}</Table.Td>
                  <Table.Td>{item.recentStreamCount}</Table.Td>
                  <Table.Td>{item.dateStreamed}</Table.Td>
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td>No data</Table.Td>
              </Table.Tr>
            )}
          </Table.Body>
        </Table>
      </Box>
      {paginationNode}
    </>
  );
};

export default StreamingInfoTable;
