import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LoginLayout from 'layouts/LoginLayout';
import PanelLayout from 'layouts/PanelLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Switch>
          <Route path="/panel" component={PanelLayout} />
          <Route path="/login" component={LoginLayout} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
