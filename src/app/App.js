import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LoginLayout from 'app/components/layout/LoginLayout';
import PanelLayout from 'app/components/layout/panel/PanelLayout';
import PrivateRoute from 'app/components/routes/PrivateRoute';
import PublicRoutes from 'app/components/routes/PublicRoutes';

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/panel" component={PanelLayout} />
        <PublicRoutes restricted path="/login" component={LoginLayout} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
