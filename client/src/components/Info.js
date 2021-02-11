import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { isUserLoggedIn } from '../actions/user.action';
import Header from './Header'
import './info.css'
function Info() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    if(!user.isLogin){
        {dispatch(isUserLoggedIn())}
        
     
    }
}, [])
    return (
        <>
        <Header />
        <form className='col-11 mt-5'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email: </label><span className='span'>{user.user.email}</span>
     
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress">Address: </label><span  className='span'> {user.user.address}</span>
   
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2: </label><span  className='span'> {user.user.address2}</span>
    
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City: </label><span  className='span'> {user.user.city}</span>
     
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State: </label><span  className='span'> {user.user.state}</span>
     
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip: </label><span  className='span'> {user.user.zip}</span>
      
    </div>
  </div>
 
 
</form>
        </>
    )
}

export default Info
