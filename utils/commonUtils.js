const base_url = 'google.com'

printValue = (value) => {
  console.log(value)
}

printParam = (model) => {
  console.log(`el parametro que se imprime de country es: ${model['name']}`)
  console.log(`los keys son: ${Object.keys(model)}`)
  console.log(`el parametro es de tipo: ${typeof (model)}`)
}

printConstant = () => {
  console.log('constante')
}

summ = (a, b) => a + b

callCallBack = (constant, callCallBack) => {
  console.log(constant)
  callCallBack(constant)
}

module.exports = {
  printValue,
  base_url,
  printParam,
  printConstant,
  summ,
  callCallBack
}
