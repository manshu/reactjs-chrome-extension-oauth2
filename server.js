const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const express = require('express');
const cookieSession = require('cookie-session')
const connectDB = require('./src/config/db')
const keys = require('./src/config/keys')
const passport = require('passport')



connectDB()

const app = express()
//middleware
app.use(express.json())
app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }))
app.use(passport.initialize())
app.use(passport.session())

const authentication = require('./src/routes/authentication')

app.use('/api/v1/auth', authentication)


app.listen('4500', () => console.log('Server is connected'))