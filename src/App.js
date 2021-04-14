import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AppointmentPart from './Components/AppoinmentsSection/AppointmentPart/AppointmentPart';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import ScrollToTop from "react-scroll-to-top";
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import AppAppointments from './Components/Dashboard/AppAppointments/AppAppointments';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/getappointments">
            <AppointmentPart></AppointmentPart>
          </Route>

          <Route path="/dashboard/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/allAppointments">
            <AppAppointments></AppAppointments>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <h3>No match found error-404</h3>
          </Route>

        </Switch>
      </Router>

      <ScrollToTop style={{ backgroundColor: '#12d0d9', padding: '5px' }} />

    </UserContext.Provider>
  );
}

export default App;
