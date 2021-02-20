import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GroupDetails from "./components/TeamDetails";
import Table from "./components/TeamTable";
import { BASE_URL, PAYLOAD } from "./constants";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getData() {
      let url = BASE_URL + "/teams";
      let res = await axios(url, PAYLOAD);
      let teamArr = res.data.teams;
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
          <Table list={list} />
        </Route>
        <Route path="/teams/:id">
          <GroupDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
