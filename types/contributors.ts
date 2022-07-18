export interface ProcessedContributorData {
  author: string;
  total_contributions: number;
  contribution_range: {
    start: Date;
    end: Date;
  };
  clans_contributed_to: string[];
}
