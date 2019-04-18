const { graphql } = require('graphql')
const { schema } = require('../index')
const actions = require('../actions')
const setupTest = require('./helpers')

const operations = require('./operations')

const mutationCreate = `
mutation CREATE_USER($email:String!, $password:String!){
    CreateUser(data:{
      email:$email, password:$password
    }){
      _id
    }
  }
`

describe('Create user correctly', () => {
  beforeEach(async () => await setupTest())

  it('Should create user correctly', async () => {
    const data = {
        email: 'prueba@gmail.com',
        password: 'miprueba'
    }

    const res = await graphql(schema, mutationCreate, null, {}, data)
    expect(res.data.CreateUser).toHaveProperty('_id')
  })

})

describe('Example Tests', () => {
    it('2 and 2', () => {
    expect(operations.sum(2, 2)).toBe(4)
  })
})

// test('map calls its argument with a non-null argument', () => {
//     const mock = jest.fn()
//     [1].map(x => mock(x))
//     expect(mock).toBeCalledWith(expect.anything())
// })

test('randocall calls its callback with a number', () => {
  const mock = jest.fn()
  operations.randocall(mock)
  expect(mock).toBeCalledWith(expect.any(Number))
})
