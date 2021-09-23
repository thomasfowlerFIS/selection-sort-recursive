const selectionSortRecursive = (arr, result = []) => {
  let min = Math.min(...arr)
  let index = arr.indexOf(min)
  if (arr === undefined || arr.length === 0) {
    return result
  } else {
    result.push(min)
    return selectionSortRecursive(arr.filter((n, i) => i !== index), result)
  }
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
