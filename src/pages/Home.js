import React from 'react';
import getFirebase from '../firebase-config';
// import firebaseCore from "firebase";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite';
import Loader from '../components/Loader';
import GanpatiCard from '../components/GanpatiCard';
import Box from '@material-ui/core/Box';
import NoData from '../components/NoData';
const Home = ({currentYear}) => {
  const app = getFirebase();
  // const db = firebaseCore.firestore(firebase);
  const db = getFirestore(app);
  const mandalCollection = collection(db, "mandal");
  const [mandalList, setMandalList] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  

  React.useEffect(()=>{ 
    console.log("currentYear changed ", currentYear);
    let list = {};
    setLoading(true);
    const q = query(mandalCollection, where(`${currentYear}`, '!=', ''));
    getDocs(q).then((querySnapshot) => {
      console.log('querySnapshot', querySnapshot.docs);
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
    </Box>}
  </>
  );
};

export default Home;