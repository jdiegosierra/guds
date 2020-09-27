
// import logo from '../../logo.svg';
import './SignIn.css';
import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" className={useStyles().colored} align="center">
      {'Copyright © '}
      <Link className={useStyles().colored} href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  panel: {
    backgroundColor: 'rgb(52, 63, 87)',
    "border-radius": '10px',
    opacity: '1',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgb(224, 63, 84)'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  colored: {
    color: 'rgb(224, 63, 84)'
  },
  backgroundColored: {
    backgroundColor: 'rgb(224, 63, 84)',
  },
  input: {
    backgroundColor: 'white',
    "border-radius": '5px'
  }
}));

function SignIn() {
  const classes = useStyles();

  return (
    <div className="SignIn-header">
      <Container component="main" maxWidth="xs" className={classes.panel}>
        <CssBaseline />
        <div className={classes.paper}>
          {/*<Avatar className={classes.avatar}>*/}
          {/*  <LockOutlinedIcon />*/}
          {/*</Avatar>*/}
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.input}
              color="secondary"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.input}
              color="secondary"
            />
            <FormControlLabel
              control={<Checkbox value="remember"/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.backgroundColored}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.colored}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" className={classes.colored}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;
