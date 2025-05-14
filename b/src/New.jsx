const New = () => {
  let data = [
    {
      name: "vikram",
      surname: "nilaji",
    },
    {
      name: "pooja",
      surname: "nilaji",
      children: [{ daughterName: "maanya" }],
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
      return  item ;
    }
  });

  console.log(updatedData);
  return (
    <>
    
      {updatedData.map((item1, index) => {

        return ( <div> { <div key={index}>
        
          Name: {item1.name} Surname:{item1.surname} Age:{item1.age}

          {item1 && item1.children && item1.children.length ? <div>{item1.children[0].daughterName}</div> : <div> NA</div> }
        </div>}</div> )
         })}


    </>
  );
};

export default New;
