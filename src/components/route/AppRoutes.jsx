import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

const AppRoutes = () => (
  <Router>
    <Switch>
      {routes.map(({ path, component , exact}) => (
        <Route key={`Route-${path}`} path={path} component={component} exact={exact} />
      ))}
    </Switch>
  </Router>
)
export default AppRoutes
