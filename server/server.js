require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ooitkismzzkxarjmwdeb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const app = express();
app.use(cors());
const port = 3200;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mark19982.",
  database: "market",
  insecureAuth: true,
});

app.get("/", (req, res) => {
  console.log("requested");
  connection.query("SELECT * FROM Food", (err, results, fields) => {
    res.json(results);
  });
});

app.get("/register", (req, res) => {
  console.log("requested");
  connection.query("SELECT * FROM data_user", (err, results, fields) => {
    res.status(200).json(results);
  });
});

app.get("/login", (req, res, next) => {
  let options = {
    root: __dirname,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
    },
  };
  res.sendFile("/login.html", options, function(err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent: login.html");
    }
  });
});

app.get("/profile", (req, res) => {
  console.log("requested");
  connection.query("SELECT * FROM data_user", (err, results, fields) => {
    res.status(200).json(results);
  });
});

app.get("/supabase", (req, res) => {
  supabase.from("countries").select().then(({ data, error }) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => console.log(`Express app running on port ${port}`));
