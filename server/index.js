// 'use strict';

require('dotenv').config()

const { json ,urlencoded} = require('express');
const mongoose = require('mongoose')


const { set, connect } = mongoose


const cors = require('cors')
const  express = require('express')



//import routes
const userRoute = require('./routes/userRoute.js')
const authRoute = require('./routes/authRoute')
const productsRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')
const cartRoute = require('./routes/cartRoute')

//bind with express server
const app = express();

//middlewares
app.use(json())
app.use(urlencoded({ extended: false }));


//cross-origin resourses
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productsRoute)
app.use('/api/order', orderRoute)
app.use('/api/cart', cartRoute)

//DB config
set('strictQuery', true)

const db_uri = process.env.MONGO_URL

connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('DB connection successful'))
.catch((error)=> console.log(error.message))


const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})
