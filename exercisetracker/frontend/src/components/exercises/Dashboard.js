import React, { Fragment } from "react";
import Form from "./Form";
import Exercises from "./Exercises";

function Dashboard() {
  return (
    <Fragment>
      <Exercises />
      <Form />
    </Fragment>
  );
}

export default Dashboard;
