const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  cities: [String],
  totalStudents: Number,
  totalSenseis: Number,
  imgUrl: String
})

module.exports = mongoose.model('Country', CountrySchema)
