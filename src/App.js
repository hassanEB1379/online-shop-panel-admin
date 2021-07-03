import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginLayout from 'layouts/LoginLayout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginLayout} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
