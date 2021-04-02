import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";

interface RuleAccordionProps {
  isRuleDefinition: boolean;
  hasWarning: boolean;
  ruleName: string;
  ruleDescription: string;
  ruleSubDescription: string;
}

export default function RuleAccordion({
  isRuleDefinition,
  hasWarning,
  ruleName,
  ruleDescription,
  ruleSubDescription,
}: RuleAccordionProps) {
  const useStyles = makeStyles((theme) => ({
    warning: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {!isRuleDefinition && (
        <Grid item>
          {hasWarning && <WarningIcon className={classes.warning} />}
          {!hasWarning && <DoneIcon />}
        </Grid>
      )}
      <Grid item>
        <Typography variant="subtitle1">{ruleName}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{ruleDescription}</Typography>
        <Typography variant="body2">{ruleSubDescription}</Typography>
      </Grid>
    </Grid>
  );
}
