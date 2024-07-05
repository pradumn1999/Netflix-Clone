import React, { useState } from 'react';
import "./Login.css";
import Logo from '../../assets/logo.png';
import { login,signup } from '../../firebase';

const Login = () => {

       const[signState, setSignState] = useState("Sign In")
       const[name , setName] = useState()
       const[email , setEmail] = useState()
       const[password , setPassword] = useState()
       
       
          
        const user_auth= async(event)=>{
            event.preventDefault();
             if(signState==="Sign In"){
                await login(email, password)
             }
             else{
                await signup(name, email, password)
             }
            
            // console.log(name,email,password);
            
        }
    return (
        <div className='login'>
            <img src={Logo} className='login-logo' alt="" />
            <div className='login-form'>
            <h1>{signState}</h1>
            <form >
                {signState==="Sign Up" ? 
                <input type="text" placeholder='Your Name'  onChange={(e)=>{setName(e.target.value)}} value={name}/>:<></>}
                
                <input type="email" placeholder='Email'  onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <input type="password" placeholder='Password'  onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                 <button onClick={user_auth} type='submit'>{signState}</button>
                
                <div className="form-help">
                    <div className='Remember'>
                        <input type="checkbox"  />
                        <label htmlFor="">Remember Me</label> 
                    </div>
                        <p>Need Help</p>
                </div>
            </form>
            <div className="form-switch">
                {signState==="Sign Up" ?<p>Alrady have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>:
                <p>New in Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up</span></p>
                }
                
                
            </div>
            </div>
        </div>
    );
}

export default Login;