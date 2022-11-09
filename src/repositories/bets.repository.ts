import db from "../database/database.js";

async function createBet(
  user_id: number,
  match_id: number,
  team1_score: number,
  team2_score: number
) {
  return db.query(
    `INSERT INTO bets (user_id, match_id, team1_score, team2_score) VALUES ($1, $2, $3, $4);`,
    [user_id, match_id, team1_score, team2_score]
  );
}

export { createBet };
