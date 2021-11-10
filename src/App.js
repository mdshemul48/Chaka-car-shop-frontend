import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';

import NavBar from './components/Shared/NavBar/NavBar';

// components
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

// PrivateRoute
import PrivateRoute from './Routes/PrivateRoute';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/auth' exact>
            <Auth />
          </Route>
          <PrivateRoute path='/orders'>
            <h1>orders</h1>
          </PrivateRoute>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
