const selectionSortRecursive = (arr, result = []) => {
  if (arr === undefined || arr.length === 0) return result
  const min = Math.min(...arr)
  const index = arr.indexOf(min)
  const sorted = result.concat([min])
  return selectionSortRecursive(arr.filter((n, i) => i !== index), sorted)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
