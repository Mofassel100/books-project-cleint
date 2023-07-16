/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../Style/Athentication.css';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUser } from '../redux/Fetures/user/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast/headless';
const LoginPage = () => {
  interface SignupFormInputs {
    email: string;
    password: string;
  }
  const { user, isLoading } = useAppSelector(state => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.pathname || '/';
  const HandleonSubmit = (data: SignupFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));

    toast.success('Login Successfull');
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading]);

  return (
    <div id="ABacgrounds" className="pb-4 pt-4">
      <div className="h-[400px] grid items-center justify-center mx-auto w-[350px] pb-3">
        <form onSubmit={handleSubmit(HandleonSubmit)}>
          <p className="text-2xl text-center ">Log In </p>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white font-bold lg:text-2xl">
                Email
              </span>
            </label>
            <input
              type="email"
              className="input text-black fond-bold text-xl font-bold input-bordered w-full max-w-xs"
              {...register('email', {
                required: 'Email Address in required',
              })}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  lg:text-2xl text-white font-bold">
                Password
              </span>
            </label>
            <input
              type="Password"
              className="input input-bordered w-full text-xl font-bold max-w-xs text-black tont-bold"
              {...register('password', {
                required: 'Password address is Required',
                minLength: {
                  value: 6,
                  message: 'password min mum 6 caracters',
                },
              })}
              placeholder="Enter Your Password"
            />
            <br />
          </div>
          <div className="text-center  my-4">
            <button className="btn hover:bg-teal-500 w-full ">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
