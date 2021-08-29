import React from 'react';
import getFirebase from '../firebase-config';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore/lite';
import Loader from '../components/Loader';
import GanpatiCard from '../components/GanpatiCard';
import Box from '@material-ui/core/Box';
import NoData from '../components/NoData';
import { getFromTo } from '../components/Handlers';
import Button from '@material-ui/core/Button';
const LIMIT = 2;
const Home = ({currentYear}) => {
  const app = getFirebase();
  const db = getFirestore(app);
  const [mandalList, setMandalList] = React.useState([]);
  const [allList, setAllList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [startCount, setStartCount] = React.useState(0);
  const [showMore, setShowMore] = React.useState(false);
  React.useEffect(()=>{ 
    console.log("currentYear changed ", currentYear);
    let list = [];
    setLoading(true);
    setStartCount(0);
    getDoc(doc(collection(db, "ganpati"), `${currentYear}`)).then((querySnapshot) => {
      if (querySnapshot.exists()) {
        const data = querySnapshot.data();
        console.log("Document data:", data);
        for (const doc in data) {
          // list[doc] = data[doc];
          list.push(data[doc]);
        }
        setMandalList(getFromTo(list, 0, LIMIT));
        setStartCount(LIMIT+1);
        setAllList(list);
      } else {
        console.log("No such document!");
        setMandalList([]);
        setAllList([]);
      }
      setLoading(false);
    });
  }, [currentYear]);
  React.useEffect(()=> {
    console.log(' startCOunt ', startCount, allList.length);
    if (startCount < allList.length) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, [startCount, allList]);
  const getNextData = React.useCallback(() => {
    if (mandalList.length < allList.length) {
      const d = getFromTo(allList, startCount, startCount+LIMIT);
      setMandalList([
        ...mandalList,
        ...d
      ]
      );
      setStartCount(startCount+LIMIT+1);
    }
  });

  const ganpatiList = React.useMemo(()=> mandalList.map((element, key)=>
    <GanpatiCard key={key} id={key} mandalData={element} currentYear={currentYear} />
  )); 
  return (
  <>
    {loading && <Loader />}
    {!loading && <Box display="flex" flexDirection="column">
      {ganpatiList}
      {ganpatiList.length === 0 && <NoData year={currentYear} />}
      {showMore && <Button onClick={getNextData} color="primary">अजून पहा !</Button>}
    </Box>}
  </>
  );
};

export default Home;