import { useState } from "react";


const New = () => {
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

  const updatedData = data.map((item, index) => {
    if (index === 0 || index === 1 || index === 2) {
      return { ...item, age: 28 };
    } else {
      return item;
    }
  });


  const [selectData,setSelectData]=useState({})
  function HandlePlus(ChildName){

    setSelectData({...selectData, [ChildName]:!selectData[ChildName],})
  }
 

  console.log(updatedData);
  return (
    <>
      {updatedData.map((item1, index) => {
        return (
          <div>
            {" "}
            {
              <div key={index}>
                Name: {item1.name} Surname:{item1.surname} Age:{item1.age}

                {item1 && item1.children && item1.children.length ? <span onClick={()=>HandlePlus(item1.)}> + </span> : null}
                {item1 && item1.children && item1.children.length 
                  ? item1.children.map((itemChildren, childrenIndex) => {
                      return <div key={childrenIndex}>  { selectData ? item1.children.name : null} </div>;
                    })
                  : null}
              </div>
            }
          </div>
        );
      })}
    </>
  );
};

export default New;
