import React from "react";
import CustomTabs from "./CustomTabs";

const CustomTabsTest = () => {
  function RandomComponent() {
    return <h1>Some Random Component</h1>;
  }

  const tabs = [
    {
      label: "Tab1",
      content: <div>This is Content for tab1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is Content for tab2</div>,
    },
    {
      label: "Tab3",
      content: <RandomComponent />, // ✅ Correct usage
    },
  ];

  function handleChange(index) {
    console.log("Selected tab:", index);
  }

  return <CustomTabs tabContent={tabs} onChange={handleChange} />;
};

export default CustomTabsTest;
