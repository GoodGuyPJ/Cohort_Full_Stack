const express = require("express");

const app = express();
/*
function isOldEnough(age) {
  const age = req.query.age;
  if(age >= 14){
    return true;
  }else{
    return false;
  }
}

app.get("/ride2", isOldEnoughMiddleware, function(req, res) {
  if(isOldEnough(req.query.age)){
  res.json({
    msg: "You have successfully requested ride 2"
  })
}else {
  res.stattus(411).json({
    msg: "Sorry, you are not old enough to ride ride 2",
  })
}
});


app.get("/ride1", isOldEnoughMiddleware, function(req, res) {
  if(isOldEnough(req.query.age)){
  res.json({
    msg: "You have successfully requested ride 1"
  })
}else {
  res.stattus(411).json({
    msg: "Sorry, you are not old enough to ride ride 1",
  })
}
});
*/

let requestCount = 0;

function countRequest(req, res, next) {
  requestCount++;
  console.log("Request count: ", requestCount);
  next();
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of age yet",
    });
  }
}

// app.use(isOldEnoughMiddleware); // This will run for all routes
app.use(countRequest);

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully requested ride 2",
  });
});

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully requested ride 1",
  });
});

app.listen(3000);
