import { useContext, createContext } from "react";
import { useImmer } from "use-immer";
import { DASHBOARD_FILTER_KEYS } from "~/constants";

interface IFilters {
  [DASHBOARD_FILTER_KEYS.REVENUE_SOURCE]: string;
  [DASHBOARD_FILTER_KEYS.SONG_NAME]: string;
  [DASHBOARD_FILTER_KEYS.ARTIST]: string;
}

const DashboardContext = createContext<{
  filters: IFilters;
  updateFilters: (key: string, value: string) => void;
}>({
  filters: {
    [DASHBOARD_FILTER_KEYS.REVENUE_SOURCE]: "",
    [DASHBOARD_FILTER_KEYS.SONG_NAME]: "",
    [DASHBOARD_FILTER_KEYS.ARTIST]: "",
  },
  updateFilters: () => {},
});

export const useDashboard = () => {
  return useContext(DashboardContext);
};

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = useImmer<IFilters>({
    [DASHBOARD_FILTER_KEYS.REVENUE_SOURCE]: "",
    [DASHBOARD_FILTER_KEYS.SONG_NAME]: "",
    [DASHBOARD_FILTER_KEYS.ARTIST]: "",
  });

  const updateFilters = (key: string, value: string) => {
    setFilters((draft) => {
      draft[key as keyof IFilters] = value;
    });
  };

  const values = {
    filters,
    updateFilters,
  };

  return (
    <DashboardContext.Provider value={values}>
      {children}
    </DashboardContext.Provider>
  );
};
