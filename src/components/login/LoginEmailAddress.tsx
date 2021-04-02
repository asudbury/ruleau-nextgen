import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import createPersistedState from "use-persisted-state";
import IsValidEmailAddress from "../../utils/IsValidEmailAddress";

const useStyles = makeStyles((theme) => ({
  spacer: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginEmailAddressProps {
  onContinue: (emailAddress: string) => void;
}

export default function LogInEmailAddress({
  onContinue,
}: LoginEmailAddressProps) {
  const classes = useStyles();

  const useEmailAddressState = createPersistedState("emailAddress");
  const [emailAddress, setEmailAddress] = useEmailAddressState("");

  const useRememberMeState = createPersistedState("rememberMe");
  const [rememberMe, setRememberMe] = useRememberMeState(false);

  const [invalidEmailAddress, setInvalidEmailAddress] = useState(false);

  function onEmailAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailAddress(e.target.value);
  }

  function onRememberMeChange() {
    setRememberMe(!rememberMe);
  }

  function handleContinue() {
    const isValid = IsValidEmailAddress(emailAddress);

    if (!isValid) {
      setInvalidEmailAddress(true);
    } else {
      onContinue(emailAddress);
    }
  }

  return (
    <div>
        <TextField
          data-testid="loginEmailAddress"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoComplete="email"
          value={emailAddress}
          autoFocus
          error={invalidEmailAddress}
          helperText={
            invalidEmailAddress === true ? "Invalid Email Address" : ""
          }
          onChange={onEmailAddressChange}
          inputProps={{ "aria-label": "email Address" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              data-testid="loginRememberMe"
              color="primary"
              checked={rememberMe}
              onChange={onRememberMeChange}
              inputProps={{ "aria-label": "remember me" }}
            />
          }
          label="Remember me"
        />
        <Button
          data-testid="loginContinueButton"
          type="submit"
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.spacer}
          onClick={handleContinue}
        >
          Continue
        </Button>
     </div>
  );
}
