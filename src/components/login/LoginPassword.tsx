import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import CapsLock from "./CapsLock";
import LabelAndValue from "../core/LabelAndValue";

const useStyles = makeStyles((theme) => ({
  spacer: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginPasswordProps {
  emailAddress: string;
  onChangeAccount: () => void;
  onLogin: (password: string) => void;
}

export default function LoginNewPassword({
  emailAddress,
  onChangeAccount,
  onLogin,
}: LoginPasswordProps) {
  const classes = useStyles();

  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");

  const [invalidPassword, setInvalidPassword] = useState(false);

  function onShowPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordShown(e.target.checked);
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    if (password) {
      onLogin(password);
    } else {
      setInvalidPassword(true);
    }
  }

  return (
    <div>
      <LabelAndValue variant="body2" label="Account" value={emailAddress} />
      <Link
        data-testid="loginChangeAccount"
        href="#"
        variant="body2"
        onClick={onChangeAccount}
      >
        Change account
      </Link>
      <TextField
        data-testid="loginPassword"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Password"
        type={passwordShown ? "text" : "password"}
        error={invalidPassword}
        helperText={
          invalidPassword === true ? "Password must not be empty" : ""
        }
        className={classes.spacer}
        onChange={onPasswordChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            data-testid="loginShowPassword"
            color="primary"
            onChange={onShowPasswordChange}
            checked={passwordShown}
          />
        }
        label="Show password"
      />
      <CapsLock />
      <Button
        data-testid="loginButton"
        type="submit"
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.spacer}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Link href="#" variant="body2">
        Forgot your password?
      </Link>
    </div>
  );
}
