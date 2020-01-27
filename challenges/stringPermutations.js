// generate all permutations of a string
// 'baw' -> 'baw', 'bwa', 'awb', 'abw', 'wab', 'wba'

function printStringPermutations(str) {
  function inner(decisionPool, fragment = '') {
    if (decisionPool.length === 1) {
      console.log(fragment + decisionPool[0])
      return
    }
    for (let i = 0; i < decisionPool.length; i++) {
      const clone = [...decisionPool]
      const [splicedVal] = clone.splice(i, 1)
      inner(clone, fragment + splicedVal)
    }
  }

  inner(str.split(''))
}

printStringPermutations('baw')
