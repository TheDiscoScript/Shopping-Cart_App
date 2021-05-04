import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    width: "100%",
    flexFlow: "row",
    border: "black 10px solid",
  },
  sidebar: {
    textAlign: "center",
  },
  sidebarContainer: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "stretch",
    // alignContent: "center",
    // flexGrow: 1,
    // height: "100%",
  },
  content: {},
}));

const Shop = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} md={3} xl={2} className={classes.sidebar}>
          <Paper className={classes.sidebarContainer}>
            <p key="all">All</p>
            {props.category.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9} md={9} xl={10}>
          <Paper className={classes.content}>
            {props.items.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shop;
