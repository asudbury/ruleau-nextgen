import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

export default function TestComponent(): JSX.Element {
  const theme = useTheme();

  return (
    <div>
      <Box p={5}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={12}>
            <Typography variant="h1">h1. Heading</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">h2. Heading</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">h3. Heading</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">h4. Heading</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">h5. Heading</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">h6. Heading</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              subTitle 1 Lorem ipsum dolor sit amet, consectetur adipisicing
              elit
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              subTitle 2 Lorem ipsum dolor sit amet, consectetur adipisicing
              elit
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              body 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              body 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="div">
              <Box fontWeight="fontWeightLight" m={1}>
                Light
              </Box>
              <Box fontWeight="fontWeightRegular" m={1}>
                Regular
              </Box>
              <Box fontWeight="fontWeightMedium" m={1}>
                Medium
              </Box>
              <Box fontWeight={500} m={1}>
                500
              </Box>
              <Box fontWeight="fontWeightBold" m={1}>
                Bold
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              <pre>{JSON.stringify(theme, null, 2)}</pre>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
