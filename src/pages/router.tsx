import { createBrowserRouter } from 'react-router-dom';
import Favorite from './favorite/Favorite';
import Home from './home/Home';
import Ingredients from './ingredients/Ingredients';
import IngredientsLayout from './layouts/IngredientsLayout';
import Layout from './layouts/Layout';
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
  {
    path: '/ingredients',
    element: <IngredientsLayout />,
    children: [
      {
        path: '/ingredients',
        element: <Ingredients />,
      },
    ],
  },
]);

export default router;
