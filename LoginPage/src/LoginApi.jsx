import React from "react";
import { useState, useEffect } from "react";

const LoginApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.slice(0,5));
        setData(data.slice(0,5));
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <div>
        {data && data.length
          ? data.map((items, index) => {
              return (
                <div key={index}>
                  {items.id} {items.title}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default LoginApi;
