const express = require("express")
const app = express()
const db = require("./models")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

dotenv.config()
const app = express()
const db = require("./models")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

dotenv.config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static("public"))

const PORT = 3000