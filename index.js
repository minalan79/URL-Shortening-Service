import dotenv from "dotenv";
import express from "express";
import { Sequelize } from "sequelize";

const app = express();

dotenv.config();
app.use(express.json());

// const { Client } = pg;

// const postgreClient = new Client({
//   user: process.env.POSTGRE_USER,
//   password: process.env.POSTGRE_PASSWORD,
//   host: process.env.POSTGRE_HOST,
//   port: process.env.POSTGRE_PORT,
//   database: process.env.POSTGRE_DBNAME,
//   ssl: {
//     require: true,
//     rejectUnauthorized: false,
//   },
// });

const sequelize = new Sequelize(
  process.env.POSTGRE_DBNAME,
  process.env.POSTGRE_USER,
  process.env.POSTGRE_PASSWORD,
  {
    host: process.env.POSTGRE_HOST,
    port: process.env.POSTGRE_PORT,
    dialect: "postgres",
    ssl: true,
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
// postgreClient.connect();

function generateShortURL(longURL) {}

// const result = await postgreClient.query("SELECT * FROM pg_database");
// console.log(result);

// await postgreClient.end();

app.post("/shorten", (req, res) => {
  try {
    const data = req.body;
    res.status(201).json();
  } catch {}
});

app.get("/shorten/:shortURL", (req, res) => {
  try {
    const shortURL = req.params.shortURL;
    res.status(200).json();
  } catch {}
});

app.put("/shorten/:shortURL", (req, res) => {
  try {
    const shortURL = req.params.shortURL;
    const data = req.body;
    res.status(200).json();
  } catch {}
});

app.delete("/shorten/:shortURL", (req, res) => {
  try {
    const shortURL = req.params.shortURL;
    res.status(204);
  } catch {}
});

app.get("/shorten/:shortURL/stats", (req, res) => {
  try {
    const shortURL = req.params.shortURL;
    res.status(200).json();
  } catch {}
});
