import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Nav/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Private from './components/private/Private';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='App'>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute path='/private' component={Private} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
