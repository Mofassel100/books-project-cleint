/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Link } from 'react-router-dom';
import { Button } from '../Component/ui/button';

const Navber = () => {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center md:justify-evenly lg:justify-between w-full md:max-w-7xl h-full lg:mx-5 mx-auto ">
          <div>
            <img
              className="h-8"
              src="https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg"
              alt="log"
            />
          </div>
          <div className="">
            <ul className="flex lg:items-center">
              <li className="hover:bg-teal-500 rounded w-20">
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li className="hover:bg-teal-500 rounded w-20">
                <Button variant="link" asChild>
                  <Link to="/products">Products</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li>
              <li className="hover:bg-teal-500 rounded w-20">
                <Button variant="ghost">
                  {/* <HiOutlineSearc size="25" /> */}
                </Button>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex items-end">
              <li>
                {' '}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="ml-2 lg:mr-10 sm:ml-2">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li className="hover:bg-teal-500 rounded w-20">
                      <a className="justify-between">Profile</a>
                    </li>
                    <li className="hover:bg-teal-500 rounded w-20">
                      <Link to="/signup">Sign Up</Link>
                    </li>

                    <li className="hover:bg-teal-500 rounded w-20">
                      <Link to="/login">Log In</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
