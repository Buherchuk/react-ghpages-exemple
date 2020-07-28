import React from 'react';
import { useForm } from "react-hook-form";


export default function Login(){
   return (      
      <div className = 'login_block'>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="email"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="rassword"/>
        </div>
        <input type="submit" />
        <button >Sign Up</button>
      </div> 
      ) 
}