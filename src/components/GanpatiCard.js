import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    root: {
    //   maxWidth: 415,
    //   minWidth: 415,
      marginBottom: '10px',  
    },
    cardContent: {
      paddingTop: '10px',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingBottom: '0'
    },
    cardHeader: {
      padding: '10px'
    },
    appBar: {
        position: 'relative',
      },
  }));
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const GanpatiCard = ({id, mandalData, currentYear}) => {
    const classes = useStyles();
    console.log('called GanpatiCard ', currentYear);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function launchIntoFullscreen(event) {
        let element = event.target;
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
    React.useEffect(()=>{
        document.addEventListener('fullscreenchange', (event) => {
            if (document.fullscreenElement) {
                console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
            } else {
                console.log('Leaving full-screen mode.');
            }
          });
          return () => {
            console.log('component destoryed remove event');
          }
    }, []);
  return (
      <>
        {mandalData[currentYear] && mandalData[currentYear].url &&  
        <Box m="auto" width={1}>
            <Card className={classes.root}>
            <CardHeader className={classes.cardHeader}
                title={mandalData.name}
                subheader={currentYear}
            />
            
            {/* <span>
                <CloseIcon/>;
            </span> */}
            <img src={mandalData[currentYear].url} 
            title={mandalData.name} alt={mandalData[currentYear].about} width="100%" height="100%"
            onClick={handleClickOpen}/>
            {/* onClick={launchIntoFullscreen} */}
            <CardContent className={classes.cardContent} >
                <Typography variant="body2" color="textSecondary" component="p">
                    {mandalData[currentYear].about}
                </Typography>
            </CardContent>
            </Card>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                {/* <AppBar className={classes.appBar}>
                <Toolbar>
                    
                </Toolbar> */}
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
                {/* </AppBar> */}
                <img src={mandalData[currentYear].url} 
                    title={mandalData.name} alt={mandalData[currentYear].about} width="100%" height="100%"
                    />
            </Dialog>

        </Box>
        }
    </>
  );
};

export default React.memo(GanpatiCard);
