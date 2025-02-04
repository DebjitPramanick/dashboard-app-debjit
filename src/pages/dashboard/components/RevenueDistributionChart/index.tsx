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
import { useIsTabletOrMobileMedia } from "~/hooks";

const RevenueDistributionChart = ({
  data,
}: {
  data: IRevenueDistributionChartData[];
}) => {
  const isTabletOrMobile = useIsTabletOrMobileMedia();
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
      <ResponsiveContainer width="100%" height={isTabletOrMobile ? 300 : 400}>
        <RechartsPieChart>
          <Legend align="right" wrapperStyle={{ fontSize: "12px" }} />
          <Pie
            data={data}
            dataKey="amount"
            nameKey="source"
            cx="50%"
            cy="50%"
            outerRadius={isTabletOrMobile ? 110 : 160}
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
