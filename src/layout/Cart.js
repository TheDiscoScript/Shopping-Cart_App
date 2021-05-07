import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PaymentIcon from "@material-ui/icons/Payment";

const useStyles = makeStyles(() => ({
  containerEmpty: { height: "80%", paddingTop: "2rem" },
  paperEmpty: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  paperFilled: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    textAlign: "center",
    alignContent: "center",
  },
  totalCost: { marginTop: "0.5rem" },
  divider2: { width: "50%", alignSelf: "center", marginBottom: "0.5rem" },
  itemContainer: {
    paddingTop: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  item: { display: "flex", flexDirection: "row", alignItems: "center" },
  quantity: { marginBottom: "1.4rem", marginLeft: "1rem" },
}));

const Cart = (props) => {
  const classes = useStyles();

  const decider = () => {
    if (props.cartItems.length === 0) {
      return emptyCart();
    } else {
      return filledCart();
    }
  };
  const emptyCart = () => {
    return (
      <Container className={classes.containerEmpty}>
        <Paper className={classes.paperEmpty}>
          <Typography variant="h4" gutterBottom>
            The cart is empty!!!
          </Typography>
          <Link to="/shop">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LocalMallIcon />}
              size="large"
            >
              Back to shopping!
            </Button>
          </Link>
        </Paper>
      </Container>
    );
  };
  const filledCart = () => {
    return (
      <Container className={classes.containerEmpty}>
        <Paper className={classes.paperFilled}>
          <Typography variant="h3" gutterBottom style={{ paddingTop: "1rem" }}>
            Your Cart
          </Typography>
          <Divider />

          {props.cartItems.map((item) => (
            <Grid key={item.id} container className={classes.itemContainer}>
              <Grid
                item
                xs={12}
                md={12}
                sm={12}
                xl={12}
                className={classes.item}
              >
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ paddingLeft: "1rem" }}
                >
                  {item.price} €
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ paddingLeft: "1rem" }}
                >
                  {item.amount}x
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ marginLeft: "1rem" }}
                >
                  {parseInt(item.price) * item.amount} €
                </Typography>
                <IconButton
                  onClick={() => props.remove(item.id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Typography variant="h4" gutterBottom className={classes.totalCost}>
            Total cost: {props.total()} €
          </Typography>
          <Divider className={classes.divider2} />
          <Link to="/cart/checkout">
            <Button
              variant="contained"
              color="primary"
              startIcon={<PaymentIcon />}
              size="large"
            >
              Proceed to checkout
            </Button>
          </Link>
        </Paper>
      </Container>
    );
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/cart" exact render={() => decider()} />
          <Route path="/cart/checkout" render={() => <Checkout />} />
        </Switch>
      </Router>
    </>
  );
};

export default Cart;
