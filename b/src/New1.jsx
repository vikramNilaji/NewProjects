import { useState } from "react";

const New1 = () => {
  let data = [
    {
      name: "vikram",
      surname: "nilaji",
    },
    {
      name: "pooja",
      surname: "nilaji",
      children: [{ name: "maanya" }],
    },
    {
      name: "Sumitra",
      surname: "nilaji",
    },
  ];

  const updatedData = data.map((item) => ({
    ...item,
    age: 28,
  }));

  const [selectData, setSelectData] = useState({});

  const HandlePlus = (childKey) => {
    setSelectData((prev) => ({
      ...prev,
      [childKey]: !prev[childKey],
    }));
  };
console.log(selectData)
  return (
    <>
      {updatedData.map((item1, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          Name: {item1.name} Surname: {item1.surname} Age: {item1.age}{" "}
          {item1.children && item1.children.length > 0 ? (
            <span
              onClick={() => HandlePlus(item1.name)}
              style={{ cursor: "pointer", marginLeft: "10px", color: "blue" }}
            >
              {selectData[item1.name] ? "-" : "+"}
            </span>
          ) : null}
           {selectData[item1.name] && item1.children
            ? item1.children.map((child, childIndex) => (
                <div key={childIndex} style={{ paddingLeft: "20px" }}> 
                  Child: {child.name}
                </div>
              ))
            : null} 
        </div>
      ))}
    </>
  );
};

export default New1;
