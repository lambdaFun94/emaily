import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
