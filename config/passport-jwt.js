require('dotenv').config();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../model/admin');


const opts ={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.secretOrKey,
}

passport.use(new JwtStrategy(opts,function(jwt_payload,done){

        
    Admin.findOne({id: jwt_payload.sub}).then((admin)=>{
        if (admin) {
            return done(null, admin);
        } else {
            return done(null, false);
        }
        
    }).catch((err)=>{
        return done(err, false);
        

    })
}));


module.exports = passport;