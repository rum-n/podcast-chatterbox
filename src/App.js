import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Hosts from './pages/Hosts';
import Guests from './pages/Guests';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Nav from './components/nav/Nav';
// import PrivateRoute from './PrivateRoute';
import { SessionProvider, sessionReducer } from './context/session';

function App() {
  const [state, dispatch] = React.useReducer(sessionReducer, { user: null })

  return (
    <Router>
      <SessionProvider value={{ state, dispatch }}>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hosts' component={Hosts} />
          <Route path='/guests' component={Guests} />
          <Route path='/login' component={Login} />
          <Route path='/main' exact component={Main} />
          <Route path='/signup' component={Signup} />
        </Switch>
    </SessionProvider>
  </Router>
  );
}

export default App;
