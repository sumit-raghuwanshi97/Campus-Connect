const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const commentRoute = require('./routes/comments');
const cors = require('cors');

dotenv.config();

const allowedOrigins = ['https://campus-connect-iet.vercel.app', 'http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//routes
app.get('/',(req,res)=>{
  res.send("Welcome to Campus-Connect Backend Service for Api's Connection");
  res.end();
});

app.use('/posts',postRoutes);
app.use('/user',userRoutes);
app.use('/comments',commentRoute);

module.exports = app;
