import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { getCurrentYear } from './components/Handlers';
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const AddMandal = lazy(() => import("./pages/AddMandal"));
const AddGanapati = lazy(() => import("./pages/AddGanpati"));
const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles();
  const [year, setYear] = React.useState(getCurrentYear());
  const onSelectYear = (year) => {
    setYear(year);
  }
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar onSeletedYear={onSelectYear} />
        <div className={classes.offset}>
          {/* <header className="App-header"> */}
            <Switch>
            <Route exact path="/">
              <Home currentYear={year} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/about" >
              <About/>
            </Route>
            <Route path="/addmandal" >
              <AddMandal/>
            </Route>
            <Route path="/addganpati" >
              <AddGanapati/>
            </Route>
            </Switch>
          {/* </header> */}
        </div>
      </Suspense>
    </Router>
  );
}
export default App;