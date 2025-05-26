import { useState } from "react";

const CustomTabs = ({ tabContent = [], onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function HandleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div>
      <div>
        {tabContent.map((tabitem, index) => (
          <span
            key={tabitem.label}
            onClick={() => HandleOnClick(index)}
            style={{ marginRight: "10px", cursor: "pointer" }}
          >
            {tabitem.label}
          </span>
        ))}
      </div>
      <div>
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
