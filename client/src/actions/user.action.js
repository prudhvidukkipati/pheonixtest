import axiosInstance from '../components/axios'

export const SignUp=(data)=>{

    return async (dispatch)=>{
        try {
            const res = await axiosInstance.post("/signup",{...data})
            if(res.status===201){
                
                dispatch({type:"SIGNUPSUCCESS",payload:{message:res.data.message}})
            }
            
        } catch (error) {
            try {
                if(error.res.status===401){
                    dispatch({type:"SIGNUPFAIL",payload:{error:error.res.data.error}})
                }
            } catch (error) {
                console.log(error)
                dispatch({type:"SIGNUPFAIL",payload:{error:"signup failed"}})
            }
            
        }
       
    }
}

export const SignIn=(data)=>{
    return async (dispatch)=>{
        try {
            const res = await axiosInstance.post('/signin',{...data})
            if(res.status===200){
                console.log("loggedin")
                const {token,user} =  res.data;
                
                sessionStorage.setItem('token',token);
                sessionStorage.setItem('user',JSON.stringify(user))
            
                dispatch({type:"LOGIN",payload:{token,user}})
            }
            
        } catch (error) {
            try {
                dispatch({type:"SIGNUPFAIL",payload:{error:error.response.data.error}})
            } catch (error) {
                dispatch({type:"SIGNUPFAIL",payload:{error:'failed to login'}})
            }
            
        }
       
    }
}
export const isUserLoggedIn =()=>{

    return async dispatch=>{
        const token = sessionStorage.getItem('token');
        if(token){
           const user = JSON.parse(sessionStorage.getItem('user'))
           
           dispatch({type:'LOGIN',payload:{token,user}})
           
        }else{
            dispatch({type:'SIGNUPFAIL',payload:{error:''}})
        }
    }
}