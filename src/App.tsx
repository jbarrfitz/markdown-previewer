import React, { useRef, useState, useEffect } from 'react';
import Markdown from 'marked-react';
import initState from './initialState';
import { AppBar, AppBarTitle, AppBarAction } from '@react-md/app-bar';
import {
  SaveSVGIcon,
  RefreshSVGIcon,
  InfoSVGIcon,
  DeleteSVGIcon,
} from '@react-md/material-icons';
import { TextArea } from '@react-md/form';
import { Tooltip, useTooltip } from '@react-md/tooltip';

function App() {
  const [mdText, setMdText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMdText(e.target.value);
  };

  const refName = useRef<HTMLTextAreaElement>(null);

  const saveTooltip = useTooltip({
    baseId: 'save-tool-id',
    onClick: (_event) => {
      window.localStorage.setItem('editorState', mdText);
    },
  });

  const resetTooltip = useTooltip({
    baseId: 'reset-tool-id',
    onClick: (_event) => {
      setMdText(window.localStorage.getItem('editorState') || initState);
    },
  });

  const deleteTooltip = useTooltip({
    baseId: 'delete-tool-id',
    onClick: (_event) => {
      window.localStorage.setItem('editorState', '');
      setMdText(initState);
    },
  });

  const infoTooltip = useTooltip({
    baseId: 'info-tool-id',
    onClick: (_event) => {
      window.open('https://jbarrfitz.com', '_blank', 'noopener,noreferrer');
    },
  });

  useEffect(() => {
    setMdText(window.localStorage.getItem('editorState') || initState);
    refName?.current?.select();
  }, []);

  return (
    <div className='container'>
      <AppBar theme='primary'>
        <AppBarTitle>Markdown Previewer</AppBarTitle>
        <AppBarAction {...saveTooltip.elementProps} aria-label='Save'>
          <SaveSVGIcon />
        </AppBarAction>
        <Tooltip {...saveTooltip.tooltipProps}>
          Save current markdown text.
        </Tooltip>
        <AppBarAction {...resetTooltip.elementProps} aria-label='Reset'>
          <RefreshSVGIcon />
        </AppBarAction>
        <Tooltip {...resetTooltip.tooltipProps}>
          Reset markdown to default or saved text.
        </Tooltip>
        <AppBarAction
          {...deleteTooltip.elementProps}
          aria-label='Delete Saved Text'
        >
          <DeleteSVGIcon />
        </AppBarAction>
        <Tooltip {...deleteTooltip.tooltipProps}>
          Delete saved markdown text
        </Tooltip>
        <AppBarAction {...infoTooltip.elementProps} aria-label='Info'>
          <InfoSVGIcon />
        </AppBarAction>
        <Tooltip {...infoTooltip.tooltipProps}>About the Developer</Tooltip>
      </AppBar>
      <div className='App'>
        <div id='text-area'>
          <h2>Markdown Text</h2>
          <TextArea
            stretch
            maxRows={20}
            id='editor'
            value={mdText}
            ref={refName}
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
