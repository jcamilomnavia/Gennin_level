const models = require('./models')
const utils = require('./utils/commonUtils')

const country = new models.Country('Colombia', 'Selina', 11, 3)

utils.base_url
utils.printConstant()
utils.printParam(country)
utils.callCallBack('5', utils.printValue)