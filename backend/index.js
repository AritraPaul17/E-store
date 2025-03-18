const express = require('express');
const cors = require('cors');

const connectToMongo = require('./config/db');
const User = require('./config/models/UserModel');

const app = express();
require('dotenv').config();
const port = 5555 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/auth',require("./routes/UserRoutes"));


connectToMongo()
    app.listen(port,()=>{
        console.log(`Server is running at port no.${port}`)
    })

