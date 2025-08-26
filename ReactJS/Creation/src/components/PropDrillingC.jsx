import React from "react";

// const PropDrillingC = ({ name }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   );
// };

// export default PropDrillingC;

//doing this way of prop drilling will be a nightmare now we will use context API

// context API

// import { Data } from "../App";

import { ProductData } from "../App";

const PropDrillingC = () => {
  return (
    <section>
      {/* <Data.Consumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </Data.Consumer> */}

      <h1>*********************</h1>
      <ProductData.Consumer>
        {(productData) => {
          return (
            <div>
              <h2>{productData.id}</h2>
              <p>Brand: {productData.brand}</p>
              <p>Size: {productData.size}</p>
            </div>
          );
        }}
      </ProductData.Consumer>
    </section>
  );
};

export default PropDrillingC;
