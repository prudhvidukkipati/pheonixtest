const User = require('../modal/users')
const JWT = require('../modal/jwt')
const jwt = require('jsonwebtoken')

exports.signUp=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        try {
            if(user) return res.status(401).json({
                error:'User already exists'
            });
            const {email,password,address,address2,city,state,zip}=req.body
            const _user = new User({email,password,address,address2,city,state,zip})
            _user.save((error,data)=>{
                if(error){
                    return res.status(400).json({error:'something went wrong'})
                }
    
                if (data){
                    return res.status(201).json({message:'user created successfully'})
                }
            })
        } catch (error) {
            return res.status(400).json({error:'something went wrong'})
        }
    })
           
}

exports.signIn=(req,res)=>{
    
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({error:'cannot signIn '})
        if(user){
            if(user.authenticate(req.body.password)){
                const jwtStr=Math.random().toString(36).substring(7);
                const token =jwt.sign({_id:user._id},jwtStr ,{expiresIn:'1h'});
                
                const _jwt = new JWT({email:req.body.email,jwtStr})
                _jwt.save((error,data)=>{
                    if(data){
                        
                        const{email,address,address2,city,state,zip}=user;
                res.status(200).json({
                    token,
                    user:{email,address,address2,city,state,zip}

                });
                    }else{
                        return res.status(400).json({error:'cannot signIn now'})
                    }
                    
            })
            }else{
                res.status(400).json({error:'invalid email or password'})
            }

        }else{
            return res.status(400).json({error:'invalid email or password'})

        }
    })

}