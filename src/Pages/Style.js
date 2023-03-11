import { createTheme , ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    breakpoints : {
        values : {
            xs: 0,
            sm: 600,
            md: 960,
            lg : 1280,
            xl: 1336,
        }
    }
})

function OverridesCss() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Overrides CSS</Button>
    </ThemeProvider>
  );
}

export default OverridesCss;