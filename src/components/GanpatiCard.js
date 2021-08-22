import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 415,
      minWidth: 415,
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
    }
  }));
const GanpatiCard = ({id, mandalData, currentYear}) => {
    const classes = useStyles();
  return (
      <>
        {mandalData[currentYear] && mandalData[currentYear].url &&  <Box m="auto">
            <Card className={classes.root}>
            <CardHeader className={classes.cardHeader}
                title={mandalData.name}
                subheader={currentYear}
            />
            {/* <img src="https://lh3.googleusercontent.com/zHspBskvagZibZQLW_OLLkntHnkp7_oXWXzcjdu0OG0dcwKd_6ujmtxtWz_Stn6xB67NCUagm9u4dl3J9-wMZhhNc9E7LcuNiOliOAjAUEJrj83Ts0gHb5Ryz5u4uS7IUiBkalUchKaf10gC4yi-v76JQJK0nzz6-4HMYqNP02nRVXpqOfktQxjK8qzgGyaqaDOenffSYGLV4nuG7p6YBB8oBBAXDcDWSuxfZ-rfpq8aTQGv8XodQ8DcfIDDgo5HAPzWPlnHlcn3oIhqKhDEXID80XduMkD7LNDItLohDqEGSW9sh1rHayJ2-TbHPGF8orQ1P5sIGDfE-WHWfm6cU7uN6Q4JA6pGGD8z-SiowCAHMCVcb1PFNOExIG5sTxO11un2m1YiQqKUbUDebmMBWlkYdzWxEE98VQa-T0r7BBBWg3wVPcnEjllWQuG3COgKF3s2KOMcNjsLfuLd5rxdCD2bkZEL2Lcwy72pBzMgrB1xPfvH2UI57EPKBz7U8SkdSTEmyOEw4mD9UAbNn790pdnZp1jgUTWn13Iyz9dkz6l_AY6qjgdYzI6Ggmh6aLi9NQsO4sGixdJRlTYNUrNA6H39Sn8gHPjrxeFkbQxXg2ZxSO8qAHRbEfHCFWAuT_Y_ta7qJCTzJmS_lhZoPfA_aOe5Ka1n0BtQgviaO3vmDmiph4dOZirsGSw617kHgx_LRXA_6b0lJuHJD5ryT0vRUTw4aorJwdMWkDyw14dgwUngjOEiZ9DViqzwX1OTMMZvkMvzSdoABO-FAQxtYw=w365-h487-no?authuser=0" 
            title="tetset" alt="test" width="100%" height="100%"/> */}
            <img src={mandalData[currentYear].url} 
            title={mandalData.name} alt={mandalData[currentYear].about} width="100%" height="100%"/>
            <CardContent className={classes.cardContent} >
                <Typography variant="body2" color="textSecondary" component="p">
                    {mandalData[currentYear].about}
                </Typography>
            </CardContent>
            </Card>
        </Box>
        }
    </>
  );
};

export default React.memo(GanpatiCard);
