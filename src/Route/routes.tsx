import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AllBooksPage from '../page/AllBooksPage';
import NotFound from '../page/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/allbooks',
        element: <AllBooksPage />,
      },
    ],
  },
  {
    path: '/',
    element: <NotFound />,
  },
]);
export default router;
