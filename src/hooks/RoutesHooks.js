import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';

// routes
import { flatRoutes as routes } from 'routes';

// this hook render routes
export const useRoutes = () => {
  return routes.map((route, i) => (
    <Route key={i} path={route.path} component={route.component} />
  ));
};

export const useRouteName = path => {
  const { t } = useTranslation();

  const [routeName, setRouteName] = useState();

  useEffect(() => {
    // find route
    let route = routes.find(route => route.path === path);

    setRouteName(route && route.name);
  }, [path]);

  return t(routeName);
};
