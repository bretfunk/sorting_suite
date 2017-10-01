function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let num1 = array[j];
        let num2 = array[j + 1];
        array[j] = num2;
        array[j + 1] = num1;
      };
    };
  };
  return array;
};

module.exports = bubbleSort
