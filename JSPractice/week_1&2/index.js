// console.log('Hello, world!');

// var element  = document.createElement('p');
// element.textContent = 'Hello, world!';
// document.body.appendChild(element);

// prompt(text, [default]);

// let date1 = new Date();
// console.log(date1);
// console.log(date1.toDateString());
// console.log(date1.toTimeString());

const express = require("express");
const app = express();
const port = 3000;

let requestCount = 0;
let totalResponseTime = 0;

function logger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const endtime = Date.now();
    const responseTime = endtime - start;
    totalResponseTime += responseTime;
    console.log("Response time: " + responseTime + "ms");
    requestCount++;
    console.log("Request count: " + requestCount);
  });

  next();
}

app.use(logger);
app.get("/health-checkup", function (req, res) {
  const userid = req.headers.userid;
  const password = req.headers.password;
  const kidneyid = req.query.kidneyid;

  if (userid != "admin" || password != "pass") {
    res.status(400).json({ message: "Unauthorized" });

    return;
  }

  if (kidneyid != 1 && kidneyid != 2) {
    res.status(411).json({
      message: "Invalid kidney id",
    });
    return;
  }
  res.json({ msg: "Health checkup for kidney id" + kidneyid + "is done" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Zod
const zod = require("zod");

const schema = zod.object({
  name: zod.string(),
  age: zod.number(),
});

const data = {
  name: "John",
  age: 25,
};

const result = schema.safeParse(data);
