/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiComponentSamples from "../src/MuiComponentSamples";
import { makeStyles } from "@material-ui/core/styles";
import LogoIcon from "../src/components/icons/LogoIcon";
import {
  AppBar,
  Divider,
  fade,
  ThemeProvider,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

import createPersistedState from "use-persisted-state";

import { getTheme } from "../src/themes/ThemeManager";

import { logoutUser } from "./services/slices/user";
import DemoSettings from "./components/DemoSettings";
import LoggedOutStatus from "./components/login/LoggedOutStatus";
import LoggedInStatus from "./components/login/LoggedInStatus";
import ComponentCarousel from "./components/ComponentCarousel";

import IsUserLoggedIn from "./utils/IsUserLoggedIn";
import ThemeOptions from "./components/ThemeOptions";

import Routes from "./Routes";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(1),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const App = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const isLoggedIn = IsUserLoggedIn();

  const useShowAppBar = createPersistedState("showAppBar");
  const [showAppBar] = useShowAppBar(true);

  const useAppTheme = createPersistedState("appTheme");
  const [appTheme, setAppTheme] = useAppTheme("dark");

  const theme = getTheme(appTheme);

  const [darkState, setDarkState] = useState(true);

  const useShowSampleComponents = createPersistedState("showSampleComponents");
  const [
    showSampleComponents,
    setShowSampleComponents,
  ] = useShowSampleComponents(false);

  const useShowCarousel = createPersistedState("showCarousel");
  const [showCarousel, setShowCarousel] = useShowCarousel(false);

  const useShowMocks = createPersistedState("showMocks");
  const [showMocks, setShowMocks] = useShowMocks(true);

  const useShowThemeOptions = createPersistedState("showThemeOptions");
  const [showThemeOptions, setShowThemeOptions] = useShowThemeOptions(false);

  function onDarkModeChange() {
    setDarkState(!darkState);
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  }

  function onShowSampleComponents() {
    setShowSampleComponents(!showSampleComponents);
  }

  function onShowCarousel() {
    setShowCarousel(!showCarousel);
  }

  function onShowMocks() {
    setShowMocks(!showMocks);
  }

  function onShowThemeOptions() {
    setShowThemeOptions(!showThemeOptions);
  }

  function onLogout() {
    dispatch(logoutUser());
  }

  function onLogin() {}

  function handleHomePage() {
    window.location.href = "/";
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {showAppBar && (
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="home page"
                onClick={handleHomePage}
              >
                <LogoIcon fontSize="large" className={classes.logoButton} />
              </IconButton>
              <Typography variant="h6" onClick={handleHomePage}>
                Ruleau
              </Typography>
              <div className={classes.grow} />
              <div>
                <DemoSettings
                  themeName={appTheme}
                  showSampleComponents={showSampleComponents}
                  showCarousel={showCarousel}
                  showMocks={showMocks}
                  showThemeOptions={showThemeOptions}
                  onDarkModeChange={onDarkModeChange}
                  onShowSampleComponents={onShowSampleComponents}
                  onShowCarousel={onShowCarousel}
                  onShowMocks={onShowMocks}
                  onShowThemeOptions={onShowThemeOptions}
                />
              </div>
              <div>
                {isLoggedIn && <LoggedInStatus onLogout={onLogout} />}
                {!isLoggedIn && <LoggedOutStatus onLogin={onLogin} />}
              </div>
            </Toolbar>
          </AppBar>
        )}
        {showMocks && <Routes />}
        {showCarousel && (
          <div>
            <Divider />
            <ComponentCarousel />
          </div>
        )}
        {showThemeOptions && (
          <div>
            <Divider />
            <ThemeOptions />
          </div>
        )}
        {showSampleComponents && (
          <div>
            <Divider />
            <MuiComponentSamples />{" "}
          </div>
        )}
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
