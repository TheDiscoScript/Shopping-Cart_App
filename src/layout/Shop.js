import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CategoryButtons from "../components/CategoryButtons";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    width: "100%",
    flexFlow: "row",
    height: "100%",
  },
  content: { height: "100%" },
}));

const Shop = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid container style={{ height: "100%" }}>
        <CategoryButtons category={props.category} />
        <Grid item xs={12} sm={8} md={9} xl={10}>
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
