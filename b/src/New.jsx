import { useState } from "react";

const New = () => {
  const Data = [
    { name: "Vikram", surname: "Nilaji", children: [{ name: "Maanya" }] },
    { name: "Pooja", surname: "Nilaji", children: [{ name: "Maanya" }] },
    { name: "Sumitra", surname: "Nilaji", children: [{ name: "Pintu" }] },
  ];

  const updatedData = Data.map((item, index) => {
    if (item.children) {
      return { ...item, Age: 23 };
    } else {
      item;
    }
  });

  console.log(updatedData);
  const [selectedData, setSelectedData] = useState({});

  function HandlePlus(childkey) {
    setSelectedData({ ...selectedData,[childkey]: !selectedData[childkey] });
  }
console.log(selectedData)
  return (
    <div>
      {updatedData.map((item, index) => {
        return (
          <div key={index}>
            {" "}
            {item.name}
            {item && item.children && item.children.length ? (
              <span onClick={() => HandlePlus(item.name)}>{selectedData[item.name] ? "-": "+"}</span>
            ) : null}
            {item && item.children && item.children.length && selectedData[item.name]
              ? item.children.map((child, index) => {
                  return <div key={index}> {child.name} </div>;
                })
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default New;
