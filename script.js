
var h1 = document.querySelector('h1')
var body = document.querySelector('body')

// var userIn = parseInt(prompt('pls enter your guess'))
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var ans = getRandomIntInclusive(1, 5)
console.log(ans)

function higherOrLower (userIn, ans) {
  if (userIn !== ans) {
    if (userIn > ans) {h1.innerText = 'lower pls'
      return setTimeout(getUser, 1000)}
        else if (userIn < ans) {h1.innerText = 'higher pls'
          return setTimeout(getUser, 1000)}
    }
    body.style.backgroundColor = 'green'
}

function getUser () {
  var userIn = prompt('key in n')
  if (userIn !== ans) { return higherOrLower(userIn, ans) }
    else if (userIn == ans) { console.log('you won') }
  // return higherOrLower(userIn, ans)
}

setTimeout(getUser, 1000)

// to get start game button, end game button, restart
