
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
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

function Copyright() {
  return (
    <h1>ey</h1>
    // <Typography variant="body2" className={this.useStyles().colored} align="center">
    //   {'Copyright © '}
    //   <Link className={useStyles().colored} href="http://localhost:3000/">
    //     legends.com
    //   </Link>{' '}
    //   {new Date().getFullYear()}
    //   {'.'}
    // </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }),
);


class SignIn extends React.Component {
  private classes = useStyles();
  private useStyles: any = (theme: Theme) => createStyles({
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
  });

  render(){
    // return (<h1>helllooo</h1>)
    return (
      <Typography className={this.classes.root} color="textSecondary">
        <LightBulbIcon className={this.classes.lightBulb} />
        Pro tip: See more{' '}
        <Link href="https://material-ui.com/getting-started/templates/">templates</Link> on the
        Material-UI documentation.
      </Typography>
    );
    // return (
    //   <div className="SignIn-header">
    //     <Container component="main" maxWidth="xs" className={this.useStyles().panel}>
    //       <CssBaseline />
    //       <div className={this.useStyles().paper}>
    //         {/*<Avatar className={classes.avatar}>*/}
    //         {/*  <LockOutlinedIcon />*/}
    //         {/*</Avatar>*/}
    //         <Typography component="h1" variant="h5">
    //           Sign In
    //         </Typography>
    //         <form className={this.useStyles().form} noValidate>
    //           <TextField
    //             variant="outlined"
    //             margin="normal"
    //             required
    //             fullWidth
    //             id="email"
    //             label="Email Address"
    //             name="email"
    //             autoComplete="email"
    //             autoFocus
    //             className={this.useStyles().input}
    //             color="secondary"
    //           />
    //           <TextField
    //             variant="outlined"
    //             margin="normal"
    //             required
    //             fullWidth
    //             name="password"
    //             label="Password"
    //             type="password"
    //             id="password"
    //             autoComplete="current-password"
    //             className={this.useStyles().input}
    //             color="secondary"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox value="remember"/>}
    //             label="Remember me"
    //           />
    //           <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             className={this.useStyles().backgroundColored}
    //           >
    //             Sign In
    //           </Button>
    //           <Grid container>
    //             <Grid item xs>
    //               <Link href="#" variant="body2" className={this.useStyles().colored}>
    //                 Forgot password?
    //               </Link>
    //             </Grid>
    //             {/*<Grid item>*/}
    //             {/*  <Link href="#" variant="body2" className={classes.colored}>*/}
    //             {/*    {"Don't have an account? Sign Up"}*/}
    //             {/*  </Link>*/}
    //             {/*</Grid>*/}
    //           </Grid>
    //         </form>
    //       </div>
    //       <Box mt={8}>
    //         <Copyright />
    //       </Box>
    //     </Container>
    //   </div>
    // );
  }
}

export default SignIn;
