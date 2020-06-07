import React from "react";
import "./app.module.scss";
import DefaultLayout from "../layouts/Default";
import Charts from "./charts/Chart";
import Profile from "./profile/Profile";
import Spot from "./spot/Spot";
import Now from "./now/Now";
import Akkordeon from "./akkordeon/Akkordeon";
import Chartframe from "./charts/chartframe/Chartframe";
import Records from "./records/Records";

const App = () => {
  return (
    <div className="app">
      <DefaultLayout></DefaultLayout>
      <Akkordeon headline="Profile" active="active">
        <Profile />
      </Akkordeon>
      <Akkordeon headline="Spot">
        <Spot />
      </Akkordeon>
      <Akkordeon headline="Now">
        <Now />
      </Akkordeon>
      <Akkordeon headline="Your records">
        <Records />
      </Akkordeon>
      <Chartframe />
      <Charts />
    </div>
  );
};

export default App;
