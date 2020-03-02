// create a function that searches a sorted list for a given number
// return the index of that number, or -1 if not exists

function binarySearch(list, targetValue) {
  // get midpoint based on length
  // if value is greater than targetValue, search left
  // if value is less than targetValue, search right
  // if targetValue return index
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const currentValue = list[mid]

    if (currentValue === targetValue) {
      return mid
    }

    // search left
    if (currentValue > targetValue) {
      high = mid - 1
    }

    if (currentValue < targetValue) {
      low = mid + 1
    }
  }
  return -1
}

console.log(
  binarySearch([1, 4, 8, 9, 12, 33, 43, 45, 61, 64, 71, 79, 82], 82), // 12
  binarySearch([1, 4, 8, 9, 12, 33, 43, 45, 61, 64, 71, 79, 82], 1), // 0
  binarySearch([1, 4, 8, 9, 12, 33, 43], 12), // 4
  binarySearch([2, 4, 6, 7], 12), // -1
  binarySearch([2, 4, 6, 7, 9], 1), // -1
)
