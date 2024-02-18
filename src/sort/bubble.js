import randomArray from './utils/randomArray.js';

const bubbleSort = (inputArray) => {
  const array = [...inputArray];
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        const temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

randomArray(5, 10).then((array) => {
  console.time('Bubble');
  const sortedArray = bubbleSort(array);
  console.log(sortedArray);
  console.timeEnd('Bubble');
});
