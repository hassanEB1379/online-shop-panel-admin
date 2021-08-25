import { useUser } from 'features/user/state/UserContext';
import { Redirect, Route } from 'react-router-dom';

const PublicRoutes = props => {
  const { component: Component, restricted = false, ...rest } = props;

  const user = useUser();

  const render = renderProps => {
    if (user.authenticated && restricted) {
      // return user to panel if user authenticated
      return <Redirect to="/panel" />;
    } else {
      return <Component {...renderProps} />;
    }
  };

  return <Route {...rest} render={render} />;
};

export default PublicRoutes;
