// import React from "react";
// import { useEffect, useState } from "react";

// const ApiExample = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//      fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Fetched Data :", data);
//         setUsers(data);
//       });

//     console.log("j");
//   }, []);

//   return (
//     <div>
//       <h2>Users List</h2>
//       <ul>
//         {users.map((user) => {
//           return <li key={user.id}>{user.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default ApiExample;

// import { useState, useEffect } from "react";

// const ApiExample = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
//   return (
//     <div>
//       {users && users.length
//         ? users.map((user) => {
//             return (
//               <ul key={user.id}>
//                 {
//                   <li>
//                     {user.username} and Email id is: {user.email}
//                   </li>
//                 }
//               </ul>
//             );
//           })
//         : null}
//     </div>
//   );
// };

// export default ApiExample;

import { useState, useEffect } from "react";

const ApiExample = () => {
  const [users, setUsers] = useState([]);

  async function FetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setUsers(jsonData);
      console.log(jsonData)
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      {users && users.length
        ? users.map((user) => {
            return (
              <ul key={user.id}>
                {" "}
                {
                  <li>
                    {user.name} {user.username} {user.email}
                  </li>
                }{" "}
              </ul>
            );
          })
        : null}
    </div>
  );
};

export default ApiExample;
