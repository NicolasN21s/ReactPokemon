import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'ASPIDA' && password === '12345-') {
      dispatch(login({ username }));
      navigate('/home'); // Redirigir a la página de inicio
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal" />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal" />
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login
      </Button>
    </Container>
  );
}

export default Login;
