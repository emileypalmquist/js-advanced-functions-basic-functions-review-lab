function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(adj='*') {
  return function(adjective='special') {
    return `You are ${adj}${adjective}${adj}!`
  }
}

const Calculator = {
    add: function(a, b) { return a + b },
    subtract: function(a,b) { return a - b },
    multiply: function(a,b) { return a * b },
    divide: function(a,b) { return a / b }
}

function actionApplyer(startInt, arrayOfFunctions) {
  if (arrayOfFunctions.length === 0) {
    return startInt
  } else {
    (startInt * 2 + 1000) % 7
    return 4
  }
}
