const initState ={
    isLogin:false,
    signUp:false,
    token:'',
    user:{
        email:'',
        address:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
    },
    error:'',
    message:"",
}

export default(state=initState,action)=>{
    switch (action.type) {
        case "LOGIN":
            state={
                ...state,user:action.payload.user,isLogin:true,token:action.payload.token
            }
            break;
            case "SIGNUPSUCCESS":
                state={
                    ...state,signUp:true,message:action.payload.message
                }
                break;
            case "SIGNUPFAIL":
                    state={
                        ...state,error:action.payload.error
                    }
                    break;        
            
    
    }
    return state;
}