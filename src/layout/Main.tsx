import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="py-12 ">
        <Outlet />
      </div>

      <div className=" ">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
