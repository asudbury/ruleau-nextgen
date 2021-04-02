import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider, Box, TextField, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  stepIcon: {
    color: "white",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function CoreSetup() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    alert("You have finished. Now going to dashboard");
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step key="1">
          <StepLabel
            StepIconProps={{
              classes: { root: classes.stepIcon },
            }}
          >
            Download the Ruleau Library
          </StepLabel>
          <StepContent>
            <img
              alt="ruleau library"
              src={process.env.PUBLIC_URL + "/assets/img/ruleau-library.png"}
            />
            <Typography>
              First you will need to download the library from &nbsp;
              <Link href="#">here</Link>
            </Typography>
            <div className={classes.actionsContainer}>
              <div>
                <Button disabled={true} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step key="2">
          <StepLabel
            StepIconProps={{
              classes: { root: classes.stepIcon },
            }}
          >
            Setup Keys
          </StepLabel>
          <StepContent>
            <Typography variant="body2">Instance Name</Typography>
            <TextField
              data-testid="instanceName"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label=""
            />
            <Typography variant="body2">Access Key</Typography>
            <TextField
              data-testid="accessKey"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label=""
            />
            <Typography variant="body2">Secret Key</Typography>
            <TextField
              data-testid="secretKey"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label=""
            />
            <div className={classes.actionsContainer}>
              <div>
                <Button className={classes.button} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
        <Step key="3">
          <StepLabel
            StepIconProps={{
              classes: { root: classes.stepIcon },
            }}
          >
            Run Sample Rule
          </StepLabel>
          <StepContent>
            <div className={classes.actionsContainer}>
              <div className={classes.actionsContainer}>
                <Divider />
                <Box p={3}>
                  <Typography variant="body2">
                    from rule.core import rule <br />
                    @rule() def must_be_adult(context, payload) -&gt; Bool:{" "}
                    <br />
                    return payload['age'] &gt;=18
                  </Typography>
                </Box>
                <Divider />
              </div>
              <div>
                <Button className={classes.button} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleFinish}
                  className={classes.button}
                >
                  Finish
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
      </Stepper>
    </div>
  );
}
