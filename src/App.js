import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import AddMandal from "./pages/AddMandal";
import AddGanapati from "./pages/AddGanpati";
import { makeStyles } from '@material-ui/core/styles';
import { getCurrentYear } from './components/Handlers';
const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

function App() {
  const classes = useStyles();
  const [year, setYear] = React.useState(getCurrentYear());
  const onSelectYear = (year) => {
    console.log('======> ', year);
    setYear(year);
  }
  return (
    <Router>
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
    </Router>
  );
}
export default App;