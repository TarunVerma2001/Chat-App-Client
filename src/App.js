
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <div className="">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/login'>
            <Login /> 
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/chat'>
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
