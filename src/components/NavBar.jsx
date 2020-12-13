import React from "react";

import AppBar from "@material-ui/core/Appbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

const NavBar = props => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton onClick={() => props.setIsDrawerShown(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">MUI Themeing</Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
