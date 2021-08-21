import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 381,
    marginBottom: '10px',  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContent: {
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '0'
  },
  cardAction: {
    padding: '0'
  },
  cardHeader: {
    padding: '10px'
  }
}));
const Home = ({currentYear}) => {
  const classes = useStyles();
  React.useEffect(()=>{ 
    console.log("currentYear changed ", currentYear);
  }, [currentYear]);
  return (
  <>
    <Box display="flex" flexDirection="column">
      <Box m="auto">
        <Card className={classes.root}>
          <CardHeader className={classes.cardHeader}
            title="पाटाकडील तालीम तरुण मंडळ"
            subheader="2020"
          />
          <img src="https://images.unsplash.com/photo-1598195596234-e04b82ef8adf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
          title="tetset" alt="test" width="100%" height="100%"/>
          <CardContent className={classes.cardContent} >
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box m="auto">
        <Card className={classes.root}>
        <CardHeader
          title="शिवाजी पेठ तरुण मंडळ"
          subheader="2020"
        />
        <img src="https://i.pinimg.com/736x/fc/60/da/fc60daeb063a28489cdbfb997b584ba3.jpg" 
        title="tetset" alt="test" width="100%" height="100%"/>
        <CardContent className={classes.cardContent} >
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing className={classes.cardAction}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions> */}
        </Card>
      </Box>
    </Box>
  </>
  );
};

export default Home;