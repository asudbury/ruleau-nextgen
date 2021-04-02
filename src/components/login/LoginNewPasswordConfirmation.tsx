import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  spacer: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginNewPasswordConfirmationProps {
  onGoToHomePage: () => void;
}

export default function LogInNewPasswordConfirmation({
  onGoToHomePage,
}: LoginNewPasswordConfirmationProps) {
  const classes = useStyles();

  function handleGoToDashboard() {
    onGoToHomePage();
  }

  return (
    <div>
      <Typography variant="body2">Your password has been updated</Typography>
      <Button
        data-testid="goToDashBoardButton"
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.spacer}
        onClick={handleGoToDashboard}
      >
        Go to Dashboard
      </Button>
    </div>
  );
}
