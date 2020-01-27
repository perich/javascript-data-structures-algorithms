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

console.log(flatten(test1))
