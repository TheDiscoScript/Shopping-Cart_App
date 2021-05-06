import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
      <Link to={`/shop/${props.items.id}`}>
        <Paper
          id={props.items.id}
          className={classes.pog}
          onClick={(event) => console.log(event.target.id)}
        >
          <img
            className={classes.img}
            alt="pic"
            src={props.items.image}
            onClick={(event) => {
              event.stopPropagation();
              console.log(event.target.closest(".MuiPaper-root").id);
            }}
          />
          <Typography
            variant="h5"
            gutterBottom
            onClick={(event) => {
              event.stopPropagation();
              console.log(event.target.closest(".MuiPaper-root").id);
            }}
          >
            {props.items.title}
          </Typography>{" "}
          <Typography
            variant="h6"
            gutterBottom
            onClick={(event) => {
              event.stopPropagation();
              console.log(event.target.closest(".MuiPaper-root").id);
            }}
          >
            {props.items.price} €
          </Typography>
        </Paper>
      </Link>
    </Grid>
  );
};

export default Item;
