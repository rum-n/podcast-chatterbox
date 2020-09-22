import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import Hosts from './pages/Hosts';
import Guests from './pages/Guests';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Nav from './components/nav/Nav';
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";


// import GuestPage from './pages/GuestPage';

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating &&
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router>
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/hosts' exact component={Hosts} />
            <Route path='/guests' exact component={Guests} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/main' exact component={Main} />
            {/* <Route path='/main/:id' component={GuestPage}/> */}
          </Switch>
        </Router>
      </AppContext.Provider>
  );
}

export default App;
