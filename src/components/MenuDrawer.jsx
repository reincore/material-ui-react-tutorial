import React from "react";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 450
  }
});

const MenuDrawer = props => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <Drawer
        anchor="left"
        open={props.isDrawerShown}
        onClose={() => props.setIsDrawerShown(false)}
      >
        <List>
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={"About"}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
