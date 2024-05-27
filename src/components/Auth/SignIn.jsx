import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as CustomLink } from 'react-router-dom';
import { LockOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignIn({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Simulate login (you can add actual authentication logic here)
    if (username.trim() === 'admin' && password.trim() === 'admin') {
      // Set authentication status to true and store in local storage
      localStorage.setItem('isAuthenticated', 'admin');
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else if (username.trim() === 'parent' && password.trim() === 'parent') {
      // Set authentication status to true and store in local storage
      localStorage.setItem('isAuthenticated', 'parent');
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else if (username.trim() === 'student' && password.trim() === 'student') {
      // Set authentication status to true and store in local storage
      localStorage.setItem('isAuthenticated', 'student');
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else if (username.trim() === 'teacher' && password.trim() === 'teacher') {
      // Set authentication status to true and store in local storage
      localStorage.setItem('isAuthenticated', 'teacher');
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Sign In
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <CustomLink to="/sign-up">
                    <Link variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </CustomLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn;
