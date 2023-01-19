const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
// const feedbackRouter = require('./feedback');
// const diagnosticRouter = require('./diagnostics');

const app = express();

app.use('/notes', notesRouter);
// app.use('/feedback', feedbackRouter);
// app.use('/diagnostics', diagnosticRouter);

module.exports = app;