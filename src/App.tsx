import React, { useState } from "react";
import Select, { OptionType } from "react-auto-scroll-time-select";

function App() {
  const [option, setOption] = useState<OptionType | null>();

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: "10px 0" }}>{option && <>{option.value}</>}</div>
        <div style={{ padding: "10px 0" }}>
          <Select onChange={setOption} value={option} />
        </div>
      </header>
    </div>
  );
}

export default App;
