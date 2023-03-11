import logo from './logo.svg';
import './App.scss';
import PageUtama from './Pages/PageUtama';
import {Box,Container, ThemeProvider} from '@mui/material'
import { makeStyles, createTheme } from "@mui/material/styles";


function App() {
  const theme = createTheme({
    breakpoints : {
      values : {
        xs: 0,
        sm: 600,
        md: 960,
        lg : 1280,
        xl: 1366,
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
        <PageUtama/>
    </ThemeProvider>
  );
}

export default App;
