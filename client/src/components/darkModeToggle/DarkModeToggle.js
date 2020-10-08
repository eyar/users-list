import React from 'react';
import useDarkMode from 'use-dark-mode';
import {DarkModeToggleStyle, Span, Input} from './DarkModeToggle.style'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return <DarkModeToggleStyle>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Span>
        <Input
          className="dmcheck"
          type="checkbox"
          checked={darkMode.value}
          onChange={darkMode.toggle}
          id="dmcheck"
        />
        <label htmlFor="dmcheck" />
      </Span>
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </DarkModeToggleStyle>
};

export default DarkModeToggle;