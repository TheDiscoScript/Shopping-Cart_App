import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  pog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "1rem",
    margin: "1.5rem",
  },
  img: {
    maxWidth: "40%",
    height: "auto",
  },
}));

const Item = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={6} xl={4}>
      <Paper className={classes.pog}>
        <img className={classes.img} alt="pic" src={props.items.image} />
        <Typography variant="h5" gutterBottom>
          {props.items.title}
        </Typography>{" "}
        <Typography variant="h6" gutterBottom>
          {props.items.price} €
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Item;
