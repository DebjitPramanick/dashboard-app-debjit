import TopStreamedSongsChart from "./components/TopStreamedSongsChart";
import UserGrowthChart from "./components/UserGrowthChart";
import RevenueDistributionChart from "./components/RevenueDistributionChart";
import * as Styles from "./Dashboard.styled";

import { FaUsers } from "react-icons/fa";

import dummyData from "~/constants/dummy.json";
import Card from "./components/Card";
import {
  ParaMedium,
  ParaSmall,
  TitleMedium,
  TitleSmall,
} from "~/components/typography";
import { useTheme } from "styled-components";
import { Box, Flex } from "~/components/atoms";
import StreamingInfoTable from "./components/StreamingInfoTable";
import { formatNumber } from "~/utils";
import { useIsTabletOrMobileMedia } from "~/hooks";

const DashboardPage = () => {
  const theme = useTheme();
  const isTabletOrMobile = useIsTabletOrMobileMedia();

  const {
    keyMetrics,
    dataVisualization: { userGrowth, revenueDistribution, top5StreamedSongs },
    dataTable: usersStreamingInfo,
  } = dummyData;

  return (
    <Styles.Root>
      <Styles.Container>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box mr="24px">
            <TitleMedium>Streamify Dashboard</TitleMedium>
            <ParaMedium mt="8px" color={theme.colors.TEXT_NEUTRAL_WEAK}>
              Analytics and insights for your music streaming platform
            </ParaMedium>
          </Box>
          <Styles.KeyMetricsContainer>
            <FaUsers
              size={isTabletOrMobile ? 32 : 48}
              color={theme.colors.ICON_NEUTRAL_WEAK}
            />
            <Box ml="12px">
              <TitleSmall>{formatNumber(keyMetrics.totalUsers)}</TitleSmall>
              <ParaSmall
                mt="4px"
                color={theme.colors.TEXT_NEUTRAL_WEAK}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Total Users
              </ParaSmall>
            </Box>
          </Styles.KeyMetricsContainer>
        </Flex>
        <Card
          title="User Growth"
          description="Total users and active users"
          mt="32px"
        >
          <UserGrowthChart data={userGrowth} />
        </Card>
        <Styles.CardsContainer mt="24px">
          <Card
            title="Revenue Distribution"
            description="Revenue generated from different sources"
            flex="1"
          >
            <RevenueDistributionChart data={revenueDistribution} />
          </Card>
          <Card
            title="Top 5 Streamed Songs"
            description="Top songs streamed by users"
            flex="1"
            height="100%"
          >
            <TopStreamedSongsChart data={top5StreamedSongs} />
          </Card>
        </Styles.CardsContainer>
        <Card title="Table" description="Table of users" mt="24px">
          <Box overflowX="auto">
            <StreamingInfoTable data={usersStreamingInfo} enablePagination />
          </Box>
        </Card>
      </Styles.Container>
    </Styles.Root>
  );
};

export default DashboardPage;
