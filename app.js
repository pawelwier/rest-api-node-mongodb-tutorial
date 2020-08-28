const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const cors = require('cors');

const postsRoute = require('./routes/posts');
const { populate } = require('./models/Post');

app.use(cors());
app.use(express.json());
app.use('/posts', postsRoute);

app.listen(3000);


mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connect to db')
);