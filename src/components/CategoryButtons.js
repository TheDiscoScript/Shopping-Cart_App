import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    textAlign: "center",
  },
  sidebarContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
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
            <Link to="/shop">
              <Button color="primary" className={classes.buttons}>
                All
              </Button>
            </Link>
          </Grid>

          {/* {props.category.map((item) => (
            <Grid item xs={6} sm={12} md={12} xl={12} key={item}>
              <Button color="primary" className={classes.buttons}>
                {item}
              </Button>
            </Grid>
          ))} */}
          {/**this is retarded but idk how to link otherwise */}

          <Grid item xs={6} sm={12} md={12} xl={12} key={props.category[0]}>
            <Link to="/shop/men">
              <Button color="primary" className={classes.buttons}>
                {props.category[0]}
              </Button>
            </Link>
          </Grid>

          <Grid item xs={6} sm={12} md={12} xl={12} key={props.category[1]}>
            <Link to="/shop/jewelery">
              <Button color="primary" className={classes.buttons}>
                {props.category[1]}
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6} sm={12} md={12} xl={12} key={props.category[2]}>
            <Link to="/shop/electronics">
              <Button color="primary" className={classes.buttons}>
                {props.category[2]}
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6} sm={12} md={12} xl={12} key={props.category[3]}>
            <Link to="/shop/women">
              <Button color="primary" className={classes.buttons}>
                {props.category[3]}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CategoryButtons;
