import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import * as Styles from "./Dashboard.styled";

import dummyData from "~/constants/dummy.json";
import Card from "./components/Card";
import { ParaMedium, TitleMedium } from "~/components/typography";
import { useTheme } from "styled-components";

const DashboardPage = () => {
  const theme = useTheme();

  const topUsersDataToVisualize = dummyData.dataVisualization.userGrowth.map(
    (item) => ({
      name: item.month,
      totalUsers: item.totalUsers,
      activeUsers: item.activeUsers,
    })
  );

  const revenueDistributionDataToVisualize =
    dummyData.dataVisualization.revenueDistribution.map((item) => ({
      name: item.source,
      value: item.amount,
    }));

  const topSteamsDataToVisualize =
    dummyData.dataVisualization.top5StreamedSongs;

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
          <LineChart data={topUsersDataToVisualize} />
        </Card>
        <Styles.CardsContainer mt="24px">
          <Card
            title="Revenue Distribution"
            description="Revenue generated from different sources"
            flex="1"
          >
            <PieChart data={revenueDistributionDataToVisualize} />
          </Card>
          <Card
            title="Top 5 Streamed Songs"
            description="Top songs streamed by users"
            flex="1"
          >
            <BarChart data={topSteamsDataToVisualize} />
          </Card>
        </Styles.CardsContainer>
        <Card title="Table" description="Table of users" mt="24px">
          Table
        </Card>
      </Styles.Container>
    </Styles.Root>
  );
};

export default DashboardPage;
