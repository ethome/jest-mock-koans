import isPhoneAffordable from '../src/isPhoneAffordable'
import getMeal from '../src/getMeal'

const FILL_IN_HERE = 'FILL_IN_HERE'

describe('jest.fn()', () => {
  test('should create function with mock implementation', () => {
    const complexOperation = jest.fn((x) => x + 1)
    
    expect(FILL_IN_HERE).toEqual(8)
  })
  
  test('should set mock return value', () => {
    const favoriteDrink = jest.fn()
    favoriteDrink.mockReturnValue(FILL_IN_HERE)
    
    expect(favoriteDrink()).toEqual('red bull')
  })
  
  test('should use mock function in place of real function', () => {
    const mockGetPhonePrice = jest.fn().mockReturnValue(FILL_IN_HERE)
    
    expect(isPhoneAffordable(400, mockGetPhonePrice)).toEqual(true)
  })
  
  test('should set mock implementation', () => {
    const getSideDish = jest.fn()
    getSideDish.mockImplementation(isDiet => isDiet ? 'radishes' : FILL_IN_HERE)
    
    expect(getMeal(getSideDish, false)).toEqual('Hot dogs with a side of poutine')
  })
  
  test('should assert mock function was called', () => {
    const performDogTricks = (rollOver, sit) => {
      FILL_IN_HERE
    }
    const rollOver = jest.fn()
    const sit = jest.fn()
    
    performDogTricks(rollOver, sit)
    
    expect(rollOver).toHaveBeenCalled()
  })
  
  test('should assert mock function was called with parameters', () => {
    const performDogTricks = (rollOver, sit) => {
      FILL_IN_HERE
    }
    const rollOver = jest.fn()
    const sit = jest.fn()
    
    performDogTricks(rollOver, sit)
    
    expect(rollOver).toHaveBeenCalledWith(5)
  })
  
  test('should expose mock object to check arguments of calls', () => {
    const drawShapes = jest.fn()
    
    drawShapes('triangle', 'square', 'octagon')
    drawShapes('dodecahedron', 'kite', 'rhombus')
    drawShapes('square', 'circle', 'pentagon')
    
    expect(drawShapes.mock.calls[FILL_IN_HERE][FILL_IN_HERE]).toEqual('circle')
  })
})
