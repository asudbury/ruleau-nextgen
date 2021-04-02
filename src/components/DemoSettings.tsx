import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import Switch from "@material-ui/core/Switch";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsIcon from "../components/icons/SettingsIcon";
import { IconButton, Typography } from "@material-ui/core";
import { version as appVersion } from "../../package.json";
import RuleauButton from "./core/RuleauButton";

export default function DemoSettings(props: {
  themeName: string;
  showSampleComponents: boolean;
  showCarousel: boolean;
  showMocks: boolean;
  showThemeOptions: boolean;
  onDarkModeChange: () => void;
  onShowSampleComponents: () => void;
  onShowCarousel: () => void;
  onShowMocks: () => void;
  onShowThemeOptions: () => void;
}) {
  const {
    themeName,
    showSampleComponents,
    showCarousel,
    showMocks,
    showThemeOptions,
    onDarkModeChange,
    onShowSampleComponents,
    onShowCarousel,
    onShowMocks,
    onShowThemeOptions,
  } = props;

  function onClearCache() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton edge="end" color="inherit" aria-label="settings icon">
            <SettingsIcon fontSize="large" {...bindTrigger(popupState)} />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: { width: "300" },
            }}
          >
            <List>
              <ListItem>
                <ListItemText primary="Current Theme" />
                <Typography variant="body2">{themeName}</Typography>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Dark Mode" />
                <Switch
                  onChange={onDarkModeChange}
                  checked={themeName === "dark"}
                  color="primary"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Mocks" />
                <Switch
                  onChange={onShowMocks}
                  checked={showMocks}
                  color="primary"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Carousel" />
                <Switch
                  onChange={onShowCarousel}
                  checked={showCarousel}
                  color="primary"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Theme Options" />
                <Switch
                  onChange={onShowThemeOptions}
                  checked={showThemeOptions}
                  color="primary"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText primary="Show Sample Components" />
                <Switch
                  onChange={onShowSampleComponents}
                  checked={showSampleComponents}
                  color="primary"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <RuleauButton
                  datatestid="clearcacheButton"
                  arialabel="clear cache button"
                  onClick={onClearCache}
                  content="Clear Cache"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="caption">Version</Typography>
                </ListItemText>
                <Typography variant="caption">{appVersion}</Typography>
              </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
