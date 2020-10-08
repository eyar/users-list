import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { fetchUsers } from './features/data/dataSlice';
import Loader from './components/loader/Loader';
import TopBar from './components/topBar/TopBar';
import { lightTheme, darkTheme } from './features/Themes';
import Container from './components/container/Container'

function App() {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = value ? darkTheme : lightTheme;

  const { isLoading, error } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  if (error) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{error.toString()}</div>
      </div>
    )
  }

  let renderedList = isLoading ? <Loader/> : <Container/>;

  return (
    <ThemeProvider theme={theme}>
        <TopBar/>
        {renderedList}
    </ThemeProvider>

  );
}

export default App;
