// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// 8, [5, 3, 2, 7] -> true
// 12, [8,3,1,7,6,6] -> true
// 20, [10, 15, 7, 2, 11, 8] -> false
function getIsValidMovieLengths(flightLength, movieLengths) {
  const movieLengthMap = {}
  let isValid = false

  movieLengths.forEach(len => {
    if (!movieLengthMap.hasOwnProperty(len)) {
      movieLengthMap[len] = 1
    } else {
      movieLengthMap[len] += 1
    }
  })

  movieLengths.forEach(len => {
    const diff = flightLength - len
    movieLengthMap[len]--

    if (movieLengthMap[diff]) {
      isValid = true
    }
    movieLengthMap[len]++
  })

  return isValid
}

console.log(
  getIsValidMovieLengths(8, [5, 3, 2, 7]),
  getIsValidMovieLengths(12, [8, 3, 1, 7, 6, 6]),
  getIsValidMovieLengths(20, [10, 15, 7, 2, 11, 8]),
)
