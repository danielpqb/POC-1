export type User = {
  id?: number;
  name: string;
};

export type UserAccuracy = {
  user_id?: number;
  name: string;
  correctBets: number;
};
