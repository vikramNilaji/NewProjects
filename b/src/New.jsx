import { useState } from "react";

let New = () => {
  const items = [
    { name: "vikram", surname: "nilaji" },
    { name: "pooja", surname: "nilaji" },
    { name: "pooja", surname: "nilaji" },
  ];

  let updatedItems = items.map((item, index) => {
    if (index === 0 || index === 1) {
      return { ...item, age: 23 };
    } else {
      return item;
    }
  });

  console.log(updatedItems);

  return (
    <>
      {updatedItems.map((item, index) => (
        <div key={index}>
          Name: {item.name}, Surname: {item.surname}, {item.age ? <div> Age : {item.age} </div> : "NA"}
        </div>
      ))}
    </>
  );
};

export default New;

