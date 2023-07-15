import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AllBooksPage from '../page/AllBooksPage';
import NotFound from '../page/NotFound';
import HomePage from '../page/HomePage';
import SignUpPage from '../page/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/allbooks',
        element: <AllBooksPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },

  {
    path: '/',
    element: <NotFound />,
  },
]);
export default router;
