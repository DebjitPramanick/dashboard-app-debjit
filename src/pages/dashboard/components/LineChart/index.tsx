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

const LineChart = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={data} style={{ margin: "0 12px" }}>
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
        <XAxis dataKey="name" />
        <YAxis dataKey="totalUsers" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
        <Tooltip />
        <Legend />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
