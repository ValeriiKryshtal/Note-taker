const express = require('express');
const notesRouter = require('./notes');      // Import our modular routers for /notes
const app = express();
app.use('/notes', notesRouter);
module.exports = app;