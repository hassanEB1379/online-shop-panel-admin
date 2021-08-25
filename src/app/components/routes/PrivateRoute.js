import { useUser } from 'features/user/state/UserContext';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = props => {
  const { component: Component, ...rest } = props;

  const user = useUser();

  const render = renderProps => {
    if (user.authenticated) {
      return <Component {...renderProps} />;
    } else {
      // redirect to login page if user not loged in
      return <Redirect to="/login" />;
    }
  };

  return <Route {...rest} render={render} />;
};

export default PrivateRoute;
