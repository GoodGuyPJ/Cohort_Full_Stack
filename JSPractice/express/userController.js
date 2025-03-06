const registerUser = (req, res) => {
  const userName = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.json({
    success: true,
    message: "User registered successfully",
    name: userName,
    email: email,
    password: password,
  });
};

module.exports = { registerUser };
