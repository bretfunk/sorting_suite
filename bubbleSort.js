var pry = require('pryjs');
function bubbleSort(array) {
  //return array.sort(function(a,b){
    //return a-b;
  //});
  for (var i = 0; i < array.lenth; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        //array[j] = array[j + 1], array[j + 1] = array[j];
        let removed = array.slice(j, j + 2)
        array.splice(j, 2, removed.reverse())
        //eval(pry.it);

      };
    };
  };
  return array;
};

let testArray = [7, 3, 2, 5];
console.log(bubbleSort(testArray));


module.exports = bubbleSort
