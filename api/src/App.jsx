import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.ok) {
        const jsonData = await response.json();
        setUsers(jsonData);
        console.log(response.status);
        setStatus(response.status);
      } else {
        setErrors(` ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (errors) {
    return <div>Bad Response {errors} </div>;
  } else {
    return (
      <>
        <div>
          {users ? (
            <div>All Good : {status}</div>
          ) : (
            <div> Bad response : {errors}</div>
          )}
          {users.map((items, index) => {
            return <div key={index}>{items.id}</div>;
          })}
        </div>
      </>
    );
  }
}
export default App;
