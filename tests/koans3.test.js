import getPersonalizedMessage from '../src/getPersonalizedMessage'
import { getCustomer } from '../src/customerApiClient'

const FILL_IN_HERE = 'FILL_IN_HERE'

// https://facebook.github.io/jest/docs/en/jest-object.html#jestmockmodulename-factory-options
jest.mock('../src/getCustomer', () => {
  return {
    getCustomer: jest.fn(FILL_IN_HERE)
  }
})

describe('jest.mock()', () => {
  const customerId = 7
  
  test('should override imported module', async () => {
    const message = await getPersonalizedMessage(customerId)
    
    expect(getCustomer).toHaveBeenCalledWith(7)
    expect(message).toEqual('Howdy Philip Song!')
  })
  
  test('can import mocked module to set mock implementation', async () => {
    getCustomer.mockImplementation(FILL_IN_HERE)
    
    const message = await getPersonalizedMessage(customerId)

    expect(message).toEqual('Howdy Ryle Garcia!')
  })
})
