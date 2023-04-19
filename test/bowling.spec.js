
const { Game } = require("../app")



describe('The bowling kata', () => {
  let game
  beforeEach(() => {
    game = Game()
  })
  it("Obtain initial score", () => {
    expect(game.score()).toBe(0)
  })
  it('When roll 0, then should I get the score 0', () => {
    game.roll(0)

    expect(game.score()).toBe(0)
  })
  it("When roll 1, score should be 1", () => {
    game.roll(1)

    expect(game.score()).toBe(1)
  })
  it("When roll 5, score should be 5", () => {
    game.roll(5)

    expect(game.score()).toBe(5)
  })
  describe('One frame test case', () => {
    it('When rolling 5 and 1, score should be 6', () => {
      game.roll(5)
      game.roll(1)

      expect(game.score()).toBe(6)
    })
    it('When rolling 4 and 5, score should be 9', () => {
      game.roll(4)
      game.roll(5)

      expect(game.score()).toBe(9)
    })
    it('When rolling in one frame all pins in two rolls, score should be 10', () => {
      game.roll(3)
      game.roll(7)

      expect(game.score()).toBe(10)
    })
    it('When rolling in one frame all pins in one roll, score should be 10', () => {
      game.roll(10)

      expect(game.score()).toBe(10)
    })
  })
  describe('Two frames test case', () => {
    it('When rolling 9 in first and 8 in second, score should be 17', () => {
      game.roll(1)
      game.roll(8)

      game.roll(4)
      game.roll(4)

      expect(game.score()).toBe(17)
    })
    it('When first frame 10 in spare and second 8, score should be 21', () => {
      game.roll(1)
      game.roll(9)

      // 3 is going to be the bonus for the previous frame
      game.roll(3)
      game.roll(5)

      expect(game.score()).toBe(21)
    })
    it('When first frame 10 and second 8, score should be 26', () => {
      game.roll(4)
      game.roll(6)

      game.roll(8)
      game.roll(0)
      expect(game.score()).toBe(26)
    })
    it('When strike first frame and 8 second, score should be 26', () => {
      game.roll(10) 

      game.roll(5)
      game.roll(3)

      expect(game.score()).toBe(26)
    })
  })

})


