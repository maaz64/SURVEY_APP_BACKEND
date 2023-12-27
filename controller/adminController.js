require('dotenv').config();
const Admin = require('../model/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signUp =async (req,res)=>{

    try {
        const{name,email,password,confirm_password} = req.body;

        if(password != confirm_password)
        {
            return res.status(422).json({
                message:"password doesn't match",
                data:{}
            });
        }
    
        const admin = await Admin.findOne({email});
    
        if(admin)
        {
            return res.status(409).json({
                message:"Admin already registered!!!",
                data:{}
            }); 
        }
        else{
            const saltRounds = 10;
            const hashPassword = bcrypt.hashSync(password, saltRounds);
    
            const newAdmin = await Admin.create({
                name,email,password:hashPassword
            })
    
            return res.status(201).json({
                message:"Success",
                data:{newAdmin}
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            data:{},
            error
        });
        
    }

 

}

module.exports.signIn =async (req,res)=>{

    try {
        const {email,password} = req.body;

        const admin = await Admin.findOne({email});
        if(!admin)
        {
            return res.status(401).json({
                message:"Invalid credentials",
                data:{}
            })
        }
    
        const isPassMatch = bcrypt.compare(password, admin.password);
    
        if(!isPassMatch)
        {
            return res.status(401).json({
                message:"Invalid email/password",
                data:{}
            })
        }
    
        const token = jwt.sign({email},process.env.secretOrKey,{expiresIn:"1h"});
    
        return res.status(200).json({
            message:"Sign in successfully",
            data:{
                name:admin.name,
                userId:admin._id,
                token
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            data:{},
            error
        });

        
    }

}
