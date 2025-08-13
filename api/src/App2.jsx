import { useState } from "react";

const App2 = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [newData, setNewData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchData(e) {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const jsonData = await response.json();
      if (jsonData) {
        setLoading(false)
        setNewData(jsonData);
      }
    } catch (error) {
      console.log(error);
    }
  }


    return (
      <>
        <form action="" onSubmit={fetchData}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <button type="submit"> Click Here</button>
        </form>
        <p>vikram vik.nilaji@g.com</p>
   {loading ? <div> Loading please wait...</div> :null}
        <div>{JSON.stringify(newData)}</div>
      </>
    );
  }
;
export default App2;
