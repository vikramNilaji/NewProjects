import { useState } from "react";

const ApiExample = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  async function FetchData(e) {
    e.preventDefault();
    try {

      const response=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:{}
      } )
      
    } catch (error) {
      console.log(error.message)
      
    }
  }

  return (
    <div>
      <form action="" onSubmit={() => {}}>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            value={name}
          />
        </div>
        <div>
          <input
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Enter Age"
            value={age}
          />
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email Address"
            value={email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApiExample;

// const ApiExample = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [newData, setNewData] = useState(null);

//   async function FetchData(e) {
//     e.preventDefault();
//     const contentData = {
//       name: name,
//       email: email,
//     };

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(contentData)
//         }
//       );

//       const JsonData = await response.json();
//       setNewData(JsonData);
//     } catch (error) {
//       console.log("Error:", error)
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={FetchData}>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//         </div>

//         <div>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {newData ? (
//         <div>
//           {" "}
//           <h1>Server Response : </h1> <h2>{JSON.stringify(newData)}</h2>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ApiExample;
