import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import getFirebase from '../firebase-config';

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
    marginTop: theme.spacing(2),
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
}));

function Register({onSuccess, onError, currentUser}) {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const [regNo, setRegNo] = React.useState('');
  const [mobNo, setMobNo] = React.useState('');
  const history = useHistory();
  const navigateTo = () => history.push('/addganpati');
  const firebase = getFirebase();
  function onSubmit(event) {
    event.preventDefault();
    console.log('email ----> ', name, about, regNo);
    onSuccess();
    return false;
  }
  const logOut = () => {
    if (firebase) {
      // setIsLoading(true);
      firebase.auth().signOut().then(()=>{ 
        console.log(' logOut ');
      });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {currentUser && currentUser.email && <Typography variant="caption" display="block" gutterBottom>
          {currentUser.email}
          <span onClick={logOut}> Logout </span>
        </Typography>}
        <Avatar className={classes.avatar}>
          <AddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            मंडळ रेजिस्ट्रेशन
        </Typography>
        <form className={classes.form} noValidate method="post" onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="मंडळाचे नाव"
            name="name"
            autoFocus
            value={name}
            required={true}
            onChange={(event)=> setName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="regNo"
            label="मंडळ रजिस्टर नंबर"
            name="regNo"
            autoFocus
            value={regNo}
            onChange={(event)=> setRegNo(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            type="number"
            required
            fullWidth
            id="mobNo"
            label="मोबाईल नंबर"
            name="mobNo"
            autoFocus
            value={mobNo}
            onChange={(event)=> setMobNo(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="about"
            label="मंडळाविषयी"
            name="about"
            autoFocus
            value={about}
            multiline={true}
            maxRows='4'
            minRows='2'
            onChange={(event)=> setAbout(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
          <Link
            component="button"
            variant="body2"
            onClick={navigateTo}
            > Add Ganpati Image Url </Link>
        </form>
      </div>
    </Container>
  );
}
Register.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Register;