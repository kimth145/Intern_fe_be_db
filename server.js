const express = require("express");
const cors = require("cors");
const pg = require("pg");
const app = express();
const port = process.env.port || 3001;

const client = new pg.Pool({
  //   user: "postgres",
  //   password: "1234",
  //   host: "localhost",
  //   port: 5432,
  //   database: "FastApi",
  user: "intern_db_5lx4_user",
  host: "dpg-csu2o6lumphs738kvg9g-a.oregon-postgres.render.com",
  password: "jVWd305lnaZjRpdgBCN5dvD8EbwtZdz3",
  port: 5432,
  database: "intern_db_5lx4",
  ssl: true,
});

app.use(cors());

app.get("/menu", async (req, res) => {
  await client.connect();
  const result = await client.query(
    "SELECT fruit_id, fruit_img FROM public.fruit_world"
  );
  res.send(result.rows);
});

app.listen(port, () => {
  console.log("connected on port " + port);
});
