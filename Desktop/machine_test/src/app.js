// const express = require('express');
// const mongoose = require('mongoose');
// const router = require('./route/route.js');
import express from 'express';
import mongoose from 'mongoose';
import router from './route/route.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://j_jivan:223521@cluster0.tbpicad.mongodb.net/group26Database')
    .then(() => console.log('mongoDB connected successfully'))
    .catch(err => console.log(err))
app.use('/', router);
const port = 4000;
app.listen(port, function () {
    console.log('this app is running on port', `${port}`)
})