import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom";
import GroupDetails from "./components/GroupDetails";
import Table from "./components/Table";

const groupList = [
  {
    name: "Barsa",
    founded: 1923,
    address: "ramat gan",
  },
  {
    name: "Hpoel Heifa",
    founded: 1999,
    address: "Ein gedi",
  },
  {
    name: "Macabi TLV",
    founded: 1922,
    address: "ramat aviv",
  },
];
function App() {
  const [list, setList] = useState(groupList);
  const [chosenIndex, setChosenIndex] = useState(0);


  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Redirect to="/teams" /> 
      </Route>
        <Route exact path="/teams">
          <Table list={list}
           onUpdateChosenIndex={setChosenIndex} />
        </Route>
        <Route path="/teams/:id">
          <GroupDetails list={list}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
