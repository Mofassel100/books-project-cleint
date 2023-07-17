/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

import Main from './layout/Main';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './redux/hooks';
import { setLoading, setUser } from './redux/Fetures/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase.config';
import { useEffect } from 'react';

function App() {
  // export const useSearchCriteria = () => {
  //   const [searchCriteria, setSearchCriteria] = useState('');

  //   return { searchCriteria, setSearchCriteria };
  // };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <>
      <Main></Main>
    </>
  );
}

export default App;
