const express = require('express')
const db = require('./services/db')

const countryRoutes = require('./routes/countryRoute')

const PORT = process.env.PORT

const app = express()
const dbConnection = db.connectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/country', countryRoutes)

dbConnection.then(() => {
  console.log('connected to DB')
})

app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`)
})
