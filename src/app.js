const express = require('express')
const app = express()

const series = require("./routes/seriesRoutes.js")

app.use("/series", series)

module.exports = app