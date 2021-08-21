  
import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { getYears, getCurrentYear } from './Handlers';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Navbar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [year, setYear] = React.useState(getCurrentYear());
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeUrl = (year) => {
    setYear(year);
    props.onSeletedYear(year);
    setAnchorEl(null);
  }
  const menuItems = getYears().map((year) =>
    <MenuItem key={year} onClick={()=>{changeUrl(year)}}>{year}</MenuItem>
  );
  return (
    <>
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            कोल्हापुरी गणपती - {year}
          </Typography>
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.btnFix}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                {menuItems}
                {/* <MenuItem onClick={()=>{changeUrl(2018)}}>2018</MenuItem>
                <MenuItem onClick={()=>{changeUrl(2019)}}>2019</MenuItem>
                <MenuItem onClick={()=>{changeUrl(2020)}}>2020</MenuItem> */}
              </Menu>
            </div>

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

          {/* <Link className={classes.link} to="/about">
            About
          </Link> */}
          
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Toolbar />
      </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '35%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  btnFix: {
    paddingRight: '0',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default Navbar;