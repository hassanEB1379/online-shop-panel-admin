import LoginLayout from "layouts/LoginLayout";
import PanelLayout from "layouts/PanelLayout";

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: LoginLayout,
  },
  {
    path: '/panel',
    component: PanelLayout,
  },
]
