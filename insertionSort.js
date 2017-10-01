function insertionSort(array) {
  //return array.sort(function(a,b){
  //return a - b;
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    console.log("i" + i);
    let removed = array.shift();
      if (sortedArray.length === 0) {
        sortedArray.unshift(removed);
      } else {
        for (let j = 0; j < sortedArray.length; j++) {
          console.log("j" + j);
          if ((sortedArray[j] >= removed) && (sortedArray[j + 1] <= removed) || (sortedArray[j + 1] === null)) {
            sortedArray.splice((j + 1), 0, removed);
            console.log(sortedArray);
            break;
          };
        };
      };
  };
  return sortedArray;
};

let testArray = [7, 2, 4, 10];
console.log(insertionSort(testArray));

module.exports = insertionSort
