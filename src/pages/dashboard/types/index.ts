export type IUserGrowthChartData = {
  month: string;
  totalUsers: number;
  activeUsers: number;
};

export type IRevenueDistributionChartData = {
  source: string;
  amount: number;
};

export type ITopStreamedSongsChartData = {
  songName: string;
  artist: string;
  streamCount: number;
};

export type IStreamingInfoTableData = {
  userId: number;
  songName: string;
  artist: string;
  recentStreamCount: number;
  dateStreamed: string;
  source: string;
};
