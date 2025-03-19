//Fetch, Authentication and Databases
// function getpersonData() {
//   fetch("https://fakerapi.it/api/v1/persons")
//   .then((response) => {
//     response.json()
//     .then((data) => {
//       console.log(data);
//     });
//   });
// }

async function getpersonData() {
  const response = await fetch("https://fakerapi.it/api/v1/persons");
  const data = await response.json();
  console.log(data);
}
