import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, SignIn } from '../actions/user.action';
import Header from './Header'
import { Redirect } from 'react-router';
var alert_message='';
function Signin() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const dispatch = useDispatch();
;
    const Login =(e)=>{
        e.preventDefault();
        const data={email,password}
        dispatch(SignIn(data))
    }
    
    const auth = useSelector(state => state.user)
    useEffect(() => {
        if(!auth.isLogin){
            {dispatch(isUserLoggedIn())}
            
         
        }
    }, [])
    if(auth.error){
        alert_message = (<div className="alert alert-danger offset-lg-2 col-lg-8 mt-2" role="alert">
       <strong >{auth.error}</strong> 
     </div>)
   }
   if(auth.isLogin){
    return <Redirect to={'/info'} />
}

    return (
        <>
      <Header />
      <div>
        <form className='container offset-lg-3 col-lg-5 mt-5'>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
        </div>
        
        
        
        <button type="submit" className="btn btn-primary " onClick={Login}>Login</button>
    </form>
    {alert_message}
        </div>
        </>
    )
}

export default Signin
