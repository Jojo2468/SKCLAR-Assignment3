const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: 'user',
  password: 'pass',
  database: 'testdb'
});
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const { value } = req.body;
  await pool.query('INSERT INTO items(value) VALUES($1)', [value]);
  res.sendStatus(201);
});
app.get('/data', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM items');
  res.json(rows);
});
app.listen(3000);