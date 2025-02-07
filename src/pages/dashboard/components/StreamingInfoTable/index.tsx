import { useTheme } from "styled-components";
import { useImmer } from "use-immer";
import { Table } from "~/components/molecules";
import {
  LabelSmallStrong,
  ParaSmall,
  ParaXSmall,
} from "~/components/typography";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdClose,
} from "react-icons/md";

import { Box, Flex } from "~/components/atoms";
import { IStreamingInfoTableData } from "../../types";
import { useDashboard } from "~/contexts/DashboardContext";
import { DASHBOARD_FILTER_KEYS } from "~/constants";
import { camelToNormal } from "~/utils";

interface IStreamingInfoTableProps {
  data: IStreamingInfoTableData[];
  enableSorting?: boolean;
  enablePagination?: boolean;
}

interface ITableConfigImmerState {
  sortConfig: {
    key: string;
    direction: (typeof SORTING_DIRECTION)[keyof typeof SORTING_DIRECTION];
  };
  currentPage: number;
  pageSize: number;
}

const SORTING_DIRECTION = {
  ASC: "asc",
  DESC: "desc",
} as const;

const StreamingInfoTable = ({
  data,
  enableSorting = true,
  enablePagination = false,
}: IStreamingInfoTableProps) => {
  const theme = useTheme();
  const { filters, updateFilters } = useDashboard();

  const [tableConfig, setTableConfig] = useImmer<ITableConfigImmerState>({
    sortConfig: {
      key: "",
      direction: SORTING_DIRECTION.DESC,
    },
    currentPage: 1,
    pageSize: 6,
  });

  const filteredData = (() => {
    let items = [...data];
    const songNameFilter = filters[DASHBOARD_FILTER_KEYS.SONG_NAME] || "";
    const artistFilter = filters[DASHBOARD_FILTER_KEYS.ARTIST] || "";
    const revenueSourceFilter =
      filters[DASHBOARD_FILTER_KEYS.REVENUE_SOURCE] || "";

    if (revenueSourceFilter) {
      items = items.filter((item) => item.source === revenueSourceFilter);
    }

    if (songNameFilter) {
      items = items.filter((item) => item.songName === songNameFilter);
    }

    if (artistFilter) {
      items = items.filter((item) => item.artist === artistFilter);
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

  const numberOfPages = Math.ceil(sortedData.length / tableConfig.pageSize);

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

  if (enablePagination && paginatedData.length > 0) {
    paginationNode = (
      <Flex justifyContent="flex-end" alignItems="center" mt="12px">
        <ParaSmall mr="8px">
          Showing {paginatedData.length} of {sortedData.length}
        </ParaSmall>
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

  const renderAppliedFiltersNode = () => {
    const appliedFilterNodes: React.ReactNode[] = [];

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        appliedFilterNodes.push(
          <Flex
            key={key}
            alignItems="center"
            style={{ gap: "8px" }}
            bg={theme.colors.BG_ACCENT_WEAKER}
            p="2px 8px"
            borderRadius="4px"
            height="28px"
          >
            <ParaXSmall color={theme.colors.TEXT_ACCENT_STRONG}>
              {camelToNormal(key)} -
            </ParaXSmall>
            <ParaXSmall color={theme.colors.TEXT_ACCENT_STRONG}>
              {value}
            </ParaXSmall>
            <MdClose
              size={16}
              cursor="pointer"
              color={theme.colors.ICON_ACCENT_STRONG}
              onClick={() => updateFilters(key, "")}
            />
          </Flex>
        );
      }
    });

    return (
      <Flex
        alignItems="center"
        style={{ gap: "8px" }}
        flexWrap="wrap"
        mb="12px"
      >
        {appliedFilterNodes}
      </Flex>
    );
  };

  return (
    <>
      {renderAppliedFiltersNode()}
      <Box minHeight="300px">
        <Table>
          <Table.Head>
            <Table.Tr>
              <Table.StickyCol
                width="80px"
                isHeader
                rightSectionNode={getHeaderCellRightSectionNode("userId")}
              >
                User ID
              </Table.StickyCol>
              <Table.Th
                rightSectionNode={getHeaderCellRightSectionNode("songName")}
              >
                Song Name
              </Table.Th>
              <Table.Th
                rightSectionNode={getHeaderCellRightSectionNode("artist")}
              >
                Artist
              </Table.Th>
              <Table.Th
                rightSectionNode={getHeaderCellRightSectionNode(
                  "recentStreamCount"
                )}
              >
                Stream Count
              </Table.Th>
              <Table.Th
                rightSectionNode={getHeaderCellRightSectionNode("dateStreamed")}
              >
                Date Streamed
              </Table.Th>
              <Table.Th>Revenue Source</Table.Th>
            </Table.Tr>
          </Table.Head>

          <Table.Body>
            {paginatedData?.length ? (
              paginatedData.map((item) => (
                <Table.Tr
                  key={`${item.songName}-${item.userId}-${item.source}`}
                >
                  <Table.StickyCol width="80px">
                    <LabelSmallStrong color={theme.colors.TEXT_NEUTRAL_STRONG}>
                      {item.userId}
                    </LabelSmallStrong>
                  </Table.StickyCol>
                  <Table.Td
                    rightSectionNode={
                      <CiFilter
                        size={16}
                        cursor="pointer"
                        onClick={() =>
                          updateFilters(
                            DASHBOARD_FILTER_KEYS.SONG_NAME,
                            item.songName
                          )
                        }
                      />
                    }
                  >
                    {item.songName}
                  </Table.Td>
                  <Table.Td
                    rightSectionNode={
                      <CiFilter
                        size={16}
                        cursor="pointer"
                        onClick={() =>
                          updateFilters(
                            DASHBOARD_FILTER_KEYS.ARTIST,
                            item.artist
                          )
                        }
                      />
                    }
                  >
                    {item.artist}
                  </Table.Td>
                  <Table.Td>{item.recentStreamCount}</Table.Td>
                  <Table.Td>{item.dateStreamed}</Table.Td>
                  <Table.Td
                    rightSectionNode={
                      <CiFilter
                        size={16}
                        cursor="pointer"
                        onClick={() =>
                          updateFilters(
                            DASHBOARD_FILTER_KEYS.REVENUE_SOURCE,
                            item.source
                          )
                        }
                      />
                    }
                  >
                    {item.source}
                  </Table.Td>
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.StickyCol>No data</Table.StickyCol>
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
