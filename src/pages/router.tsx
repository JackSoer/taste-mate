import { createBrowserRouter } from 'react-router-dom';
import Favorite from './favorite/Favorite';
import Home from './home/Home';
import Layout from './Layout';
import Profile from './profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
