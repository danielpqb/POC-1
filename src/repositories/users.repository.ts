import { QueryResult } from "pg";
import db from "../database/database.js";
import { User, UserAccuracy } from "../protocols/User.js";

async function createUser(name: string) {
  return db.query(`INSERT INTO users (name) VALUES ($1);`, [name]);
}

async function getUserByName(name: string): Promise<QueryResult<User>> {
  return db.query(`SELECT * FROM users WHERE name=$1;`, [name]);
}

async function selectTop10MostAccurateUsers(): Promise<
  QueryResult<UserAccuracy>
> {
  return db.query(
    `
    SELECT user_id, users.name, COUNT(user_id) as "correctBets"
    FROM bets
    JOIN users ON user_id=users.id
    WHERE status=true AND cancelled=false
    GROUP BY user_id, users.name
    ORDER BY "correctBets" DESC
    LIMIT 10;
    `
  );
}

export { createUser, getUserByName, selectTop10MostAccurateUsers };
