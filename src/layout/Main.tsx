import Navber from './Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="py-12 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
