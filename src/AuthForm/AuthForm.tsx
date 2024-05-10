import { Box, Container, TextField } from '@suid/material';

export function AuthForm() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', borderRadius: 2, p: 2 }}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </Container>
  );
}
