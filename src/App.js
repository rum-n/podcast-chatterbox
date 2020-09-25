import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, useHistory} from 'react-router-dom';
import Home from './pages/Home';
import Hosts from './pages/Hosts';
import Guests from './pages/Guests';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Nav from './components/nav/Nav';
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import logo from './assets/logo.png';
import { onError } from "./libs/errorLib";
import NewGuest from './components/newGuest/NewGuest';
import GuestPage from './pages/GuestPage';
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
// import PrivateRoute from './PrivateRoute';

function App() {
  const history = useHistory();
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
        onError(e);
      }
    }
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  
    // history.push("/login");
  }

  return (
    !isAuthenticating &&
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Router>
          {/* <Nav/> */}
          <header>
            <NavLink to={!isAuthenticated ? '/' : '/main'}>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </NavLink>
            <nav>
                <ul className='menu'>
                    {!isAuthenticated && <li><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></li>}
                    {!isAuthenticated && <li><NavLink className='main-blue' to='/guests'>For Guests</NavLink></li>}
                    {!isAuthenticated && <li><NavLink className='main-blue' to='/login'>Login</NavLink></li>}
                    {!isAuthenticated && <li><NavLink className='main-blue' to='/signup'>Join Now</NavLink></li>}
                    {isAuthenticated && <li><button className='logout-btn main-blue' onClick={handleLogout}>Logout</button></li>}
                </ul>
            </nav>         
        </header>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/hosts' exact component={Hosts} />
            <Route path='/guests' exact component={Guests} />
            <UnauthenticatedRoute path='/login' exact component={Login} />
            <UnauthenticatedRoute path='/signup' exact component={Signup} />
            <AuthenticatedRoute path='/main' exact component={Main} />
            <Route path='/add-guest' exact component={NewGuest} />
            <Route path='/main/:id' component={GuestPage}/>
          </Switch>
        </Router>
      </AppContext.Provider>
  );
}

export default App;
