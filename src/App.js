import React, { Fragment } from "react";
import routerEach from "./utils/renderEach"
import { Combination } from "./router"
import { Redirect,Switch} from "react-router-dom"


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {routerEach(Combination)}
          <Redirect from="/" to="/Home"/>
        </Switch>
      </Fragment>
    )
  }
}
export default App