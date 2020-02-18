function merge(arr1, arr2) {
  const mergedArr = []
  let i = 0
  let k = 0

  while (arr1[i] || arr2[k]) {
    const val1 = arr1[i]
    const val2 = arr2[k]

    if (val1 && val2) {
      if (val1 < val2) {
        mergedArr.push(val1)
        i++
      } else {
        mergedArr.push(val2)
        k++
      }
    } else if (val1) {
      mergedArr.push(val1)
      i++
    } else if (val2) {
      mergedArr.push(val2)
      k++
    }
  }
  return mergedArr
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  const midway = Math.floor(arr.length / 2)
  const left = arr.slice(0, midway)
  const right = arr.slice(midway)

  const leftSorted = mergeSort(left)
  const rightSorted = mergeSort(right)

  return merge(leftSorted, rightSorted)
}

console.log(mergeSort([9, 21, 4, 18, -12]))
