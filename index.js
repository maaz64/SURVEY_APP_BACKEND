const express = require('express');
const db = require('./config/mongoose');
// const cors = require('cors');
const app = express();
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');
const routes = require('./routes/index');

const PORT = 8080;

// app.use(cors({
//     origin: '*',
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',routes);

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log("Error in running server",err);
    }
    console.log(`Server is up and running on port ${PORT}`);
});