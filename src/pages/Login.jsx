import React,{useState} from 'react';
import { signIn, signUpProvider } from '../auth/firebase';
import {useNavigate} from "react-router-dom"

const Login = () => {
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()
 const navigate = useNavigate();
 const handleLogin = (e) => {
  e.preventDefault();
  console.log(email,password);
  signIn(email,password,navigate)
 }
 const handleProviderLogin = () => {
  signUpProvider(navigate)
 }
 return (
  <div className='d-flex justify-content-center' >
   <div className="form-image d-none d-md-block">
    <img src="https://picsum.photos/800/800" alt="sample-movie"/>
   </div>
   <div className='register-form'>
    <h1 className='form-title display-3'>Login</h1>
    <form id='register' 
      onSubmit={handleLogin}
    >
     <div className="mb-3">
      <label htmlFor="email" className='form-label'>Email</label>
      <input type="text" className="form-control" id='email' placeholder='Enter your email...' required
        onChange={(e)=>setEmail(e.target.value)}
      />
      <label htmlFor="password" className='form-label'>Password</label>
      <input type="password" className="form-control" id='password' placeholder='Enter your password...' required
        onChange={(e)=>setPassword(e.target.value)}
      />
      <div className="link">Forgot Password</div>
     </div>
     <input type="submit" className='btn btn-primary form-control' value="Sign In"/>
    </form>
    <button className="btn btn-primary form-control" onClick={handleProviderLogin } >Continue with Google</button>
  </div>
 </div>
 );
};

export default Login;
