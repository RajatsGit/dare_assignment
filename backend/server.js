const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');

// configure dotenv
dotenv.config();





// MongoDB connection
connectDB();



const app = express();


// middlewares
app.use(express.json());
app.use(cors({
    origin: '*'
}));


// routes

app.use('/api/seat',require('./routes/bookSeat'));

app.listen(5000, ()=>{
    console.log('Server is running on 5000');
})