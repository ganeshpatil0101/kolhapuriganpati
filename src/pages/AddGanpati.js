import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';

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
  formControl: {
    margin: theme.spacing(1),
    marginLeft: '0',
    marginRight: '0',
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddGanapati({onSuccess, onError}) {
  const classes = useStyles();
  const [url, setUrl] = React.useState('');
  const [mandal, setMandal] = React.useState('');
  const [year, setYear] = React.useState('');
  const [about, setAbout] = React.useState('');
  const history = useHistory();
  const navigateTo = () => history.push('/addmandal');
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('url ----> ', url);
    // onSuccess();
    return false;
  } 
  const handleChange = (event) => {
    setMandal(event.target.value);
  };
  const handleYearChange = (event) => {
      setYear(event.target.value);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <AddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Ganpati URL
        </Typography>
        <form className={classes.form} noValidate method="post" onSubmit={onSubmit}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="select-mandal">Select Mandal</InputLabel>
                    <Select
                    autoWidth={false}
                        labelId="select-mandal-label"
                        id="select-mandal-label"
                        value={mandal}
                        onChange={handleChange}
                        label="Select Mandal"
                        required={true}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="select-year">Select Year</InputLabel>
                    <Select
                    autoWidth={false}
                        labelId="select-year-label"
                        id="select-year-label"
                        value={year}
                        onChange={handleYearChange}
                        label="Select year"
                        required={true}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={2018}>2018</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                    </Select>
            </FormControl>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="url"
                label="Image URL"
                name="url"
                autoFocus
                value={url}
                onChange={(event)=> setUrl(event.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="about"
                label="about"
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
            >
            Add Mandal
            </Link>
        </form>
      </div>
    </Container>
  );
}
AddGanapati.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};
export default AddGanapati;