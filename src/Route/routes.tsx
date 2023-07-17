import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AllBooksPage from '../page/AllBooksPage';
import NotFound from '../page/NotFound';
import HomePage from '../page/HomePage';
import SignUpPage from '../page/SignUpPage';
import LoginPage from '../page/LoginPage';
import AddBook from '../page/AddBook';
import PrivateRoutes from './PrivateRoutes';
import BookDetails from '../page/BookDetails';

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
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/book-details/:id',
        element: <BookDetails></BookDetails>,
      },
      {
        path: '/addBook',
        element: (
          <PrivateRoutes>
            <AddBook />
          </PrivateRoutes>
        ),
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
export default router;
