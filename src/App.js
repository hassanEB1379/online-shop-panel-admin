import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginLayout from 'layouts/LoginLayout';
import PanelLayout from 'layouts/PanelLayout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/panel" component={PanelLayout} />
        <Route path="/login" component={LoginLayout} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
