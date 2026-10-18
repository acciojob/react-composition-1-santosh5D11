import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

const tabs = [
  { title: "Tab 1", content: "This is the content of Tab 1." },
  { title: "Tab 2", content: "This is the content of Tab 2." },
  { title: "Tab 3", content: "This is the content of Tab 3." },
];
function Tabs({ tabs }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{ cursor: "pointer" }}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div>{tabs[selectedIndex].content}</div>
    </div>
  );
}

export default App;
