import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import HomePic from "../components/home.jpg";
import ShopIcon from "@material-ui/icons/Shop";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    width: "100%",
    flexFlow: "column",
    flex: "auto",
    backgroundImage: `url(${HomePic})`,
    backgroundPositionY: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "content-box",
  },
  buttonLink: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  button: {
    width: "8rem",
    height: "4rem",
    borderRadius: "20px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Link to="/shop" className={classes.buttonLink}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          <ShopIcon />
          Shop
        </Button>
      </Link>
    </div>
  );
};

export default Home;
