// Server file

require('dotenv').config()

const express = require('express')
const massive = require('massive')
const session = require('express-session')

// There will be stuff for auth0 here 

const {SERVER_PORT, SESSION_SECRET} = process.env


const app = express()

app.use(json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 
        }
    })
)