import React, { useState } from "react";
import "./App.css";
import Select, { OptionType } from "react-auto-scroll-time-select";

function App() {
  const [option, setOption] = useState<OptionType | null>();

  const handleChange = (value: any) => {
    setOption(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: "10px 0" }}>{option && <>{option.value}</>}</div>
        <div style={{ padding: "10px 0" }}>
          <Select onChange={handleChange} value={option} />
        </div>
      </header>
    </div>
  );
}

export default App;
