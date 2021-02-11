import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, SignUp } from '../actions/user.action';
import Header from './Header'
var alert_message=''
function Signup() {
  const[email,setEmail] = useState('');
  const[password,setPassword]=useState('');
  const[address,setAddress]=useState('');
  const[address2,setAddress2]=useState('');
  const[city,setCity]=useState('');
  const[state,setState]=useState('');
  const[zip,setZip]=useState('');
  const auth = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.isLogin){
        {dispatch(isUserLoggedIn())}
        
     
    }
}, [])

  const signUp=(e)=>{
    e.preventDefault();
    const data={email,password,address,address2,city,state,zip}
    dispatch(SignUp(data))

  }
  if(auth.error){
    alert_message=(<div className="alert alert-danger offset-lg-4 col-lg-4 mt-2" role="alert">
   <strong>{auth.error}</strong> 
 </div>)
}
if(auth.message){
  alert_message=(<div className="alert alert-success offset-lg-4 col-lg-4 mt-2" role="alert">
   <strong >{auth.message}</strong> 
  
 </div>)
  
}
    return (
        <>
        <Header />
        <form className='col-11 mt-5'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" onChange={(e)=>setAddress(e.target.value)} placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" onChange={(e)=>setAddress2(e.target.value)} placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" onChange={(e)=>setCity(e.target.value)} id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control" onChange={(e)=>setState(e.target.value)}>
        <option selected>Choose...</option>
        <option value='Andhra Pradesh'>Andhra Pradesh</option>
        <option value='Telangana'>Telangana</option>
        <option value='Karnataka'>Karnataka</option>
        <option value='Tamil Nadu'>Tamil Nadu</option>
        <option value='Goa'>Goa</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" onChange={(e)=>setZip(e.target.value)} id="inputZip"/>
    </div>
  </div>
 
  <button type="submit" class="btn btn-primary" onClick={signUp}>Sign up</button>
</form>
 {alert_message}
</>
    )
}

export default Signup
