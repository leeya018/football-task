import React, { useEffect, useState } from "react";
import axios from "axios";
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

function App() {
  const [list, setList] = useState([]);
  const [chosenIndex, setChosenIndex] = useState(0);
  useEffect(() => {
    let payload = {
      headers: {
        "X-Auth-Token": "2abea09590b44211a919df3d2798bb41",
        "content-type": "application/json",
      },
    };
    let url = "https://api.football-data.org/v2/teams";
    async function getData() {
      let res = await axios(url, payload);
      let teamArr = await res.data.teams;
      setList(teamArr.slice(0, 10));
    }
    getData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/teams" />
        </Route>
        <Route exact path="/teams">
          <Table list={list} onUpdateChosenIndex={setChosenIndex} />
        </Route>
        <Route path="/teams/:id">
          <GroupDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
