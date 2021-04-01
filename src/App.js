import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import LogIn from './components/LogIn/LogIn';
import { useState } from 'react';
import { createContext } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';

export const UserContext = createContext();
function App() {
  const [user,setUser] = useState({
    name:'',
    email: ''
  })
  return (
    <UserContext.Provider value={[user, setUser]}>
      <h3>{user.email}</h3>
      <Router>
          <Switch>
            <PrivateRoute path="/checkOut/:id">
              <Header/>
              <CheckOut/>
            </PrivateRoute>
            <Route path="/login">
              <LogIn/>
            </Route>
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Header/>
              <Orders/>
            </PrivateRoute>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
