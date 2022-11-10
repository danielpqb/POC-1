import db from "../database/database.js";
import { Bet } from "../protocols/Bet.js";

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

async function deleteBet(id: number) {
  return db.query(`DELETE FROM bets WHERE id=$1;`, [id]);
}

async function upsertBet(updated_bet: Bet) {
  const q1 = await db.query(
    `
    UPDATE bets
    SET cancelled=true
    WHERE id=$1;
    `,
    [updated_bet.id]
  );
  const q2 = await db.query(
    `
    INSERT INTO bets (user_id, match_id, team1_score, team2_score)
    VALUES ($1, $2, $3, $4);
    `,
    [
      updated_bet.user_id,
      updated_bet.match_id,
      updated_bet.team1_score,
      updated_bet.team2_score,
    ]
  );

  return { update: q1, insert: q2 };
}

export { createBet, deleteBet, upsertBet };
