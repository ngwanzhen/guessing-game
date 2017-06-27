var h1 = document.querySelector('h1')
var body = document.querySelector('body')

// var userIn = parseInt(prompt('pls enter your guess'))

// **Update: Button added to start game;
// issues: 1) re-starting game does not generate new random number only page re-load does
var colorBtn = document.getElementById('colorBtn')
colorBtn.addEventListener('click', setTimeout(startGame, 1000))
colorBtn.addEventListener('click', addScore)

// document.getElementById('scoreBtn').addEventListener('click', addScore)

// colorBtn.addEventListener('click', addScore)


// document.getElementById('startBtn').addEventListener('click', setTimeout(getUser, 1000))
// document.getElementById('startBtn').addEventListener('click', restart)
var colors = ['blue', 'green', 'pink', 'red', 'brown', 'purple']
var colorText = ''
var displayedColor = 'blue'
var score = 0

function startGame () {
  setInterval(changeColor, 3000)
  setInterval(changeName, 3000)
  // setInterval(trackScores, 3000)
}


function changeColor () {
  var randomIndex = getRandomIntInclusive(0, colors.length - 1)
  displayedColor = colors[randomIndex]
  body.style.backgroundColor = displayedColor
}

function changeName () {
  var randomIndexColorText = getRandomIntInclusive(0, colors.length - 1)
  colorText = colors[randomIndexColorText]
  
  // console.log(colorText)
  colorBtn.innerText = colorText
}

// function trackScores () {
//   if (colorText == displayedColor) { console.log('hit')
//   }
// }

function addScore () {
  if (colorText == displayedColor) {
    score = 0
    score += 1
    h1.innerText = 'score is ' + score
    score = 0

  }
}



// function randomCol () {
//   var x = getRandomIntInclusive(0, 255)
//   var y = getRandomIntInclusive(0, 255)
//   var z = getRandomIntInclusive(0, 255)
//   var color = 'rgba(' + x + ',' + y + ',' + z + ',' + '1' + ')'
//   body.style.backgroundColor = color
// }

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
}

var ans = getRandomIntInclusive(1, 5)
console.log(ans)

function higherOrLower (userIn, ans) {
  if (userIn !== ans) {
    if (userIn > ans) {
      h1.innerText = 'lower pls'
      return setTimeout(getUser, 1000)
    } else if (userIn < ans) {
      h1.innerText = 'higher pls'
      return setTimeout(getUser, 1000)
    }
  }
  body.style.backgroundColor = 'green'
  h1.innerText = 'Game Won'
}

// **Update: Modified getUser to end game on 'cancel' and 'empty prompt'.
function getUser () {
  var userIn = prompt('key in n')
  if (userIn === '' || userIn === null) { return } else if (userIn !== ans) { return higherOrLower(userIn, ans) } else if (userIn == ans) { console.log('you won') } else { return }
  // return higherOrLower(userIn, ans)
}

function restart () {
  h1.innerText = 'please key in a number to start guessing'
  body.style.backgroundColor = 'rgb(150, 75, 27)'
  setTimeout(getUser, 1000)
  ans = getRandomIntInclusive(1, 5)
  console.log(ans)
}

// function should get input,
// check and change css
// decide if should loop back to get input
// setTimeout(getUser, 1000) **Update:removed to prevent auto-start upon page load**
