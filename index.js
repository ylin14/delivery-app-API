const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});

const routes = require('./routes/routes');
app.use('/api', routes);
