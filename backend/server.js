const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const basicInformationUrl = require('./routes/basicInformation');

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json()); // This body parser should be before cors
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.use('/api', basicInformationUrl);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});