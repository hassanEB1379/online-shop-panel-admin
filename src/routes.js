import AddProduct from 'pages/addProduct/AddProduct';
import Dashboard from 'pages/dashboard/Dashboard';
import Media from 'pages/media/Media';
import ProductList from 'pages/ProductList/ProductList';
import Settings from 'pages/settings/Settings';

// icons
import {
  Dashboard as DashboardIcon,
  CloudUpload,
  Shop,
  Settings as SettingsIcon,
} from '@material-ui/icons';

const panelRoutes = [
  {
    name: 'pageTitles.dashboard',
    path: '/panel/dashboard',
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    name: 'pageTitles.media',
    path: '/panel/media',
    icon: CloudUpload,
    component: Media,
  },
  {
    name: 'pageTitles.products',
    icon: Shop,
    children: [
      {
        name: 'pageTitles.addProduct',
        path: '/panel/product/add-product',
        component: AddProduct,
      },
      {
        name: 'pageTitles.productList',
        path: '/panel/product/product-list',
        component: ProductList,
      },
    ],
  },
  {
    name: 'pageTitles.settings',
    path: '/panel/settings',
    icon: SettingsIcon,
    component: Settings,
  },
];

export const flatRoutes = panelRoutes
  .map(route => (route.children ? route.children : route))
  .flat();

export default panelRoutes;
