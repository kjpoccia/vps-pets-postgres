const express = require('express');
const path = require('path');
const cors = require('cors');

const apiRouter = require('./routes/api');
const app = express();

// initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

module.exports = app;
