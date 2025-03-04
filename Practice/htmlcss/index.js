//create a counter for 30 to 0
let counter = 2;
const timer = setInterval(() => {
  console.clear();
  console.log(counter);
  counter--;

  if(counter<0){
    clearInterval(timer);
    console.clear();
    console.log("Done");
  }
}, 1000);



//date
// const currentDate = new Date();
// console.log(currentDate)


// function currentTimePrint() {
//   console.log(new Date().getTime())
// }
// setInterval(currentTimePrint, 1000)

