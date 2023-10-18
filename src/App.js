// src/App.js
import React, { useState } from "react";
import AddUser from "./components/addUser";
import UserList from "./components/userList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classes from "./App.module.css";
import Navbar from "./components/Navbar";

function App() {
  const [userId, setUserId] = useState("");

  const getUserIdHandler = (id) => {
    setUserId(id);
  };
  return (
    <Router>
      <div className="App">
        {/* <h1>User Table</h1> */}
        <Navbar title="User Table" />
        <div className={classes.body}>
          <Switch>
            <Route path="/userList">
              <UserList getUserId={getUserIdHandler} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/addUser">
              <AddUser id={userId} setUserId={setUserId} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
