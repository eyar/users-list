import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../features/darkMode/darkModeSlice';
import {DarkModeToggleStyle, Span, Input} from './DarkModeToggle.style'

const DarkModeToggle = () => {
  const { darkMode } = useSelector(state => state.darkMode);
  console.log(darkMode);
  const dispatch = useDispatch();

  return <DarkModeToggleStyle>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Span>
        <Input
          className="dmcheck"
          type="checkbox"
          checked={eval(darkMode)}
          onChange={()=>dispatch(toggleDarkMode())}
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