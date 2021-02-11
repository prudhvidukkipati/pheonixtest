const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const cors =require('cors');
const postRoutes = require('./routes/router.js')
const mongoose = require('mongoose')

env.config();

const app =express();
app.use(bodyParser.json({limit:"3mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"3mb", extended: true}));
app.use(cors());
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.slked.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>{console.log('db connected')})
app.use('/api',postRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`serveris rinning on ${process.env.PORT}`);
});