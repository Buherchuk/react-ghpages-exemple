import React from 'react';
import { useForm } from "react-hook-form";


export default function SignUp() {
 const {register, handleSubmit} = useForm();
 const onSubmit = (data) => {
   console.log(data)
 }
    return (  
  <form className = 'login_block' onSubmit={handleSubmit(onSubmit)}>
    <div>
      <div>Name</div>
      <input  placeholder="Enter Name.." type="text" ref={register}/>
    </div>
    <div>
      <div>Surame</div>
      <input  placeholder="Enter Surame.." type="text" ref={register}/>
    </div>
    <div>
      <div>Email</div>
      <input  placeholder="Enter Email.." type="email" ref={register}/>
    </div>
    <div>
      <div>Password</div>
      <input  placeholder="Enter Password.." type="password" ref={register}
      />
    </div> 
  
    <button>Login</button>
    <input type="submit"/>
  </form>
    )
}