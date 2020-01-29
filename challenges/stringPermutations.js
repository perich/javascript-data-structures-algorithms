// generate all permutations of a string with unique characters
// 'baw' -> 'baw', 'bwa', 'awb', 'abw', 'wab', 'wba'

function generateStringPermutations(str) {
  const permutations = new Set()
  function inner(decisionPool, fragment = '') {
    if (decisionPool.length === 1) {
      permutations.add(fragment + decisionPool[0])
      return
    }
    for (let i = 0; i < decisionPool.length; i++) {
      const clone = [...decisionPool]
      const [splicedVal] = clone.splice(i, 1)
      inner(clone, fragment + splicedVal)
    }
  }

  inner(str.split(''))
  console.log(permutations.size)
}

generateStringPermutations('baw')
generateStringPermutations('abcdef')
