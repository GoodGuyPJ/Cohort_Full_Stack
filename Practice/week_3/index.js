app.use((req, res, next) => {
  console.log("This middleware runs first.");
  next(); // Move to the next middleware
});

app.use((req, res) => {
  console.log("This middleware runs second.");
  res.send("Response sent from the second middleware.");
});

res.send("Hello, World!"); // Sends a plain text response
res.json({ message: "Hello, JSON!" }); // Sends a JSON response

const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON in the request body

app.post("/api/data", (req, res) => {
  const jsonData = req.body; // Now req.body contains the parsed JSON data
  // Process the data...
  res.json({ success: true });
});

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Customize the error response based on your requirements
  res.status(500).json({ error: "Something went wrong!" });
};

const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    !username ||
    typeof username !== "string" ||
    username.length < 3 ||
    !password ||
    typeof password !== "string" ||
    password.length < 6
  ) {
    return res.status(400).json({ error: "Invalid input." });
  }

  // Proceed with authentication logic
  // ...

  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

const express = require("express");
const { z } = require("zod");
const app = express();

app.use(express.json());

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
    loginSchema.parse({ username, password });
    // Proceed with authentication logic
    // ...
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: "Invalid input.", details: error.errors });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

const schema = z.string();
const userSchema = z.object({
  username: z.string(),
  age: z.number(),
});
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
});

const userSchema = z.object({
  username: z.string(),
  address: addressSchema,
});
const numbersSchema = z.array(z.number());
const numberOrStringSchema = z.union([z.number(), z.string()]);
const combinedSchema = z.intersection([userSchema, addressSchema]);
