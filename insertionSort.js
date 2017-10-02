function insertionSort(array) {
  let arrayLength = array.length
  let sortedArray = [];
  for (let i = 0; i <= arrayLength; i++) {
    let removed = array.shift();
      if (sortedArray.length === 0) {
        sortedArray.unshift(removed);
      } else {
        for (let j = i - 1; j >= 0 && (sortedArray[j] > removed); j--) {
          //if ((sortedArray[j] >= removed) && (sortedArray[j + 1] <= removed) || (sortedArray[j + 1] === null)) {
            //sortedArray.splice((j + 1), 0, removed);
            //console.log(sortedArray);
            //if ((sortedArray[j] >= removed) && (sortedArray[j + 1] <= removed)) {
              sortedArray[j + 1] = sortedArray[j];
              sortedArray[j] = removed;
          //} else {
            //console.log("else");
          //};
        };
      };

  };
  return sortedArray;
};

let testArray = [7, 2, 4, 10];
console.log(insertionSort(testArray));

module.exports = insertionSort
