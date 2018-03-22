import Cat from '../src/cat'
import playWithCat from '../src/playWithCat'

const FILL_IN_HERE = 'FILL_IN_HERE'

// https://facebook.github.io/jest/docs/en/jest-object.html#jestspyonobject-methodname
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
