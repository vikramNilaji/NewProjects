import React, { useState, useEffect } from "react";

function App3() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [error, setError] = useState(null);

  // 1️⃣ GET method - Fetch data on page load
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchUsers();
  }, []);

  // 2️⃣ POST method - Send new data to server
  async function handleSubmit(e) {
    e.preventDefault();
    const userData = { name, email };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Failed to create user");

      const data = await response.json();
      setNewUser(data); // store the response from POST
      setUsers((prevUsers) => [...prevUsers, data]); // add new user to list
      setName("");
      setEmail("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>

      {/* Show Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* User List */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>

      {/* Show POST response */}
      {newUser && (
        <div style={{ marginTop: "10px" }}>
          <strong>New user added:</strong> {newUser.name} ({newUser.email})
        </div>
      )}
    </div>
  );
}

export default App3;
