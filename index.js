const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const passport = require('passport');
const passportJWT = require('./config/passport-jwt');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');

const PORT =  8080 || process.env.PORT;

const corsOption = {
    origin: ['http://localhost:3000','https://localhost:3000',],
    credentials: true,
    // Access-Control-Allow-Credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/',routes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running at port ${PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
})
