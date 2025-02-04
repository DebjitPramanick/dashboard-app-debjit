import TopStreamedSongsChart from "./components/TopStreamedSongsChart";
import UserGrowthChart from "./components/UserGrowthChart";
import RevenueDistributionChart from "./components/RevenueDistributionChart";
import * as Styles from "./Dashboard.styled";

import dummyData from "~/constants/dummy.json";
import Card from "./components/Card";
import { ParaMedium, TitleMedium } from "~/components/typography";
import { useTheme } from "styled-components";
import { Box } from "~/components/atoms";
import StreamingInfoTable from "./components/StreamingInfoTable";

const DashboardPage = () => {
  const theme = useTheme();

  const {
    dataVisualization: { userGrowth, revenueDistribution, top5StreamedSongs },
    dataTable: usersStreamingInfo,
  } = dummyData;

  return (
    <Styles.Root>
      <Styles.Container>
        <TitleMedium>Streamify Dashboard</TitleMedium>
        <ParaMedium mt="8px" color={theme.colors.TEXT_NEUTRAL_WEAK}>
          Analytics and insights for your music streaming platform
        </ParaMedium>
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
