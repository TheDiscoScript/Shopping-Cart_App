import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CategoryButtons from "../components/CategoryButtons";
import AllItems from "../components/items/ItemsAll";
import WomenItems from "../components/items/ItemsWomen";
import ElectronicsItems from "../components/items/ItemsEle";
import JeweleryItems from "../components/items/ItemsJew";
import MenItems from "../components/items/ItemsMen";

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
    <Router>
      <div className={classes.div}>
        <Grid container style={{ height: "100%" }}>
          <CategoryButtons category={props.category} />
          <Grid item xs={12} sm={8} md={9} xl={10}>
            <Paper className={classes.content}>
              <Grid container>
                <Switch>
                  <Route
                    path="/shop"
                    exact
                    render={() => <AllItems items={props.items} />}
                  />
                  <Route
                    path="/shop/men"
                    render={() => <MenItems items={props.items} />}
                  />
                  <Route
                    path="/shop/jewelery"
                    render={() => <JeweleryItems items={props.items} />}
                  />
                  <Route
                    path="/shop/electronics"
                    render={() => <ElectronicsItems items={props.items} />}
                  />
                  <Route
                    path="/shop/women"
                    render={() => <WomenItems items={props.items} />}
                  />
                </Switch>
              </Grid>

              {/* {props.items.map((item) => (
              <p key={item.id}>{item.title}</p>
            ))} */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default Shop;
