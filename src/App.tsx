import React, { useState } from "react";
import Markdown from "marked-react";
import initState from "./initialState";

function App() {
  const [mdText, setMdText] = useState(initState)

  const handleTextChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMdText(e.target.value);
  }

  return (
    <div className="App">
      <textarea id='editor' value={mdText}  onChange={handleTextChange}></textarea>
      <div id='preview'>Preview Area</div>
        <Markdown>{mdText}</Markdown>
    </div>
  );
}

export default App;
