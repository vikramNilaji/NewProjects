import React, { useState, useEffect } from "react";

const TryCatch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error !  Status: ${response.status}`);
      } else {
        const result = await response.json();
        setData(result);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2> User List</h2>
      {error ? (
        <h3 style={{ color: "red" }}> Error :{error} </h3>
      ) : data ? (
        <ul>
          {" "}
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}{" "}
        </ul>
      ) : (
        <p> Loading...</p>
      )}
    </div>
  );
};

export default TryCatch;
