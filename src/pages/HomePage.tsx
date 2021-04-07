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
              <Grid item md={5} component={Box} className={classes.image}>
                <Box p={5}>
                  <Typography variant="h5" gutterBottom>
                    About Ruleau
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </Grid>
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
