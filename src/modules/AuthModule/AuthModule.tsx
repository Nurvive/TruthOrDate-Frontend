import { Box, Button, Container, Stack, TextField, Typography } from '@suid/material';
import axios from 'axios';
import { useNavigate } from '@solidjs/router';

export function AuthModule() {
  const navigate = useNavigate();

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const roomUrlInput = form.elements.namedItem('roomUrl') as HTMLInputElement;
    const data = { name: nameInput.value, roomUrl: roomUrlInput.value };

    // const socket = io('ws://localhost:3001');
    // socket.emit('enter', data, (e) => {
    //   console.log(e, 'resp');
    // });
    axios.post('http://localhost:3001/rooms', { maxParticipants: 1 }).then((res) => {
      navigate(`room/${res.data.link}`);
      console.log(res);
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', borderRadius: 2, p: 2 }}>
        <form onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Войти в игру
          </Typography>
          <Stack spacing={2}>
            <TextField name="name" label="Имя" variant="standard" />
            <TextField name="roomUrl" type="url" label="Ссылка на комнату" variant="standard" />
            <Button type="submit" variant="contained">
              Вход
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}
