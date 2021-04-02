import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
} from "@material-ui/core";
import RuleDocumentation from "./RuleDocumentation";
import CaseRuleOverride from "../case/CaseRuleOverride";
import CaseRuleOverrideHistory from "../case/CaseRuleOverrideHistory";
import { logInfo } from "../../utils/Logger";
import CaseRulePayload from "../case/CaseRulePayload";

interface RuleDetailsProps {
  name: string;
  canBeOverridden: boolean;
}

export default function RuleDetails({
  name,
  canBeOverridden,
}: RuleDetailsProps) {
  const [showDocumentation, setShowDocumentation] = React.useState<boolean>(
    false
  );

  function handleShowDocumentation() {
    setShowDocumentation(!showDocumentation);
  }
  function handleSaveOverride() {
    logInfo("handleSaveOverride");
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <FormControlLabel
          control={
            <Switch
              checked={showDocumentation}
              onChange={handleShowDocumentation}
              color="primary"
            />
          }
          label={
            <Typography variant="caption">Show Rule Documentation</Typography>
          }
        />
        {showDocumentation && (
          <div>
            <Divider />
            <RuleDocumentation showSwitch={false} />
          </div>
        )}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <CaseRulePayload rulePayload={null} type={name} />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <CaseRuleOverrideHistory />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <CaseRuleOverride
          ruleName={"adrian0101"}
          hasOverride={true}
          onUpdateOverride={handleSaveOverride}
          data-testid="aaa"
        />
      </Grid>
    </Grid>
  );
}
