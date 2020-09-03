const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/example');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/example')(app);

app.get('/', (req,res) => {
res.send("hello there")
})

const PORT = process.env.PORT || 5000
app.listen(PORT);