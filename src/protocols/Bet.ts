export type Bet = {
  id?: number;
  user_id: number;
  match_id: number;
  team1_score: number;
  team2_score: number;
};

export type BetEntity = {
  id: number;
  user_id: number;
  match_id: number;
  team1_score: number;
  team2_score: number;
  status: boolean;
};
