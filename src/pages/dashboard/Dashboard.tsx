import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import * as Styles from "./Dashboard.styled";

import dummyData from "~/constants/dummy.json";

const DashboardPage = () => {
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
        <Styles.Card>
          <LineChart data={topUsersDataToVisualize} />
        </Styles.Card>
        <Styles.CardsContainer mt="24px">
          <Styles.Card flex="1">
            <PieChart data={revenueDistributionDataToVisualize} />
          </Styles.Card>
          <Styles.Card flex="1">
            <BarChart data={topSteamsDataToVisualize} />
          </Styles.Card>
        </Styles.CardsContainer>
        <Styles.Card mt="24px">Table</Styles.Card>
      </Styles.Container>
    </Styles.Root>
  );
};

export default DashboardPage;
