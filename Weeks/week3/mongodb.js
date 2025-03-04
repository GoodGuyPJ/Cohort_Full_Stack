const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:Push12Jha@cluster0.lpba2sg.mongodb.net/userappnew")

const User = mongoose.model("User", {name: String, email: String, password: String});

app.post("/signup", async function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;


const existingUser = await User.findOne({ email: username });
if(existingUser){
  return res.status(400).send("User already exists");
}

const user = new User({
  name: name,
  email: username,
  password: password
});


user.save();
res.json({
  "msg":"user created successfully"
})
})

app.listen(3000, function(){
  console.log("Server started");
})
