import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    width: "100%",
    flexFlow: "column",
  },
}));

const Shop = () => {
  const classes = useStyles();

  return <div className={classes.div}>Shop</div>;
};

export default Shop;
