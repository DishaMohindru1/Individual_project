const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

// connect to MongoDB
connectToMongo()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// create a schema for the sensor data
const sensorDataSchema = new mongoose.Schema({
    data: String,
    sDate: Date,
    sTime: String,
    ip: String
});

// create a model for the sensor data
const SensorData = mongoose.model('SensorData', sensorDataSchema);

// set the view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    // fetch sensor data from the database
    SensorData.find({}, (err, data) => {
        if (err) {
            console.error(err);
            res.send('Failed to fetch sensor data from the database');
        } else {
            // render the data in a table using EJS template
            res.render('index', { data });
        }
    });
});

app.listen(${port}, () => console.log('Listening on port ${port}'));
