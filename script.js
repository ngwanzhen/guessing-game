var h1 = document.querySelector('h1')
var body = document.querySelector('body')

// var userIn = parseInt(prompt('pls enter your guess'))

// **Update: Button added to start game;
// issues: 1) re-starting game does not generate new random number only page re-load does
document.getElementById('startBtn').addEventListener('click', getUser)

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
}

// **Update: Modified getUser to end game on 'cancel' and 'empty prompt'.
function getUser () {
  var userIn = prompt('key in n')
  if (userIn === '' || userIn === null) { return } else if (userIn !== ans) { return higherOrLower(userIn, ans) } else if (userIn == ans) { console.log('you won') } else { return }
  // return higherOrLower(userIn, ans)
}

// function should get input,
// check and change css
// decide if should loop back to get input
// setTimeout(getUser, 1000) **Update:removed to prevent auto-start upon page load**
