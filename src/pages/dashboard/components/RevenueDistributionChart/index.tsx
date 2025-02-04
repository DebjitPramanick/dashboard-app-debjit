import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import colors from "~/styles/colors";
import ChartToolTipContent from "../ChartToolTip";

import { IRevenueDistributionChartData } from "../../types";
import { useDashboard } from "~/contexts/DashboardContext";
import { DASHBOARD_FILTER_KEYS } from "~/constants";

const RevenueDistributionChart = ({
  data,
}: {
  data: IRevenueDistributionChartData[];
}) => {
  const { updateFilters } = useDashboard();

  const segmentColors = [
    colors.BG_ACCENT_WEAK,
    colors.BG_BRAND_WEAK,
    colors.BG_POSITIVE_WEAK,
    colors.BG_NEGATIVE_WEAK,
    colors.BG_WARNING_WEAK,
    colors.BG_NEUTRAL_WEAK,
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <RechartsPieChart>
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: 0, right: 10, fontSize: "12px" }}
          />
          <Pie
            data={data}
            dataKey="amount"
            nameKey="source"
            cx="50%"
            cy="50%"
            outerRadius={180}
            style={{ outline: "none" }}
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={segmentColors[index % segmentColors.length]}
                cursor="pointer"
                onClick={() =>
                  updateFilters(
                    DASHBOARD_FILTER_KEYS.REVENUE_SOURCE,
                    _entry.source
                  )
                }
              />
            ))}
          </Pie>
          <Tooltip content={<ChartToolTipContent />} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueDistributionChart;
