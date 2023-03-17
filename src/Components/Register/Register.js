import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm, useWatch } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
// import React from 'react';
const Register = () => {
  // const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  let signInError;
    // navigate = ("/")
    if(error   ){

      signInError = <p className="  text-danger">{  error?.message}</p>
    }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const password = useRef({});
  // password.current = watch("password", "");
  
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email,data.name,data.password);
    console.log(data);
  };
 
  if( loading  ){

    return  <Loading></Loading>
  }
  
  return (
    <div>
      <div className="d-flex align-items-center col-lg-12 justify-content-center py-5">
        <div class="login-box">
          <div class="card card-outline card-primary">
            <div class="card-header text-center">
              <a href="" class="h1">
                <b>Sign Up</b>
              </a>
            </div>
            <div class="card-body">
              <p class="login-box-msg">Sign in to start your session</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div class=" input-group  ">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                      required: {
                        value: "true",
                        message: " eamil field is requried",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email address",
                      },
                    })}
                  />

                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className=" text-danger">
                  <div className="col-lg-12 ">
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span>{errors.email.message}</span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span>{errors.email.message}</span>
                      )}
                    </label>
                  </div>
                </div>

                {/* name  */}
                <div class=" input-group  ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    {...register("name", {
                      required: {
                        value: "true",
                        message: " name field is requried",
                      },
                      // pattern: {
                      //   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      //   message: "Provide a valid email address",
                      // },
                    })}
                  />

                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-input-text"></span>
                    </div>
                  </div>
                </div>
                <div className=" text-danger">
                  <div className="col-lg-12 ">
                    <label className="label">
                      {errors.name?.type === "required" && (
                        <span>{errors.name.message}</span>
                      )}
                      {/* {errors.name?.type === "pattern" && (
                      <span>{errors.name.message}</span>
                    )} */}
                    </label>
                  </div>
                </div>

                {/* password  */}
                <div class=" input-group  ">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Paasword"
                    name="password"
                    {...register("password", {
                      required: {
                        value: "true",
                        message: " password field is requried",
                      },
                      minLength: {
                        value: 4,
                        message: "Password should be atleast 4 ", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />

                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className=" text-danger">
                  <div className="col-lg-12 ">
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span>{errors.password.message}</span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span>{errors.password.message}</span>
                      )}
                    </label>
                  </div>
                </div>

                {/* confirm password  */}
                <div class=" input-group  ">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    name="confirm"
                    {...register("confirm", {
                      required: {
                        value: "true",
                        message: "confirm-password field is requried",
                      },
                      minLength: {
                        value: 4,
                        message: "confirm-password should be atleast 4 ", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="text-danger">
                <label className="label">
                {errors.confirm?.type === "required" && (
                      <span>{errors.confirm.message}</span>
                    )}
                    </label>
                </div>
                 {/* {errors.password === confirm?.type === "" && (
                      <span>{errors.password.message}</span>
                    )} */}

                {/* <div className=" text-danger">
                <div className="col-lg-12 ">
                  <label className="label">
                    {errors.confirm-password?.type === "required" && (
                      <span>{errors.confirm-password.message}</span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span>{errors.password.message}</span>
                    )}
                  </label>
                </div>
              </div> */}
                {/* <div className=" text-danger">
                <div className="col-lg-12 ">
                  <label className="label">
                    {errors.password_repeat?.type === "required" && (
                      <span>{errors.password_repeat.message}</span>
                    )}
                    {errors.password_repeat?.type === "minLength" && (
                      <span>{errors.password_repeat.message}</span>
                    )}
                    {errors.password === password_repeat?.type === "" && (
                      <span>{errors.password_repeat.message}</span>
                    )}
                  </label>
                </div>
              </div> */}
  {signInError}
                <div class="row">
                  <div class="col-12">
                    <input
                      type="submit"
                      value="Register"
                      class="btn btn-primary btn-block"
                    />
                  </div>
                </div>
              </form>

              <div class="social-auth-links text-center mt-2 mb-3">
                {/* <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a> */}
                <button
                  href="#"
                  class="btn btn-block btn-danger"
                  // onClick={() => signInWithGoogle()}
                >
                  <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </button>
              </div>

              {/* <p class="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p> */}
              <p class="mb-0">
                <Link to="/login" class="text-center">
                  Already have an Account{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
