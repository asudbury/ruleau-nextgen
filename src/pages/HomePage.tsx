import React from "react";
import LoginContainer, { FormState } from "../containers/LoginContainer";
import Dashboard from "../components/Dashboard";
import IsUserLoggedIn from "../utils/IsUserLoggedIn";
import { makeStyles } from "@material-ui/core";

export default function HomePage() {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      backgroundImage: "../../public/assets/img/background.png",
    },
  }));

  const isLoggedIn = IsUserLoggedIn();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isLoggedIn && <LoginContainer initialState={FormState.EmailAddress} />}
      {isLoggedIn && <Dashboard />}
    </div>
  );
}
