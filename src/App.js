import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Routes/PrivateRoute';
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path='/' exact>
            <h1>Home</h1>
          </Route>
          <Route path='/auth' exact>
            <h1>Auth</h1>
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
