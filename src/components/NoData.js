import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));
const NoData = ({year}) => {
  const classes = useStyles();

  return (
    <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        minWidth="100%"
        backgroundcolor="#d4d4d4">
        <div className={classes.root}>
            <Typography variant="h6" gutterBottom>
                {year} या वर्षाचा डेटा उपलब्द नाही 
            </Typography>
        </div>
    </Box>
  );
}

export default React.memo(NoData);