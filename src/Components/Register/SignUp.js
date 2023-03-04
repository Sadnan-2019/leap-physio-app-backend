import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
const SignUp = () => {
     const { register, handleSubmit, errors, watch } = useForm();
     const onSubmit = (data) => console.log(data);
   
     const password = useRef({});
     password.current = watch("password", "");
   
     const validatePassword = (value) => {
       if (value.length < 8) {
         return "Password must be at least 8 characters long";
       }
       if (!/[A-Z]/.data(value)) {
         return "Password must contain at least one uppercase letter";
       }
       if (!/[a-z]/.data(value)) {
         return "Password must contain at least one lowercase letter";
       }
       if (!/[0-9]/.data(value)) {
         return "Password must contain at least one number";
       }
       return true;
     };
   
     const validateConfirmPassword = (value) => {
       if (value !== password.current) {
         return "The passwords do not match";
       }
       return true;
     };
     
     return (
          <div>
               <form onSubmit={handleSubmit(onSubmit)}>
      <label>Password:</label>
      <input
        type="password"
        name="password"
     //    ref={register({ required: true, validate: validatePassword })}
        {...register('password', { required: true,validate: validatePassword  })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
     //    ref={register({ required: true, validate: validateConfirmPassword })}
        {...register('confirmPassword', { required: true,validate: validateConfirmPassword  })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      {/* <input type="email" {...register('email', { required: true })} /> */}

      <button type="submit">Sign Up</button>
    </form>
          </div>
     );
};

export default SignUp;