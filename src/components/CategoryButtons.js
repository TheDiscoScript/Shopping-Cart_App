import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    textAlign: "center",
  },
  sidebarContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
  },
  buttons: {
    fontSize: "1.5rem",
    width: "100%",
    padding: "1rem",
  },
}));

const CategoryButtons = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} md={3} xl={2} className={classes.sidebar}>
      <Paper style={{ height: "100%" }}>
        <Grid container className={classes.sidebarContainer}>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Button color="primary" className={classes.buttons}>
              All
            </Button>
          </Grid>
          {props.category.map((item) => (
            <Grid item xs={6} sm={12} md={12} xl={12} key={item}>
              <Button color="primary" className={classes.buttons}>
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CategoryButtons;
