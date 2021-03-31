'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const server = require('./src/server.js');


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.start(process.env.PORT || 3000)
  })
  .catch((e) => {
    console.log('__CONNECTION ERROR__', e.message);
  });