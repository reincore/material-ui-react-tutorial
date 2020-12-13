import React, { useState } from "react";
import "./App.css";

import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";
import MenuDrawer from "./components/MenuDrawer";

import Container from "@material-ui/core/Container";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "fontsource-roboto";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

const App = () => {
  const [isDrawerShown, setIsDrawerShown] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <header className="App-header">
            <NavBar setIsDrawerShown={setIsDrawerShown} />
            <MenuDrawer
              isDrawerShown={isDrawerShown}
              setIsDrawerShown={setIsDrawerShown}
            />
            <MainBody />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
