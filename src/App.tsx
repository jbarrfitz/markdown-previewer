import React, { useRef, useState, useEffect } from 'react';
import Markdown from 'marked-react';
import initState from './initialState';
import { TextField } from '@mui/material';
import './App.css';
import { AppBar, AppBarTitle, AppBarAction } from '@react-md/app-bar';
import {
  SaveSVGIcon,
  RefreshSVGIcon,
  InfoSVGIcon,
} from '@react-md/material-icons';

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
    <div className='container'>
      <AppBar theme='primary'>
        <AppBarTitle>Markdown Previewer</AppBarTitle>
        <AppBarAction aria-label='Save'>
          <SaveSVGIcon />
        </AppBarAction>
        <AppBarAction aria-label='Resete'>
          <RefreshSVGIcon />
        </AppBarAction>
        <AppBarAction aria-label='Info'>
          <InfoSVGIcon />
        </AppBarAction>
      </AppBar>
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
