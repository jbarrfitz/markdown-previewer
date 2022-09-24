import React, { useRef, useState, useEffect } from 'react';
import Markdown from 'marked-react';
import initState from './initialState';
import { TextField } from '@mui/material';
import './App.css';

function App() {
  const [mdText, setMdText] = useState(initState);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMdText(e.target.value);
  };

  const refName = useRef<HTMLTextAreaElement>(null);
  // const refId = refName?.current?.id;
  useEffect(() => {
    refName?.current?.select();
  }, []);

  return (
    <div>
      <h1>Markdown Previewer</h1>
      <div className='App'>
        <div id='text-area'>
          <h2>Markdown Text</h2>
          <TextField
            multiline
            fullWidth
            maxRows='20'
            id='editor'
            value={mdText}
            inputRef={refName}
            onChange={handleTextChange}
          />
        </div>
        <div id='preview'>
          <h2>Preview</h2>
          <Markdown>{mdText}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
