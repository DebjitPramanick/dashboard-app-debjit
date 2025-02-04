import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import colors from "~/styles/colors";
import { formatNumber } from "~/utils";
import ChartToolTipContent from "../ChartToolTip";
import { IUserGrowthChartData } from "../../types";
import { useIsTabletOrMobileMedia } from "~/hooks";

const UserGrowthChart = ({ data }: { data: IUserGrowthChartData[] }) => {
  const isTabletOrMobile = useIsTabletOrMobileMedia();

  return (
    <ResponsiveContainer width="100%" height={isTabletOrMobile ? 300 : 400}>
      <RechartsLineChart
        data={data}
        margin={{
          top: 16,
          bottom: 32,
          right: isTabletOrMobile ? 4 : 20,
          left: isTabletOrMobile ? 0 : 2,
        }}
      >
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ top: 0, right: 10, fontSize: "12px" }}
          formatter={(value) =>
            value === "totalUsers" ? "Total Users" : "Active Users"
          }
        />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke={colors.BORDER_BRAND_STRONG}
        />
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke={colors.BORDER_ACCENT_STRONG}
        />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ textAnchor: "middle", fontSize: 12 }}
          tickMargin={16}
        />
        <YAxis
          dataKey="totalUsers"
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => {
            return value !== 0 ? formatNumber(value) : "";
          }}
          tickMargin={16}
          tick={{ fontSize: 12 }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="6 10" vertical={false} />
        <Tooltip content={<ChartToolTipContent />} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
