import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  if (user) {
    console.log(user);
  }
  return (
    <div className="d-flex align-items-center col-lg-12 justify-content-center py-5">
      <div class="login-box">
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <a href="../../index2.html" class="h1">
              <b>Admin</b>
            </a>
          </div>
          <div class="card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div class=" input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email",  {
                    required:{
                      value:"true",
                      message:"Field is requried"
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'error message' 
                    }
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
                  <span  >
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span  >
                    {errors.email.message}
                  </span>
                )}
              </label>
                  </div>
                
                 </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember Me</label>
                  </div>
                </div>

                <div class="col-4">
                  <input type="submit" value="Login" class="btn btn-primary btn-block"/>
                    
                  
                </div>
              </div>
            </form>

            <div class="social-auth-links text-center mt-2 mb-3">
              <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <button
                href="#"
                class="btn btn-block btn-danger"
                onClick={() => signInWithGoogle()}
              >
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
              </button>
            </div>

            <p class="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
              <a href="register.html" class="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
