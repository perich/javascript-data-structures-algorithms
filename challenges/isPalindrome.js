// if you are allowed to use built-in methods, there is a trivial solution
function isPalindrome(str) {
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  )
}

// from scratch solution with no `array.prototype.reverse()`
function isPalindromeNoBuiltin(str) {
  const midpoint = Math.floor((str.length - 1) / 2)
  const stack = []
  if (str.length % 2 === 0) {
    for (let i = 0; i <= midpoint; i++) {
      stack.push(str[i])
    }
  } else {
    for (let i = 0; i < midpoint; i++) {
      stack.push(str[i])
    }
  }

  for (let i = midpoint + 1; i < str.length; i++) {
    const popped = stack.pop()
    if (popped !== str[i]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('abba'))
console.log(isPalindrome('mom'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('abaracecarba'))

console.log(isPalindromeNoBuiltin('abba'))
console.log(isPalindromeNoBuiltin('mom'))
console.log(isPalindromeNoBuiltin('racecar'))
console.log(isPalindromeNoBuiltin('abaracecarba'))
