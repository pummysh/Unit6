const express=require('express');

const app = express();

app.use(express.json());

const Url=require('./controllers/url.controllers');

app.use("/url",Url);


module.exports =app;