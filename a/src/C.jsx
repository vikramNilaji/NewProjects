// import React from "react";
// import { useState, useEffect } from "react";

// const C = () => {
//   const [data, setData] = useState();
//   const [count, setCount] = useState(0);

//   function ButtonHandle(){

//     setCount((c)=>c+1)
//     FetchData()
//   }

//   const FetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const JsonData = await response.json();
//     setData(JsonData);
//   };

// //   useEffect(() => {

// //     if(count>0){ FetchData();}
   
// //   }, [count]);



//   return (
//     <div>
//       <h3>Button Clicked: {count} times</h3>
//       <button onClick={ButtonHandle}>Click Here</button>
//       <ul>
//         {data && data.length > 0
//           ? data.map((items, index) => (
//               <li key={index}>{items.email}</li>
//             ))
//           : "loading..."}
//       </ul>
//     </div>
//   );
// };

// export default C;


// import React, { useState } from "react";

// const C = () => {
//   const [data, setData] = useState([]);
//   const [count, setCount] = useState(0);

//   // Fetching data
//   const FetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const JsonData = await response.json();
//     setData(JsonData);
//   };

//   // Button click handler
//   function ButtonHandle() {
//     setCount((c) => c + 1); // Increment count
//     FetchData(); // Fetch data on every click
//   }

//   return (
//     <div>
//       <h3>Button Clicked: {count} times</h3>
//       <button onClick={ButtonHandle}>Click Here</button>
//       <ul>
//         {data.length > 0
//           ? data.map((items, index) => (
//               <li key={index}>{items.email}</li>
//             ))
//           : "loading..."}
//       </ul>
//     </div>
//   );
// };

// export default C;

// import React, { useState } from "react";

// const C = () => {
//   const [data, setData] = useState([]);
//   const [count, setCount] = useState(0);

//   // Fetching data and adding a timestamp to ensure re-render
//   const FetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const JsonData = await response.json();
    
//     // Add a timestamp to force state change
//     const updatedData = JsonData.map((item) => ({
//       ...item,
//       timestamp: new Date().getTime(), // Add timestamp to ensure change
//     }));

//     setData(updatedData);
//   };

//   // Button click handler
//   function ButtonHandle() {
//     setCount((c) => c + 1); // Increment count
//     FetchData(); // Fetch data on every click
//   }

//   return (
//     <div>
//       <h3>Button Clicked: {count} times</h3>
//       <button onClick={ButtonHandle}>Click Here</button>
//       <ul>
//         {data.length > 0
//           ? data.map((item, index) => (
//               <li key={`${item.id}-${item.timestamp}`}>{item.email}</li>
//             ))
//           : "loading..."}
//       </ul>
//     </div>
//   );
// };

// export default C;


import React, { useState } from "react";

const C = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  // Fetch data only once and store it
  const FetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const JsonData = await response.json();
    setData(JsonData);
  };

  // Button click handler
  function ButtonHandle() {
    if (data.length === 0) {
      FetchData(); // Fetch data only on the first click
    }
    setCount((c) => c + 1); // Increase count
  }

  return (
    <div>
      <h3>Button Clicked: {count} times</h3>
      <button onClick={ButtonHandle}>Click Here</button>
      <ul>
        {data.length > 0
          ? Array.from({ length: count }).map((_, i) => (
              <React.Fragment key={i}>
                {data.map((item, index) => (
                  <li key={`${item.id}-${i}-${index}`}>{item.email}</li>
                ))}
              </React.Fragment>
            ))
          : "loading..."}
      </ul>
    </div>
  );
};

export default C;

