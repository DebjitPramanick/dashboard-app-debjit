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

const TopStreamedSongsChart = ({
  data,
}: {
  data: ITopStreamedSongsChartData[];
}) => {
  const theme = useTheme();

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart data={data}>
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
          <Bar dataKey="streamCount" fill={colors.BG_BRAND_WEAK} />
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
