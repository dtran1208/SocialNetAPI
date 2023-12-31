const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(routes);

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
