import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import createPersistedState from "use-persisted-state";
import App from "../App";
import { themeOptions as darkThemeOptions } from "../themes/DarkThemeOptions";
import Fireworks from './Fireworks';

const useStyles = makeStyles((theme) => ({
    paper: {
    marginTop: theme.spacing(5),
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Protect(): JSX.Element {
  const classes = useStyles();

  const darkTheme = createMuiTheme(darkThemeOptions);

  const useProtectionPassword = createPersistedState("protectionPassword");
  const [password, setPassword] = useProtectionPassword("");

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  if (password === "unai2021") {
    return <App />;
  }

  return (
     <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Typography variant="h5" color="primary">
              Authorised Access Only
            </Typography>
            <form noValidate>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  onChange={onPasswordChange}
                />
              </div>
            </form>
            <Fireworks/>
          </div>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
