import isPhoneAffordable from '../src/isPhoneAffordable'
import getMeal from '../src/getMeal'

const FILL_IN_HERE = 'FILL_IN_HERE'

describe('jest.fn()', () => {

  // https://facebook.github.io/jest/docs/en/jest-object.html#jestfnimplementation
  test('should create function with mock implementation', () => {
    const complexOperation = jest.fn((x) => x + 1)
    
    expect(complexOperation(7)).toEqual(8)
  })
  
  // https://facebook.github.io/jest/docs/en/mock-function-api.html#mockfnmockreturnvaluevalue
  test('should set mock return value', () => {
    const favoriteDrink = jest.fn()
    favoriteDrink.mockReturnValue('red bull')
    
    expect(favoriteDrink()).toEqual('red bull')
  })
  
  test('should use mock function in place of real function', () => {
    const mockGetPhonePrice = jest.fn().mockReturnValue(FILL_IN_HERE)
    
    expect(isPhoneAffordable(400, mockGetPhonePrice)).toEqual(true)
  })
  
  // https://facebook.github.io/jest/docs/en/mock-function-api.html#mockfnmockimplementationfn
  test('should set mock implementation', () => {
    const getSideDish = jest.fn()
    getSideDish.mockImplementation(isDiet => isDiet ? 'radishes' : FILL_IN_HERE)
    
    expect(getMeal(getSideDish, false)).toEqual('Hot dogs with a side of poutine')
  })
  
  // https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled
  test('should assert mock function was called', () => {
    const performDogTricks = (rollOver, sit) => {
      FILL_IN_HERE
    }
    const rollOver = jest.fn()
    const sit = jest.fn()
    
    performDogTricks(rollOver, sit)
    
    expect(rollOver).toHaveBeenCalled()
  })
  
  // https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalledwitharg1-arg2-
  test('should assert mock function was called with parameters', () => {
    const performDogTricks = (rollOver, sit) => {
      FILL_IN_HERE
    }
    const rollOver = jest.fn()
    const sit = jest.fn()
    
    performDogTricks(rollOver, sit)
    
    expect(rollOver).toHaveBeenCalledWith(5)
  })
  
  // https://facebook.github.io/jest/docs/en/mock-function-api.html#mockfnmockcalls
  test('should expose mock object to check arguments of calls', () => {
    const drawShapes = jest.fn()
    
    drawShapes('triangle', 'square', 'octagon')
    drawShapes('dodecahedron', 'kite', 'rhombus')
    drawShapes('square', 'circle', 'pentagon')
    
    expect(drawShapes.mock.calls[FILL_IN_HERE][FILL_IN_HERE]).toEqual('circle')
  })
})
