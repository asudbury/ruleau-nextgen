import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CapsLock from "./CapsLock";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  spacer: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginNewPasswordProps {
  onUpdatePassword: (password: string) => void;
}

export default function LogInNewPassword({
  onUpdatePassword,
}: LoginNewPasswordProps) {
  const classes = useStyles();

  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false);

  function onShowPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordShown(e.target.checked);
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function onConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function handleUpdatePassword() {
    if (password === confirmPassword) {
      onUpdatePassword(password);
    } else {
      setInvalidPassword(true);
      setInvalidConfirmPassword(true);
    }
  }

  return (
    <div>
      <Typography variant="body2">Please choose a new password</Typography>
      <TextField
        data-testid="loginNewPassword"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="New Password"
        type={passwordShown ? "text" : "password"}
        error={invalidPassword}
        helperText={
          invalidPassword === true
            ? "Password and Confirm Password do not match"
            : ""
        }
        onChange={onPasswordChange}
      />
      <TextField
        data-testid="loginConfirmPassword"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Confirm Password"
        type={passwordShown ? "text" : "password"}
        error={invalidConfirmPassword}
        helperText={
          invalidConfirmPassword === true
            ? "Password and Confirm Password do not match"
            : ""
        }
        onChange={onConfirmPasswordChange}
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
        onClick={handleUpdatePassword}
      >
        Login
      </Button>
    </div>
  );
}
