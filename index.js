import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pg;

const postgreClient = new Client({
  user: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
  host: process.env.POSTGRE_HOST,
  port: process.env.POSTGRE_PORT,
  database: process.env.POSTGRE_DBNAME,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

postgreClient.connect();

const result = await postgreClient.query("SELECT NOW()");
console.log(result);

await postgreClient.end();
