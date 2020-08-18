import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Hosts from './pages/Hosts';
import Guests from './pages/Guests';
import Login from './pages/Login';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hosts' exact component={Hosts} />
          <Route path='/guests' exact component={Guests} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
