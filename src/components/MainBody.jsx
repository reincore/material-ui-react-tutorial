import React from "react";

import ButtonStyled from "./common/ButtonStyled";
import CheckboxExample from "./common/CheckboxExample";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const MainBody = () => {
  return (
    <>
      <Typography variant="h2" component="div">
        Welcome to MUI
      </Typography>
      <Typography variant="subtitle1">
        A showcase project for utilizing React, React-Router, Material-UI and
        Redux
      </Typography>
      <ButtonStyled />

      <Grid container spacing={2} justify="center">
        <Grid item xs={3} sm={4}>
          <Paper style={{ height: 100, width: "100%" }} />
        </Grid>
        <Grid item xs={3} sm={4}>
          <Paper style={{ height: 100, width: "100%" }} />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper style={{ height: 100, width: "100%" }} />
        </Grid>
      </Grid>

      <CheckboxExample />

      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />}>Save</Button>
        <Button startIcon={<DeleteIcon />}>Discard</Button>
      </ButtonGroup>
    </>
  );
};

export default MainBody;
