const Game = () => {
  let frames = []
  const getFrames = () => {
    return frames
  }
  let allRolls = []
  
  const score = () => {
    frames = calculateFrames(allRolls)
    let finalScore = 0
    for (const [indexFrame, frame] of frames.entries()) {
      finalScore += (
        addStrike(frame, indexFrame)
        + addSpare(frame, indexFrame) 
        + addFrame(frame)
      )
    }
    return finalScore
  }


  const roll = numberOfPins => {
    allRolls.push({pins: numberOfPins})
  }
  const calculateFrames = rollsHistory => {
    let newFrames = []
    let frameN = []
    for (const [index, roll] of rollsHistory.entries()) {
      frameN.push(roll)
      if (frameN.length === 2 || rollsHistory.length === index + 1 || roll.pins == 10){
        newFrames.push(frameN)
        frameN = []
      }
    }
  
    return newFrames
  }
  
  const addStrike = (frame, indexFrame) => {
    let finalScore = 0
    if (isStrike(frame) && frames.length > indexFrame + 1){
      finalScore += frames[indexFrame + 1][0].pins
      finalScore += frames[indexFrame + 1][1].pins
    }
    return finalScore
  }
  const addSpare = (frame, indexFrame) => {
    let finalScore = 0
    if (isSpare(frame) && frames.length > indexFrame + 1){
      finalScore += frames[indexFrame + 1][0].pins
    }
    return finalScore
  }
  const addFrame = (frame) => {
    let finalScore = 0
    for (let roll of frame){
      finalScore += roll.pins
    }
    return finalScore
  }
  const isStrike = innerFrame => {
    return innerFrame.length === 1 && innerFrame[0].pins === 10
  }
  const isSpare = innerFrame => {
    let frameValue = 0
    for (const roll of innerFrame){
      frameValue += roll.pins
    }
    return frameValue === 10 && innerFrame.length === 2
  }
  
  
  return {
    score,
    roll,
    allRolls,
    getFrames
  }
}



module.exports = {
  Game
}