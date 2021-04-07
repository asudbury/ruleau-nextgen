import React from "react";
import LoginContainer, { FormState } from "../containers/LoginContainer";
import Dashboard from "../components/Dashboard";
import IsUserLoggedIn from "../utils/IsUserLoggedIn";
import { Box, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";

export default function HomePage() {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },

    image: {
      backgroundImage:
        "url('https://asudbury.github.io/ruleau-nextgen/assets/img/Ruleau_PillarsGraphic.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: 1000,
    },
  }));

  const isLoggedIn = IsUserLoggedIn();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isLoggedIn && (
        <Box p={5}>
          <Grid container spacing={5}>
            <Hidden smDown>
              <Grid
                item
                md={5}
                component={Box}
                className={classes.image}
              ></Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={7}>
              <LoginContainer initialState={FormState.EmailAddress} />
            </Grid>
          </Grid>
        </Box>
      )}
      {isLoggedIn && <Dashboard />}
    </div>
  );
}
