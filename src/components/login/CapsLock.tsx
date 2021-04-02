import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CapsLock() {
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event && event.getModifierState) {
        setIsCapsLockOn(event.getModifierState('CapsLock'));
      }
    });

    return () => {
      window.onkeydown = null;
    };
  }, []);

  if (isCapsLockOn) {
    return (
      <Box color="warning.main">
        <Typography variant="body2">Caps Lock Is On</Typography>
      </Box>
    );
  }

  return <div />;
}
