import Cat from './cat'
import playWithCat from './playWithCat'

const FILL_IN_HERE = 'FILL_IN_HERE'

describe('jest.spyOn()', () => {
  test('should be able to assert spy was called', () => {
    const someCat = new Cat()
    const makeNoiseSpy = jest.spyOn(FILL_IN_HERE, FILL_IN_HERE)
    
    playWithCat(someCat)
    
    expect(makeNoiseSpy).toHaveBeenCalledWith(4, false)
  })
  
  test('function being spied on should be called', () => {
    const someCat = new Cat()
    someCat.feed()
    const makeNoiseSpy = jest.spyOn(someCat, 'makeNoise')
    
    expect(playWithCat(someCat)).toEqual(FILL_IN_HERE)
  })
})
