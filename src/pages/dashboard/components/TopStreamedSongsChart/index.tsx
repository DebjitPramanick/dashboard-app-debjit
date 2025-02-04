import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceArea,
} from "recharts";
import { useTheme } from "styled-components";
import colors from "~/styles/colors";
import { formatNumber } from "~/utils";
import ChartToolTipContent from "../ChartToolTip";
import { ITopStreamedSongsChartData } from "../../types";
import { useDashboard } from "~/contexts/DashboardContext";
import { DASHBOARD_FILTER_KEYS } from "~/constants";
import { useIsTabletOrMobileMedia } from "~/hooks";

const TopStreamedSongsChart = ({
  data,
}: {
  data: ITopStreamedSongsChartData[];
}) => {
  const theme = useTheme();
  const isTabletOrMobile = useIsTabletOrMobileMedia();
  const { updateFilters } = useDashboard();

  return (
    <>
      <ResponsiveContainer width="100%" height={isTabletOrMobile ? 300 : 400}>
        <RechartsBarChart
          data={data}
          margin={{
            left: isTabletOrMobile ? -8 : -6,
            bottom: 8,
          }}
        >
          <XAxis
            dataKey="songName"
            axisLine={false}
            tickLine={false}
            tickMargin={16}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            dataKey="streamCount"
            axisLine={false}
            tick={{ textAnchor: "middle", fontSize: 12 }}
            tickMargin={24}
            tickFormatter={formatNumber}
          />
          <Tooltip content={<ChartToolTipContent />} />
          <Bar
            dataKey="streamCount"
            fill={colors.BG_BRAND_WEAK}
            cursor="pointer"
            onClick={(item) => {
              updateFilters(DASHBOARD_FILTER_KEYS.SONG_NAME, item.songName);
            }}
          />
          <ReferenceArea
            strokeOpacity={0.3}
            fill={theme.colors.BG_NEUTRAL_WEAKEST}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </>
  );
};

export default TopStreamedSongsChart;
