import db from "../database/database.js";

async function createUser(name: string) {
  return db.query(`INSERT INTO users (name) VALUES ($1);`, [name]);
}

async function getUserByName(name: string) {
  return db.query(`SELECT * FROM users WHERE name=$1;`, [name]);
}

export { createUser, getUserByName };
