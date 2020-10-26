const express = require("express")
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

// connect to mongo db r56GBnZhKioDbFnG
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(PORT)
    console.log("server started", PORT)
  })
  .catch((err) => console.log(err))

  /* APIS */

// PUT /workouts/:id
app.put("/api/workouts/:id", async (req, res) => {
    console.log("UPDATING WORKOUT WITH ID", req.query.id)
    await db.Workout.findByIdAndUpdate(req.query.id, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err))
  })

  // POST /workouts
app.post("/api/workouts", async (req, res) => {
    const workout = new Workout(req.body)
    workout
      .save()
      .then((result) => {
        res.json(workout)
      })
      .catch((err) => res.status(400).json(err))
  })

  // GET /workouts
app.get("/api/workouts", async (req, res) => {
    await db.Workout.find()
      .sort({ day: 1 })
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err))
  })