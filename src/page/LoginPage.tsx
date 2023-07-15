/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useForm } from 'react-hook-form';
import '../Style/Athentication.css';
const LoginPage = () => {
  interface SignupFormInputs {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const HandleonSubmit = (data: SignupFormInputs) => {
    console.log(data.email, data.password);
  };

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
