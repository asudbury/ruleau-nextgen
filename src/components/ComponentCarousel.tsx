import React from "react";
import Carousel from "react-material-ui-carousel";
import Login from "../containers/LoginContainer";
import Dashboard from "../components/Dashboard";
import ProcessPage from "../pages/ProcessPage";
import ErrorPage from "./ErrorPage";
import PageNotFound from "./PageNotFound";
import Cases from "./process/MockCases2";
import { Typography } from "@material-ui/core";
import Rules from "./process/Rules";
import VersionHistory from "./process/VersionHistory";
import CoreSetup from "./setup/CoreSetup";

export default function ComponentCarousel() {
  function onNull() {
    alert("You pressed a button in the carousel :-)");
  }

  return (
    <Carousel navButtonsAlwaysVisible={true} indicators={true} autoPlay={false}>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Login Screen | Enter Email Address
        </Typography>
        <Login initialState={0} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Login Screen | Enter Password
        </Typography>
        <Login initialState={1} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Login Screen | Change Password
        </Typography>
        <Login initialState={2} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Login Screen | Password Confirmation
        </Typography>
        <Login initialState={3} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <Dashboard />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Process Page
        </Typography>
        <ProcessPage />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          All Cases
        </Typography>
        <Cases openClosed={[]} result={[]} onCaseSelected={onNull} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Failed Cases
        </Typography>
        <Cases openClosed={["1"]} result={["3"]} onCaseSelected={onNull} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Passed Cases
        </Typography>
        <Cases openClosed={["2"]} result={["1"]} onCaseSelected={onNull} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Rules
        </Typography>
        <Rules />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Version History
        </Typography>
        <VersionHistory onHistoryItemSelected={onNull} />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Core Setup
        </Typography>
        <CoreSetup />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Error Page
        </Typography>
        <ErrorPage />
      </div>
      <div>
        <Typography align="center" variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <PageNotFound />
      </div>
    </Carousel>
  );
}
