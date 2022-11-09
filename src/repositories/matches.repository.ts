import db from "../database/database.js";

async function createMatch(team1: string, team2: string) {
  return db.query(`INSERT INTO matches (team1, team2) VALUES ($1, $2);`, [
    team1,
    team2,
  ]);
}

export { createMatch };
