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
import Select from "react-select";
import { useTheme } from "styled-components";
import { Flex } from "~/components/atoms";
import { useState } from "react";

const PieChart = ({
  data,
  enableFilters = false,
}: {
  data: any[];
  enableFilters?: boolean;
}) => {
  const theme = useTheme();

  const [filterValues, setFilterValues] = useState<string[]>([]);

  const segmentColors = [
    colors.BG_ACCENT_WEAK,
    colors.BG_BRAND_WEAK,
    colors.BG_POSITIVE_WEAK,
    colors.BG_NEGATIVE_WEAK,
    colors.BG_WARNING_WEAK,
    colors.BG_NEUTRAL_WEAK,
  ];

  const filterNodes = [];

  const handleSelectFilter = (filterValues: string[]) => {
    setFilterValues(filterValues);
  };

  if (enableFilters) {
    const revenueSourcesFilters = data.map((item) => ({
      label: item.source,
      value: item.source,
    }));

    filterNodes.push(
      <Select
        isMulti
        options={revenueSourcesFilters}
        placeholder="Select Source"
        key="revenue-source-filter"
        onChange={(selectedOptions) =>
          handleSelectFilter(selectedOptions.map((option) => option.value))
        }
        maxMenuHeight={200}
        styles={{
          control: (provided) => ({
            ...provided,
            background: theme.colors.BG_NEUTRAL_WEAKEST,
          }),
        }}
      />
    );
  }

  const filteredData = (() => {
    let items = [...data];

    if (filterValues.length > 0) {
      items = items.filter((item) => filterValues.includes(item.source));
    }
    console.log(items);
    return items;
  })();

  return (
    <>
      {filterNodes.length ? (
        <Flex justifyContent="flex-end" mb="24px">
          {filterNodes}
        </Flex>
      ) : null}
      <ResponsiveContainer width="100%" height={400}>
        <RechartsPieChart>
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ top: 0, right: 10, fontSize: "12px" }}
          />
          <Pie
            data={filteredData}
            dataKey="amount"
            nameKey="source"
            cx="50%"
            cy="50%"
            outerRadius={180}
            fill="#8884d8"
            stroke="#fff"
          >
            {filteredData.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={segmentColors[index % segmentColors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<ChartToolTipContent />} />
        </RechartsPieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChart;
