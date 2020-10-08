import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { fetchUsers } from './features/data/dataSlice';
import Loader from './components/loader/Loader';
import TopBar from './components/topBar/TopBar';
import { lightTheme, darkTheme } from './features/Themes';
import Container from './components/container/Container'
import Error from './components/error/Error'

function App() {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = value ? darkTheme : lightTheme;

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])
  
  const { isLoading, error } = useSelector(state => state.data);
  
  let renderedList = isLoading ? <Loader/> : <Container/>;

  return (
    <ThemeProvider theme={theme}>
        <TopBar/>
        {error ? <Error/> : renderedList}
    </ThemeProvider>

  );
}

export default App;
