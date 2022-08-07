const express = require('express');
const usersRouter = require('../src/routes/user.routes')
const cors = require('cors');

const app = express()

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

module.exports = app;
