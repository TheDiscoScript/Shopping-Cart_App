import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
  },
  appbar: {},
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
    margin: "0.5rem",
  },
}));
//todo props number of items in cart
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            href="https://linkedin.com/in/daniel-wollmann"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            href="https://github.com/Willdooo"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shopping Cart Application
          </Typography>
          <Link to="/">
            <Button className={classes.button} size="large" color="inherit">
              Home
            </Button>{" "}
          </Link>
          <Link to="/shop">
            <Button className={classes.button} size="large" color="inherit">
              Shop
            </Button>
          </Link>
          <Link to="/cart">
            <Button
              className={classes.button}
              size="large"
              color="inherit"
              startIcon={<ShoppingCartIcon />}
            >
              (0)
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
