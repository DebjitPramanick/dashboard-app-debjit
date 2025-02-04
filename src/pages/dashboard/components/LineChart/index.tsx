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

const LineChart = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart
        data={data}
        margin={{ top: 16, bottom: 32, right: 20, left: 2 }}
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
          dataKey="name"
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
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
        <Tooltip />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
