import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import VideoCall from "./components/VideoCall/VideoCall";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/VideoCall/:id" component={VideoCall} />
        </Switch>
      </Router>
    );
  }
}
export default App;
