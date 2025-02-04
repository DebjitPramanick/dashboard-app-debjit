import { IFilters } from "~/types";

export const generateFilterOptions = (
  data: Record<string, string | number>[],
  key: string
) => {
  return data.map((item) => ({
    label: item[key],
    value: item[key],
  }));
};

export const getFilteredData = ({
  data,
  filters,
  filterKeys,
}: {
  data: object[];
  filters: IFilters;
  filterKeys: string[];
}) => {
  let items = [...data];

  filterKeys.forEach((key) => {
    console.log(key);
    const filterValues = filters[key as keyof IFilters];
    if (filterValues.length > 0) {
      items = items.filter((item: object) =>
        filterValues.includes((item as Record<string, string>)[key])
      );
    }
  });

  return items;
};
