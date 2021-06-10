import "./assets/style.scss"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Register from "./pages/Register"
import Home from "./pages/Home"

import { RegisterContextProvider } from "./context/RegisterContext";
import { useEffect } from "react";

function App() {

  return (
    <RegisterContextProvider>

      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
 
        </Switch>
      </Router>


    </RegisterContextProvider>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("register") && localStorage.getItem("card") == 2 ? (
        <Component {...props} />

      ) : (
        <Redirect
          to={{
            pathname: "/register",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)


export default App;
