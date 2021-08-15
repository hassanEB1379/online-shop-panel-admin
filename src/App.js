import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import LoginLayout from 'layouts/LoginLayout';
import PanelLayout from 'layouts/panel/PanelLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoutes from 'components/routes/PublicRoutes';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Switch>
          <PrivateRoute path="/panel" component={PanelLayout} />
          <PublicRoutes restricted path="/login" component={LoginLayout} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
