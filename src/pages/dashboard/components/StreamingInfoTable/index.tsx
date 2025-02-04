import { useTheme } from "styled-components";
import { useImmer } from "use-immer";
import { Table } from "~/components/molecules";
import { LabelSmallStrong, ParaSmall } from "~/components/typography";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Flex } from "~/components/atoms";

interface IStreamingInfoTableData {
  userId: number;
  songName: string;
  artist: string;
  streamCount: number;
  dateStreamed: string;
}

interface IStreamingInfoTableProps {
  data: IStreamingInfoTableData[];
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableSearch?: boolean;
}

interface ITableConfigImmerState {
  sortConfig: {
    key: string;
    direction: (typeof SORTING_DIRECTION)[keyof typeof SORTING_DIRECTION];
  };
  searchQuery: string;
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
  enableSearch = false,
}: IStreamingInfoTableProps) => {
  const theme = useTheme();

  const [tableConfig, setTableConfig] = useImmer<ITableConfigImmerState>({
    sortConfig: {
      key: "",
      direction: SORTING_DIRECTION.DESC,
    },
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

  const handleSearch = (query: string) => {
    setTableConfig((draft) => {
      draft.searchQuery = query;
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

  const filteredData = data.filter((item) =>
    item.songName.toLowerCase().includes(tableConfig.searchQuery.toLowerCase())
  );

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
  let searchNode = null;

  if (enablePagination) {
    paginationNode = (
      <Flex justifyContent="flex-end" mt="24px">
        <ParaSmall mr="8px">
          Page {tableConfig.currentPage} of{" "}
          {Math.ceil(sortedData.length / tableConfig.pageSize)}
        </ParaSmall>
        <button onClick={() => handlePageChange(tableConfig.currentPage - 1)}>
          Previous
        </button>
        <button onClick={() => handlePageChange(tableConfig.currentPage + 1)}>
          Next
        </button>
      </Flex>
    );
  }

  if (enableSearch) {
    searchNode = (
      <Flex justifyContent="flex-end" mt="24px">
        <input
          placeholder="Search"
          value={tableConfig.searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Flex>
    );
  }

  return (
    <>
      {searchNode}
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
              rightSectionNode={getHeaderCellRightSectionNode("streamCount")}
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
          {paginatedData.map((item) => (
            <Table.Tr key={`${item.songName}`}>
              <Table.StickyCol>
                <LabelSmallStrong color={theme.colors.TEXT_NEUTRAL_STRONG}>
                  {item.userId}
                </LabelSmallStrong>
              </Table.StickyCol>
              <Table.Td textBold>{item.songName}</Table.Td>
              <Table.Td>{item.artist}</Table.Td>
              <Table.Td>{item.streamCount}</Table.Td>
              <Table.Td>{item.dateStreamed}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Body>
      </Table>
      {paginationNode}
    </>
  );
};

export default StreamingInfoTable;
