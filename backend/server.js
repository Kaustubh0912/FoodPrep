const express = require('express')
const cors = require ('cors')

const connectDB = require('./config/dbConn')
const foodRouter = require('./routes/foodRoute')
const userRouter = require('./routes/userRoute')
const cartRouter = require('./routes/cartRoute')

//app config
const app = express();
const PORT = process.env.PORT || 4000;
require('dotenv').config();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/food', foodRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/image',express.static('uploads'))

app.get('/',(req,res)=>{
    res.send("API Working")
})

connectDB()
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})