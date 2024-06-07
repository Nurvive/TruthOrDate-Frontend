import { Box } from '@suid/material';

import { AuthModule } from '~/modules/AuthModule';

export const Auth = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AuthModule />
    </Box>
  );
};
