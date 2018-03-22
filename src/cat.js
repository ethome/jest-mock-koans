export default class Cat {
  constructor() {
    this.isFull = false
  }
  
  feed() {
    this.isFull = true
  }
  
  makeNoise(times, loud) {
    let noise = this.isFull ? 'purr' : 'meow'
    
    if (loud) {
      noise = noise.toUpperCase()
    }
    
    return noise.repeat(times)
  }
}
