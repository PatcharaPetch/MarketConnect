require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { decode } = require("base64-arraybuffer");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://ooitkismzzkxarjmwdeb.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const port = 3200;

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    res.status(400).json(error);
  } else {
    res.status(200).json(data);
  }
});

app.post("/support", async (req, res) => {
  const { name, email, contact, message } = req.body;
  const { data, error } = await supabase.from("support").insert({
    Name: name,
    Email: email,
    Contact_Number: contact,
    Message: message,
  });
  if (error) {
    res.status(400).json(error);
  } else {
    res.status(200).json(data);
  }
});

app.post("/fooddetail", async (req, res) => {
  const { foodid } = req.body;
  const { data, error } = await supabase
    .from("Food")
    .select(
      "Food_Name, Price, Description, User(firstname,lastname,contact), Catagory(catagory_name)"
    )
    .eq("id", foodid);
  if (error) {
    res.status(400).json(error);
  } else {
    res.status(200).json(data);
  }
});

app.post("/verify", async (req, res) => {
  const { email, token } = req.body;
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });
  if (error) {
    res.status(400).json(error);
  } else {
    res.status(200).json(data);
  }
});

app.post("/save", async (req, res) => {
  const img = decode(req.body.img);
  const { firstname, lastname, contact, id } = req.body;
  const { data, error } = await supabase.auth.admin.updateUserById(id, {
    user_metadata: {
      firstname: firstname,
      lastname: lastname,
      contact: contact,
    },
  });
  const { data2, error2 } = await supabase
    .from("User")
    .update({
      firstname: firstname,
      lastname: lastname,
      contact: contact,
    })
    .eq("id_user", id);
  const { data3, error3 } = await supabase.storage
    .from("Profile_User")
    .upload(id + ".png", img, {
      contentType: "image/png",
      upsert: true,
    });
  if (error || error2 || error3) {
    res.status(400).json(error || error2 || error3);
  } else {
    res.status(200).json(data);
  }
});

app.post("/delete", async (req, res) => {
  const { user } = req.body;
  // const shopkeeper = supabase
  //   .from("Food")
  //   .select("Shopkeeper_Id,users!inner(Shopkeerer_Id)")
  //   .eq("User_Info.id", user);
  const { data, error } = await supabase
    .from("Food")
    .delete()
    .eq("id", "75");
  const { error2 } = await supabase.storage
    .from("Picture_Food")
    .remove("64" + ".png");
  if (error || error2) {
    res.status(400).json(error || error2);
  } else {
    res.status(200).json(data);
  }
});

app.post("/addproduct", async (req, res) => {
  const { name, price, catagory_id, id, description } = req.body;
  // const { top, error5 } = supabase
  //   .from("Food")
  //   .select("id", { head: true })
  //   .limit(1)
  //   .single();
  console.log(catagory_id);
  const { data, error } = await supabase.from("Food").insert({
    id: "75",
    Food_Name: name,
    Catagory_Id: catagory_id,
    Price: price,
    Shopkeeper_Id: id,
    Description: description,
  });
  if (error) {
    res.status(400).json(error);
  } else {
    res.status(200).json(data);
  }
});

app.listen(port, () => console.log(`Express app running on port ${port}`));
