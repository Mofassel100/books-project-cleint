import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="py-12 fixed bottom-0">
        <Outlet />
      </div>

      <div className="fixed bottom-1 left-0 right-0 mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
