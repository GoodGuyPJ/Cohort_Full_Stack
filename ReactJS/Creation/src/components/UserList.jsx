import React from "react";

// const UserList = () => {
//   const users = [
//     { id: 1, name: "Alice", age: 23 },
//     { id: 2, name: "sfs", age: 43 },
//   ];
//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>Name: {user.name}</h2>
//           <h3>Age: {user.age}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

const UserList = () => {
  const Products = [
    {
      id: "prod_101",
      name: "Wireless Mouse",
      price: 799,
      category: "Electronics",
    },
    {
      id: "prod_102",
      name: "Gaming Keyboard",
      price: 1999,
      category: "Electronics",
    },
    {
      id: "prod_103",
      name: "Running Shoes",
      price: 2499,
      category: "Footwear",
    },
    {
      id: "prod_104",
      name: "Water Bottle",
      price: 499,
      category: "Accessories",
    },
    {
      id: "prod_105",
      name: "Bluetooth Headphones",
      price: 2999,
      category: "Electronics",
    },
  ];

  return (
    <div>
      {Products.map((p, i) => (
        <div key={p.id}>
          <ul>
            Product: R00000{i + 1}
            <li>Product Name: {p.name}</li>
            <li>Category: {p.category}</li>
            <li>Price: {p.price} </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserList;
