require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://ooitkismzzkxarjmwdeb.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(cors());
const port = 3200;

app.get("/", (req, res) => {
  supabase
    .from("countries")
    .select()
    .then(({ data, error }) => {
      if (error) {
        res.status(400).json({ error });
      } else {
        res.status(200).json(data);
      }
    });
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json(data);
  }
});

app.post("/support", async (req, res) => {
  const { name, email, contract, message } = req.body;
  const { data, error } = await supabase.from("support").insert({
    Name: name,
    Email: email,
    Contract_Number: contract,
    Message: message,
  });
  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json(data);
  }
});

// app.get("/home", async(req, res) => {
//   const {email , password} = req.body;
//   const {data, error} = await supabase.auth.signUp(
//     {
//       email : email,
//       password :password
//     }
//   );
//   if (error) {
//     res.status(400).json({ error });
//   }else {
//     res.status(200).json(data);
//   }
// });

app.post("/fooddetail/:id", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.select("food").select();
  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json(data);
  }
});

app.post("/verify", async (req, res) => {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });
  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json(data);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json(data);
  }
});

app.get("/profile", async (req, res) => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    res.status(400).json({ error });
  } else {
    res.status(200).json(data);
  }
});

app.get("/supabase", (req, res) => {
  supabase
    .from("countries")
    .select()
    .then(({ data, error }) => {
      if (error) {
        res.status(400).json({ error });
      } else {
        res.status(200).json(data);
      }
    });
});

app.listen(port, () => console.log(`Express app running on port ${port}`));
