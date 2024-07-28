import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/FoodRoute.js';
import userRouter from './routes/UserRoute.js';
import 'dotenv/config'
import cartRouter from './routes/CartRoute.js';
import orderRouter from './routes/OrderRoute.js';


// app config
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// Api End Points
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://TasteHeaven:Teja5566@cluster0.iwtai4d.mongodb.net/?

//https://cloud.mongodb.com/v2/66978ecb5b951e34d3feb08d#/security/network/accessList