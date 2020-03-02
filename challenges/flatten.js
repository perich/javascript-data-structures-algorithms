// Flatten a multi dimensional array
// bonus: if you did it recursively, can you also do it iterativly? visa versa?

var test1 = [
  1,
  [2, 4],
  5,
  [
    [1, [2, [4, 0, [8]]]],
    [4, [5, 7]],
  ],
]

// flatten(test1) should output [1,2,4,5,1,2,4,0,8,4,5,7]

function flatten(arr) {
  const flattenedArr = []

  function walkAndPush(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        walkAndPush(arr[i])
      } else {
        flattenedArr.push(arr[i])
      }
    }
  }

  walkAndPush(arr)
  return flattenedArr
}

function flattenIterative(arr) {
  const queue = []
  const flat = []
  arr.forEach(item => queue.push(item))

  while (queue.length > 0) {
    const next = queue.shift()
    if (Array.isArray(next)) {
      for (let i = next.length - 1; i >= 0; i--) {
        queue.unshift(next[i])
      }
    } else {
      flat.push(next)
    }
  }

  return flat
}

console.log(flatten(test1))
console.log(flattenIterative(test1))
