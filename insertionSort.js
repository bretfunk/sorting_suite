function insertionSort(array) {
  //return array.sort(function(a,b){
  //return a - b;
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    let removed = array.shift
      if (sortedArray.length === 0) {
        sortedArray.unshift(removed);
      } else {
        for (let j = 0; j < sortedArray.length; j++) {
          if (sortedArray[j] >= removed && ((sortedArray[j + 1] <= removed) || (sortedArray[j + 1] === null))
              sortedArray.splice((j + 1), 1, removed);
        }
      }
  });
  return sortedArray;
};

module.exports = insertionSort
