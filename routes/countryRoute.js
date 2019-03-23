const Country = require('../models/Country')

const express = require('express')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  Country.find().exec()
    .then((countries) => {
      res.status(200).send(countries)
    })
    .catch((err) => {
      res.status(503).send(`error: ${err}`)
    })
})

router.post('/create', (req, res) => {
  Country.create(req.body)
    .then((country) => {
      res.status(200).send(`country created with id: ${country._id}`)
    })
    .catch((err) => {
      res.status(503).send(`error: ${err}`)
    })
})

module.exports = router
