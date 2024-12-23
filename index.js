import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pg;

const postgreClient = new Client({
  user: env.POSTGRE_USER,
  password: env.POSTGRE_PASSWORD,
  host: env.POSTGRE_HOST,
  port: env.POSTGRE_PORT,
  database: env.POSTGRE_DBNAME,
});

postgreClient.connect();
