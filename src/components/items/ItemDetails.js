import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  container: { padding: "1rem" },
  piccont: { display: "flex", justifyContent: "center" },
  infocont: {
    paddingTop: "1.5rem",
    paddingRight: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  quantitycont: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  pic: { maxWidth: "60%", height: "auto" },
  description: { paddingTop: "2rem" },
}));

const ItemDetails = (props) => {
  const classes = useStyles();

  //parseInt otherwise it would return string which !== item.id
  return (
    <>
      {props.items
        .filter((item) => item.id === parseInt(props.match.params.id))
        .map((filteredItem) => (
          //
          //
          <Grid container key={filteredItem.id} className={classes.container}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              xl={8}
              className={classes.piccont}
            >
              <img
                alt="detailpic"
                src={filteredItem.image}
                className={classes.pic}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              xl={4}
              className={classes.infocont}
            >
              <Typography variant="h4" gutterBottom>
                {filteredItem.title}
                <Divider />
              </Typography>

              <Typography variant="h4" gutterBottom>
                {filteredItem.price} €
                <Divider />
              </Typography>
              <Box className={classes.quantitycont}>
                <TextField
                  label="Quantity"
                  type="number"
                  inputProps={{ min: 1 }}
                  onChange={(event) =>
                    (filteredItem.amount = parseInt(event.target.value))
                  }
                />
                <IconButton
                  onClick={() => {
                    props.addItem(filteredItem.id);
                    console.log(filteredItem);
                  }}
                  id={filteredItem.id}
                  color="primary"
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon style={{ fontSize: "3rem" }} />
                </IconButton>
              </Box>
              <Divider />
              <Typography variant="subtitle1" className={classes.description}>
                {filteredItem.description}
              </Typography>
            </Grid>
          </Grid>
          //
          //
        ))}
    </>
  );
};

export default ItemDetails;
