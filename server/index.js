// Server file

require('dotenv').config()

const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const authCtrl = require('./authController')

app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log('DB connected')
})

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


// There will be stuff for auth0 here 

const port = SERVER_PORT

app.listen(port, () => console.log(`Take us to warp${port}!`))