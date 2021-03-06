import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { fetchUsers } from './features/data/dataSlice';
import { toggleDarkMode } from './features/darkMode/darkModeSlice';
import Loader from './components/loader/Loader';
import TopBar from './components/topBar/TopBar';
import { GlobalStyle, lightTheme, darkTheme } from './features/Themes';
import Container from './components/container/Container'
import Error from './components/error/Error'

function App() {
  const { darkMode } = useSelector(state => state.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])
  
  const { isLoading, error } = useSelector(state => state.data);
  
  let renderedList = isLoading ? <Loader/> : <Container/>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <TopBar/>
      {error ? <Error/> : renderedList}
    </ThemeProvider>

  );
}

export default App;
