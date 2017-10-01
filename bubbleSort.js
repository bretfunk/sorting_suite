var pry = require('pryjs');
function bubbleSort(array) {
  //return array.sort(function(a,b){
    //return a-b;
  //});
  for (var i = 0; i < array.length; i++) {
    console.log("i" + i);
    for (var j = 0; j < array.length - i; j++) {
      console.log("j" + j);
      if (array[j] > array[j + 1]) {
        let num1 = array[j];
        let num2 = array[j + 1];
        array[j] = num2;
        array[j + 1] = num1;
        console.log(array);
      };
    };
  };
  return array;
};

let testArray = [7, 3, 2, 5];
console.log(bubbleSort(testArray));


module.exports = bubbleSort
