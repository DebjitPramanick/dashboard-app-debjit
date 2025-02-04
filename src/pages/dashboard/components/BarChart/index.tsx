import {
  Bar,
  BarChart as RechartsBarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import colors from "~/styles/colors";

const BarChart = ({ data }: { data: any[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsBarChart height={250} data={data}>
        <XAxis dataKey="songName" />
        <YAxis dataKey="streamCount" />
        <Tooltip />
        <Legend />
        <Bar dataKey="streamCount" fill={colors.BG_BRAND_WEAK} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
