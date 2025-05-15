const New = () => {
  const Data = [
    { name: "Vikram", surname: "Nilaji" },
    { name: "Pooja", surname: "Nilaji", children: [{ name: "Maanya" }] },
    { name: "Sumitra", surname: "Nilaji" },
  ];

  const UpdateData = Data.map((item, index) => {
    if (item.name === "Pooja") {
      return { ...item, Age: 29 };
    } else {
      return item;
    }
  });

  console.log(UpdateData);

  return <></>;
};

export default New;
