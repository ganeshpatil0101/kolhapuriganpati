import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import getFirebase from '../firebase-config';
import Loader from '../components/Loader';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      कोल्हापुरी गणपती
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  error: {
    color: 'red'
  }
}));

function SignIn({onSuccess, onError}) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [error, setError] = React.useState('');
  const firebaseInstance = getFirebase();
  const [isLoading, setIsLoading] = React.useState(false);
  function onSubmit(event) {
    event.preventDefault();
    if(email !== '' && pass !== '') {
      try {
        if (firebaseInstance) {
          setIsLoading(true);
          setError('');
          firebaseInstance
            .auth()
            .signInWithEmailAndPassword(email, pass).then((user)=>{
              console.log("user", user);
              onSuccess();
              setIsLoading(false);
            }).catch(e => {
              console.error('updated ===',e)
              setError(e.message);
              setIsLoading(false);
            });
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setError('please add an email and password')
    }
    return false;
  } 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {isLoading && <Loader />}
      {!isLoading && <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && <span className={classes.error}>{error}</span>}
        <form className={classes.form} noValidate method="post" onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pass}
            onChange={(event)=> setPass(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
SignIn.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};
export default SignIn;