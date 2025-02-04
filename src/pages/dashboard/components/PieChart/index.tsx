import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import colors from "~/styles/colors";

const PieChart = ({ data }: { data: any[] }) => {
  const segmentColors = [
    colors.BG_ACCENT_WEAK,
    colors.BG_BRAND_WEAK,
    colors.BG_POSITIVE_WEAK,
    colors.BG_NEGATIVE_WEAK,
    colors.BG_WARNING_WEAK,
    colors.BG_NEUTRAL_WEAK,
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ top: 0, right: 10, fontSize: "12px" }}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={180}
          fill="#8884d8"
          stroke="#fff"
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={segmentColors[index % segmentColors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
