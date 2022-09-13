import express from "express";
import mongoose from "mongoose";
import config from 'config';
import path from 'path';

const app = express();
app.use(express.json());


// Following logic will be used in production build.
if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'));
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

// connection to mongoDB and then running server.

const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;

async function connect(params) {
    try {
        mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database connected successfully...");
        app.listen(port, ()=>{
            console.log("Server is running at port " + port);
        })
    } catch (error) {
        console.log(error);
    }
}

connect();
