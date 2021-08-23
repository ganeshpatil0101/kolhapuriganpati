import React from 'react';
import getFirebase from '../firebase-config';
import firebaseCore from "firebase";
import Loader from '../components/Loader';
import GanpatiCard from '../components/GanpatiCard';
import Box from '@material-ui/core/Box';
import NoData from '../components/NoData';
const Home = ({currentYear}) => {
  const firebase = getFirebase();
  const db = firebaseCore.firestore(firebase);
  const [mandalList, setMandalList] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  React.useEffect(()=>{ 
    console.log("currentYear changed ", currentYear);
    let list = {};
    setLoading(true);
    db.collection("mandal")
    .where(`${currentYear}`, '!=', '')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        list[doc.id] = doc.data();
      });
      setMandalList(list);
      setLoading(false);
    });
  }, [currentYear]);
  const ganpatiList = React.useMemo(()=> Object.keys(mandalList).map((key)=>
    <GanpatiCard key={key} id={key} mandalData={mandalList[key]} currentYear={currentYear} />
  )); 
  return (
  <>
    {loading && <Loader />}
    {!loading && <Box display="flex" flexDirection="column">
      {ganpatiList}
      {ganpatiList.length === 0 && <NoData year={currentYear} />}
      {/* <Box m="auto">
        <Card className={classes.root}>
          <CardHeader className={classes.cardHeader}
            title="पाटाकडील तालीम तरुण मंडळ"
            subheader="2020"
          />
          <img src="https://lh3.googleusercontent.com/zHspBskvagZibZQLW_OLLkntHnkp7_oXWXzcjdu0OG0dcwKd_6ujmtxtWz_Stn6xB67NCUagm9u4dl3J9-wMZhhNc9E7LcuNiOliOAjAUEJrj83Ts0gHb5Ryz5u4uS7IUiBkalUchKaf10gC4yi-v76JQJK0nzz6-4HMYqNP02nRVXpqOfktQxjK8qzgGyaqaDOenffSYGLV4nuG7p6YBB8oBBAXDcDWSuxfZ-rfpq8aTQGv8XodQ8DcfIDDgo5HAPzWPlnHlcn3oIhqKhDEXID80XduMkD7LNDItLohDqEGSW9sh1rHayJ2-TbHPGF8orQ1P5sIGDfE-WHWfm6cU7uN6Q4JA6pGGD8z-SiowCAHMCVcb1PFNOExIG5sTxO11un2m1YiQqKUbUDebmMBWlkYdzWxEE98VQa-T0r7BBBWg3wVPcnEjllWQuG3COgKF3s2KOMcNjsLfuLd5rxdCD2bkZEL2Lcwy72pBzMgrB1xPfvH2UI57EPKBz7U8SkdSTEmyOEw4mD9UAbNn790pdnZp1jgUTWn13Iyz9dkz6l_AY6qjgdYzI6Ggmh6aLi9NQsO4sGixdJRlTYNUrNA6H39Sn8gHPjrxeFkbQxXg2ZxSO8qAHRbEfHCFWAuT_Y_ta7qJCTzJmS_lhZoPfA_aOe5Ka1n0BtQgviaO3vmDmiph4dOZirsGSw617kHgx_LRXA_6b0lJuHJD5ryT0vRUTw4aorJwdMWkDyw14dgwUngjOEiZ9DViqzwX1OTMMZvkMvzSdoABO-FAQxtYw=w365-h487-no?authuser=0" 
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
        </Card>
      </Box> */}
    </Box>}
  </>
  );
};

export default Home;